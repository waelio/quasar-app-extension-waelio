'strict'

const ModeMixin: Record<string, any> = {
    data() {
        return {
            ModeLoaded: false,
            modeName: this.$config.get('modeName'),
            MyLightMode: 0
        }
    },
    methods: {
        verifyMode() {
            const configMode = this.$config.get('settings:darkMode')
            const storageGotMode = this.getStorageMode()

            if (storageGotMode && this.isMode(storageGotMode)) {
                this.currentMode = storageGotMode.value
            } else if (configMode && this.isMode(configMode)) {
                this.$watch('MyLightMode', this.consoleOut)
                this.currentMode = configMode
            } else {
                this.$watch('MyLightMode', this.consoleOut)
                this.currentMode = 'auto'
            }
        },
        consoleOut(something: unknown) {
            console.log('something', something)
        },
        getStorageMode() {
            return this.$config.storage().has(this.modeName)
                ? JSON.parse(this.$config.storage().get(this.modeName))
                : false
        },
        isMode(state: any) {
            return state && state.value
                ? Boolean(this.modesKeys.includes(state.value))
                : false
        },
        mapModeValue(value: number) {
            return this.modes[value]
        },
        getFreshMode() {
            try {
                let test = this.getStorageMode()

                if (test) {
                    test = test
                    return test
                }

                return 0
            } catch (error) {
                return console.error(error)
            }
        }
    },
    computed: {
        modesKeys() {
            return this.modes.map((mode: any) => mode.value)
        },
        modesLabelOptions() {
            return this.modes.map((mode: any) => ({
                label: mode.label,
                value: mode.value
            }))
        },
        modes() {
            return [
                { key: 0, value: 'auto', label: this.$t('general.auto') },
                { key: 1, value: 'true', label: this.$t('general.dark') },
                { key: 2, value: 'false', label: this.$t('general.light') }
            ]
        },
        currentMode: {
            get: function () {
                return this.$q.dark.mode.toString()
            },
            set: function (newMode: string) {
                const check = this.modes.find(
                    (mode: any) => mode.value.toString().toLowerCase() === newMode.toString().toLowerCase()
                )

                if (!check || !check.value) {
                    return false
                }

                this.$config.storage().set(this.modeName, JSON.stringify(check))
                check.value =
                    check.value.toString() === 'true'
                        ? true
                        : check.value === 'false'
                            ? false
                            : 'auto'
                this.$q.dark.set(check.value)
            }
        }
    }
}

export default ModeMixin
