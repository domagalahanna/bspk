<template>
  <section 
    data-scroll
    class="quotes container"
  >
    <header class="quotes__header">
      <p class="quotes__intro">
        {{ $frontmatter.quotes.intro  }}
      </p>
    </header>

    <div class="quotes__content quotes__content--mobile">
      <Carousel
        :per-page="1"
        :paginationPadding="5"
        paginationPosition="bottom"
        paginationColor="#9F9F9F"
        paginationActiveColor="#DB420F"
      >
        <Slide 
          v-for="(quote, i) in $frontmatter.quotes.items"
          class="quote"
          :key="i"
        >
          <p class="quote__content">
            "{{ quote.content }}"
          </p>
          <p class="quote__author">
            {{ quote.author }}
          </p>
        </Slide>
      </Carousel>
    </div>

    <div class="quotes__content quotes__content--desktop grid-container">
      <article
        v-for="(quote, i) in $frontmatter.quotes.items"
        class="quote"
        :key="i"
      >
        <p class="quote__content">
          {{ quote.content }}
        </p>
        <p class="quote__author">
          {{ quote.author }}
        </p>
      </article>
      <article
        class="quote quote--image"
        :style="{ backgroundImage: `url(${$withBase($frontmatter.quotes.image)})` }"
      >
      </article>
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
.quotes
  &__header
    padding 88px 30px 70px
    text-align center

    p
      margin-bottom 0

  &__intro
    font-size 24px
    line-height 30px
    color $darkGrey
    margin-top 0

  &__content 
    margin-bottom 100px

    &--desktop
      display none

  @media (min-width $MQxl)
    &__header
      margin-top 30px

    &__intro
      max-width 670px
      margin 45px auto

    &__content
      &--mobile
        display none

      &--desktop
        display grid
        grid-template-columns repeat(3, 1fr)

.quote
  padding 0 30px

  &__content
    font-style italic
    text-align center
    font-size 22px
    line-height 30px
    color $darkGrey

  &__author
    font-size 18px
    line-height 24px
    text-align center
    color $darkGrey

  @media (min-width $MQxl)
    background $darkBeige
    border-radius 0 60px 0 60px
    height 350px
    margin-bottom 50px

    &:nth-child(3n + 2)
      margin-top 50px
      margin-bottom 0

    &:nth-child(3n + 3)
      margin-top 20px

    &__content
      margin-top -40px
      text-align left
      color $black
      font-style normal

    &__author
      text-align left
      font-size 16px
      color $darkGrey

    &::before
      secondary-font-family()
      content: '“'
      font-size 88px

    &--image
      background-size cover
      background-position center
      
      &::before
        display none
</style>