<template>
  <div class="newsletter-section" data-scroll>
    <Heading
      :firstPartHeadlines="['Subscribe to', 'our newsletter']"
      :breakLine="true"
      tag="h2"
    >
    </Heading>
    <div class="form-wrapper">
      <form 
          action="https://formspree.io/f/xbjpqgaj"
          method="POST"
        >
          <label 
            for="user-email"
            class="sr-only"
          >
            User email
          </label>
          <input 
            id="user-email"
            name="email"
            type="email"
            class="input input--full"
            placeholder="Email address"
            required
          >
          <input
            class="input input--submit"
            type="submit"
            value="OK"
          />
      </form>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.newsletter-section
  height 100%
  display flex
  flex-direction column
  justify-content space-between
  
.input
  default-font-family()
  background none
  outline none
  box-shadow none
  border none
  border-bottom 1px solid black
  text-transform uppercase
  padding 10px 0
  font-size 15px
  line-height 17px
  font-weight 500
  border-radius none
  -webkit-border-radius 0

  &:active, &:focus
    &::placeholder
      opacity 0.6
      transition opacity .2s ease-in-out

  &::placeholder
    transition opacity .2s ease-in-out
    color $black

  &--full
    width 100%

  &--submit
    cursor pointer

  @media (min-width $MQlg)
    padding 3px 0

.form-wrapper
  width 99%
  position relative

form
  width 99%
  max-width 400px
  margin 0 auto
  position relative

  .input--submit
    position absolute
    top 0
    right 0
    border-bottom 0

.heading
  margin-bottom 26px
  text-align center

  @media (min-width $MQlg)
    margin-bottom 30px
</style>