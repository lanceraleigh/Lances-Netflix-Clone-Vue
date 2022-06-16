import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store/index.js";
import { createAuth0 } from "@auth0/auth0-vue";
// import { Icon } from "@altipla/fa6-icon";
// import "./icons";

const app = createApp(App)
  .use(
    createAuth0({
      domain: "https://dev-csmlbd3j.us.auth0.com",
      client_id: "Ii26ojtfciDFZoLIf4V6oDDlRpGk5ciP",
      redirect_uri: "http://localhost:8080/moviemain/",
      responseType: "token id_token",
      scope: "openid profile email",
    })
  )

  .use(store)
  .use(router);
// app.component(Icon.name, Icon);
app.config.globalProperties.axios = axios;

app.mount("#app");
