<template>
  <section 
    class="intro container"
    data-scroll
    data-scroll-speed="1.5"
    data-scroll-delay="1"
  >
    <h2>
      {{ $frontmatter.intro }}
    </h2>
  </section>
</template>

<style lang="stylus" scoped>
.intro
  padding 65px 45px
  font-size 23px
  font-weight 400
  line-height 27px
  text-align center
  color $darkGrey

  @media (min-width $MQlg)
    padding 185px 45px
    max-width 780px 
    box-sizing content-box
    margin 0 auto
    font-size 48px
    line-height 56px
    color $black
</style>