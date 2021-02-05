import { register } from 'register-service-worker'
import { notifyMe } from 'waelio-utils'
import { Notify, Loading } from 'quasar'
// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

register(process.env.SERVICE_WORKER_FILE, {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  registrationOptions: { scope: './' },

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
  updatefound (registration) {
    console.log('New content is downloading.' + registration)
    notifyMe('New content is available; please refresh.')
    Notify.create({
      message: 'There is an update available for this app',
      color: 'warning',
      icon: 'cloud_download',
      timeout: 10000, // You can adjust this, use 0 for infinite
      closeBtn: 'Close',
      actions: [
        {
          label: 'Update',
          icon: 'get_app',
          color: 'white',
          handler () {
            navigator.serviceWorker.addEventListener('controllerchange', () => {
              window.location.reload()
            })

            // This process if rather fast generally, but for better experience show "Loading"
            Loading.show({
              delay: 0,
              message: 'Updating the app...'
            })
            Loading.hide = function() {
              setTimeout(() => {
                if (Loading.isActive) {
                  Loading.hide();
                }
              }, 5000);
            };
            registration.waiting.postMessage({ type: 'SKIP_WAITING' })
          }
        }
      ]
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

  error (err) {
    console.error('Error during service worker registration:', err)
  }
})
