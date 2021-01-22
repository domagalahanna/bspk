<template>
  <button
    class="hamburger"
    :class="{ 'hamburger--active' : isOpen }"
    @click="toggleOffcanvas"
    aria-label="Toggle menu"
    :aria-expanded="isOpen"
    title="Toggle menu"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script>
export default {
  props: {
    isOpen: Boolean
  },
  methods: {
    toggleOffcanvas() {
      this.$emit('toggle-offcanvas')
    }
  }
}
</script>

<style lang="stylus" scoped>
.hamburger
  width 29px
  height 17px
  display flex
  align-items center
  position relative

  & > *
    width 100%
    height 2px
    background-color $black
    transition: all .2s ease-in-out;

    &:first-child, &:last-child
      position absolute

    &:first-child
      top 0
      left 0

    &:last-child
      bottom 0
      right 0

  &--active
    & > *
      transform scale(0)

      &:first-child
        transform translateY(6px) rotate(135deg)

      &:last-child
        transform translateY(-9px) translateX(0px) rotate(-135deg)

  @media (min-width $MQlg)
    display none
</style>