<template>
  <section 
    class="counter-gallery"
    :class="`counter-gallery--${page}`"
    :id="$frontmatter.counterGallery.id"
  >
    <header
      v-if="$frontmatter.counterGallery.title && $frontmatter.counterGallery.intro"
      class="counter-gallery__header container"
    >
      <div data-scroll>
        <Heading
          :firstPartHeadlines="[$frontmatter.counterGallery.title]"
          tag="h2"
          tagStyle="h1"
          class="heading--default"
        />
        <p
          v-for="text of $frontmatter.counterGallery.intro"
          class="counter-gallery__intro"
        >
          {{ text }}
        </p>
      </div>

      <div
        data-scroll
        data-scroll-call="playTechnologyVideo"
        class="video-wrapper"
        v-if="$frontmatter.counterGallery.video"
      >
        <video
          autoplay=""
          loop=""
          muted=""
          playsinline=""
          id="technologyVideoElement"
        >
          <source :src="isMobile ? $withBase($frontmatter.counterGallery.video.mobile) : $withBase($frontmatter.counterGallery.video.desktop)" type="video/mp4">
        </video>
      </div>

      <div data-scroll>
        <Heading
          :firstPartHeadlines="[$frontmatter.counterGallery.subtitle]"
          tag="h2"
          tagStyle="h1"
          class="counter-gallery__subtitle"
          v-if="$frontmatter.counterGallery.subtitle"
        />
      </div>
    </header>
  
    <article
      v-for="(section, index) of $frontmatter.counterGallery.sections"
      class="counter-section container grid-container"
    >
      <div 
        class="counter-section__image"
      >
        <img-lazy
          :src="section.image.src"
          :alt="section.image.alt"
          class="desktop"
        >
        </img-lazy>
        <img-lazy
          :src="section.mobileImage.src"
          :alt="section.mobileImage.alt"
          class="mobile"
        >
        </img-lazy>
      </div>
      <div class="counter-section__content">
        <span class="counter-section__counter counter">
          {{ '0' + (index + 1) }}
        </span>
        <div data-scroll>
          <Heading
            :firstPartHeadlines="[section.title]"
            tag="h3"
            tagStyle="counter-sections"
          />
        </div>
        <div 
          class="counter-section__copy"
          :class="{ 'counter-section__copy--list' : list}"
        >
          <div v-if="list">
            <ul>
              <li v-for="section of section.content">
                {{ section }}
              </li>
            </ul>
          </div>
          <div v-else>
            {{ section.content }}
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  data: () => ({
    isMobile: false
  }),
  props: {
    page: {
      type: String,
      required: true
    },
    list: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.isMobile = window.innerWidth < 500
  }
}
</script>

<style lang="stylus" scoped>
.counter-gallery
  padding 115px 30px

  &--benefits
    padding 0
    margin-bottom 120px

    .counter-section
      &__content
        padding 0 30px

      &__image
        img
          min-height 210px

  &--technology
    padding 0

    .video-wrapper
      padding 90px 0
      background $black

      video
        width 100%

    .counter-gallery__header
      display flex
      flex-direction column-reverse
      margin-bottom 115px

      & > :first-child
        padding 0 30px

      .heading--default
        default-font-family()
        text-transform none
        font-weight 400
        font-size 30px
        line-height 34px
        margin-top 93px

    .counter-gallery__intro
      color $darkGrey
      font-size 24px
      line-height 30px
      margin-bottom 0
      margin-top 0
      text-align center

    .counter-gallery__subtitle
      display none

    .counter-section__content
      padding 0 30px

    .counter-section:last-child
      margin-bottom 115px

    .counter-section__image
      img
        min-height 300px

    @media (min-width $MQlg)
      .video-wrapper
        background none
        padding 80px 0 50px

    @media (min-width $MQxl)
      .video-wrapper
        padding 80px 0 295px
        background none

      .counter-gallery__header
        flex-direction column
        
        .heading
          margin-bottom 40px

        .heading--default
          font-size 50px
          line-height 54px

      .counter-gallery__intro
        font-weight 300
        font-size 40px
        line-height 44px

      .counter-gallery__subtitle
        display block

      .counter-section:last-child
        margin-bottom 200px

      .counter-section__image
        img
          min-height 550px

  &__header
    margin-bottom 55px

    .heading
      margin-bottom 15px
      text-align center

    p
      color $darkGrey
      font-size 18px
      line-height 24px

  @media (min-width $MQmd)
    &__header
      text-align center

  @media (min-width $MQlg)
    padding 0 30px

    &__header
      max-width 770px
      margin 0 auto

      p
        color $darkGrey
        font-size 24px
        line-height 34px

    &--benefits
      margin-top 0
      margin-bottom 220px

      .counter-section
        &__content
          padding 0

        &__image
          img
            min-height 440px

        &:first-child
          margin-top 0

    &--technology
      .counter-section
        &__image
            img
              min-height 440px

    &--about
      .counter-section
        .heading
          padding-right 100px

  @media (min-width $MQxl)
    padding 0

    &--benefits
      margin-top 120px

      .counter-section
        &:first-child
          margin-top 80px

        &__image
          img
            min-height 660px

    &--technology
      .counter-section
        &__image
            img
              min-height 560px

.counter-section
  margin-bottom 55px

  &:last-child
    margin-bottom 0

  .heading
    margin-top 25px
    margin-bottom 25px

  &__copy
    color $darkGrey
    font-size 18px
    line-height 24px

    &--list
      ul
        list-style none

      li
        margin-bottom 10px
        padding-left 20px
        position relative

        &:last-child
          margin-bottom 0

        &::before
          content ''
          width 4px
          height 4px
          border-radius 50%
          background $darkGrey
          display inline-block
          position absolute
          left 3px
          top 10px

  &__image
    .desktop
      margin 0 auto
      display none

    .mobile
      margin 0 auto
      display block

  img
    min-height 245px

  @media(min-width $MQmd)
    display grid
    grid-template-columns repeat(12, 1fr)
    grid-column-gap 30px

    &__image
      text-align center
      grid-column 1 / span 6

    img
      min-height 340px

    &__content
      grid-column 7 / span 6
      text-align left

  @media(min-width $MQlg)
    img
      min-height 466px

    &:first-of-type
      margin-top 80px

    &__image
      .desktop
        display block

      .mobile
        display none

  @media(min-width $MQxl)
    margin-top 180px
    margin-bottom 0

    img
      min-height 535px

    &__copy
      &--list
        li
          margin-bottom 5px

      img
        width 100%
        height auto
        min-width 585px
        min-height 550px

    &__content
      grid-column 8 / span 5
      display flex
      flex-direction column
      justify-content flex-end

      .heading
        text-align left
        margin-top 0
        margin-bottom 0
        padding-top 25px
        border-top 2px solid $black

    &__copy
      color $darkGrey
      font-size 22px
      line-height 32px
      margin-top 25px
      
      &--list
        font-size 20px
        line-height 28px

        li
          padding-left 30px

          &::before
            top 12px

    &:nth-of-type(2n)
      .counter-section__content
        grid-column 1 / span 5
        grid-row 1

      .counter-section__image
        grid-column 7 / span 6
        grid-row 1
</style>