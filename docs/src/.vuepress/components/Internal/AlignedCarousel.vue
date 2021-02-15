<template>
  <section 
    class="aligned-carousel container grid-container"
  >
    <img-lazy
      :src="$frontmatter.alignedCarousel.image.src"
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
          v-for="item of $frontmatter.alignedCarousel.slides"
        >
          {{ item }}
        </li>
      </ul>
    </div>  
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
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
</style>