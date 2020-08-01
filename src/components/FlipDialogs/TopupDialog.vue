<template>
    <div>
      <q-btn flat color="warning" @click="open = true">Top-up</q-btn>

      <q-dialog v-model="open">
        <q-card style="width: 300px">
          <q-card-section class="q-pt-none">
            <!-- Wallet Fields -->
            <div class="q-ml-md text-weight-light text-h5 text-center text-primary">
                <p>Your Wallet: <br> #{{wallet}} </p>
            </div>

            <div class="text-weight-light text-h6 text-center text-grey-8">
                <p>Top-up Wallet</p>
            </div>

            <div>
                <q-input :value="user.email" name="email" label="Email"/>
                <q-input v-model="depositAmt" input-class="text-right" label="Deposit Amount:" suffix=".00"/>
                <span class="text-warning text-center"><small>This payment is credited to your Flip Wallet.</small></span>

                <q-card-actions align="right" class="q-mt-sm">
                    <q-btn color="primary" label="Pay" @click="payWithPaystack()" />
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
              wallet: 1300,
              email: null,
              depositAmt: null
            }
        },

        computed: {
            user(){ return this.$store.getters['auth/user']}
        },

        methods: {
            showNotif (message) {
              this.$q.notify({
                message: 'Jim pinged you.',
                color: 'black'
              })
            },

            payWithPaystack(){
                let status = 0;
                let handler = PaystackPop.setup({
                    key: 'pk_test_0da42c1145ff0e9f70b5d3eea2c07c8ec8d7bd81', // Replace with your public key
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
                      status = 1;
                      alert(message + '  ' + status);
                    }
                });

                handler.openIframe();

            },

            async creditUser(reference){
              const response = await this.$axios.post(process.env.Api + 'api/wallet', {
                amount:this.depositAmt,
                reference: reference
              })
            }
        }

    }
</script>

<style scoped>

</style>
