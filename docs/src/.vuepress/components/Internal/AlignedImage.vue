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

  @media (min-width $MQlg)
    margin-top 175px

    img
      grid-column 1 / span 8
      width 850px
      height 540px
</style>