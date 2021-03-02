<template>
  <section 
    class="team-section container"
    :id="$frontmatter.teamSection.id"
  >
    <div class="grid-container">
      <header 
        data-scroll
        class="team-section__header"
      >
        <Heading
          :firstPartHeadlines="[$frontmatter.teamSection.title]"
          tag="h2"
          tagStyle="h1"
        />
        <p>
          {{ $frontmatter.teamSection.copy }}
        </p>
      </header>
    </div>

    <div
      class="team-section__visuals grid-container"
    >
      <div class="team-section__ceo">
        <img-lazy
          :src="$frontmatter.teamSection.ceo.image.src"
          :alt="$frontmatter.teamSection.ceo.image.alt"
        >
        </img-lazy>
        <div class="team-section__description">
          <p class="team-section__name">
            {{ $frontmatter.teamSection.ceo.name }}
          </p>
          <p class="team-section__position">
            {{ $frontmatter.teamSection.ceo.position }}
          </p>
        </div>
      </div>

      <div 
        class="team-section__video"
        data-scroll
        data-scroll-call="playWorkshopVideo"
      >
        <video
          autoplay=""
          loop=""
          muted=""
          playsinline=""
          id="workshopVideoElement"
        >
          <source :src="isMobile ? $withBase($frontmatter.teamSection.videoMobile) : $withBase($frontmatter.teamSection.video)" type="video/mp4">
        </video>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    isMobile: false
  }),
  mounted() {
    this.$root.$emit('update-locoscroll');
    this.isMobile = window.innerWidth < 500
  }
}
</script>

<style lang="stylus" scoped>
.team-section
  video
    width 100%

  .heading
    text-align center

  &__header
    font-size 18px
    line-height 24px
    color $darkGrey

    .heading
      color $black

  &__ceo, &__header
    padding 0 30px
  
  &__name, &__position 
    font-size 18px
    color $darkGrey
    
  &__name
    font-weight 500
    margin-bottom 0

  &__position
    margin-top 0
    margin-bottom 115px

  &__video
    padding 80px 0
    background $black

  img
    min-height 310px

  @media (min-width $MQmd)
    &__ceo
      text-align center

    img
      min-height 440px

    &__header p
      text-align center

  @media (min-width $MQlg)
    margin-top 150px

    &__header
      p
        font-size 24px
        line-height 34px
        color $darkGrey
        margin-top 40px
        margin-bottom 40pxx

  @media (min-width $MQxl)
    margin-top 300px

    .heading
      text-align left

    &__header
      grid-column 1 / span 9

      p
        text-align left

    &__visuals
      margin-top 50px
      position relative

    &__description
      position absolute

    &__ceo
      grid-column 2 / span 4
      text-align left

      img
        min-width 370px
        min-height 440px
        height auto
        width 100%

    &__name
      font-weight 500
      font-size 25px
      line-height 40px
      margin 0
    
    &__position
      margin 0
      font-size 20px
      line-height 26px

    &__video
      grid-column 7 / span 6
      display flex
      align-items flex-end
      padding 0
      background none

      video
        width 100%
      
</style>