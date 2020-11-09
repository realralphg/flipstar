<template>
    <q-page class="bg-grey-10 row justify-center">
      <div class="" style="width: 100%; max-width: 600px">      
        <div class="">
          <q-img src="images/stars4.jpg" :ratio="27/9">
            <div class="absolute-full text-subtitle2 flex flex-center">
              <span class="text-h4 text-weight-thin"> How to Flip </span> 
            </div>
          </q-img>
        </div>

          <div class="bg-primary" >
            <q-item>
              <q-item-section>
                <q-item-label overline class="text-center text-warning">FLIP STARS - WIN DOUBLE <br> WITHDRAW CASH </q-item-label>
                <q-item-label caption class="text-grey-5">
                  <ul>
                    <li>Having signed up, update your profile accordingly. </li>
                    <li>There are 3 stars. You may flip 1, 2 or all 3 stars. </li>
                    <li>3 flippers are required to complete a round of Flip.</li>
                    <li>You can Start a Flip and wait for other flippers to complete the round. </li>
                    <li>OR you can Join an already existing Flip to complete it. </li>
                    <li>As soon as the third flipper completes a flip, the winner is announced and immediately credited a double. </li>
                    <li>You can Flip as much as you like and withdraw cash anytime. </li>
                  </ul>
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section top avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-warning">Load your Barrel</q-item-label>
                <q-item-label class="text-grey-5" caption lines="2">
                  Ensure that your wallet is funded enough to Flip as much as you like.
                </q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-icon name="star" color="yellow" />
              </q-item-section>
            </q-item>

            <q-separator spaced inset="item" />

            <q-item>
              <q-item-section top avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-warning">Choose your Game</q-item-label>
                <q-item-label class="text-grey-5" caption lines="3">
                  The VIPs Flip #10,000 and win a double but you can choose
                  any Flip category and still win double too.
                </q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-icon name="star" color="yellow" />
              </q-item-section>
            </q-item>

            <q-separator spaced inset="item" />

            <q-item>
              <q-item-section top avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-warning">Start or Join Flip</q-item-label>
                <q-item-label class="text-grey-5" caption lines="3">
                  To start a New Flip, click "Start a Flip" - To oin or complete an existing Flip, 
                  click on the "View" button on the Flip item you wish to join.
                </q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-icon name="star" color="yellow" />
              </q-item-section>
            </q-item>

            <q-separator spaced inset="item" />

            <q-item>
              <q-item-section top avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-warning">Start Flipping</q-item-label>
                <q-item-label class="text-grey-5" caption lines="3">
                  Of the 3 STARS, click on either the first, second or third star to flip - theh click Flip!
                </q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-icon name="star" color="yellow" />
              </q-item-section>
            </q-item>
          </div>
      </div>          
    </q-page>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
