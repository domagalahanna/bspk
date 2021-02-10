<template>
  <div 
    data-scroll
    data-scroll-delay="1"
    class="shaped-info container"
  >
    <div
      v-for="info in $frontmatter.shapedInfo"
      class="shaped-info__info grid-container"
    >
      <div class="shaped-info__image">
        <img-lazy
          :src="info.image.src"
          :alt="info.image.alt"
        >
        </img-lazy>
      </div>
      <div class="shaped-info__content">
        <h2>
          {{ info.title }}
        </h2>
        <p>
          {{ info.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
.shaped-info
  padding 0 30px

  &__content
    text-align center

    h2
      font-weight 500
      font-size 28px
      font-size 22px
      margin-top 15px
      margin-bottom 0

    p
      font-size 18px
      line-height 24px
      color $darkGrey
      margin-top 5px
      margin-bottom 55px

  &__image
    img
      min-height 188px

  @media (min-width $MQmd)
    text-align center

  @media (min-width $MQlg)
    padding 0
    margin-top 175px
    text-align left

    &__info
      grid-column-gap 0

      &:first-child

        .shaped-info__image
          border-bottom-left-radius 60px
          overflow hidden

        .shaped-info__content
          border-top-right-radius 60px

      &:nth-child(2n)

        .shaped-info__image
          grid-column 5 / span 4


        .shaped-info__content
          grid-column 9 / span 4
          border-top-right-radius 60px
          border-bottom-right-radius 60px

      &:nth-child(3n)

        .shaped-info__image
          border-top-left-radius 60px
          overflow hidden
          
        .shaped-info__content
          border-bottom-right-radius 60px

    &__image
      grid-column 1 / span 4

      img
        width 100%
        min-width 400px
        height 100%
        min-height 295px

    &__content
      grid-column 5 / span 4
      background $darkBeige
      padding 45px
      display flex
      flex-direction column
      justify-content center
      text-align left

      h2
        font-weight 500
        font-size 32px
        margin-bottom 10px
        margin-top 0

      p
        font-size 22px
        line-height 26px
        color $darkGrey
        margin-bottom 0
</style>