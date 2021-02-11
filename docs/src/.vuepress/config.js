module.exports = {
  base: '/bspk/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'BSPK',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'We help brands and retailers map tailored user journeys capturing rich data to drive sustainable growth and loyalty.',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#DB420F' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-f it=no' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com'}],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@600&family=Roboto:wght@300;400;500;700&display=swap', rel: 'stylesheet'}],
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: 'favicon.ico?'}],
    ['script', { src: 'https://www.google.com/recaptcha/api.js?render=explicit', async: true }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Technology',
        link: '/technology/'
      },
      {
        text: 'Benefits',
        link: '/benefits/'
      },
      {
        text: 'Newsroom',
        link: '/newsroom/'
      }
    ]
  },
  plugins: {
    'robots': {
      host: "https://domagalahanna.github.io/bspk/",
      disallowAll: true
    },
    'img-lazy': {
      useNative: true
    }
  }
}
