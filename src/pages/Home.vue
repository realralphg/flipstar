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
      <div class="row justify-center q-ma-md">{{categories}}
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

      <NewFlipDialog/>

      <q-chip clickable @click="refreshFeed" color="teal" text-color="white" icon="autorenew">
        Refresh
      </q-chip>

<!-- Flip Dialogs -->
      <!-- <q-dialog v-model="flipList">
        <FlipListDialog :games="games"/>
      </q-dialog> -->

    </div>

<!-- List of Current Flippers -->
    <div class="q-ml-md text-weight-light text-h6">
      Currently flippin' ...
    </div>

    <q-list bordered >

      <q-item  v-for="(game, index) in games" :key="index">
        <q-item-section top avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label> Flip #{{game.amount}}</q-item-label>
          <q-item-label caption lines="2">
            <span v-for="(player, index) in game.players" :key="index">
              {{player.user.name}} | {{player.star}}
            </span>
          </q-item-label>
           <FlipListDialog :game="game"/>
        </q-item-section>

        <q-item-section side>
          <q-item-label caption>{{game.created_at}}5 min ago</q-item-label>
          <q-icon name="star" color="yellow" />
        </q-item-section>
      </q-item>

    </q-list>

  </q-page>
</template>

<script>
import FlipListDialog  from '../components/FlipDialogs/FlipListDialog'
import NewFlipDialog  from '../components/FlipDialogs/NewFlipDialog'

export default {
  components: {
    FlipListDialog,
    NewFlipDialog
  },
  data() {
    return {
      categories: '',
      games: '',
      // for Carousel
      slide: 'gamer1',
      navigation: true,
      navPos: 'bottom',

      // for Dialogs
      flipList: false,

      slideData: [
        {
          id: '1',
          name: 'gamer1',
          imageUrl: 'images/picSlide1.jpg',
          title: 'Lets Play',
        },
        {
          id: '2',
          name: 'gamer2',
          imageUrl: 'images/stars4.jpg',
          title: 'Lets Play',
        },
        {
          id: '3',
          name: 'gamer3',
          imageUrl: 'images/star8.jpg',
          title: 'Lets Play',
        },
        {
          id: '4',
          name: 'gamer4',
          imageUrl: 'images/picSlide2.jpg',
          title: 'Lets Play',
        },
        {
          id: '5',
          name: 'gamer5',
          imageUrl: 'images/star6.jpg',
          title: 'Lets Play',
        },
        {
          id: '6',
          name: 'gamer6',
          imageUrl: "images/star7.jpg",
          title: 'Cast Dice',
        }
      ]
    }
  },

  computed: {
    user() { return this.$store.getters['auth/user'] }
  },

  mounted() {
    this.getCategories();
    this.getGames();
  },

  methods:{
    async getCategories(){
       const endPoint = await this.$axios.get(process.env.Api + "api/category");
      // pass the requetsed data to a vareable
      const res = endPoint.data;
      this.categories = res.data
    },

     async getGames(){
       const endPoint = await this.$axios.get(process.env.Api + "api/game");
      // pass the requetsed data to a vareable
      const res = endPoint.data;
      this.games = res.data
    },

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
