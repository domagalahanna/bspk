<template>
  <div 
    class="wrapper"
   >
    <!-- <div class="ticker">
      More content is in the works and will be live soon!
      <button 
        class="ticker__close"
        @click="hideTicker"
      >
        <img 
          :src="$withBase('/images/icons/close-black.svg')"
          alt="Close ticker"
        >
      </button>
    </div> -->
    <header
      class="header"
      :class="{ 'header--hidden' : isHidden }"
    >
      <router-link to="/">
        <img 
          :src="$withBase('/images/logo.svg')"
          class="header__logo"
          alt="BSPK"
        >
      </router-link>
      <div class="header__nav">
        <nav>
          <router-link
            v-for="navElement of $themeConfig.nav"
            :to="navElement.link"
            class="header__link"
          >
            {{ navElement.text }}
          </router-link>
        </nav>
      </div>
      <div class="header__buttons">
        <!-- <LanguagePicker ref="picker"/> -->
        <a 
          href="https://my.bspk.com/admin/company_login"
          class="header__link"
        >
          Login
        </a>
        <Button link="/contact/">
          Request a demo
        </Button>
      </div>
      <Hamburger 
        :isOpen="isOffcanvasOpen"
        @toggle-offcanvas="toggleOffcanvas"
      />
      <div 
        v-if="$frontmatter.submenu"
        class="submenu"
      >
        <div class="container">
          <a 
            v-for="navLink of $frontmatter.submenuNav"
            :href="navLink.anchor"
            class="submenu__anchor"
            @click="scrollToSection"
          >
            {{ navLink.title }}
          </a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    isOffcanvasOpen: Boolean
  },
  data: () => ({
    isScrolled: false,
    isHidden: false,
    // isTickerHidden: false
  }),
  mounted() {
    this.$root.$on('body-scroll', this.toggleVisibility);
    // this.getTickerHidden();
  },
  methods: {
    scrollToSection(e) {
      e.preventDefault();
      this.$root.$emit('scroll-to', e.target.getAttribute("href"));
    },
    hidePicker() {
      if(this.$refs.picker) {
        this.$refs.picker.hideContainer();
      }
    },
    // hideTicker() {
    //   localStorage.setItem('ticker-hide', true);
    //   this.getTickerHidden();
    //   this.$emit('hide-ticker');
    // },
    // getTickerHidden() {
    //   this.isTickerHidden = localStorage.getItem('ticker-hide');
    // },
    toggleVisibility(scrollData) {
      if (this.isOffcanvasOpen && window.innerWidth < 992) {
        return;
      }
      const { direction, scroll } = scrollData;

      const scrollTop = scroll.y;
      const wasScrolledDown = direction === "down";

      this.isScrolled = scrollTop > 200;
      this.isHidden = this.isScrolled && wasScrolledDown;

      if(this.isHidden) {
        this.hidePicker();
      }
    },
    toggleOffcanvas() {
      this.$emit('toggle-offcanvas');
    }
  }
}
</script>

<style lang="stylus" scoped>
.submenu
  display none

  @media (min-width $MQlg)
    position absolute
    bottom -70px
    left 0
    width 100%
    height 70px
    background $lightBeige
    border-bottom 1px solid $darkBeige
    text-align center
    display flex
    align-items center
    justify-content center

    a
      margin 0 20px
      font-weight 500
      color $darkGrey
      font-size 17px

.wrapper--ticker-show
  height 70px
  position fixed
  z-index 200

  .ticker
    display flex
    transition all .3s

  .header
    transition all .3s
    top 70px

.ticker
  transition all .3s
  padding 0 30px 0 40px
  height 70px
  width 100%
  background $darkBeige
  position fixed
  top 0
  text-align center
  display flex
  align-items center
  justify-content center
  z-index 300
  font-size 14px
  color $darkGrey
  font-weight 500
  display none

  &__close
    position absolute
    right 15px
    cursor pointer

  @media (min-width $MQlg)
    font-size 17px
    
      &__close
        right 30px

  @media (max-width 400px)
    font-size 12px

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

  &__nav
    display none

  &__buttons
    display none

  &--hidden
    transform translateY(-100%)
    transition transform .4s ease-in-out

  @media (min-width $MQlg)
    height 100px
    padding 0 30px

    &__nav
      display block
      position absolute
      width 100%
      left 0
      z-index -1
      text-align center

      a
        margin 0 20px 

    &__link
      font-size 19px
      font-weight 400

    &__logo
      width 120px

    &__buttons
      display flex
      align-items center

      & > :first-child
        margin-right 30px
</style>