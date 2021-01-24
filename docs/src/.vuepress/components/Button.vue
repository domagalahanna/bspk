<template>
  <component
    :is="link ? 'router-link' : 'button'"
    :to="link"
    class="button"
    :class="{ 'button--large' : size === 'large' }"
  >
    <slot/>
  </component>
</template>

<script>
export default {
  props: {
    link: String,
    size: String
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
  padding 20px 40px
  background $black
  transition background-color .4s ease-in-out, opacity .2s
  display inline-block

  &:disabled
    opacity 0.5
    transition opacity .2s
    
    &:hover
      cursor not-allowed 

  &:hover
    cursor pointer
    background-color alpha($black, 0.75)
    transition background-color .4s ease-in-out

  @media (min-width $MQlg)
    padding 17px 30px

    &--large
      padding 26px 41px
      font-size 15px
</style>