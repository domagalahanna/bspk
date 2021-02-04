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
          width="400"
          height="295"
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

  @media (min-width $MQlg)
    margin-top 175px

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
        height 100%

    &__content
      grid-column 5 / span 4
      background $darkBeige
      padding 45px
      display flex
      flex-direction column
      justify-content center

      h2
        font-weight 500
        font-size 32px

      p
        font-size 22px
        line-height 26px
        color $darkGrey
</style>