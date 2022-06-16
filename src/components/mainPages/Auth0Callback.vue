<template>
  <div>Wrapping up authentication...</div>
  <router-link to="/moviemain/"
    >Continue to {{ user._rawValue.profile }}'s Accopunt?'</router-link
  >
</template>
<script>
/* eslint-disable */
import { useAuth0 } from "@auth0/auth0-vue";
import Store from "../../store";
export default {
  name: "Auth0Process",
  setup() {
    const { user, isAuthenticated } = useAuth0();
    Store.commit("setUserIsAuthorized", isAuthenticated);
    localStorage.setItem("currentUser", JSON.stringify(user._rawValue));
    return {
      isAuthenticated,
      user,
    };
  },
  methods: {
    getAuthApiData() {
      if (Store.state.userIsAuthorized) {
        this.$router.replace("/moviemain/");
      }
    },
  },
  mounted() {
    this.getAuthApiData();
  },
};
</script>
