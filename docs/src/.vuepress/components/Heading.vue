<template>
  <component
    :is="tag" 
    class="heading heading--h1"
    :class="{ 'heading--break' :  breakLine}"
  >
    <span 
      v-for="headline in firstPartHeadlines"
      class="text-wrapper"
    >
      <span class="text-wrapper__inner">
        {{ headline }}
      </span>
    </span>

    <span 
      v-if="highlighted"
      class="heading__highlighted text-wrapper"
    >
      <span class="text-wrapper__inner">
        {{ highlighted }}
      </span>
    </span>

    <span 
      v-if="secondPartHeadline"
      class="text-wrapper"
    >
      <span class="text-wrapper__inner">
        {{ secondPartHeadline }}
      </span>
    </span>
  </component>
</template>

<script>
export default {
  props: {
    highlighted: String,
    firstPartHeadlines: Array,
    secondPartHeadline: String,
    breakLine: Boolean,
    tag: String
  }
}
</script>

<style lang="stylus">
.is-inview
  .heading
    .text-wrapper
      &__inner
        animation-name slide-up
        animation-timing-function ease-in-out
        animation-duration .4s
        animation-fill-mode forwards
        transform translateY(0)
        opacity 1
        transition transform .4s ease-in-out, opacity .6s ease-in-out

.heading
  secondary-font-family()
  text-transform uppercase
  letter-spacing -1px
  font-weight 600

  .text-wrapper
    overflow hidden
    display inline-block

    &__inner
      display inline-block

  &__highlighted
    color $accentColor

  &--h1
    font-size 35px
    line-height 40px

  &--break
    .heading__highlighted
      display block

    .text-wrapper
      display block

  @media (min-width $MQlg)
    &--h1
      letter-spacing -2px
      font-size 58px
      line-height 62px
</style>