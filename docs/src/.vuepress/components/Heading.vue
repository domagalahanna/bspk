<template>
  <component
    :is="tag" 
    class="heading"
    :class="[ `heading--${tagStyle ? tagStyle : tag}`, { 'heading--break' :  breakLine}]"
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
    tag: String,
    tagStyle: String
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
        animation-duration .6s
        animation-fill-mode forwards

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
      opacity 0

  &__highlighted
    color $accentColor

  &--h1
    font-size 35px
    line-height 40px

  &--h2
    font-size 35px
    line-height 37px

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

    &--h2
      font-size 48px
      line-height 48px
</style>