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

  @media (min-width $MQlg)
    margin-top 175px

    &__wrapper
      font-size 24px
      line-height 34px
      color $darkGrey
      grid-column 5 / span 6
</style>