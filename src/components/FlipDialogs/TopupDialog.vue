<template>
    <div>
      <q-btn flat color="warning" @click="open = true">Top-up</q-btn>

      <q-dialog v-model="open">
        <q-card style="width: 300px">
          <q-card-section class="q-pt-none">
            <!-- Wallet Fields -->
            <div class="q-ml-md text-weight-light text-h5 text-center text-primary">
                <p>Your Wallet: <br> #{{user.wallet.amount}} </p>
            </div>

            <div class="text-weight-light text-h6 text-center text-grey-8">
                <p>Top-up Wallet</p>
            </div>

            <div>
                <q-input :value="user.email" name="email" label="Email"/>
                <q-input v-model="amount" input-class="text-right" label="Deposit Amount:" suffix=".00"/>
                <span class="text-warning text-center"><small>This payment is credited to your Flip Wallet.</small></span>

                <!-- <q-card-actions align="right" class="q-mt-sm">
                    <q-btn color="primary" label="Pay" @click="payWithPaystack()" />
                </q-card-actions> -->

                <paystack
                  :amount="amount"
                  :email="user.email"
                  :paystackkey="paystackkey"
                  :reference="reference"
                  :callback="callback"
                  :close="close"
                  :embed="false"
              >
                <i class="fas fa-money-bill-alt"></i>
                Make Payment
              </paystack>
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
              paystackkey: "pk_test_0da42c1145ff0e9f70b5d3eea2c07c8ec8d7bd81", //paystack public key
              amount: 1000000 // in kobo
            }
        },

        components:{
          'paystack': VuePaystack.default
        },

        computed: {
            user(){ return this.$store.getters['auth/user']},

            reference(){
              let text = "";
              let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

              for( let i=0; i < 10; i++ )
                text += possible.charAt(Math.floor(Math.random() * possible.length));

              return text;
            }
        },

        methods: {
            callback: function(response){
              this.creditUser(response);
            },
            close: function(){
                console.log("Payment closed")
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
