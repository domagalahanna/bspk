<template>
  <div 
    class="form-wrapper"
  >
    <form 
        action="https://formspree.io/f/xbjpqgaj"
        method="POST"
        class="form"
      >
        <div class="input-wrapper">
          <label for="first-name">First name</label>
          <input name="First-name" id="first-name" type="text">
        </div>
        <div class="input-wrapper">
          <label for="last-name">Last name</label>
          <input name="Last-name" id="last-name" type="text">
        </div>
        <div class="input-wrapper">
          <label for="email">Email</label>
          <input name="Email" id="email" type="email">
        </div>
        <div class="input-wrapper">
          <label for="company-name">Company name</label>
          <input name="Company-name" id="company-name" type="text">
        </div>
        <div class="input-wrapper">
          <label for="job-title">Job title</label>
          <input name="Job-title" id="job-title" type="text">
        </div>
        <div class="input-wrapper">
          <label for="country">Country</label>
          <input name="Country" id="country" type="text">
        </div>
        <div class="input-wrapper">
          <label for="sales-advisor">NUMBER OF SALES ADVISOR</label>
          <input name="Sales-advisor" id="sales-advisor" type="text">
        </div>
        <div class="input-wrapper">
          <label for="stores">NUMBER OF STORES</label>
          <input name="Stores" id="stores" type="text">
        </div>
        <div class="input-wrapper input-wrapper--full">
          <label for="comments">COMMENTS</label>
          <textarea 
            placeholder="Add your message..."
            name="Comments"
            id="comments"
          >
          </textarea>
        </div>
        <div class="input-wrapper input-wrapper--full input-wrapper--checkbox">
          <input type="checkbox" id="consent" name="consent" checked>
          <label for="consent">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem <router-link to="/">accusantium</router-link>
          </label>
        </div>
        <div class="input-wrapper input-wrapper--full">
          <Button size="large">
            Submit
          </Button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$root.$emit('update-locoscroll');
    
    setTimeout(() => {
      this.$root.$emit('update-locoscroll');
    }, 500)
  }
}
</script>

<style lang="stylus" scoped>
.form-wrapper
  max-width 820px
  padding 0 30px
  margin 0 auto

  label
    color #777268
    font-size 13px
    margin-bottom 5px
    display inline-block
    font-weight 500
    text-transform uppercase

  input[type='text'],
  input[type='email'],
  textarea
    default-font-family()
    background $white
    width 100%
    border-radius none
    -webkit-border-radius 0
    font-size 16px
    padding 0 10px
    line-height 36px
    border 1px solid #CDC6B2
    transition border .3s 
    box-shadow none
    resize none

    &:focus
      outline none 
      transition border .3s 
      border 1px solid alpha(#CDC6B2, 0.5)

  textarea
    height 315px

    &::placeholder
      color transparent

  input[type='checkbox']
    appearance none
    width 24px
    height 24px
    position relative
    margin 0
    cursor pointer

    &:focus
      outline none 

      &::before
        transition border .3s
        border 1px solid alpha(#CDC6B2, 0.5)

    &::before
      transition border .3s
      content ''
      width 100%
      height 100%
      background $white
      border 1px solid #CDC6B2
      position absolute

    &::after
      position absolute
      transition opacity .3s
      left 50%
      top 13%
      content '✓'
      transform translateX(-50%)
      opacity 0
      color $black

    &:checked
      
      &::after
        transition opacity .3s
        opacity 1

  .input-wrapper
    margin-bottom 13px

    &--checkbox
      display flex
      margin 30px 0
      align-items center
      cursor pointer

      label
        text-transform none
        font-size 17px
        font-weight 400
        margin-left 20px
        color $darkGrey
        margin-bottom 0
        cursor pointer

        a
          text-decoration underline

  .button
    width 100%
  
  @media (min-width $MQlg)
    .form
      display flex
      justify-content space-between
      flex-wrap wrap

    .input-wrapper
      width 48%
      margin-bottom 25px

      &--full
        width 100%
        
      &--checkbox
        margin 10px 0 30px
  
    label
      margin-bottom 8px

    input[type='text'],
    input[type='email'],
    textarea
      padding 5px 20px  

      &::placeholder
        color $black

    textarea
      height 200px
      padding 10px 20px

    .button
      width auto
      min-width 220px
      margin 0 auto
      display block
</style>