<template>
    <div class="q-pa-sm row items-start q-gutter-sm justify-center bg-grey-7">
        <q-card class="my-card bg-grey-10">
            <q-img src='images/picSlide1.jpg' />

            <q-card-section>
                <q-avatar style="top: 0; left: 12px; transform: translateY(-85%);">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">                    
                </q-avatar>

                <div class="q-ml-md text-weight-light text-h5 text-center text-warning">
                    <p>Your Wallet: #{{wallet}} </p>
                </div>

                <div class="q-pt-none">
                    <div class="row justify-center text-h6 ellipsis text-grey-4">
                        Jax
                    </div>

                    <div class="row justify-center text-h6 ellipsis">
                        <q-rating v-model="stars" :max="5" size="32px" />                        
                    </div>

                    <div class="row justify-center">
                        <q-chip clickable @click="updateDialog=true" icon="star_outline">Update Profile/Cashout Details</q-chip>
                    </div>

                    <div class="row justify-center text-h9 text-warning">
                        Everyday is a good day to WIN!
                    </div>                                
                </div>            
            </q-card-section>

            <q-card-section class="q-pt-none">
                <div class="text-h7 text-warning">
                    Your Wins:
                </div>
                <div class="text-caption text-grey-4">
                    #1,000 - Date<br>
                    #10,000 - Date<br>
                    #5,000 - Date<br>
                </div>
            </q-card-section>

            <q-separator color="grey" />

            <q-card-actions>
                <q-btn flat round icon="payment" color="warning" />
                <q-btn flat color="warning" @click="topupDialog=true">
                    Top-up
                </q-btn>

                <q-btn flat color="warning" @click="cashoutDialog=true">
                    Cash-out
                </q-btn>

                <q-space/>
                <q-btn to="/" outline color="warning"> Go Flip </q-btn>
            </q-card-actions>
        </q-card>
<!-- Dialogs -->
        <q-dialog v-model="updateDialog">
            <UpdateDialog/>
        </q-dialog>     
        
        <q-dialog v-model="topupDialog">
            <TopupDialog/>
        </q-dialog> 

        <q-dialog v-model="cashoutDialog">
            <CashoutDialog/>
        </q-dialog>  
    </div>
</template>

<script>
import UpdateDialog  from '../components/FlipDialogs/UpdateDialog'
import TopupDialog  from '../components/FlipDialogs/TopupDialog'
import CashoutDialog  from '../components/FlipDialogs/CashoutDialog'
    export default {
        components: {
            UpdateDialog,
            TopupDialog,
            CashoutDialog
        },
        data(){
            return{
                wallet: 1300,
                stars: 4,
                vipStatus: '',
                updateDialog: false,
                topupDialog: false,
                cashoutDialog: false,

            }
        }
        
    }
</script>

<style scoped>
.my-card{
    width: 100%;
    max-width: 400px;
}

</style>