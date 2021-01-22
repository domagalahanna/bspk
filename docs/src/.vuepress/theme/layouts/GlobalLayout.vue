<template>
  <div 
    id="global-layout"
    @scroll="this.$root.emit('openPopup')"
  >
    <Header 
      :isOffcanvasOpen="isOffcanvasOpen"
      @toggle-offcanvas="toggleOffcanvas"
    />
    <Offcanvas :isOpen="isOffcanvasOpen"/>
    <div
      data-scroll-container
    >
      <main class="main-content">
          <transition appear>
            <component :is="layout"/>
          </transition>
      </main>
      <Footer/>
    </div>
    <vue-cookie-accept-decline
        :ref="'cookie-notice'"
        :elementId="'cookie-notice'"
        :debug="false"
        :position="'bottom-right'"
        :type="'floating'"
        :disableDecline="false"
        :transitionName="'fade'"
        :showPostponeButton="true"
    >
      <div slot="postponeContent">
          <img :src="$withBase('images/icons/close.svg')" alt="Close popup">
      </div>

      <div slot="message">
        This website uses cookies to improve your experience. By clicking on the "Accept" button, you give us your consent to save cookies.
      </div>

      <div slot="declineContent">
        Decline
      </div>
 
      <div slot="acceptContent">
          Accept
      </div>
    </vue-cookie-accept-decline>
  </div>
</template>

<script>
import 'locomotive-scroll/dist/locomotive-scroll.css';
import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css';

export default {
  data: () => ({
    isOffcanvasOpen: false,
    locomotiveScroll: null,
    scrollInstance: null
  }),
  mounted() {
    this.$root.$on('update-locoscroll', this.updateLocoScroll);

    import('locomotive-scroll').then(module => {
      this.locomotiveScroll = module.default;
      this.initLocoScroll();
    });
  },
  updated() {
    if (this.scrollInstance) {
      this.scrollInstance.destroy();
      this.initLocoScroll();
    }
  },
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return '404'
    }
  },
  methods: {
    toggleOffcanvas() {
      this.isOffcanvasOpen = !this.isOffcanvasOpen
    },
    initLocoScroll() {
      this.scrollInstance = new this.locomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smoothMobile: true,
        getDirection: true,
        reloadOnContextChange: true,
        offset: [0,0]
      });

      this.scrollInstance.on('scroll', scrollData => {
        this.$root.$emit('body-scroll', scrollData)
      });

      this.scrollInstance.on('call', action => {
        let videoElement = null;
        let currentTime = 0;

        switch(action) {
          case "playVideo" :
            videoElement = document.getElementById('videoElement');
            currentTime = 3;
            break;
          case "playVisual0" :
            videoElement = document.querySelector("[data-visual-id='0']");
            break;
          case "playVisual1" :
            videoElement = document.querySelector("[data-visual-id='1']");
            break;
          case "playVisual2" :
            videoElement = document.querySelector("[data-visual-id='2']");
            break;
        }

        videoElement.pause();
        videoElement.currentTime = currentTime;
        videoElement.play();
      })
    },
    updateLocoScroll() {
      if(this.scrollInstance) {
        this.scrollInstance.update();
      }
    }
  }
}
</script>

<style lang="stylus">
.main-content
  padding-top 60px

  @media (min-width $MQlg)
    padding-top 100px
</style>