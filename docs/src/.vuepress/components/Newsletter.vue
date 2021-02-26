<template>
  <section 
    class="newsletter container"
  >
    <div class="newsletter__section">
      <div data-scroll>
        <Heading
          :firstPartHeadlines="['Speak to a consultant', 'to get started']"
          :breakLine="true"
          tag="h2"
        >
        </Heading>
      </div>
      <Button 
        link="/contact/"
        size="large"
      >
        Request a demo
      </Button>
    </div>
    <div class="newsletter__section">
      <ClientOnly>
        <NewsletterForm/>
      </ClientOnly>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.$root.$emit('update-locoscroll');
    
    setTimeout(() => {
      this.$root.$emit('update-locoscroll');
    }, 500);
  }
}
</script>

<style lang="stylus" scoped>
.newsletter
  display flex
  flex-direction column
  text-align center
 
  &__section
    padding 0 30px 120px

    .heading
      margin-bottom 26px

  @media (min-width $MQlg)
    flex-direction row
    position relative

    &__section
      width 50%
      padding 100px 0
      display flex
      flex-direction column
      justify-content space-between
      align-items center

      .heading
        margin-bottom 30px

  @media (min-width $MQxl)
    &__section
      padding 100px 0 170px
</style>