<template>
    <div>

      <q-badge color="orange" @click="open = true" label="Add Account" />


      <q-dialog v-model="open">
        <q-card style="width: 300px">
          <q-card-section class="q-pt-none">
            <!-- Wallet Fields -->
            <!-- <div class="q-ml-md text-weight-light text-h5 text-center text-primary">
                <p>Your Wallet: <br> #{{user.wallet.amount}} </p>
            </div> -->

            <div>
                <q-input v-model="form.account" name="account" label="Account Number"/>
                <q-input v-model="form.account_name" label="Account Name" />
                <q-input v-model="form.bank_id" label="Bank Number" />

                <q-card-actions align="right" class="q-mt-sm">
                    <q-btn color="primary" label="Pay" @click="verify_account()" />
                    <q-btn color="primary" label="Pay" @click="save_account()" />
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
              form:{
                account: '',
                account_name: '',
                bank_id: ''
              }
            }
        },

        computed: {
            user(){ return this.$store.getters['auth/user']}
        },

        methods: {
           verify_account(){
              this.$axios.get('https://api.paystack.co/bank/resolve?account_number=0022728151&bank_code=063', {
              headers: {
                Authorization: 'Bearer sk_test_4c72af336a3c0fb810ddb3acc76e14c20bce0109' //the token is a variable which holds the token
              }})
           },

           save_account(){

           },

            payWithPaystack(){

                let handler = PaystackPop.setup({
                    key: 'sk_test_4c72af336a3c0fb810ddb3acc76e14c20bce0109', // Replace with your public key
                    email: this.$store.getters['auth/user'].email,
                    amount: this.depositAmt + '00',
                    ref: ''+Math.floor((Math.random() * 1000000000) + 1),
                    // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
                    // label: "Optional string that replaces customer email"

                    // onClose: function(){
                    //     alert('Window closed.');
                    // },

                    callback: function(response){
                      let message = 'Payment complete! Reference: ' + response.reference;
                      alert(message);
                      this.open = false
                    }
                });


                handler.openIframe();

            },

            withdraw(){

            }
        }

    }
</script>

<style scoped>

</style>
