<template>
  <div 
    class="form-wrapper"
  >
    <p 
      class="error-message"
      v-show="errors.length"
      id="errors"
    >
      Please fill in required fields:
      <ul>
        <li v-for="error in errors">
          {{ error }}
        </li>
      </ul>
    </p>
    <form 
        action="https://formspree.io/f/xbjpqgaj"
        method="POST"
        class="form"
        @submit="checkForm"
      >
        <div class="input-wrapper input-wrapper--required">
          <label for="first-name">First name *</label>
          <input 
            name="First-name" 
            id="first-name" 
            type="text" 
            maxlength="100" 
            v-model="firstName"
          >
        </div>
        <div class="input-wrapper input-wrapper--required">
          <label for="last-name">Last name *</label>
          <input
            name="Last-name"
            id="last-name" 
            type="text" 
            maxlength="100" 
            v-model="lastName"
          >
        </div>
        <div class="input-wrapper input-wrapper--required">
          <label for="email">Email *</label>
          <input
           name="Email"
            id="email"
            type="email"
            maxlength="100"
            v-model="email"
          >
        </div>
        <div class="input-wrapper">
          <label for="company-name">Company name</label>
          <input
            name="Company-name"
            id="company-name"
            type="text"
            maxlength="100"
          >
        </div>
        <div class="input-wrapper">
          <label for="job-title">Job title</label>
          <input
            name="Job-title"
            id="job-title"
            type="text"
            maxlength="100"
          >
        </div>
        <div class="input-wrapper">
          <label for="country">Country</label>
          <input
            name="Country"
            id="country"
            type="text"
            maxlength="100"
          >
        </div>
        <div class="input-wrapper">
          <label for="sales-advisor">NUMBER OF SALES ADVISOR</label>
          <input
            name="Sales-advisor"
            id="sales-advisor"
            type="number"
            maxlength="6"
          >
        </div>
        <div class="input-wrapper">
          <label for="stores">NUMBER OF STORES</label>
          <input
            name="Stores"
            id="stores"
            type="number"
          >
        </div>
        <div class="input-wrapper input-wrapper--full">
          <label for="comments">COMMENTS</label>
          <textarea 
            placeholder="Add your message..."
            name="Comments"
            id="comments"
            maxlength="1000"
          >
          </textarea>
        </div>
        <p class="description">
          * indicates required fields
        </p>
        <div class="input-wrapper input-wrapper--full input-wrapper--checkbox">
          <input type="checkbox" id="consent" name="consent" checked @change="toggleButton">
          <label for="consent">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem <router-link to="/">accusantium</router-link>
          </label>
        </div>
        <div class="input-wrapper input-wrapper--full">
          <Button 
            size="large"
           :disabled="isFormDisabled"
          >
            Submit
          </Button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    errors: [],
    isFormDisabled: false,
    firstName: null,
    lastName: null,
    email: null
  }),
  mounted() {
    this.$root.$emit('update-locoscroll');
    
    setTimeout(() => {
      this.$root.$emit('update-locoscroll');
    }, 500)
  },
  methods: {
    checkForm(e) {
      if (this.firstName && this.lastName && this.email) {
        return true
      } else {
        this.errors = [];

        if (!this.firstName) {
          this.errors.push('First name')
        }

        if (!this.lastName) {
          this.errors.push('Last name')
        }

        if (!this.email) {
          this.errors.push('Email')
        }
        
        this.$root.$emit('locoscroll-scroll-to-errors');
        e.preventDefault();
      }
    },
    toggleButton(e) {
      this.isFormDisabled = !e.target.checked;
    }
  }
}
</script>

<style lang="stylus" scoped>
.error-message
  margin-bottom 40px
  color $darkGrey
  font-weight 500

  ul
    list-style disc
    padding-left 20px
    margin-top 10px

.description
  font-size 13px
  color $darkGrey

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
  input[type='number'],
  textarea
    default-font-family()
    background $white
    width 100%
    border-radius none
    -webkit-border-radius 0
    -webkit-appearance none
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
    line-height 1.2
    padding 10px 10px

    &::placeholder
      color transparent

  input[type='checkbox']
    appearance none
    width 24px
    height 24px
    position relative
    margin 0
    cursor pointer
    flex-shrink 0
    
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
    input[type='number'],
    textarea
      padding 5px 20px  

      &::placeholder
        color $black

    textarea
      height 200px
      padding 15px 20px

    .button
      width auto
      min-width 220px
      margin 0 auto
      display block
</style>