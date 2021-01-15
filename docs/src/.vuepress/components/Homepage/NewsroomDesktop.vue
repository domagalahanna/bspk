<template>
  <section class="testimonials">
    <div class="testimonials__wrapper testimonials__wrapper--desktop container">
      <div 
        v-for="testimonial in $frontmatter.testimonials"
        class="testimonials__single"
      >
        <img 
          :src="$withBase(testimonial.logo)"
          :alt="testimonial.alt"
        >
        <p>
          {{ testimonial.text }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
.testimonials
  display none

  @media (min-width $MQlg)
    display block
    padding 95px 0
    background $darkBeige
    text-align center

    &__wrapper
      display flex

    &__single
      color $darkGrey
      font-style italic
      width 33%
      padding 0 65px
      font-size 19px
      line-height 26px

      p
        margin 10px 0 0
        text-align center

      img 
        height 25px
</style>