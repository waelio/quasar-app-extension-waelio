const store = require('store2')

type KeyValueRecord = Record<string, any>

class Config {
    _client: KeyValueRecord
    _dev: KeyValueRecord
    _env: string | undefined
    _server: KeyValueRecord
    _storage: any
    _store: KeyValueRecord

    constructor() {
        this.setEnvironment()
        this._storage = store.namespace('config')
        this._server = this.getServerVars()
        this._client = this.getClientVars()
        this._dev = this.getUrgentOverrides()

        this._store = Object.assign(
            {},
            { ...this._client.default },
            { ...this._server.default },
            { ...this._dev.default },
            { client: this._client.default },
            { server: this._server.default },
            { dev: this._dev.default }
        )
        this._store.storage = this._storage
    }

    set(key: string, value: any): void {
        if (key.match(/:/)) {
            const keys = key.split(':')
            let storeKey = this._store

            keys.forEach((k, i) => {
                if (keys.length === i + 1) {
                    storeKey[k] = value
                }

                if (storeKey[k] === undefined) {
                    storeKey[k] = {}
                }

                storeKey = storeKey[k]
            })
        } else {
            this._store[key] = value
        }
    }

    getAll(): KeyValueRecord {
        return this._store
    }

    getItem(key: string): any {
        return this._store[key]
    }

    get(key: string): any {
        if (key.match(/:/)) {
            return this.buildNestedKey(key)
        }

        return this._store[key]
    }

    client(): any {
        return this.getItem('client')
    }

    dev(): any {
        return this.getItem('dev')
    }

    storage(): any {
        return this._store.storage
    }

    server(): any {
        return this.getItem('server')
    }

    store(): KeyValueRecord {
        return this._store
    }

    has(key: string): boolean {
        return Boolean(this.get(key))
    }

    setEnvironment(): void {
        if ((process as any).browser) {
            this._env = 'client'
        } else {
            this._env = 'server'
        }
    }

    getServerVars(): KeyValueRecord {
        let serverVars: KeyValueRecord = {}

        if (this._env === 'server') {
            try {
                serverVars = require('app/config/server')
            } catch (error) {
                if (process.env.NODE_ENV === 'development') {
                    console.warn('Didn\'t find a server config in `./config`.')
                }
            }
        }

        return serverVars
    }

    getClientVars(): KeyValueRecord {
        let clientVars: KeyValueRecord

        try {
            clientVars = require('app/config/client')
        } catch (error) {
            clientVars = {}

            if (process.env.NODE_ENV === 'development') {
                console.warn('Didn\'t find a client config in `./config`.')
            }
        }

        return clientVars
    }

    getUrgentOverrides(): KeyValueRecord {
        let overrides: KeyValueRecord
        const filename = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'

        try {
            overrides =
                process.env.NODE_ENV === 'production'
                    ? require('app/config/prod')
                    : require('app/config/dev')

            console.warn(`FYI: data in \`./config/${filename}.js\` file will override Server & Client equal data/values.`)
        } catch (error) {
            overrides = {}
        }

        return overrides
    }

    buildNestedKey(nestedKey: string): any {
        const keys = nestedKey.split(':')
        let storeKey = this._store

        keys.forEach(k => {
            try {
                storeKey = storeKey[k]
            } catch (error) {
                return undefined
            }
        })

        return storeKey
    }
}

const waelioConfig = new Config()

export default waelioConfig
export { waelioConfig }
