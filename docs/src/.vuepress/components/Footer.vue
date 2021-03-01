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
          <div class="footer__link">
            <h2 class="footer__title">
              Home
            </h2>
            <ul>
              <li v-for="navElement of $themeConfig.nav">
                <router-link
                  :to="navElement.link"
                >
                  {{ navElement.text }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="footer__contact">
            <h2 class="footer__title">
              Locations
            </h2>
            <address>
              Paris<br>
              San Francisco<br>
              Los Angeles<br>
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
      <div class="footer__contact--mobile">
        <div>
          <h2 class="footer__title">
            Contact
          </h2>
          <a href="mailto:contact@bspk.com">contact@bspk.com</a>
          <ul>
            <li>
              <a href="https://twitter.com/bspkluxury" target="_blank">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/bspkluxury" target="_blank">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div class="conditions--mobile">
          <ul>
            <li>
              <router-link to="/privacy/">
                Privacy Policy
              </router-link>
            </li>
            <li>
              <router-link to="/terms-of-use/">
                Terms of use
              </router-link>
            </li>
            <li>
              <router-link to="/cookie-policy/">
                Cookie Policy
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="copyrights">
        <nav class="conditions--desktop">
          <router-link to="/privacy/">
            Privacy
          </router-link>
          <router-link to="/terms-of-use/">
            Terms of use
          </router-link>
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
    margin-bottom 40px

    .footer__contact
      &--desktop
        display none

    .footer__socials
      width 30%
      display none

  &__contact--mobile
    line-height 1.8
    display flex
    justify-content space-between

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
      justify-content space-between

      .footer__contact
        width auto

        &--desktop
          display block
      
      .footer__socials
        display block

    &__contact--mobile
      display none
      
.copyrights
  text-align center
  font-size 18px
  margin-top 50px

  &__copy
    margin-top 10px
    font-size 16px
    opacity 0.8

  nav
    display none

  @media (min-width $MQlg)
    text-align left
    margin-top 140px
    display flex
    justify-content space-between
    font-weight 500
    font-size 13px

    nav
      display block

    &__copy
      margin-top 0
      opacity 1
      font-size 13px

    a
      margin-right 20px
      &:last-child
        margin-right 0

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

.conditions

  &--mobile
    margin-top 40px

  @media (min-width $MQlg)
    &--mobile
      display none
    
</style>