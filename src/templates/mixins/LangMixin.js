export default {
  beforeUpdate(){
    const TestMode = JSON.parse(this.$q.localStorage.getItem('darkmode'))
    if(!TestMode){
      this.$q.localStorage.set('darkmode', JSON.stringify('auto'))
    }
    else {
      this.$q.dark.set(TestMode)
    }
    const TestLocale = JSON.parse(this.$q.localStorage.getItem('locale'))
    if(!TestLocale){
      this.$q.localStorage.set('locale', JSON.stringify('en'))
    }
    else if(TestLocale && Object.keys(TestLocale).length && TestLocale.key){
      this.$i18n.locale = TestLocale.key
      this.$store.getters.languages.forEach( lng => {
        document.querySelector('body').classList.remove(lng.key)
      })
      document.body.className += ' '+ TestLocale.key
    }
  }

}