<template>
  <section 
    data-scroll
    class="features container"
  >
    <p class="features__intro">
      {{ $frontmatter.features.intro }}
    </p>
    <div class="grid-container">
      <article
        v-for="feature of $frontmatter.features.items"
        class="feature"
      >
        <header class="feature__header">
          <div
            class="feature__image"
          >
            <img-lazy
              :src="feature.icon"
            >
            </img-lazy>
          </div>
          <h2 class="feature__title">
            {{ feature.title }}
          </h2>
        </header>
        <ul class="feature__list styled-list">
          <li
            v-for="(item, index) of feature.list"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style lang="stylus">
.features
  font-size 18px
  line-height 24px
  color $darkGrey
  padding 75px 30px 120px

  &__intro
    margin 0
    font-size 24px
    line-height 30px

  @media (min-width $MQmd)
    .grid-container
      grid-gap 20px
      display grid
      grid-template-columns repeat(12, 1fr)

    &__intro
      text-align center

  @media (min-width $MQxl)
    &__intro
      max-width 550px
      margin 150px auto 75px

.feature
  &__header
    margin-bottom 20px
    margin-top 45px
    display flex
    align-items center
    padding 10px 20px 10px 0

  &__image
    position relative
    display inline-block

    img
      height 31px
      width 31px
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)

    &::before
      content ''
      display block
      background #E9D5C5
      width 55px
      height 47px
      border-radius 12px
      transform rotate(-5deg)

  &__title
    font-weight 500
    font-size 28px
    line-height 22px
    margin-left 15px
    margin-bottom 0
    margin-top 0
    color $black

  &__list
    list-style none
    padding-left 0

    &:last-child
      margin-bottom 0

    li
      padding-left 20px
      padding-right 40px
      line-height 24px
      margin-bottom 10px
      position relative

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

  @media (min-width $MQlg)
    grid-column span 4
    padding-left 20px
    padding-right 20px

    &__list
      font-size 20px
      line-height 26px

      li
        padding-right 20px

    &__header
      flex-direction column
      justify-content start
      align-items start

    &__title
      margin-top 20px
      margin-left 0

    &__image
      img 
        width 34px
        height 34px
      
      &::before
        width 85px
        height 73px
</style>