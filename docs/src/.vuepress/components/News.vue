<template>
  <div class="container">
    <article
      v-for="news of $frontmatter.news"
      class="news grid-container"
    >
      <img-lazy
        :src="news.image.src"
        :alt="news.image.alt"
        class="news__image"
      />
      <div class="news__content">
        <div class="news__info">
          {{ news.source }} <span class="divider"></span> <span class="news__date news__date--desktop">{{ news.date }}</span><span class="news__date news__date--mobile">{{ news.mobileDate }}</span> 
        </div>
        <h2 class="news__title">
            {{ news.title }}
        </h2>
        <a 
          :href="news.link"
          target="_blank"
          rel="noopenner noreferrer"
          class="news__link"
        >
          Read Article
          <img-lazy 
            :src="$withBase('/images/icons/arrow.svg')"
            alt=""
          />
        </a>
      </div>
    </article>
  </div>
</template>

<style lang="stylus" scoped>
.news
  &__image
    min-height 215px
    margin 0 auto
    display block
    
  &__date
    &--desktop
      display none

  &__info
    color $darkGrey
    font-weight 500
    text-transform uppercase
    font-size 14px
    display flex
    flex-wrap wrap
    align-items center

    .divider
      width 10px
      height 1px
      margin 0 5px
      display inline-block
      background $darkGrey

  &__link
    color $accentColor
    font-weight 500
    margin-top 30px
    display inline-flex
    align-items center
    font-size 17px

    img
      margin-left 10px

  &__content
    padding 15px 30px 100px

  &__title
    font-size 24px
    line-height 30px
    margin-top 30px

  @media (min-width $MQmd)
    display grid
    grid-template-columns repeat(12, 1fr)
    grid-column-gap 30px
    padding 0 30px

    &__image
      grid-column 1 / span 6

    &__content
      grid-column 7 / span 5
      

  @media (min-width $MQlg)
    padding-bottom 100px

  @media (min-width $MQxl)
    padding-left 0
    padding-right 0

    &:first-child
      padding-top 80px

    &:last-child
      padding-bottom 200px

    &__date
      &--desktop
        display inline

      &--mobile
        display none

    &__image
      grid-column 1 / span 5
      min-height 315px

    &__content
      grid-column 6 / span 6
      padding 0 0 0 50px
      display flex
      justify-content center
      flex-direction column

    &__title
      font-size 32px
      line-height 40px
      margin-top 30px

    &__info
      font-size 15px

      .divider
        width 1px
        height 30px
        margin 0 20px
        font-weight 300
        display inline-block
        background #ADA79D
</style>