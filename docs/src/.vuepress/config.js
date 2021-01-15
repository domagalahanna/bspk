module.exports = {
  base: '/bspk/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'BSPK',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'BSPK page',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#DB420F' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com"'}],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@600&family=Roboto:wght@400;500;700&display=swap', rel: 'stylesheet'}]
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
        text: 'Contact',
        link: '/contact/'
      }
    ]
  },

  plugins: {
    'robots': {
      host: "https://domagalahanna.github.io/bspk/",
      disallowAll: true
    }
  }
}
