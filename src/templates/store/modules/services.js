const Services = {
  name: 'Services',
  namespaced: true,
  state: {
    services: [
      { 
        name: 'Branding',
        description: 'BrandingDesc',
        image: 'art.jpg'
      },
      { 
        name: 'Marketing',
        description: 'MarketingDesc',
        image: 'colors.jpg'
      },
      { 
        name: 'SEO',
        description: 'SEODesc',
        image: 'seo.jpg'
      },
      { 
        name: 'Advertisement',
        description: 'AdvertisementDesc',
        image: 'marketing2.jpg'
      },
      { 
        name: 'Development',
        description: 'DevelopmentDesc',
        image: 'workshop.jpg'
      },
      { 
        name: 'Traffic',
        description: 'TrafficDesc',
        image: 'desktop.jpg'
      }
    ]
  },
  getters: {
    services(state){
      return state.services
    }
  
  }
}
export default Services