<template>
  <div>
    <div class="content">
      <p>
        Effective Date: January 6, 2021
      </p>
      <p>
        These General Terms of Service (“Terms”), together with the documents and policies incorporated and referenced in these Terms, are a contract (the “Agreement”) between you (“You”, “Your”, “Yourself”), and BSPK, Inc. (“BSPK”, “We”, “Us, or “Our”). This Agreement governs your use of or interactions with BSPK's products and services (collectively, the “Service”). All capitalized terms have the meanings given to them in these Terms, unless otherwise indicated.
      </p>
      <p>
        By electronically accepting this Agreement or by establishing a BSPK account or using the Service after the Effective Date of these Terms, You consent to and agree to comply with these Terms. This Agreement includes and You are consenting to.
      </p>
      <h2>
        1. Using the Settle Service
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
      <h2>
        2. Using the Settle Service
      </h2>
      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatus.
      </p>
      <p>
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
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