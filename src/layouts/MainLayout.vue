<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" class="xs"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <router-link to="/home" tag="span" style="cursor: pointer"> Flip </router-link>
          <router-link to="/home" tag="span" style="cursor: pointer"> <q-icon name="star_half" /> </router-link>
        </q-toolbar-title>

        <q-space/>

        <q-tabs stretch narrow-indicator inline-label>
          <q-route-tab no-caps icon="home" to="/home" exact label="Game Hub" class="gt-xs" v-if="isLoggedIn"/>
          <q-route-tab no-caps icon="face" to="/signup" exact label="Sign Up" class="gt-xs" v-if="!isLoggedIn"/>
          <q-route-tab no-caps icon="lock_open" to="/signin" exact label="Sign In" class="gt-xs" v-if="!isLoggedIn"/>
          <q-route-tab no-caps icon="sentiment_very_satisfied" to="/profile" exact label="Profile" class="gt-xs" v-if="isLoggedIn"/>
          <q-route-tab no-caps icon="attach_money" to="/how" exact label="How to Flip" class="gt-xs" />
        </q-tabs>

        <q-btn v-if="isLoggedIn" no-caps flat @click="logOut" color="white"> Sign Out </q-btn>
      </q-toolbar>
    </q-header>

<!-- Footer -->
    <q-footer>
      <div class="text-center bg-black">
        <div>Copyright 2020</div>
        <div class="text-grey-6">Greysoft Technologies</div>
      </div>
    </q-footer>

<!-- Drawer -->
    <q-drawer
      v-model="leftDrawerOpen"
      :width="250"
      overlay
      content-class="bg-primary"
    >
      <q-list>

        <q-item-label header class="text-white text-h5 text-weight-light">
          Flip
          <q-icon name="star_half" />
        </q-item-label>

        <q-item class="text-grey" to="/home" exact clickable v-if="isLoggedIn">
          <q-item-section avatar>
            <q-icon name="home"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Game Hub</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="text-grey" to="/signup" exact clickable v-if="!isLoggedIn">
          <q-item-section avatar>
            <q-icon name="face"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Sign Up</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="text-grey" to="/signin" exact clickable v-if="!isLoggedIn">
          <q-item-section avatar>
            <q-icon name="lock_open"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Sign In</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="text-grey" to="/profile" exact clickable v-if="isLoggedIn">
          <q-item-section avatar>
            <q-icon name="sentiment_very_satisfied"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Flip Profile</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="text-grey" to="/how" exact clickable>
          <q-item-section avatar>
            <q-icon name="attach_money"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>How to Flip</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="text-grey" clickable @click="logOut()" v-if="isLoggedIn">
          <q-item-section avatar>
            <q-icon name=""></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Sign Out </q-item-label>
          </q-item-section>
        </q-item>
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
    isLoggedIn(){ return this.$store.getters['auth/isLoggedIn']}
  },

  data () {
    return {
      leftDrawerOpen: false,
    }
  },

  methods: {
    logOut(){
       this.$store.commit('auth/logout')
    }
  }
}
</script>

<style scoped>
.q-router-link--exact-active{
  color: white !important;
}


.fixed-bottom{
  position:absolute;
}
</style>
