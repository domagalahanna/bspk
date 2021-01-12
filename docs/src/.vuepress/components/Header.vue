<template>
  <header
    class="header"
    :class="{ 'header--hidden' : isHidden }"
  >
    <a href="/">
      <img 
        :src="$withBase('images/logo.svg')"
        class="header__logo"
        alt="BSPK"
      >
    </a>
    <div class="header__buttons">
      <LanguagePicker ref="picker"/>
      <Button link="/contact/">
        Request a demo
      </Button>
    </div>
    <Hamburger :isOpen="isOffcanvasOpen" @toggle-offcanvas="toggleOffcanvas"/>
  </header>
</template>

<script>
export default {
  props: {
    isOffcanvasOpen: Boolean
  },
  data: () => ({
    isScrolled: false,
    isHidden: false,
    prevScroll: 0
  }),
  mounted () {
    window.addEventListener('scroll', this.toggleVisibility);
  },
  unmounted () {
    window.removeEventListener('scroll', this.toggleVisibility);
  },
  methods: {
    hidePicker: function() {
      this.$refs.picker.hideContainer()
    },
    toggleVisibility: function() {
      if (this.isOffcanvasOpen && window.innerWidth < 992) {
        return;
      }

      const windowScrollTop = window.scrollY;
      const wasScrolledDown = this.prevScroll < windowScrollTop;

      this.prevScroll = windowScrollTop;
      this.isScrolled = windowScrollTop > 200 ? true : false;
      this.isHidden = this.isScrolled && wasScrolledDown;

      if(this.isHidden) {
        this.hidePicker()
      }
    },
    toggleOffcanvas: function() {
      this.$emit('toggle-offcanvas')
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  background white
  position fixed
  top 0
  left 0
  height 60px
  width 100%
  display flex
  align-items center
  justify-content space-between
  padding 0 18px
  z-index 200
  transition transform .4s ease-in-out

  &__logo
    width 80px

  &__buttons
    display none

  &--hidden
    transform translateY(-100%)
    transition transform .4s ease-in-out

  @media (min-width $MQlg)
    height: 100px
    padding 0 30px

    &__logo
      width 120px

    &__buttons
      display flex
      align-items center
</style>