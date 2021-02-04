<template>
  <div
    data-scroll
    data-scroll-call="playVideo"
    class="video-wrapper"
  >
    <video
      autoplay=""
      loop=""
      muted=""
      playsinline=""
      id="videoElement"
    >
      <source :src="isMobile ? $withBase($frontmatter.videoMobile) : $withBase($frontmatter.video)" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  data: () => ({
    isMobile: false
  }),
  mounted() {
    this.isMobile = window.innerWidth < 500
  }
}
</script>

<style lang="stylus" scoped>
.video-wrapper
  background $black
  padding 90px 0
  position relative
  
  video
    width 100%
    display block

  &::before
    content ''
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background alpha($black, 0.2)

  @media (min-width $MQlg)
    background none
    padding 0
</style>