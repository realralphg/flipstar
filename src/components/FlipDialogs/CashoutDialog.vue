<template>
    <div>
        <q-card style="width: 300px">
          <q-card-section class="q-pt-none">
            <!-- Wallet Fields -->
            <div class="q-ml-md text-weight-light text-h5 text-center text-primary">
                <p>Your Wallet: <br> #{{wallet}} </p>
            </div>

            <div class="text-weight-light text-h6 text-center text-grey-8">
                <p>Cash-Out</p>
            </div>

            <div>
                <q-input v-model="email" name="email" label="Email:"/>
                <q-input v-model="withdrawAmt" mask="#.##" reverse-fill-mask input-class="text-right" label="Withdraw Amount:"/>
                <span class="text-warning text-center"><small>Cash withdrawn is paid into your Bank Account.</small></span>

                <q-card-actions align="right" class="q-mt-sm">
                    <q-btn color="primary" label="Withdraw" @click="withdraw()" />
                </q-card-actions>
            </div>
          </q-card-section>
        </q-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                wallet: 1300,
                email: null,
                withdrawAmt: null,
            }
        },

        computed: {
            user(){ return this.$store.getters['auth/user']}
        },

        methods: {
            withdraw(){
              this.$axios.post('https://api.paystack.co/transfer',{
                  "source": "balance",
                  "reason": "withdrawals",
                  "amount": this.withdrawAmt,
                  "recipient": this.$store.getters['auth/user'].email
              }, {
              headers: {
                Authorization: 'Bearer sk_test_4c72af336a3c0fb810ddb3acc76e14c20bce0109', //the token is a variable which holds the token
              }})
            }
        }

    }
</script>

<style scoped>

</style>
