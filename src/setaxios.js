import axios from "axios";
import router from "./router";
import store from "./store";

export default function setAxios() {
  axios.interceptors.request.use((config) => {
    if (store.state.token) {
      config.headers.token = store.state.token;
    }
    return config;
  });

  axios.interceptors.response.use((response) => {
    if (response.status === 200) {
      const data = response.data;

      if (data.code === -1) {
        store.commit("setToken", "");
        localStorage.removeItem("token");
        router.replace({ path: "/login" });
      }
      return data;
    }
    return response;
  });
}
