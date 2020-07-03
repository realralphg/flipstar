<template>
  <div class="q-pa-sm row justify-center">
    <div class="q-gutter-md" style="max-width: 500px">
        <div class="q-pt-lg text-weight-light text-h4 text-primary" >
            Sign In to Flipstar
        </div>
      <form @submit.prevent="">
          <q-input v-model="email" name="email" label="Email"/>
          <q-input v-model="password" type="password" name="password" label="Password" />

        <q-space/>
        <div class="q-mt-sm row justify-right">
            <q-btn type="submit" no-caps color="primary" :disabled="!formIsValid"  >Sign In</q-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SignIn',

  data () {
    return {
      email: '',
      password: ''
    }
  },

  computed: {
    formIsValid () {
      return this.email !== '' &&
            this.password !== ''
    }
  },

  methods: {

  }

}
</script>

<style scoped>

</style>
