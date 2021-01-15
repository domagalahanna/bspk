<template>
  <div 
    id="global-layout"
    @scroll="this.$root.emit('openPopup')"
  >
    <Header 
      :isOffcanvasOpen="isOffcanvasOpen"
      @toggle-offcanvas="toggleOffcanvas"
      data-scroll-sticky
    />
    <Offcanvas :isOpen="isOffcanvasOpen"/>
    <div
      data-scroll-container
    >
      <main class="main-content">
        <component :is="layout"/>
      </main>
      <Footer/>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    isOffcanvasOpen: false,
  }),
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return '404'
    }
  },
  methods: {
    toggleOffcanvas() {
      this.isOffcanvasOpen = !this.isOffcanvasOpen
    }
  }
}
</script>

<style lang="stylus">
.main-content
  padding-top 60px

  @media (min-width $MQlg)
    padding-top 100px
</style>