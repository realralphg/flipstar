<template>
<!-- import { try } from 'q'; -->
  <div class="q-pa-sm row justify-center">
    <div class="q-gutter-md" style="max-width: 500px">
        <div class="q-pt-lg text-weight-light text-h4 text-primary" >
            Sign In to Flipstar
        </div>
      <form @submit.prevent="login">
          <q-input v-model="form.email" name="email" label="Email"/>
          <q-input v-model="form.password" type="password" name="password" label="Password" />
          <q-space/>
          <div class="q-mt-sm row justify-right">
              <q-btn type="submit" no-caps color="primary" @click="login" :disabled="!formIsValid">
                Sign In
                <q-spinner-ios v-if="loading" color="grey" size="1em"/>
              </q-btn>
          </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Notify } from 'quasar'
export default {
  name: 'SignIn',

  data () {
    return {
      form:{
        email: '',
        password: ''
      },
      loading: false
    }
  },

  computed: {
    formIsValid () {
      return this.email !== '' &&
            this.password !== ''
    },
  },

  methods: {
    async login(){
      try {        
        this.loading = true
        // querry the backend for login
        const endPoint = await this.$axios.post(process.env.Api + "api/login", this.form);
        // pass the requetsed data to a vareable
        const res = endPoint.data;
        // pass the users info from the data to the store mutation
        await this.$store.commit("auth/login", {
            data: res.data,
            token: res.access_token
          });

        // pass the token into the $axios authorization header after login
        this.$axios.defaults.headers.common["Authorization"] = "Bearer " + res.access_token;
        //redirect to home
        this.$router.push('/gamehub');
        this.loading = false

        Notify.create({
            timeout: 2000,
            position: 'center',
            color: 'warning',
            message: 'You\'re in... Welcome!'
        })        
      } catch (error) {

        Notify.create({
            timeout: 2000,
            position: 'center',
            color: 'red',
            message: 'Error, try again later!'
        })
        this.loading = false
      }      
    }
  }

}
</script>

<style scoped>

</style>
