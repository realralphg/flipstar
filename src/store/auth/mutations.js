import { LocalStorage } from "quasar";

// commit changes after a successful login
export const login = (state, data) => {
  LocalStorage.set("flipstar-token", data.token);
  state.token = data.token;
  state.user = data.data;
};

// pass user infomation to store state after successful fetch from api
export const user = (state, data) => {
  state.user = data.data;
};

// log user out of system
export const logout = state => {
  LocalStorage.remove("flipstar-token");
  state.token = "";
  state.user = null;
};
