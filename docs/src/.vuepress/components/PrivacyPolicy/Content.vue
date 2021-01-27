<template>
  <div>
    <div class="content">
      <p>
        BSPK Inc. (“We”) are committed to protecting and respecting your privacy.
        This policy together with our Terms of Use sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. By visiting www.bspk.com (the “Website”), you are accepting and consenting to the practices described in this policy as well as consenting to our use of cookies in accordance with the terms of this policy.
      </p>
      <p>
        For the purposes of the Data Protection Legislation and, including Data Protection Act 2018, GDPR, (EU General Data Protection Regulation 2016/679), (“Data Protection Legislation”), and in respect to visitors to the Website, the data controller is BSPK Inc., a registered company with a registered address at 650 Fremont Av. Ste B Box 105 Los Altos, CA 94024, USA.
      </p>
      <p>
        With respect to personal data collected and processed on behalf of our customers, we act as Data Processor.
        Personnel working for our customers and accessing BSPK via a handheld device such as a phone or tablet, may also provide us with personal data as part of the services. Such personal data shall be collected, stored and processed in accordance with this policy and Data Protection Legislation.
      </p>
      <h2>
        1. Information we collect from you
      </h2>
      <p>
        We will collect and process the following data about you:
      </p>
      <p>
        Information you give us. This is information about you that you give us by filling in any details on the Website or by corresponding with us by phone, e-mail or otherwise. Personnel of our customer may also provide information such as their name, contract telephone number and email address as part of using the services provided by BSPK and as part of their employment with our customers.
      </p>
      <p>
        Information we collect about you. Regarding each of your visits to our Website we will automatically collect the following information:
        technical information which may include: the Internet protocol (IP) address used to connect your computer to the Internet; browser type and version; time zone setting; browser plug-in types and versions and the operating system and platform.
        information about your visit, including the full Uniform Resource Locators (URL), clickstream to, through and from our Website (including date and time), page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), methods used to browse away from the page, and any name, email address or phone number used to contact us.
        Name and email address with regards to being able to contact you either with respect to answering a query or for more general reasons concerned with informing you about our services and general marketing information.
        The legal basis for this processing is our legitimate interests, namely monitoring and improving our Website and enabling you to communicate with us and us to communicate with you.
      </p>
      <p>
        Personnel of our customers: as part of your use of the services provided by BSPK we may collect personal data such as your name, contact telephone and email address and such personal data may be shared with individuals visiting a customer website. The lawful basis for processing such personal data shall be performance of a contract.
      </p>
      <h2>
        2. Cookies
      </h2>
      <p>
        Our Website uses cookies to distinguish you from other users of our Website. This helps us to provide you with a good experience when you browse our Website and allows us to improve our Website. A cookie will be stored on your computer. Generally, cookies work by assigning to your computer a unique number that has no meaning outside of the Website. The cookies do not contain any personal information and we use them only to personalize and improve your experience.
        Take a look at our Cookie Policy to find out more on how we use Cookies.
      </p>
      <h2>
        3. App Analytics
      </h2>
      <p>
        We use mobile analytics to allow us to better understand the functionality of BSPK on your phone. This software may record information such as how often you use the application, events and interactions that occur within the application, aggregated usage and performance data.
      </p>
      <p>
        Additionally, in the event that BSPK might crash on your mobile device we will receive information about your mobile device model and OS version, which allows us to identify and fix bugs and otherwise improve the performance of Hero.
      </p>
      <h2>
        4. Uses made of the information
      </h2>
      <p>
        We use information held about you in the following ways:
        Information you give to us. We will use this information:
        to carry out our obligations arising from any contracts entered into between you and us and to provide you with the information, products and services that you request from us;
        for internal use and to administer the Website and for internal operations, including troubleshooting, data analysis, testing, research, statistical and survey purposes;
        to communicate with you including to notify you about changes to our service;
        to ensure that content from our Website is presented in the most effective manner for you and for your computer.
        to contact you in relation to various marketing and sales opportunities, (when you consent to this).
        in performance of the contract to provide the services between BSPK and the customer.
        The legal basis for contacting you with respect to providing you with information about our services, general marketing information and sales opportunities shall be legitimate interest.
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