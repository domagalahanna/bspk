<template>
  <div class="form-wrapper">
    <form 
        action="https://formspree.io/f/xbjpqgaj"
        method="POST"
        @submit.prevent="onSubmit"
      >
        <label 
          for="user-email"
          class="sr-only"
        >
          User email
        </label>
        <input 
          id="user-email"
          name="email"
          type="email"
          class="input input--full"
          placeholder="Email address"
          v-model="newsletterEmail"
          required
        >
        <input
          class="input input--submit"
          type="submit"
          value="OK"
          :disabled="isSending"
        />
        <span 
          class="loader"
          v-show="isSending"
        >
        </span>
    </form>
    <p
      v-show="formMessage"
      class="message-wrapper"
    >
      {{ formMessage }}
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    isSending: false,
    newsletterEmail: "",
    formMessage: ""
  }),
  methods: {
    onSubmit(e) {
      const form = e.target;
      const formData = new FormData();
      formData.append("email", this.newsletterEmail);

      this.isSending = !this.isSending;
      
      axios({
        method: e.target.method,
        url: e.target.action,
        data: formData
      })
        .then(response => {
          form.reset();
          this.formMessage = "Thank you for subscribing!";
          this.isSending = !this.isSending;
        })
        .catch(err => {
          this.formMessage = "Something went wrong. Please try again!";
          this.isSending = !this.isSending;
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
.form-wrapper
  width 100%
  position relative

form
  width 100%
  max-width 400px
  margin 0 auto
  position relative

  .input--submit
    position absolute
    top 0
    right 0
    border-bottom 0

.loader
  position absolute
  transition opacity 0.5s
  display inherit !important
  right -30px
  top 2px

  &[style*="display: none;"]
    transition opacity 0.5s
    opacity 0

.message-wrapper
  font-size 17px
  color $darkGrey
  display inherit !important
  transition opacity 0.5s
  position absolute
  bottom -60px
  text-align center
  width 100%

  &[style*="display: none;"]
    transition opacity 0.5s
    opacity 0
</style>