<template>
  <nav
    class="offcanvas"
    :class="{ 'offcanvas--open' : isOpen }"
  >
    <ul 
      class="offcanvas__links"
      @click="hideOffcanvas"
    >
      <li>
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li v-for="navElement of $themeConfig.nav">
        <router-link :to="navElement.link">
          {{ navElement.text }}
        </router-link>
      </li>
      <li>
        <a href="https://my.bspk.com/admin/company_login">
          Login
        </a>
      </li>
      <li>
        <router-link to="/contact/">
          Request a demo
        </router-link>
      </li>
    </ul>
    <!-- <ul class="offcanvas__languages">
      <li>
        <router-link to="/">
          English
        </router-link>
      </li>
      <li>
        <router-link to="/fr/">
          French
        </router-link>
      </li>
    </ul> -->
  </nav>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
  },
  methods: {
    hideOffcanvas() {
      this.$emit('hide-offcanvas');
    }
  }
}
</script>

<style lang="stylus" scoped>
.offcanvas
  position fixed
  top 60px
  left 0
  background $white
  width 100%
  border-top 1px solid $grey
  font-size 22px
  z-index 200
  transition all 0.3s ease
  transform translateY(-100%)
  visibility hidden
  height calc(100vh - 60px)
  overflow scroll

  &__links
    line-height 2.25
    padding 28px

    & > *
      &:last-child
        font-weight 700
  
  &__languages
    line-height 2.95
    padding 28px
    font-size 17px

  &--open
    visibility visible 
    transform translateX(0)
    transition all 0.3s ease

  &--pushed
    top 130px

  @media (min-width $MQmd)
    font-size 30px

  @media (min-width $MQxl)
    display none
</style>