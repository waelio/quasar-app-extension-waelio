import store from 'store2'
class Config {
  constructor () {
    this.setEnvironment()
    // const _ = this
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
    // Do not Merge the Storage ;)
    this._store.storage = this._storage
    // console.log("this._store", this._store);
  }

  set (key, value) {
    if (key.match(/:/)) {
      const keys = key.split(':')
      let storeKey = this._store

      keys.forEach(function (k, i) {
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

  getAll () {
    return this._store
  }

  getItem (key) {
    return this._store[key]
  }

  get (key) {
    // Is the key a nested object
    if (key.match(/:/)) {
      // Transform getter string into object
      const storeKey = this.buildNestedKey(key)
      return storeKey
    }

    // Return regular key
    return this._store[key]
  }

  client () {
    return this.getItem('client')
  }

  dev () {
    return this.getItem('dev')
  }

  storage () {
    return this._store.storage
  }

  server () {
    return this.getItem('server')
  }

  store () {
    return this._store
  }

  has (key) {
    return Boolean(this.get(key))
  }

  setEnvironment () {
    if (process.browser) {
      this._env = 'client'
    } else {
      this._env = 'server'
    }
  }

  getServerVars () {
    let serverVars = {}

    if (this._env === 'server') {
      try {
        serverVars = require('app/config/server')
      } catch (e) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Didn\'t find a server config in `./config`.')
        }
      }
    }

    return serverVars
  }

  getClientVars () {
    let clientVars

    try {
      clientVars = require('app/config/client')
    } catch (e) {
      clientVars = {}

      if (process.env.NODE_ENV === 'development') {
        console.warn('Didn\'t find a client config in `./config`.')
      }
    }

    return clientVars
  }

  getUrgentOverrides () {
    let overrides
    const filename = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
    try {
      overrides =
        process.env.NODE_ENV === 'production'
          ? require('app/config/prod')
          : require('app/config/dev')

      console.warn(`FYI: data in \`./config/${filename}.js\` file will override Server & Client equal data/values.`)
    } catch (e) {
      overrides = {}
    }

    return overrides
  }

  // Builds out a nested key to get nested values
  buildNestedKey (nestedKey) {
    // Transform getter string into object
    const keys = nestedKey.split(':')
    let storeKey = this._store

    keys.forEach(function (k) {
      try {
        storeKey = storeKey[k]
      } catch (e) {
        return undefined
      }
    })

    return storeKey
  }
}

const waelioConfig = new Config()

export default waelioConfig
