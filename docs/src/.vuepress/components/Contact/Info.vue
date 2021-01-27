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
        <a class="underline" href="https://goo.gl/maps/SghnDtn3VK9VLFcDA" target="_blank" rel="noopener noreferral">
          View map 
        </a>
      </address>
      <address class="info__address">
        <strong>North America</strong> <br>
        530 Magdalena Avenue <br>
        Los Altos, CA 94024, USA <br>
        <a href="tel:+11234567890">(+1) 123 456 7890</a> <br>
        <a class="underline" href="https://goo.gl/maps/th6xx9fPajHa2ksC6" target="_blank" rel="noopener noreferral">
          View map 
        </a>
      </address>
    </div>
    <div class="info__section">
      <address class="info__address">
        <strong>General inquiries</strong><br>
         <a href="mailto:contact@bspk.com">contact@bspk.com</a>
      </address>
    </div>
    <div class="hide-desktop">
      <ClientOnly>
        <NewsletterForm/>
      </ClientOnly>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.newsletter-section
  margin-top 100px
  margin-bottom 70px
  padding 0 37px

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