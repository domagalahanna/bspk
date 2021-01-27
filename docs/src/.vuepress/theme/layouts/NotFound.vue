<template>
  <div
    data-scroll
    class="container"
  >
    <Heading
      :firstPartHeadlines="['Page not found']"
      tag="h1"
      tagStyle="h2"
    />
    <p class="content">
      Oops! The page you're looking for is unavailable.
    </p>
    <Button link="/" size="large">
      Back to home
    </Button>
  </div>
</template>

<style lang="stylus" scoped>
.container
  padding 40px 20px
  text-align center

  @media (min-width $MQlg)
    padding 140px 0

.content
  font-weight 500
  font-size 18px
  color $darkGrey
  margin 50px 0
</style>