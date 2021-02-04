<template>
  <section 
    class="counter-gallery"
    :id="$frontmatter.counterGallery.id"
  >
    <header
      v-if="$frontmatter.counterGallery.title && $frontmatter.counterGallery.intro"
      data-scroll
      data-scroll-speed="1.5"
      data-scroll-delay="1"
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
        data-scroll
        data-scroll-speed="1.5"
        data-scroll-delay="1.5"
      >
        <img-lazy
          :src="section.image.src"
          :alt="section.image.alt"
          width="585"
          height="550"
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

  @media(min-width $MQlg)

    &__header
      text-align center
      max-width 770px
      margin 0 auto

      p
        color $darkGrey
        font-size 24px
        line-height 34px

.counter-section

  @media(min-width $MQlg)
    margin-top 180px

    &__image
      grid-column 1 / span 6

      img
        width 100%

    &__content
      grid-column 8 / span 5
      display flex
      flex-direction column
      justify-content flex-end

      .heading
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