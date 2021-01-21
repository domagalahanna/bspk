<template>
  <div
    data-scroll
    data-scroll-call="playVideo"
    class="video-wrapper"
  >
      <video 
        id="videoElement"
        :src="$withBase($frontmatter.video)"
        width="100%"
        loop
        muted
        playsinline
      >
      </video>
  </div>
</template>

<style lang="stylus" scoped>
.video-wrapper
  background $black
  padding 90px 0
  position relative

  video 
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