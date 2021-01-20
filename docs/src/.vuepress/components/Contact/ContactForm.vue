<template>
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
</template>