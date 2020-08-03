<template>
    <div>

      <q-badge :color="account ? 'primary' : 'orange'" @click="open = true" label="Add Account" />


      <q-dialog v-model="open">
        <q-card style="width: 300px">
          <q-card-section class="q-pt-none">
            <!-- Wallet Fields -->
            <!-- <div class="q-ml-md text-weight-light text-h5 text-center text-primary">
                <p>Your Wallet: <br> #{{user.wallet.amount}} </p>
            </div> -->

            <div>
                <q-input v-model="form.account_number" name="account" label="Account Number"/>
                <q-input v-model="form.account_name" label="Account Name" />
                <q-input v-model="form.bank_name" label="Bank Name" />
                <q-input v-model="form.bank_branch" label="Bank Branch" />

                <q-card-actions align="right" class="q-mt-sm">
                    <q-btn color="primary" label="Save Account" @click="save_account()" />
                </q-card-actions>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>

    </div>
</template>

<script>
    export default {
        data(){
            return{
              open: false,
              account: {},
              form:{
                account_number: '',
                account_name: '',
                bank_name: '',
                bank_branch: ''
              }
            }
        },

        computed: {
            user(){ return this.$store.getters['auth/user']}
        },

        mounted() {
          this.getAccount();
        },

        methods: {
          async save_account(){
            const response = await this.$axios.post(process.env.Api + 'api/account', this.form)
            const data = response
           },

           async getAccount(){
            const response = await this.$axios.get(process.env.Api + 'api/account/1')
            const data = response
            this.account = data.data
            this.form.account_number = data.data.account_number
           },
        }

    }
</script>

<style scoped>

</style>
