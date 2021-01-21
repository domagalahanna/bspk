<template>
  <div class="language-picker">
    <img 
      :src="$withBase('/images/flags/en.png')"
      class="language-picker__image"
    >
    <button
      class="language-picker__toggler languages-toggler"
      :class="{ 'languages-toggler--active' : isOpen }"
      @click="toggleVisibility"
    >
      <img 
        :src="$withBase('/images/icons/down-chevron.svg')"
      >
    </button>
    <div 
      class="language-picker__container languages-container"
      :class="{ 'languages-container--active' : isOpen }"
    >
      <router-link to="/fr/">
        <img 
          :src="$withBase('/images/flags/fr.png')"
        >
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: false
  }),
  methods: {
    toggleVisibility: function() {
      this.isOpen = !this.isOpen;
    },
    hideContainer: function() {
      this.isOpen = false;
    }
  }
}
</script>

<style lang="stylus" scoped>
.language-picker
  display flex
  align-items center
  margin-right 10px
  padding 0 10px
  position relative

  &__image
    width 24px
    margin-right 10px
  
  &__toggler
    width 19px
    display flex
    align-items center

    img
      transition transform .2s ease-in-out

    &:hover, &:active, &:focus
      cursor: pointer
      outline: none

    &:active, &:focus
      img
        transition transform .2s ease-in-out
        transform translateY(1px)

  &__container
    position absolute
    width 45px
    background alpha($white, 0.5)
    border-radius 6px
    top 20px
    left 0
    display flex
    flex-direction column
    align-items start
    padding 15px 10px

    & > *
      width 24px
      margin-bottom 15px
      line-height 0

      &:last-child
        margin-bottom 0

.languages-toggler
  transition transform .2s ease

  &--active
    transform rotate(180deg)
    transition transform .2s ease

.languages-container
  opacity 0
  transition opacity .3s ease 

  &--active
    opacity 1
    transition opacity .3s ease 
</style>