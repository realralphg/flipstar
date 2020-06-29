<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="xs"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>          
          <router-link to="/" tag="span" style="cursor: pointer"> Flip </router-link>
          <router-link to="/" tag="span" style="cursor: pointer"> <q-icon name="star_half" /> </router-link>
          
        </q-toolbar-title>

        <q-space/>
        <!-- Show if Not Logged In -->
          <!-- <q-btn no-caps flat class="gt-xs row" v-for="link in generalLinks" :key="link.id" :to="link.to" exact clickable>
            <div class="column justify-center">
              <q-icon :name="link.icon" class="q-mr-xs" size="18px"/>
            </div>

            <div class="column q-mr-md">
              <q-item-label>{{link.label}}</q-item-label>
            </div>
          </q-btn> -->

        <!-- Show ONLY if Logged In -->
          <q-btn no-caps flat class="gt-xs row" v-for="link in essentialLinks" :key="link.id" :to="link.to" exact clickable>
            <div class="column justify-center">
              <q-icon :name="link.icon" class="q-mr-xs" size="18px"/>
            </div>

            <div class="column q-mr-md">
              <q-item-label>{{link.label}}</q-item-label>
            </div>
          </q-btn>

        <q-btn no-caps flat @click="signOut" color="white"> Sign Out </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="250"
      overlay
      content-class="bg-primary"
    >
      <q-list>
        <q-item-label
          header
          class="text-white text-h5 text-weight-light"
        >
          Flip
          <q-icon name="star_half" />
        </q-item-label>
        

        <!-- Show if Not Logged In -->
        <!-- <q-item class="text-grey" v-for="link in generalLinks" :key="link.id" :to="link.to" exact clickable>
          <q-item-section avatar>
            <q-icon :name="link.icon"></q-icon>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{link.label}}</q-item-label>
          </q-item-section>
        </q-item> -->

        <!-- Show ONLY if Logged In -->
        <q-item class="text-grey" v-for="link in essentialLinks" :key="link.id" :to="link.to" exact clickable>
          <q-item-section avatar>
            <q-icon :name="link.icon"></q-icon>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{link.label}}</q-item-label>
          </q-item-section>
        </q-item>

        <q-btn no-caps color="white" flat @click="signOut"> Sign Out </q-btn>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',


  computed: {

  },

  data () {
    return {
      leftDrawerOpen: false,

      generalLinks: [
        {
          label: 'Sign Up',
          icon: 'face',
          to: '/signup'
        },
        {
          label: 'Sign In',
          icon: 'lock_open',
          to: '/signin'
        }
      ],

      essentialLinks: [
        {
          label: 'Profile',
          icon: 'sentiment_very_satisfied',
          to: '/profile'
        },
        {
          label: "How to Flip",
          icon: 'attach_money',
          to: '/how'
        },
        // {
        //   label: 'Organize Meetup',
        //   icon: 'room',
        //   to: '/meetup/new'
        // },

      ]
    }
  },

  methods: {
    signOut: () =>{
      console.log('Signed Out!');      
    }

  }
}
</script>

<style scoped>
.q-router-link--exact-active{
  color: white !important;
}
</style>
