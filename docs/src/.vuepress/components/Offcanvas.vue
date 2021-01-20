<template>
  <nav
    class="offcanvas"
    :class="{ 'offcanvas--open' : isOpen }"
  >
    <ul class="offcanvas__links">
      <li>
        <router-link href="/">
          Home
        </router-link>
      </li>
      <li>
        <router-link href="/contact/">
          Request a demo
        </router-link>
      </li>
    </ul>
    <ul class="offcanvas__languages">
      <li>
        <router-link href="/">
          English
        </router-link>
      </li>
      <li>
        <router-link href="/fr/">
          French
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    isOpen: Boolean
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
  z-index 100
  transition all 0.3s ease
  transform translateY(-100%)
  visibility hidden

  &__links
    line-height 2.25
    padding 28px
    border-bottom 1px solid $grey

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

  @media (min-width $MQlg)
    display none
</style>