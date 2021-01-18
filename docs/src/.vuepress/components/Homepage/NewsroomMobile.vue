<template>
  <section class="testimonials">
    <Carousel
      class="testimonials__wrapper"
      :per-page="1"
      :paginationPadding="5"
      paginationPosition="bottom-overlay"
      paginationColor="#9F9F9F"
      paginationActiveColor="#DB420F"
    >
      <Slide 
        v-for="testimonial in $frontmatter.testimonials"
        class="testimonials__single"
      >
        <img :src="$withBase(testimonial.logo)" alt="">
        <p>
          {{ testimonial.text }}
        </p>
      </Slide>
    </Carousel>
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

<style lang="stylus" scoped>
.testimonials
  background $darkBeige
  padding 40px 45px

  &__single
    text-align center
    color $darkGrey
    font-style italic
    font-size 18px
    line-height 23px
    padding-bottom 35px

    p
      margin 10px 0 0

    img 
      height 35px

  @media (min-width $MQlg)
    display none
</style>