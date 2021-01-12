<template>
  <div>
    <Header :isOffcanvasOpen="isOffcanvasOpen" @toggle-offcanvas="toggleOffcanvas"/>
    <Offcanvas :isOpen="isOffcanvasOpen"/>
    <main class="main-content">
      <Content/>
    </main>
    <Footer/>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOffcanvasOpen: false
  }),
  methods: {
    toggleOffcanvas: function() {
      this.isOffcanvasOpen = !this.isOffcanvasOpen
    }
  }
}
</script>

<style lang="stylus" scoped>
.main-content
  min-height 200vh
</style>