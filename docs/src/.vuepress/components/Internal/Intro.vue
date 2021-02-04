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

  @media (min-width $MQlg)
    padding-top 200px

    &__heading
      grid-column 1 / span 3

    &__content

      font-size 50px
      line-height 54px
      grid-column 5 / span 8
</style>