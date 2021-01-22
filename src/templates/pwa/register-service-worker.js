import { register } from 'register-service-worker'
import { notifyMe } from 'waelio-utils'
import { Notify } from 'quasar'
// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

register(process.env.SERVICE_WORKER_FILE, {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  // registrationOptions: { scope: './' },

  ready (registration) {
    // console.log('Service worker is active.')
    notifyMe(`App ${registration} is Ready!`)
  },

  registered (/* registration */) {
    console.log('Service worker has been registered.')
  },

  cached (/* registration */) {
    console.log('Content has been cached for offline use.')
  },

  updatefound ( registration ) {
    console.log('New content is downloading.' + registration)
    notifyMe('New content is available; please refresh.')    
    Notify.create({
      message: 'New Update available',
      color: 'warning',
      icon: 'cloud_download',
      closeBtn: 'Update',
      timeout: 10000,
      onDismiss () {
        location.reload(true)
      }
    })
  },

  updated (registration) {
    // registration -> a ServiceWorkerRegistration instance
    console.log('New content is available; please refresh.' + registration)
    notifyMe('New content is available; please refresh.')

  },

  offline () {
    console.log('No internet connection found. App is running in offline mode.')
    notifyMe('No internet connection found. App is running in offline mode.')
  },

  error ( err ) {
    console.error('Error during service worker registration:', err)
  }
})
