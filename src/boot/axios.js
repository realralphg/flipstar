import axios from "axios";
import { LocalStorage } from "quasar";

export default async ({ Vue }) => {
  // prototype so we can use $axios anywhere withing our application
  Vue.prototype.$axios = axios;
  // get token from local storage if it exist
  const token = LocalStorage.getItem("flipstar-token");
  // pass the token into the $axios authorization header before application ready state
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
};
