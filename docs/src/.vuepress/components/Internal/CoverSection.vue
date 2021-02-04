<template>
  <section 
    class="cover-section"
    :id="$frontmatter.coverSection.id"
  >
    <img-lazy
      :src="$frontmatter.coverSection.image"
      alt=""
      class="cover-section__background"
    >
    </img-lazy>
    <div
      class="cover-section__text"
      data-scroll
    >
      <Heading
        :firstPartHeadlines="[$frontmatter.coverSection.title]"
        tag="h2"
      />
      <p>
        {{ $frontmatter.coverSection.content }}
      </p>
    </div>
  </section>
</template>

<style lang="stylus">
.cover-section
  
  @media (min-width $MQlg)
    height 800px
    margin-top 330px
    margin-bottom 290px
    overflow hidden
    position relative

    &::before
      content ''
      position absolute
      width 100%
      height 100%
      background alpha($black, 0.44)
      z-index 2

    &__background
      width 100%
      height auto
      position relative
      z-index 1

    &__text
      display flex
      flex-direction column
      justify-content center
      align-items center
      color $white
      z-index 3
      position absolute
      width 100%
      height 100%
      top 0

      p
        font-size 26px
        line-height 34px
        margin-top 25px
        max-width 520px
        text-align center
</style>