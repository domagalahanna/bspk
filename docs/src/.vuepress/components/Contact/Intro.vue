<template>
  <div 
    data-scroll
    class="form-heading"
  >
      <Heading
        :firstPartHeadlines="['Request a demo']"
        tag="h1"
        tagStyle="h2"
      />
      <p>
        Please fill out the form below and a consultant will get back to you within 24 hours.
      </p>
  </div>
</template>

<style lang="stylus" scoped>
.form-heading
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