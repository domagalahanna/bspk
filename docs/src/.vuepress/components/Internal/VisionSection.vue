<template>
  <div>
    <section 
      class="vision-section container grid-container"
      data-scroll
      :id="$frontmatter.visionSection.id"
    >
      <div class="vision-section__image">
        <img-lazy
          :src="$withBase($frontmatter.visionSection.mobileImage.src)"
          :alt="$withBase($frontmatter.visionSection.mobileImage.alt)"
          class="vision-section__image--mobile"
        >
        </img-lazy>
        <img-lazy
          :src="$withBase($frontmatter.visionSection.image.src)"
          :alt="$withBase($frontmatter.visionSection.image.alt)"
          width="370"
          height="537"
          class="vision-section__image--desktop"
        >
        </img-lazy>
      </div>
      <div class="vision-section__content">
        <Heading
          :firstPartHeadlines="[$frontmatter.visionSection.title]"
          tag="h2"
          tagStyle="h1"
        />
        <p
          v-for="paragraph of $frontmatter.visionSection.content"
        >
          {{ paragraph }}
        </p>
      </div>
    </section>

    <div
      data-scroll
      data-scroll-call="playAboutVideo"
      class="video-wrapper"
    >
      <video
        autoplay=""
        loop=""
        muted=""
        playsinline=""
        id="aboutVideoElement"
      >
        <source :src="isMobile ? $withBase($frontmatter.visionSection.videoMobile) : $withBase($frontmatter.visionSection.video)" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isMobile: false
  }),
  mounted() {
    this.isMobile = window.innerWidth < 500
  }
}
</script>

<style lang="stylus" scoped>
.vision-section
  margin-top 100px

  &__image
    img
      width 100%

    &--desktop
      display none

  &__content
    padding 0 30px
    margin-top 75px
    font-size 18px
    line-height 24px

    .heading
      text-align center

    p
      color $darkGrey
      margin-bottom 30px

      &:last-child
        margin-bottom 75px
      

  @media (min-width $MQlg)
    margin-top 300px

    &__image
      grid-column 1 / span 4

      &--desktop
        display block

      &--mobile
        display none

    &__content
      grid-column 6 / span 6
      font-size 24px
      line-height 34px
      display flex
      flex-direction column
      justify-content center
      margin-top 0
      padding 0

      .heading
        text-align left

      p
        margin-bottom 30px
        color $darkGrey

        &:last-child
          margin-bottom 0

        &:first-of-type
          margin-top 50px

.video-wrapper
  padding 80px 0
  background $black

  video
    width 100%
    
  @media (min-width $MQlg)
    padding 0
    background none

    video
      max-width 770px
      margin 110px auto 320px
      display block
</style>