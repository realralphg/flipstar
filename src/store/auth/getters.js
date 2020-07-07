import { LocalStorage } from "quasar";

export const user = state => state.user;
export const isLoggedIn = state => state.token || LocalStorage.getItem("flipstar-token") || "";
