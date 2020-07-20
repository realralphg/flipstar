<template>
    <div>
        <q-card class="bg-grey-10" style="width: 300px">
          <q-card-section class="q-pt-none">
            <div class="q-ml-md text-weight-light text-h6 text-center text-grey">
                Create New Flip
            </div>

            <div class="q-ml-md text-weight-light text-h5 text-center text-warning">
                <p>Wallet: <br> #{{wallet}} </p>
            </div>

            <!-- Flip Category -->
            <div class="bg-grey-6 q-pa-none rounded-borders">
                <span class="q-pl-sm">Choose Flip Category:</span>
                <q-option-group
                name="category"
                v-model="category"
                :options="options"
                color="primary"
                inline
                />
            </div>

            <!-- Flip Stars -->
            <div>
                <div class="row justify-center">
                    <q-chip color="red-10" text-color="white" icon="star_half">
                        Click 1, 2 or 3 stars to Flip
                    </q-chip>
                </div>

                <div class="row justify-center">
                    <q-rating v-model="ratingModel"
                        size="5em" color="warning" icon="star_border" icon-selected="star" :max="3"
                    />
                    <p class="text-primary text-grey">You're about to flip {{ratingModel}} star(s)</p>
                </div>
            </div>
          </q-card-section>

          <q-separator color="grey"/>

          <q-card-actions align="right" class="row bg-grey-10 text-grey">
              <p class="q-pr-md text-warning"> Flip: {{category}}</p>
            <q-btn outline color="warning" label="Flip" @click="newFlip"/>
          </q-card-actions>
        </q-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                wallet: 1300,
                category: '',
                ratingModel: 0,
                options: [
                    {
                    label: '#10,000',
                    value: '10000'
                    },
                    {
                    label: '#5,000',
                    value: '5000'
                    },
                    {
                    label: '#1,000',
                    value: '1000'
                    },
                    {
                    label: '#500',
                    value: '500'
                    },
                    {
                    label: '#300',
                    value: '300'
                    },
                    {
                    label: '#100',
                    value: '100'
                    }
                ]
            }
        },

        methods:{
            newFlip(){
                if(Number(this.category) > this.wallet){
                    console.log('Not Enough Funds')
                }else{
                    this.wallet -= this.category
                    console.log('Flippng Ready - Push to Flip List')
                }
            }
        }
    }
</script>

<style scoped>

</style>
