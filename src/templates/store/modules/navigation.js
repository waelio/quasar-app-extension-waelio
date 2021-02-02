const navigationList = {
      state: {      
      linksBasics: [
        {
          title: "general.SiteTitle",
          caption: "HomePageCaption",
          icon: "home",
          name: "home",
          link: "",
          order: 0,
          separator: false,
          disabled: true
        },
        {
          title: "navigation.AuthPageTitle",
          caption: "navigation.AuthPageCaption",
          icon: "admin_panel_settings",
          name: "auth",
          link: "/auth",
          order: 1,
          separator: false,
          disabled: true
        },
        {
          title: "navigation.TermsPageTitle",
          caption: "navigation.TermsPageCaption",
          icon: "description",
          name: "terms",
          link: "/terms",
          order: 2,
          separator: false,
          disabled: false
        },
        {
          title: "navigation.PrivacyPageTitle",
          caption: "navigation.PrivacyPageCaption",
          icon: "policy",
          name: "privacy",
          link: "/privacy",
          order: 3,
          separator: false,
          disabled: false
        },
        {
          title: "navigation.SettingsPageTitle",
          caption: "navigation.SettingsPageCaption",
          icon: "settings",
          name: "settings",
          link: "/settings",
          order: 4,
          separator: false,
          disabled: false
        }
      ],
      linksData: [
        {
          title: "navigation.ServicesPageTitle",
          caption: "navigation.ServicesPageCaption",
          icon: "category",
          name: "services",
          link: "/services",
          order: 1,
          separator: false,
          disabled: false
        },
        {
          title: "navigation.ProductsPageTitle",
          caption: "navigation.ProductsPageCaption",
          icon: "home_repair_service",
          name: "products",
          link: "/products",
          order: 2,
          separator: false,
          disabled: false
        },
        {
          title: "navigation.AboutPageTitle",
          caption: "navigation.AboutPageCaption",
          icon: "store",
          name: "about",
          link: "/about",
          order: 3,
          separator: false,
          disabled: false
        },
        {
          title: "navigation.ContactPageTitle",
          caption: "navigation.ContactPageCaption",
          icon: "contact_page",
          name: "contact",
          link: "/contact",
          order: 4,
          separator: false,
          disabled: false
        }
      ]
    },
    getters: {
      linksData(state) {
        return state.linksData;
      },
      linksBasics(state) {
        return state.linksBasics;
      }
    }
}
export default navigationList