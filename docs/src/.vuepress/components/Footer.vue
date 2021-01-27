<template>
  <div class="footer-wrapper">
    <div class="footer-circle">
    </div>
    <footer class="footer" data-scroll>
      <div class="footer__content">
        <div class="footer__logo">
          <router-link to="/">
            <img :data-src="$withBase('/images/logo.svg')" loading="lazy" class="lazy" alt="BSPK"/>
          </router-link>
        </div>
        <nav class="footer__nav">
          <div class="footer__contact">
            <h2 class="footer__title">
              Contact
            </h2>
            <address>
              Menlo Park, California, USA<br>
              <a href="tel:+14159152775">+1 415-915-2775</a><br>
              <a href="mailto:contact@bspk.com">contact@bspk.com</a><br>
            </address>
          </div>
          <div class="footer__socials">
            <h2 class="footer__title">
              Find us
            </h2>
            <ul>
              <li>
                <a href="https://twitter.com/bspkluxury" target="_blank">Twitter</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/bspkluxury" target="_blank">LinkedIn</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="copyrights">
        <nav>
          <router-link to="/privacy/">
            Privacy
          </router-link>
          <span class="divider">—</span>
          <router-link to="/terms-of-use/">
            Terms of use
          </router-link>
          <span class="mobile-break"></span>
          <router-link to="/cookie-policy/">
            Cookie Policy
          </router-link>
        </nav>
        <div class="copyrights__copy">
          ©2021 BSPK Inc. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$root.$emit('update-locoscroll');
    
    setTimeout(() => {
      this.$root.$emit('update-locoscroll');
    }, 1000)
  }
}
</script>

<style lang="stylus" scoped>
.footer
  padding 50px 37px   
  position relative
  font-size 18px

  &__logo
    text-align center
    img 
      width 200px

  &__title
    margin-bottom 5px
    font-weight 600

  &__nav
    display flex
    justify-content space-between
    line-height 1.8
    margin-top 40px

    .footer__contact
      width 50%

    .footer__socials
      width 30%

  @media (min-width $MQlg)
    background $lightBeige
    border-top 1px solid $darkBeige
    padding 110px 100px 60px
    font-size 1rem

    &__content
      display flex

    &__logo
      text-align left
      width 50%
      img 
        width 400px
        max-width 80%

    &__nav
      line-height 1.6
      margin-top 0
      width 50%
      justify-content start

      .footer__contact
        width 50%
        padding-right 20px

.copyrights
  text-align center
  font-size 18px
  margin-top 50px

  &__copy
    margin-top 10px
    font-size 16px
    opacity 0.8

  @media (min-width $MQlg)
    text-align left
    margin-top 140px
    display flex
    justify-content space-between
    font-weight 500
    font-size 13px

    &__copy
      margin-top 0
      opacity 1
      font-size 13px

    a
      margin-right 20px
      &:last-child
        margin-right 0

.divider
  padding-left 20px
  padding-right 20px
  font-weight 500

  @media (min-width $MQlg)
    display none

.mobile-break
  display block

  @media (min-width $MQlg)
    display none
    
.footer-circle
  @media (min-width $MQlg)
    height 130px
    position relative

    &::before
      content ''
      position absolute
      width 549px
      height 555px
      border-radius 50%
      border 1px solid $darkBeige
      top 0
      right -110px
      z-index -1

.footer-wrapper
  overflow hidden
</style>