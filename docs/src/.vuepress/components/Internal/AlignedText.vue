<template>
  <section 
    data-scroll
    data-scroll-speed="1.5"
    data-scroll-delay="1"
    class="aligned-text container grid-container"
  >
    <div
      class="aligned-text__wrapper"
    >
      <p
        v-for="paragraph in $frontmatter.alignedText"
        v-html="paragraph"
      >
      </p>
    </div>
  </section>
</template>

<style lang="stylus">
.aligned-text
  font-size 18px
  line-height 24px
  color $darkGrey
  padding 30px

  p
    margin-top 0
    margin-bottom 25px

    &:last-child
      margin-bottom 0

  @media (min-width $MQlg)
    padding 80px 40px

    &__wrapper
      font-size 24px
      line-height 1.2

  @media (min-width $MQxl)
    margin-top 175px
    padding 0

    &__wrapper
      font-size 24px
      line-height 34px
      grid-column 5 / span 6
</style>