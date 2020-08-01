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
      <NewFlipDialog/>

      <q-chip clickable @click="getGames()" color="teal" text-color="white" icon="autorenew">
        Refresh
      </q-chip>
    </div>

<!-- List of Current Flippers -->
    <div class="q-ml-md text-weight-light text-h6">
      Currently flippin ...
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
            flippers:
            <span v-for="(player, index) in game.players" :key="index">
              {{player.user.name}}
            </span>
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-item-label caption>{{formatDate(game.created_at)}}</q-item-label>
         <div class="row no-wrap">
            <FlipDialog :game="game"/>
            <q-icon name="star" color="yellow" />
         </div>
        </q-item-section>
      </q-item>

    </q-list>

  </q-page>
</template>

<script>
import FlipDialog  from 'components/FlipDialogs/FlipDialog'
import NewFlipDialog  from 'components/FlipDialogs/NewFlipDialog'
import { date } from 'quasar'
export default {
  components: {
    FlipDialog,
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
          id: '1', name: 'gamer1', imageUrl: 'images/picSlide1.jpg', title: 'Lets Play',
        },
        {
          id: '2', name: 'gamer2', imageUrl: 'images/stars4.jpg', title: 'Lets Play',
        },
        {
          id: '3', name: 'gamer3', imageUrl: 'images/star8.jpg', title: 'Lets Play',
        },
        {
          id: '4', name: 'gamer4', imageUrl: 'images/picSlide2.jpg', title: 'Lets Play',
        },
        {
          id: '5', name: 'gamer5', imageUrl: 'images/star6.jpg', title: 'Lets Play',
        },
        {
          id: '6', name: 'gamer6', imageUrl: "images/star7.jpg", title: 'Cast Dice',
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
    formatDate(data){
      return date.formatDate(data, 'YYYY-MM-DD')
    },
  }
}
</script>
