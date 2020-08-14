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
                <q-select v-model="form.bank_name"
                    :options="banks.data"
                    option-value="code"
                    option-label="name"
                    map-options
                    label="Bank" @input="verifyAccount"/>
                <q-input v-model="form.account_name" label="Account Name" readonly=""/>
                <q-input v-model="form.bank_branch" label="Bank Branch" readonly=""/>
                <q-input v-model="form.bank_id" label="Bank Code" readonly=""/>

                <q-card-actions align="right" class="q-mt-sm flex">
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
              banks: [],
              form:{
                account_name: '',
                account_number: '0737985047',
                bank_id: '',
                bank_name: '',
                bank_branch: '',
                recipient_code: ''
              }
            }
        },

        computed: {
            user(){ return this.$store.getters['auth/user']}
        },

        mounted() {
          this.get_banks();
        },

        methods: {
          async save_account(){
            const response = await this.$axios.post(process.env.Api + 'api/account', this.form)
            const data = response
           },

           async get_banks(){
            const response = await this.$axios.get('https://api.paystack.co/bank')
            const data = response
            this.banks = data.data
           },

//sk_test_4c72af336a3c0fb810ddb3acc76e14c20bce0109
           async verifyAccount(e){
             this.form.bank_id = e.code
             this.form.bank_name = e.name
            //  verify account
              const response = await this.$axios.get('https://api.paystack.co/bank/resolve?account_number=' + this.form.account_number + '&bank_code='+ this.form.bank_id, {
                headers: {
                    'Authorization': 'Bearer sk_test_4c72af336a3c0fb810ddb3acc76e14c20bce0109'
                  }
              })
              let data = response
              data = data.data
              this.form.account_name = data.data.account_name

              // Create a transfer recipient
              const response1 = await this.$axios.post('https://api.paystack.co/transferrecipient',{
                type: "nuban",
                name: data.data.account_name,
                account_number: data.data.account_number,
                bank_code: e.code,
                currency: "NGN"
              }, {
                headers: {
                    'Authorization': 'Bearer sk_test_4c72af336a3c0fb810ddb3acc76e14c20bce0109'
                  }
              })

              data = response1
              data = data.data
              this.form.recipient_code = data.data.recipient_code
              console.log(this.form.recipient_code);
           },
        }

    }
</script>

