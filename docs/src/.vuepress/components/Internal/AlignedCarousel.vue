<template>
  <section 
    class="aligned-carousel container grid-container"
  >
    <img-lazy
      :src="$withBase($frontmatter.alignedCarousel.image.src)"
      :alt="$frontmatter.alignedCarousel.image.alt"
      class="aligned-carousel__image"
    >
    </img-lazy>
    <div class="aligned-carousel__content" data-scroll>
      <Heading
        :firstPartHeadlines="[$frontmatter.alignedCarousel.title]"
        tag="h2"
        tagStyle="internal-intro"
      />
      <ul class="styled-list aligned-carousel__list aligned-carousel__list--mobile">
        <li
          v-for="(item, i) of $frontmatter.alignedCarousel.slides"
          :key="i"
        >
          {{ item }}
        </li>
      </ul>
      <div class="aligned-carousel__list aligned-carousel__list--desktop">
        <vueper-slides
          fade
          :bullets="false" 
          fixed-height="230px"
          class="no-shadow"
        >
          <template v-slot:arrow-left>
            <img :src="$withBase('/images/icons/arrow-left.svg')" alt="Previous">
          </template>

          <template v-slot:arrow-right>
            <img :src="$withBase('/images/icons/arrow-right.svg')" alt="Next">
          </template>

          <vueper-slide 
            v-for="(slide, i) in $frontmatter.alignedCarousel.slides"
            :key="i"
            :content="slide"
          />
        </vueper-slides>
      </div>
    </div>  
  </section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: {
    VueperSlides,
    VueperSlide
  }
}
</script>

<style lang="stylus">
.aligned-carousel
  &__content
    padding 70px 30px 110px

  &__image
    width 100%

  &__list
    font-size 18px
    line-height 24px
    color $darkGrey
    list-style none
    padding-left 0
    margin-top 30px

    &--desktop
      display none

    li
      margin-bottom 25px
      padding-left 25px
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

  .heading
    text-align center

  @media (min-width $MQlg)
    &__list
      font-size 24px
      margin-top 60px

  @media (min-width $MQxl)
    margin-bottom 200px
    margin-top 200px

    &__image
      grid-column 1 / span 6
      min-height 550px

    &__content
      grid-column 8 / span 5
      display flex
      flex-direction column
      justify-content center
      align-items start

    &__list
      width 100%
      font-weight 300
      font-size 32px
      line-height 40px

      &--mobile
        display none

      &--desktop
        display block

    .heading
      text-align left

.vueperslide__content-wrapper
  text-align left !important

.vueperslides__arrow
  top 90%

  &::before
    content ''
    width 55px
    height 55px
    position absolute
    left -100%
    top -25%
    background $white
    border-radius 50%
    z-index -1

.vueperslides__arrow--next
  left 100px
  width 18px

.vueperslide__content-wrapper
  justify-content start !important
</style>