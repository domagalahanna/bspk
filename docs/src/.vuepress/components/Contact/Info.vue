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