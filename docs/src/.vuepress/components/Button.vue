<template>
  <component
    :is="link ? 'a' : 'button'"
    :href="link"
    class="button"
  >
    <slot/>
  </component>
</template>

<script>
export default {
  props: {
    link: String
  }
}
</script>

<style lang="stylus">
.button
  default-font-family()
  font-size 14px
  color $white
  font-weight 700
  text-transform uppercase
  letter-spacing 1px
  border-radius 6px
  border none
  padding 17px 30px
  background $black
  transition background-color .4s ease-in-out

  &:hover
    cursor pointer
    background-color alpha($black, 0.75)
    transition background-color .4s ease-in-out
</style>