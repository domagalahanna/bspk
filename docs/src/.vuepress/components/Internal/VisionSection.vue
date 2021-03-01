<template>
  <div>
    <section 
      class="vision-section container grid-container"
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
      <div 
        data-scroll
        class="vision-section__content"
      >
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
  </div>
</template>

<style lang="stylus" scoped>
.vision-section
  margin-top 100px

  &__image
    img
      width 100%
      min-height 230px

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
        margin-bottom 0

  @media (min-width $MQmd)
    &__image
      img
        min-height 555px

    &__content
      text-align center

  @media (min-width $MQlg)
    margin-bottom 100px

    &__content
      font-size 24px
      line-height 1.2

    &__image
      img
        min-height 740px

  @media (min-width $MQxl)
    margin-top 300px
    margin-bottom 300px

    &__image
      grid-column 1 / span 4

      img
        min-height 555px

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
      text-align left

      .heading
        text-align left

      p
        margin-bottom 30px
        color $darkGrey

        &:last-child
          margin-bottom 0

        &:first-of-type
          margin-top 50px
</style>