<template>
    <div>
        <q-card style="width: 300px">
          <q-card-section class="q-pt-none">
            <!-- Update Fields -->
            <div class="text-weight-light text-h6">
                Update Details
            </div>

            <q-input v-model="flipName" name="flipName" label="Flip Name:"/>
            <q-input v-model="phoneNo" type="number" name="phoneNo" label="Phone Number:"/>
            <q-input v-model="email" name="email" label="Email:"/>
            
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
                flipName: '',
                phoneNo: '',
                email: '',
            }
        }
        
    }
</script>

<style scoped>

</style>