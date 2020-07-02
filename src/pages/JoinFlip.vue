<template>
    <div>
        <q-card style="max-width: 400px">
          <q-card-section class="q-pt-none">
            <div class="q-ml-md text-weight-light text-h6 text-center">
                Join This Flip (#{{category}})
            </div>

            <div class="q-ml-md text-weight-light text-h5 text-center text-warning">
                <p>Wallet: <br> #{{wallet}} </p> 
            </div>
            
            <!-- Flip Stars -->
            <div>
                <div class="row justify-center">
                    <q-chip color="red-10" text-color="white" icon="star_half">
                        Flip 1, 2 or 3 stars
                    </q-chip>

                    <q-banner rounded class="bg-primary text-warning">
                        Rex already flipped 3 star. <br>
                        Sam already flipped 1 star.
                    </q-banner>
                </div>
                
                <div class="row justify-center">
                    <q-rating
                        v-model="ratingModel"
                        size="5em"
                        color="warning"
                        icon="star_border"
                        icon-selected="star"
                        :max="3"
                    /> 
                    <p class="text-primary">You're about to flip {{ratingModel}} star(s)</p>                    
                </div>
            </div>                 
          </q-card-section>

            <q-separator />

          <q-card-actions align="right" class="row bg-white text-primary">
              <p class="q-pr-md"> Flip {{category}}</p> 
            <q-btn color="primary" label="Flip" @click="newFlip"/>
          </q-card-actions>
        </q-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                wallet: 1300,
                category: 1000,
                ratingModel: 0,
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