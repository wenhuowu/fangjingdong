import axios from "axios";
import router from "./router";
import store from "./store";

export default function setAxios() {
  axios.interceptors.request.use((config) => {
    if (store.state.token) {
      config.headers.token = store.state.token;
      console.log(11);
    }
    return config;
  });

  axios.interceptors.response.use((response) => {
    if (response.status === 200) {
      const data = response.data;
      console.log(data, 22);
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
