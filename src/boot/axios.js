import axios from "axios";
import { LocalStorage } from "quasar";

export default async ({ Vue }) => {
  Vue.prototype.$axios = axios;
  const token = LocalStorage.getItem("flipstar-token");
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
};
