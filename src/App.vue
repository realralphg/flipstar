<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { LocalStorage } from "quasar";
export default {
  name: 'App',

  preFetch({ store, redirect, axios }) {
    if (LocalStorage.getItem("flipstar-token")) {
      store
        .dispatch("auth/user")
        .then(response => {})
        .catch(error => {
          store.dispatch("auth/logout");
        });
    }
  },

  created() {
    this.$q.addressbarColor.set("#2a3036");
  }
}
</script>
