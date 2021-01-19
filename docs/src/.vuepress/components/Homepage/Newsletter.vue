<template>
  <section 
    class="newsletter container"
  >
    <div 
      class="newsletter__section"
      data-scroll
    >
      <Heading
        :firstPartHeadlines="['Speak to consultant', 'to get started']"
        :breakLine="true"
        tag="h2"
      >
      </Heading>
      <Button 
        link="contact/"
        size="large"
      >
        Request a demo
      </Button>
    </div>
    <div 
      class="newsletter__section"
      data-scroll
    >
      <Heading
        :firstPartHeadlines="['Subscribe to', 'our newsletter']"
        :breakLine="true"
        tag="h2"
      >
      </Heading>
      <form action="">
        <input 
          type="email"
          class="input input--full"
          placeholder="Email address"
        >
        <input
          class="input input--submit"
          type="submit"
          value="OK"
        />
      </form>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
.newsletter
  display flex
  flex-direction column
  text-align center
  
  form
    width 100%
    max-width 400px
    margin 0 auto
    position relative

    .input--submit
      position absolute
      right 0
      border-bottom 0

  &__section
    width 100%
    padding 0 30px 85px

    .heading
      margin-bottom 26px

  @media (min-width $MQlg)
    flex-direction row

    &__section
      width 50%
      padding 100px 0 300px
      display flex
      flex-direction column
      justify-content space-between
      align-items center

      .heading
        margin-bottom 30px
</style>