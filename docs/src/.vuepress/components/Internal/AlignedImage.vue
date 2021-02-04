<template>
  <section 
    data-scroll
    data-scroll-delay="1"
    class="aligned-image container grid-container"
  >
    <img-lazy
      :src="$withBase($frontmatter.alignedImage.src)"
      :alt="$frontmatter.alignedImage.alt"
      width="850"
      height="540"
    />
  </section>
</template>

<style lang="stylus">
.aligned-image
  grid-column-gap 0

  @media (min-width $MQlg)
    margin-top 175px

    img
      grid-column 1 / span 8
</style>