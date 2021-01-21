<template>
  <section class="hero" data-scroll>
    <div class="hero__container container">
      <div class="hero__video">
        <div class="video-container" data-scroll data-scroll-speed="1">
          <video
            :src="$withBase($frontmatter.hero.video)"
            autoplay=""
            loop=""
            muted=""
            playsinline=""
          >
          </video>
        </div>
      </div>
      <div class="hero__copy">
        <Heading
          :firstPartHeadlines="$frontmatter.hero.headlines"
          :highlighted="$frontmatter.hero.highlighted"
          :breakLine="true"
          tag="h1"
        />
        <Button 
          :link="$frontmatter.hero.ctaLink"
          size="large"
        >
          {{ $frontmatter.hero.ctaCopy }}
        </Button>
      </div>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
.hero
  &__copy
    padding 35px 41px 55px 
    text-align center

  &__video
    width 100%

    .video-container
      overflow hidden
      width 100%

      &::after
        content ''
        width 100%
        height 100%
        background alpha($black, 0.12)
        display block
        position relative

      video 
        width 100%

  @media (max-width 360px)
    &__copy
      padding 35px 20px 55px 
  
  @media (min-width $MQxl)
    overflow hidden
    position relative

    &__container
      display flex
      padding 100px 15px 120px

    &__copy
      max-width 490px
      text-align left
      padding 0
      order 1
      display flex
      flex-direction column
      justify-content center
      align-items start

    &__video
      order 2
      height 511px
      width auto

      .video-container
        width 620px
        height 511px
        overflow hidden
        position absolute
        right 0
        border-top-left-radius 200px

        video
          width auto
          height 100%
          position absolute
          right 50%
          transform translateX(50%)

    &::before
      content ''
      position absolute
      right 15%
      top -65%
      display block
      width 300px
      height 200%
      transform rotate(-55deg)
      background alpha($white, 0.17)

    &::after
      content ''
      position absolute
      bottom 80px
      right 530px
      background alpha($accentColor, 0.16)
      width 160px
      height 160px
      border-radius 50%
      z-index -1

  @media (min-width 1800px)
    &__video
      order 2
      height 600px

      .video-container
        width 720px
        height 600px
        overflow hidden
        position absolute
        right 20px
        border-top-left-radius 200px

        video
          height 100%
          position absolute
          right 50%
          transform translateX(50%)

    &::after
      right 650px

.heading
  margin-bottom 37px
</style>