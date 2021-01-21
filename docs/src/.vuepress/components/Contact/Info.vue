<template>
  <div 
    class="info container"
  >
    <div 
      data-scroll
      class="info__section"
    >
      <Heading
        :firstPartHeadlines="['Contact us']"
        tag="h1"
        tagStyle="h2"
      />
    </div>
    <div class="info__section">
      <address class="info__address">
        <strong>Europe</strong> <br>
        13-15 rue Taitbout <br>
        75009 Paris <br>
        <a href="tel:+330634333728">+33 (0)6 34 33 37 28</a> <br>
        <a class="underline" href="https://goo.gl/maps/FmiaNoB36sQ2x7qVA" target="_blank" rel="noopener noreferral">
          View map 
        </a>
      </address>
      <address class="info__address">
        <strong>North America</strong> <br>
        530 Magdalena Avenue <br>
        Los Altos, CA 94024, USA <br>
        <a href="tel:+11234567890">(+1) 123 456 7890</a> <br>
        <a class="underline" href="https://goo.gl/maps/d6dcLuzzpBg8Wk4z7" target="_blank" rel="noopener noreferral">
          View map 
        </a>
      </address>
      <address class="info__address">
        <strong>Asia</strong> <br>
        Yeoksam-dong, Gangnam-gu <br>
        Seoul, South Korea <br>
        <a href="tel:+8225319000">(+82) 2-531-9000</a> <br>
        <a class="underline" href="https://goo.gl/maps/ewkJLjxQHzaxXnvW8" target="_blank" rel="noopener noreferral">
          View map 
        </a>
      </address>
    </div>
    <div class="info__section">
      <address class="info__address">
        <strong>General inquiries</strong><br>
         <a href="mailto:info@bspk.com">info@bspk.com</a>
      </address>
      <address class="info__address">
        <strong>Business Inquiries</strong><br>
        <a href="mailto:business@bspk.com">business@bspk.com</a>
      </address>
      <address class="info__address">
        <strong>Press Inquiries</strong><br>
         <a href="mailto:press@bspk.com">press@bspk.com</a>
      </address>
      <address class="info__address">
        <strong>Employment Inquiries</strong><br>
         <a href="mailto:join@bspk.com">join@bspk.com</a>
      </address>
    </div>
    <div class="hide-desktop">
        <NewsletterForm/>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.newsletter-section
  margin-top 100px
  margin-bottom 70px
  padding 0 37px

.hide-desktop
  @media (min-width $MQlg)
    display none

.heading
  text-align center
  margin 135px 0 45px

  @media (min-width $MQlg)
    text-align left
    margin 0

.info
  &__address
    font-size 18px
    line-height 23px
    color $darkGrey
    margin-bottom 30px
    text-align center

    &:last-child
      margin-bottom 0

    a.underline
      text-decoration underline

  &__section
    margin-bottom 30px

  @media (min-width $MQlg)
    display flex
    margin-top 245px

    &__address
      line-height 25px
      text-align left

      strong
        font-size 20px
        font-weight 500

    &__section
      width 33%
      padding-left 25px
      margin-bottom 0
</style>