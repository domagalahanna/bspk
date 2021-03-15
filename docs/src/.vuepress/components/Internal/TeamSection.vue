<template>
  <section 
    class="team-section container"
    :id="$frontmatter.teamSection.id"
  >
    <div class="grid-container">
      <header 
        data-scroll
        class="team-section__header"
      >
        <Heading
          :firstPartHeadlines="[$frontmatter.teamSection.title]"
          tag="h2"
          tagStyle="h1"
        />
        <p>
          {{ $frontmatter.teamSection.copy }}
        </p>
      </header>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    isMobile: false
  }),
  mounted() {
    this.$root.$emit('update-locoscroll');
    this.isMobile = window.innerWidth < 500
  }
}
</script>

<style lang="stylus" scoped>
.team-section
  .heading
    text-align center

  &__header
    font-size 18px
    line-height 24px
    color $darkGrey

    p
      text-align center

    .heading
      color $black

  @media (min-width $MQlg)
    margin-top 150px

    &__header
      p
        font-size 24px
        line-height 34px
        color $darkGrey
        margin-top 40px
        margin-bottom 40pxx

  @media (min-width $MQxl)
    margin-top 300px

    &__header
      grid-column 1 / span 12
      padding 0 110px
</style>