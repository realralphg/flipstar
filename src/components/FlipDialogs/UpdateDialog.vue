<template>
    <div>
        <q-card style="width: 300px">
          <q-card-section class="q-pt-none">
            <!-- Update Fields -->
            <div class="text-weight-light text-h6 text-warning">
                Update Details
            </div>

            <q-input v-model="flipName" name="flipName" label="Flip Name:"/>
            <q-input v-model="phoneNo" type="number" name="phoneNo" label="Phone Number:"/>
            <q-input v-model="email" name="email" label="Email:"/>
            <q-input v-model="bankName" name="bankName" label="Bank Name:"/>
            <q-input v-model="accountNo" type="number" name="accountNo" label="Account Number:"/>
            <span class="text-warning text-center"><small>Cash withdrawn is paid into this Bank Account.</small></span>
            
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-primary">
            <q-btn color="primary" label="Save" v-close-popup />
          </q-card-actions>
        </q-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                flipName: null,
                phoneNo: null,
                email: null,
                bankName: null,
                accountNo: null,
            }
        }
        
    }
</script>

<style scoped>

</style>