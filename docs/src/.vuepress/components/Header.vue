<template>
  <header class="main-header">
    <img :src="$withBase('images/logo.svg')" class="main-header__logo" alt="BSPK">
  </header>
</template>

<style lang="stylus" scoped>
.main-header
  background white
  position fixed
  top 0
  left 0
  height 60px
  width 100%
  display flex
  align-items center
  justify-content space-between
  padding 0 18px

  &__logo
    width 80px

  @media (min-width $MQlg)
    height: 100px
    padding 0 30px

    &__logo
      width 120px
</style>