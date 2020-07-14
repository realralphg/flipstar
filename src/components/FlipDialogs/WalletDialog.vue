<template>
    <div>
        <q-card style="width: 300px">
          <q-card-section class="q-pt-none">
            <!-- Wallet Fields -->
            <div class="q-ml-md text-weight-light text-h5 text-center text-primary">
                <p>Your Wallet: <br> #{{wallet}} </p>
            </div>

            <div>
                <q-splitter
                v-model="splitterModel"
                style="height: 250px"
                >

                <template v-slot:before>
                    <q-tabs
                    v-model="tab"
                    vertical
                    class="text-primary"
                    >
                    <!-- <q-tab name="details" icon="list" label="Details" /> -->
                    <q-tab name="topup" icon="payment" label="Top-up" />
                    <q-tab name="cashout" icon="payment" label="Cashout" />
                    </q-tabs>
                </template>

                <template v-slot:after>
                    <q-tab-panels
                    v-model="tab"
                    animated
                    swipeable
                    vertical
                    transition-prev="jump-up"
                    transition-next="jump-up"
                    >
                    <!-- <q-tab-panel name="details">
                        <div class="text-h6 q-mb-sm">Bank Details</div>
                        <p>Update your bank details here.</p>
                        <q-input v-model="bankName" name="bankName" label="Bank Name:"/>
                        <q-input v-model="acctNo" type="number" name="acctNo" label="Account Number:"/>
                        <q-input v-model="cardNo" type="number" name="cardNo" label="Card Number:"/>
                        <q-input
                            v-model="expiryDate"
                            label="Expiry Date"
                            mask="##/##"
                            fill-mask
                            hint="Month/Year"
                        />
                         <q-btn color="white" text-color="black" label="Standard" onclick=()/>


                    </q-tab-panel> -->

                    <q-tab-panel name="topup">
                        <div class="text-h6 q-mb-sm">Top Up</div>
                        <p>How much?</p>
                        <q-input :value="user.email" name="email" label="Email:"/>
                        <q-input v-model="depositAmt" type="number" name="depositAmt" label="Deposit Amount:"/>
                        <div class="q-mt-sm">
                            <q-btn color="primary" label="Pay" @click="payWithPaystack()" />
                        </div>
                    </q-tab-panel>

                    <q-tab-panel name="cashout">
                        <div class="text-h6 q-mb-sm">Cash Out</div>
                        <p>How much?</p>
                        <q-input v-model="email" name="email" label="Email:"/>
                        <q-input v-model="withdrawAmt" type="number" name="withdrawAmt" label="Withdraw Amount:"/>

                        <div class="q-mt-sm">
                            <q-btn color="primary" label="Withdraw" @click="withdraw()" />
                        </div>
                    </q-tab-panel>
                    </q-tab-panels>
                </template>

                </q-splitter>
            </div>

            <!-- <div class="text-weight-light text-h6 text-center text-grey-8">
                <p>Top-up Wallet</p>
            </div>

            <q-input v-model="flipName" name="flipName" label="Flip Name:"/>
            <q-input v-model="phoneNo" type="number" name="phoneNo" label="Phone Number:"/>
            <q-input v-model="email" name="email" label="Email:"/> -->

          </q-card-section>

          <!-- <q-card-actions align="right" class="bg-white text-primary">
            <q-btn color="primary" label="Save" v-close-popup />
          </q-card-actions> -->
        </q-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                email: '',
                wallet: 1300,
                bankName: '',
                acctNo: '',
                cardNo: '',
                expiryDate: '',
                depositAmt: '',
                withdrawAmt: '',
                tab: 'topup',
                splitterModel: 30
            }
        },

        computed: {
            user(){ return this.$store.getters['auth/user']}
        },

methods: {
            payWithPaystack(){

                let handler = PaystackPop.setup({
                    key: 'pk_test_0da42c1145ff0e9f70b5d3eea2c07c8ec8d7bd81', // Replace with your public key
                    email: this.$store.getters['auth/user'].email,
                    amount: this.depositAmt,
                    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
                    // label: "Optional string that replaces customer email"

                    onClose: function(){
                        alert('Window closed.');
                    },

                    callback: function(response){
                      let message = 'Payment complete! Reference: ' + response.reference;
                      alert(message);
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
