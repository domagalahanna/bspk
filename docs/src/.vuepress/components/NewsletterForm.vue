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
          action="https://formspree.io/f/mpzobrpl"
          method="POST"
          ref="newsletterForm"
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
            v-model="userEmail"
          >
          <input
            class="input input--submit"
            type="submit"
            value="OK"
            @click="validate"
          />

          <div id="newsletterrecaptcha" class="g-recaptcha"></div>
          <transition name="fade">
            <div 
              class="validation-message"
              v-show="validationError"
            >
              Please provide email address.
            </div>
          </transition>
          <div class="recaptcha-message">
            This site is protected by reCAPTCHA and the Google 
            <a target="_blank" href="https://policies.google.com/privacy">Privacy Policy</a>
             and 
            <a target="_blank" href="https://policies.google.com/terms">Terms of Service</a> apply.
          </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    validationError: false,
    userEmail: null
  }),
  mounted() {
    this.initReCaptcha();
  },
  methods: {
    validate(e) {
      e.preventDefault();
      if(this.userEmail) {
        this.validationError = false;
        grecaptcha.execute()
      } else {
        this.validationError = true;
      }
    },
    initReCaptcha() {
      var self = this;
      setTimeout(function() {
          if(typeof grecaptcha === 'undefined') {
              self.initReCaptcha();
          }
          else {
            grecaptcha.ready(function () {
              grecaptcha.render('newsletterrecaptcha', {
                  sitekey: '6LeTXT0aAAAAAK-QGc21nbrcIRo0v73TsF_CA55Y',
                  size: 'invisible',
                  callback: self.submit
              });
            })
          }
      }, 100);
    },
    submit: function(token) {
      this.$refs['newsletterForm'].submit();
    }
  }
}
</script>

<style lang="stylus" scoped>
.validation-message
  text-align left
  color $darkGrey
  margin-top 10px
  font-weight 500

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

.g-recaptcha
  position fixed
  z-index -1
  opacity 0

.recaptcha-message
  opacity 0.3
  font-size 12px
  text-align left
  position absolute
  top 150%

.heading
  margin-bottom 26px
  text-align center

  @media (min-width $MQlg)
    margin-bottom 30px
</style>