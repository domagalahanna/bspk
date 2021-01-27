<template>
  <div 
    data-scroll
    class="terms-heading"
  >
      <Heading
        :firstPartHeadlines="['Cookie policy']"
        tag="h1"
        tagStyle="h2"
      />
  </div>
</template>

<style lang="stylus" scoped>
.terms-heading
  text-align center
  padding 65px 30px 30px

  p
    margin-top 15px
    font-size 18px
    line-height 23px
    color $darkGrey

  @media (min-width $MQlg)
    padding 155px 20px 79px

    p
      font-size 20px
      line-height 26px
      max-width 470px
      margin 25px auto 0
</style>