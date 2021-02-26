<template>
  <section 
    data-scroll
    data-scroll-delay="1"
    class="aligned-image container grid-container"
  >
    <img-lazy
      :src="$withBase($frontmatter.alignedImage.src)"
      :alt="$frontmatter.alignedImage.alt"

    />
  </section>
</template>

<style lang="stylus">
.aligned-image
  grid-column-gap 0

  img
    width auto
    height auto

  @media (min-width $MQmd)
    img
      min-height 516px

  @media (min-width $MQlg)
    img
      width 100%
      min-height 688px

  @media (min-width $MQxl)
    margin-top 175px

    img
      grid-column 1 / span 8
      width 850px
      height 540px
      min-height auto
</style>