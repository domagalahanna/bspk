<template>
  <section 
    class="counter-gallery"
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
        <div class="counter-section__copy">
          {{ section.content }}
        </div>
      </div>
    </article>
  </section>
</template>

<style lang="stylus" scoped>
.counter-gallery
  padding 115px 30px

  &__header
    margin-bottom 55px

    .heading
      margin-bottom 15px
      text-align center

    p
      color $darkGrey
      font-size 18px
      line-height 24px

  @media(min-width $MQlg)
    padding 0

    &__header
      text-align center
      max-width 770px
      margin 0 auto

      p
        color $darkGrey
        font-size 24px
        line-height 34px

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

  img
    min-height 300px

  @media(min-width $MQmd)

    &__image
      text-align center

    .heading
      text-align center

  @media(min-width $MQlg)
    margin-top 180px
    margin-bottom 0

    &:first-of-type
      margin-top 80px

    &__image
      grid-column 1 / span 6

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
        padding-right 100px
        border-top 2px solid $black

    &__copy
      color $darkGrey
      font-size 22px
      line-height 32px
      margin-top 25px

    &:nth-of-type(2n)
      .counter-section__content
        grid-column 1 / span 5
        grid-row 1

      .counter-section__image
        grid-column 7 / span 6
        grid-row 1
</style>