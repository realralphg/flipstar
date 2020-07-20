<template>
    <div>
        <q-card class="bg-grey-10" style="width: 300px">
          <q-card-section class="q-pt-none">
            <!-- List of Current Flippers -->
            <div class="q-ml-md text-weight-light text-h6 text-grey">
                Currently Flippin' ...
            </div>

            <q-list class="text-grey" bordered>
                <q-item clickable v-ripple to="flip_id">
                    <q-item-section top avatar>
                        <q-avatar>
                            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                        </q-avatar>
                    </q-item-section>

                    <q-item-section>
                        <q-item-label> Flip #1000</q-item-label>
                        <q-item-label class="text-grey-5" caption lines="2">Rex, Jax ...</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                        <q-item-label class="text-grey" caption>5 min ago</q-item-label>      
                        <q-icon name="star" color="yellow" />
                    </q-item-section>
                </q-item>

                <q-separator color="grey" inset="item" />

                <q-item clickable v-ripple to="flip_id">
                    <q-item-section top avatar>
                        <q-avatar>
                            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                        </q-avatar>
                    </q-item-section>

                    <q-item-section>
                        <q-item-label> Flip #3000</q-item-label>
                        <q-item-label class="text-grey-5" caption lines="2">Ben, Zoro, Ted - (Zoro Won!) </q-item-label>
                    </q-item-section>

                    <q-item-section side>
                        <q-item-label class="text-grey" caption>6 min ago</q-item-label>      
                        <q-icon name="star" color="grey-8" />
                    </q-item-section>
                </q-item>
            </q-list>
          </q-card-section>

          <q-card-actions align="right" class="bg-grey-10 text-grey">
            <q-btn color="warning" flat label="Cancel" v-close-popup />
          </q-card-actions>
        </q-card>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>