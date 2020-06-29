<template>
  <q-page class="bg-grey">
    <div>
      <q-carousel
        v-model="slide"
        swipeable
        animated
        infinite
        autoplay
        
        :navigation-position="navPos"
        height="150px"
        class="bg-grey-8 text-white"
        >
<!-- :navigation="navigation" -->
        <q-carousel-slide :name="slide.name" class="q-pa-none" v-for="slide in slideData" :key="slide.id">
            <div>
                <q-img :src="slide.imageUrl" height="150px"/>
            </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
<!-- Flip Category -->
    <div>
    <div class="q-ml-md text-weight-light text-h6">
      Flip Category
    </div>
      <div class="row justify-center q-ma-md">
          <q-btn class="q-ma-xs" glossy rounded color="primary" label="#10,000" @click="flipAction(10000)"/>
          <q-btn class="q-ma-xs" glossy rounded color="black" label="#5,000" @click="flipAction(5000)"/>
          <q-btn class="q-ma-xs" glossy rounded color="primary" label="#1,000" @click="flipAction(1000)"/>
          <q-btn class="q-ma-xs" glossy rounded color="black" label="#500" @click="flipAction(500)"/>
          <q-btn class="q-ma-xs" glossy rounded color="primary" label="#300" @click="flipAction(300)"/>
          <q-btn class="q-ma-xs" glossy rounded color="black" label="#100" @click="flipAction(100)"/>
      </div>
    </div>

    <q-separator/>

<!-- Flip Actions Dialogs -->
    <div class="row justify-center q-ma-md">
      <q-chip clickable @click="flipList=true" color="primary" text-color="white" icon="star_half">
        Join a flip
      </q-chip>
      <q-chip clickable @click="newFlip=true" icon="star_outline">
        Start a flip
      </q-chip>
      <q-chip clickable @click="refreshFeed" color="teal" text-color="white" icon="autorenew">
        Refresh
      </q-chip>

      <q-dialog v-model="flipList">
        <JoinFlipDialog/>
      </q-dialog>

      <q-dialog v-model="newFlip">
        <NewFlipDialog/>
      </q-dialog>
    </div>

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

<!-- List of Current Flippers -->


  </q-page>
</template>

<script>
import JoinFlipDialog  from '../components/FlipDialogs/JoinFlipDialog'
import NewFlipDialog  from '../components/FlipDialogs/NewFlipDialog'

export default {
  components: {
    JoinFlipDialog,
    NewFlipDialog
  },
  data() {
    return {
      category: '',
      // for Carousel
      slide: 'gamer',
      navigation: true,
      navPos: 'bottom',    

      // for Dialogs
      flipList: false,
      newFlip: false,

      slideData: [
        {
          id: '1',
          name: 'gamer',
          imageUrl: 'https://www.starpoker.com.au/sites/default/files/thumbnails/image/live_reporting.jpg',
          title: 'Lets Play',
        },
        {
          id: '2',
          name: 'game on',
          imageUrl: 'https://lh3.googleusercontent.com/MOGvn_goXOQl9FQNeNcnq8sGlojS9btaZAt0LueMPa4tf7qefLwsWMXCbvgsCwd9Iw',
          title: 'Cast Dice',
        }
      ]
    }
  },

  methods:{
    flipAction(category){
      this.category = category
      console.log('Category clicked', this.category)
    },

    refreshFeed(){
      console.log('Refresh Flip Feed')
    }
  }
}
</script>
