<template>
  <section class="container">
    <article 
      class="solution"
      :class="{ 'solution--revert' : index % 2 }"
      v-for="(solution, index) in $frontmatter.solutions"
    >
      <div 
        class="solution__visuals visuals"
        data-scroll
        data-scroll-speed="1"
      >
        <img 
          :src="$withBase(solution.image.mobile.src)"
          :alt="solution.image.mobile.alt"
          class="visuals__image visuals__image--mobile"
        >
        <img 
          :src="$withBase(solution.image.desktop.src)"
          :alt="solution.image.desktop.alt"
          class="visuals__image visuals__image--desktop"
        >
        <div 
          v-if="index !== 2"
          class="screen"
          data-scroll
          :data-scroll-call="`playVisual${index}`"
        >
          <img 
            :src="$withBase('images/iphonex2vs.png')"
            alt=""
            class="screen__image"
          >
          <div class="screen__video-wrapper">
            <video 
              :src="$withBase('videos/BSPK_Mobile_Consultant.mp4')"
              :data-visual-id="index"
              muted=""
              playsinline=""
              loop=""
              class="screen__video"
            ></video>
          </div>
        </div>
      </div>
      <div 
        class="solution__content"
        data-scroll
      >
        <span class="solution__counter">
          {{ '0' + (index + 1) }}
        </span>
        <Heading
          :firstPartHeadlines="solution.headlineFirstPart"
          :highlighted="solution.highlighted"
          :secondPartHeadline="solution.headlineSecondPart"
          tag="h2"
        />
        <div class="solution__copy">
          {{ solution.copy }}
        </div>
        <div class="solution__cta">
          <span class="solution__numbers">
            {{ solution.numbers }}
          </span>
          <span class="solution__description">
            {{ solution.description }}
          </span>
        </div>
        <a 
          class="solution__more"
          href="contact/"
        >
          Learn More
          <img 
            :src="$withBase('images/icons/arrow.svg')"
            alt=""
          >
        </a>
      </div>
      </div>
    </article>
  </section>
</template>

<style lang="stylus" scoped>
.container
  padding-bottom 85px

  @media (min-width $MQlg)
    padding-bottom 160px

.solution
  padding 100px 37px 0

  &__content
    text-align center

  &__copy
    color $darkGrey
    font-size 18px
    margin-top 30px

  &__counter
    display none  

  &__cta
    color $accentColor
    font-size 19px
    display flex 
    margin-top 30px
    margin-bottom 30px
    justify-content center

  &__numbers
    width 87px
    height 87px
    border-radius 50%
    font-weight 700
    border 2px solid $accentColor
    display flex
    justify-content center
    align-items center
    font-size 36px

  &__description
    max-width 115px
    text-align left
    margin-left 20px
    font-weight 500
    display flex
    align-items center

  &__more
    color $accentColor
    font-size 17px
    font-weight 500
    font-size 18px

    img 
      margin-left 15px

  @media (min-width $MQlg)
    padding 260px 0 0
    display flex
    justify-content flex-end

    &__copy
      font-size 22px

    &__content
      text-align left
      width 45%
      height 550px
      display flex
      flex-direction column
      justify-content center
      align-items flex-start
      padding-left 10px

    &__counter
      secondary-font-family()
      font-weight 600
      display block
      color $darkBeige
      font-size 120px
      line-height 1
      margin-left -5px

    &__cta
      justify-content flex-start

    &__description
      max-width 175px

    &--revert
      justify-content flex-start

      .visuals
        left auto
        right 0

      .screen
        right auto
        left -40px

    &:first-child
      .visuals
        &::before
          content ''
          display block
          position absolute
          z-index -1
          width 160px
          height 160px
          background alpha(#3F6EE8, 0.1)
          border-radius 50%
          bottom -55px
          right 130px

    &:nth-child(2)
      .visuals
        &::before
          content ''
          display block
          position absolute
          z-index -1
          width 200px
          height 200px
          background alpha($accentColor, 0.16)
          border-radius 50%
          bottom -60px
          left 190px

    &:nth-child(3)
      .visuals
        &::before
          content ''
          display block
          position absolute
          z-index -1
          width 477px
          height 477px
          background $darkBeige
          border-radius 50%
          top -90px
          left -156px
.heading
 & > :first-child,
 & > :nth-child(2)
  display block

.visuals
  position relative

  &__image

    &--desktop
      display none

    &--mobile
      width 70%
      margin-bottom 75px

  @media (min-width $MQlg)
    position absolute
    left 0

    &__image

      &--mobile
        display none

      &--desktop
        display block
        width 100%

.screen
  position absolute
  top 20px
  right 0
  width 55%

  &__image
    width 100%
    position relative
    z-index 1

  &__video-wrapper
    position absolute
    width 90%
    left 5%
    overflow hidden
    border-radius 15%
    top 0
    height 100%
    padding 5% 0
    -webkit-mask-image -webkit-radial-gradient(white, black)

  &__video
    height 100%
    transform translateX(-36%)

  @media (min-width $MQlg)
    width 260px
    right -45px
    top 40px

    &__video
      transform translateX(-35%)
</style>