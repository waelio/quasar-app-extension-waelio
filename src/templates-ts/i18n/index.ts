const enUs = require('./messages/enUs.js').default
const he = require('./messages/he.js').default
const ar = require('./messages/ar.js').default
const ru = require('./messages/ru.js').default

const messages: Record<string, any> = {
    'en-us': enUs,
    he,
    ar,
    ru
}

export default messages
