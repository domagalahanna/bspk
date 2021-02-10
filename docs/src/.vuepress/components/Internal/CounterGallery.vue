<template>
  <section 
    class="counter-gallery"
    :class="`counter-gallery--${page}`"
    :id="$frontmatter.counterGallery.id"
  >
    <header
      v-if="$frontmatter.counterGallery.title && $frontmatter.counterGallery.intro"
      data-scroll
      class="counter-gallery__header container"
    >
      <Heading
        :firstPartHeadlines="[$frontmatter.counterGallery.title]"
        tag="h2"
        tagStyle="h1"
      />
      <p>
        {{ $frontmatter.counterGallery.intro }}
      </p>
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
  props: {
    page: {
      type: String,
      required: true
    },
    list: {
      type: Boolean,
      default: false
    }
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

  &__header
    margin-bottom 55px

    .heading
      margin-bottom 15px
      text-align center

    p
      color $darkGrey
      font-size 18px
      line-height 24px

  @media (min-width $MQlg)
    padding 0

    &__header
      text-align center
      max-width 770px
      margin 0 auto

      p
        color $darkGrey
        font-size 24px
        line-height 34px

    &--benefits
      margin-top 120px
      margin-bottom 220px

      .counter-section
        &__content
          padding 0

        &__image
          img
            min-height 660px

    &--about
      .counter-section
        .heading
          padding-right 100px

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
        margin-bottom 20px
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

    &__content
      grid-column 7 / span 6
      text-align left

  @media(min-width $MQlg)
    margin-top 180px
    margin-bottom 0

    &:first-of-type
      margin-top 80px

    &__image
      .desktop
        display block

      .mobile
        display none

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