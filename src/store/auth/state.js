import { LocalStorage } from "quasar";

export default {
  token: LocalStorage.getItem("flipstar-token") || "",
  user: null,
};
