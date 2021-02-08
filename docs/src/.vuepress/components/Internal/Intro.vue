<template>
  <section 
    data-scroll
    data-scroll-speed="1.5"
    data-scroll-delay="1"
    class="interal-intro container grid-container"
    :id="$frontmatter.intro.id"
  >
    <div class="interal-intro__heading">
      <Heading
        :firstPartHeadlines="[$frontmatter.intro.title]"
        tag="h1"
        tagStyle="internal-intro"
      />
    </div>
    
    <div class="interal-intro__content">
      {{ $frontmatter.intro.content }}
    </div>
  </section>
</template>

<style lang="stylus">
.interal-intro
  padding 75px 30px
  text-align center
  font-size 24px
  line-height 30px

  .heading
    margin-bottom 15px

  &__content
    color $darkGrey

  @media (min-width $MQlg)
    padding 200px 0 0
    text-align left

    &__heading
      grid-column 1 / span 3

    &__content
      font-size 50px
      line-height 54px
      grid-column 5 / span 8
      color $black
</style>