<template>
  <div>
    <div class="content">
      <p>
        By visiting www.bspk.com (our “Website”), you agree to our Website <router-link to="/term-of-use">Terms of use</router-link>.
      </p>
      <p>
        Take a look at our <router-link to="/privacy-policy">Privacy Policy</router-link> to find out more on how we collect and use personal data.
      </p>
      <p>
        You can set up your web browser to refuse cookies, but this means you won’t be able to use all its features.
      </p>
      <h2>
        Cookies we use
      </h2>
      <p>
        Here are the types of cookies we use on our Website and what they do:
      </p>
      <p>
        <strong>Google reCAPTCHA</strong>: reCAPTCHA is a service that protects the site from spam and abuse. It uses advanced risk analysis techniques to tell humans and bots apart.
      </p>
      <h2>
        Analytical Cookies
      </h2>
      <p>
        Analytical cookies allow us to monitor user behaviour on our Website. This enables us to analyse user journeys and improve the structure of and content on the Website.
      </p>
      <p>
        <strong>Google Analytics</strong>: Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.
      </p>
      <p>
        You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.
      </p>
      <p>
        For more information on the privacy practices of Google, please visit the Google Privacy & Terms page.
      </p>
      <h2>
        What other cookies?
      </h2>
      <p>
        You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our Website.
        Except for essential cookies, all cookies will expire after two years.
      </p>
      <h2>BSPK, January 2021</h2>
    </div>
    <div class="hide-desktop">
      <div data-scroll>
        <Heading
          :firstPartHeadlines="['Speak to consultant', 'to get started']"
          :breakLine="true"
          tag="h2"
        >
        </Heading>
        <Button 
          link="/contact/"
          size="large"
        >
          Request a demo
        </Button>
      </div>
      <ClientOnly>
        <NewsletterForm/>
      </ClientOnly>
    </div>
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
h2
  font-weight 500
  margin-top 50px
  margin-bottom 35px

.content
  max-width 570px
  padding 10px 45px
  margin 0 auto

  @media (min-width $MQlg)
    font-size 20px
    line-height 26px
    max-width 570px
    padding 0

.hide-desktop
  padding 10px 45px 50px
  text-align center

  & > :first-child
    margin-bottom 80px
</style>