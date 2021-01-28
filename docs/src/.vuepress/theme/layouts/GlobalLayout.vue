<template>
  <div 
    id="global-layout"
  >
    <Header 
      :isOffcanvasOpen="isOffcanvasOpen"
      @toggle-offcanvas="toggleOffcanvas"
    />
    <Offcanvas 
      :isOpen="isOffcanvasOpen"
      @hide-offcanvas="hideOffcanvas"
    />
    <div
      data-scroll-container
    >
      <main 
        class="main-content"
      >
          <component :is="layout"/>
      </main>
      <Footer/>
    </div>
    <vue-cookie-accept-decline
        :ref="'cookie-notice'"
        :elementId="'cookie-notice'"
        :debug="false"
        :position="'bottom-right'"
        :type="'floating'"
        :disableDecline="true"
        :transitionName="'fade'"
        :showPostponeButton="true"
    >
      <div slot="postponeContent">
          <img :src="$withBase('/images/icons/close.svg')" alt="Close popup">
      </div>

      <div slot="message">
        This website uses cookies to improve your experience. <router-link to="/cookie-policy">See Cookie Policy</router-link>
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
    // isTickerVisible: true,
    locomotiveScroll: null,
    scrollInstance: null
  }),
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          return this.$frontmatter.layout
        }
        return 'Layout'
      } else {
        return 'NotFound'
      }
    }
  },
  mounted() {
    this.$root.$on('update-locoscroll', this.updateLocoScroll);
    this.$root.$on('locoscroll-scroll-to-errors', this.scrollToLocoScroll);
    this.$root.$on('reload-locoscroll', this.reloadLocoScroll);
    // this.isTickerVisible = !localStorage.getItem('ticker-hide');

    import('locomotive-scroll').then(module => {
      this.locomotiveScroll = module.default;
      this.initLocoScroll();
    });
  },
  methods: {
    toggleOffcanvas() {
      this.isOffcanvasOpen = !this.isOffcanvasOpen;
    },
    hideOffcanvas() {
      this.isOffcanvasOpen = false;
    },
    // hideTicker() {
    //   this.isTickerVisible = false;
    //   this.scrollInstance.update();
    // },
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
        this.scrollInstance.destroy();
        this.initLocoScroll();
        this.$root.$emit('body-scroll', {
          direction: "up",
          scroll: {
            y: 0
          }
        });
      }
    },
    scrollToLocoScroll() {
      if(this.scrollInstance) {
        const errors = document.getElementById('errors');
        if (errors) this.scrollInstance.scrollTo(errors, {
          offset: -500,
          callback: () => {
            this.$root.$emit('reload-locoscroll');
          }
        });
      }
    },
    reloadLocoScroll() {
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

  &--pushed
    padding-top 130px

  @media (min-width $MQlg)
    padding-top 100px
</style>