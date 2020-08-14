<template>
    <div>
      <q-btn flat color="warning" @click="open = true">
            Cash-out
        </q-btn>
        <q-dialog v-model="open">
        <q-card style="width: 300px">
          <q-card-section class="q-pt-none">
            <!-- Wallet Fields -->
            <div class="q-ml-md text-weight-light text-h5 text-center text-primary">
                <p>Your Wallet: <br> #{{user.wallet.amount}} </p>
            </div>

            <div class="text-weight-light text-h6 text-center text-grey-8">
                <p>Cash-Out</p>
            </div>

            <div>
                <q-input v-value="user.email" name="email" label="Email:"/>
                <q-input v-model="amount" label="Withdraw Amount"/>
                <span class="text-warning text-center"><small>Cash withdrawn is paid into your Bank Account.</small></span>

                <q-card-actions align="right" class="q-mt-sm">
                    <q-btn color="primary" label="Withdraw" @click="withdraw()" />
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
              amount: null,
            }
        },

        computed: {
            user(){ return this.$store.getters['auth/user']}
        },

        methods: {
            async withdraw(){
              try {
                // Create a transfer recipient
              const response1 = await this.$axios.post('https://api.paystack.co/transfer',{
                  source: "balance",
                  amount: this.amount,
                  recipient: this.$store.getters['auth/user'].bank.recipient_code,
                  reason: "Flippay Withdrawals"
                }, {
                  headers: {
                      'Authorization': 'Bearer sk_test_4c72af336a3c0fb810ddb3acc76e14c20bce0109'
                    }
                })
              } catch (error) {

              }
            }
        }

    }
</script>

<style scoped>

</style>
