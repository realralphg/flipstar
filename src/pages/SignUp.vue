<template>
  <div class="q-pa-sm row justify-center">
    <div class="q-gutter-md" style="max-width: 500px">
        <div class="q-pt-lg text-weight-light text-h4 text-primary" >
            Sign Up to Flipstar
        </div>
      <form @submit.prevent="signUp">
          <q-input v-model="form.name" name="flipName" label="Choose a Flip Name"/>
          <q-input v-model="form.mobileNo" name="mobileNo" label="Mobile Number:"/>
          <q-input v-model="form.email" name="email" label="Email"/>
          <q-input v-model="form.password" type="password" name="password" label="Password" />
          <q-input v-model="form.password_confirmation" type="password" name="confirmPassword" label="Confirm Password" />
          <small class="text-red">{{comparePasswords}}</small>

        <q-space/>
        <div class="q-mt-sm row justify-right">
            <q-btn type="submit" no-caps color="primary" :disabled="!formIsValid">
              Sign Up
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
  name: 'SignUp',
  data () {
    return {
      form:{
        name: '',
        mobileNo: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      loading: false
    }
  },

  computed: {
    formIsValid () {
      return this.form.flipName !== '' &&
            this.form.mobileNo !== '' &&
            this.form.email !== '' &&
            this.form.password !== '' &&
            this.form.password_confirmation !== '' &&
            this.form.password == this.form.password_confirmation
    },

    comparePasswords () {
      return this.form.password !== this.form.password_confirmation ? 'Password Mismatch' : ''
    }
  },

  methods: {
    async signUp(){
      try {
        this.loading = true
        // querry the backend for login
        const endPoint = await this.$axios.post(process.env.Api + "api/signup", this.form);
        // pass the requetsed data to a vareable
        const res = endPoint.data;
        // pass the users info from the data to the store mutation
        await this.$store.commit("auth/signup", {
            data: res.data,
            token: res.access_token
          });
        //redirect to home
        this.$router.push('/gamehub');
        // pass the token into the $axios authorization header after login
        this.$axios.defaults.headers.common["Authorization"] = "Bearer " + res.access_token;

        this.loading = false

        Notify.create({
            timeout: 2000,
            position: 'center',
            color: 'warning',
            message: 'Welcome to the Money Hub!'
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
