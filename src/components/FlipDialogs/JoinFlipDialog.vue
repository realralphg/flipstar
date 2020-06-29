<template>
    <div>
        <q-card style="width: 300px">
          <q-card-section class="q-pt-none">
            <!-- List of Current Flippers -->
            <div class="q-ml-md text-weight-light text-h6">
                Currently flippin' ...
            </div>

            <q-list bordered >
                <q-item clickable v-ripple>
                    <q-item-section top avatar>
                        <q-avatar>
                            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                        </q-avatar>
                    </q-item-section>

                    <q-item-section>
                        <q-item-label> Flip #1000</q-item-label>
                        <q-item-label caption lines="2">Rex, Jax ...</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                        <q-item-label caption>5 min ago</q-item-label>      
                        <q-icon name="star" color="yellow" />
                    </q-item-section>
                </q-item>

                <q-separator inset="item" />

                <q-item clickable v-ripple>
                    <q-item-section top avatar>
                        <q-avatar>
                            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                        </q-avatar>
                    </q-item-section>

                    <q-item-section>
                        <q-item-label> Flip #3000</q-item-label>
                        <q-item-label caption lines="2">Ben, Zoro, Ted - (Zoro Won!) </q-item-label>
                    </q-item-section>

                    <q-item-section side>
                        <q-item-label caption>6 min ago</q-item-label>      
                        <q-icon name="star" color="grey-8" />
                    </q-item-section>
                </q-item>
            </q-list>
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-primary">
            <q-btn flat label="Cancel" v-close-popup />
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