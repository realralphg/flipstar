<template>
  <q-page class="bg-grey-10">
<!-- FIRSTPicture -->    
    <div class="q-pa-md">
        <q-parallax :height="300" :speed="0.9">
            <template v-slot:media>
                <img src="images/flippic2.jpg">
            </template>

            <p class="text-center text-h4 text-white q-pt-xl q-mt-xl q-mb-none">
                <span class="text-weight-bolder"> Flip Star </span> <br>
                <span class="text-weight-"> The Money Game! </span>
            </p>
            <div class="in-line-block">
                <q-btn no-caps to="signup" class="q-mr-sm" color="warning" label="SignUp"/>
                <q-btn no-caps to="/signin" outline color="primary" label="SignIn"/>
            </div>
        </q-parallax>
    </div>

    <!-- Three Cards -->
    <div class="row items-start justify-center  q-pa-xs q-gutter-sm">
      <q-card class="q-pa-md text-white bg-warning" style="max-width: 250px">
          <span class="text-h4 text-weight-light text-primary">Flip the right number of stars</span>
          <q-icon class="q-pb-sm q-pl-sm" name="star_half" size="30px"/>
          <q-icon class="q-pb-sm q-pl-sm" name="star_half" size="30px"/>
          <q-icon class="q-pb-sm q-pl-sm" name="star_half" size="30px"/> <br>
          <span class="text-primary" style="float: right"><b>...TO DOUBLE YOUR MONEY</b></span>          
      </q-card>

      <q-card class="q-pa-md text-black bg-primary" style="max-width: 250px"> 
          <div class="row justify-center">
              <q-chip color="red-10" text-color="white" icon="star_half">
                  Click 1, 2 or 3 stars to Flip ...
              </q-chip>
          </div>

          <div class="row justify-center text-h6 ellipsis">
            <q-rating v-model="stars"
              size="3em" color="warning" icon="star_border" icon-selected="star" :max="3"
            />
          </div>

          <div class="row justify-center q-mt-md">
            <q-btn rounded outline to="/how" color="warning" label="How to Flip"/>
          </div>
      </q-card>

      <q-card class="q-pa-md text-white bg-warning" style="max-width: 250px">
          <span class="text-h3 text-weight-light">CASH OUT <br> </span>
          <span class="text-h5 text-primary" style="float: right"><b>...ANYTIME!</b> </span>
          <span class="text-primary" style="float: right"><b>Everyday is a good day to WIN!</b> </span>
      </q-card>      
    </div>

    <!-- SECOND Picture -->
    <div class="q-pa-md">
        <q-parallax :height="300" :speed="0.9">
            <template v-slot:media>
                <img src="images/flippic1.jpg">
            </template>

            <p class="text-center text-h5 text-primary q-pt-xl q-mt-xl q-mb-none">
                <span class="text-weight-bolder text-warning"> Over 10,000 flippers daily! </span> <br>
                <span class="text-weight-"> #100, #300, #500, <br> #1,000, #5,000, #10,000 </span>
            </p>
        </q-parallax>
    </div>

<!-- THIRD Picture -->
    <div class="q-pa-md">
        <q-parallax :height="300" :speed="0.9">
            <template v-slot:media>
                <img src="images/flippic3.jpg">
            </template>

            <p class="text-center text-h4 text-warning q-pt-xl q-mt-xl q-mb-none">
                <span class="text-weight-bolder"> Flip Star </span> <br>
                <span class="text-weight-"> The Money Game! </span>
            </p>
            <div class="in-line-block">
                <q-btn no-caps to="signup" class="q-mr-sm" color="warning" label="SignUp"/>
                <q-btn no-caps to="signin" outline color="primary" label="SignIn"/>
            </div>
        </q-parallax>
    </div>

  </q-page>
</template>

<script>

export default {

  data() {
    return {
      stars: 0

    }
  },

  methods:{

  }
}
</script>
