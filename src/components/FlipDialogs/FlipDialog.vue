<template>
    <div>
       <q-btn size="sm" color="primary" label="View" @click="open = true" />

        <q-dialog v-model="open">
        <q-card class="bg-grey-10" style="max-width: 400px">
          <q-card-section class="q-pt-none">
            <div class="q-ml-md text-weight-light text-h6 text-center text-grey">
                Join This Flip (#{{game.amount}})
            </div>

            <div class="q-ml-md text-weight-light text-h5 text-center text-warning">
                <p>Wallet: <br> #{{user.wallet.amount}} </p>
            </div>

            <!-- Flip Stars -->
            <div>
                <div class="row justify-center">
                    <q-chip color="red-10" text-color="white" icon="star_half">
                        Click 1, 2 or 3 stars to flip
                    </q-chip>
                </div>

                <div class="row justify-center">
                    <q-banner rounded class="bg-primary text-warning">
                       <span v-for="(player, index) in game.players" :key="index">
                          {{player.user.name}} already flipped {{player.star}} star <br>
                      </span> 
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
                    <p class="text-grey">You're about to flip {{ratingModel}} star(s)</p>
                </div>
            </div>
          </q-card-section>

            <q-separator  color="grey"/>

          <q-card-actions align="right" class="row bg-white text-primary bg-grey-10">
              <p class="q-pr-md text-grey"> Flip {{game.amount}}</p>
            <q-btn outline color="warning" label="Flip" :disabled="insufficient" @click="newFlip"/>
          </q-card-actions>
        </q-card>
        </q-dialog>

    </div>
</template>

<script>
    export default {
      props:['game'],
      data() {
        return {
          open: false,
          ratingModel: 0
        }
      },

      computed:{
        user() { return this.$store.getters['auth/user'] }, 

        insufficient(){
          const balance = this.$store.getters['auth/user'].wallet.amount  
          return balance < this.game.amount
        }
      },

       methods:{
          async newFlip(){    
            const balance =  this.$store.getters['auth/user'].wallet.amount  
            
            try {
              
              const response = this.$axios.post(process.env.Api + 'api/flip', {
                category: this.game.amount,
                ratingModel: this.ratingModel,
                game_id: this.game.id                
              })
              balance - this.game.amount
            } catch (error) {
              console.log(error)
            }

          }
        }
    }
</script>

<style scoped>

</style>
