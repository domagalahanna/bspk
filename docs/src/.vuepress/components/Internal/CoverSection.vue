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
    <div class="cover-section__text">
      <div data-scroll>
        <Heading
          :firstPartHeadlines="[$frontmatter.coverSection.title]"
          tag="h2"
        />
      </div>
      <p>
        {{ $frontmatter.coverSection.content }}
      </p>
    </div>
  </section>
</template>

<style lang="stylus">
.cover-section

  &__background
    display none

  &__text
    padding 100px 30px
    text-align center

    p
      color $darkGrey
      font-size 18px
      line-height 24px

  @media (min-width $MQlg)
    height 600px
    margin-top 130px
    margin-bottom 200px
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
      display block

    &__text
      text-align left
      padding 0
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
        color $white
        font-size 26px
        line-height 34px
        margin-top 25px
        max-width 520px
        text-align center

  @media (min-width $MQxl)
    margin-top 330px
    height 800px
</style>