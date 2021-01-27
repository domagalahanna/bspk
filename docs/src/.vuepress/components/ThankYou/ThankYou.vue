<template>
  <div
   data-scroll
   class="container"
  >
    <Heading
      :firstPartHeadlines="['Thank you']"
      tag="h1"
      tagStyle="h2"
    />
    <p class="content">
      Thank you for sending an inquiry! <br>
      Our consultant will get back to you within 24 hours.
      <Button link="/">
        Back to home
      </Button>
    </p>
  </div>
</template>

<style lang="stylus" scoped>
.container
  text-align center
  padding 90px 20px

  @media (min-width @MQlg)
    padding 140px 0px

.content
  margin-top 40px
  display flex
  flex-direction column
  justify-content center
  align-items center
  color $darkGrey
  font-weight 500
  font-size 18px
  line-height 26px

  .button
    margin-top 30px
</style>