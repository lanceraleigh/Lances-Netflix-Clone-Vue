<template>
  <div v-if="isAuthenticated">
    <div class="top-banner">
      <router-link to="/" class="logo">NETFLIX</router-link>
      <router-link to="/moviemain/" class="navlink">Genres</router-link>
      <router-link to="/moviemain/mylist" class="navlink">My List</router-link>
      <input
        id="searchBar"
        type="text"
        placeholder="Search.."
        @click="logAllMovies"
        @keyup="searchBarFunctionality"
      />
      <div v-if="!isUserProfile" id="notProfilePage">
        <button @click="logout">Logout</button>
        <button @click="showProfile">See Profile</button>
      </div>
    </div>
    <router-view></router-view>
  </div>
  <div v-else>
    <div class="top-banner">
      <router-link to="/" class="logo">NETFLIX</router-link>
      <button @click="login" class="btn">Signin</button>
    </div>
    <h2>Unable to access your profile,</h2>
    <h2>Please signin above to access your account...</h2>
  </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  name: "MovieMain",
  computed: {
    isUserProfile() {
      return this.$route.name === "ProfilePage";
    },
  },
  setup() {
    const { logout, loginWithRedirect, user, isAuthenticated } = useAuth0();

    localStorage.setItem("currentUser", JSON.stringify(user._value));
    if (!isAuthenticated) {
      this.$router.replace("/");
    }
    return {
      logout: () => {
        logout({ returnTo: "http://localhost:8080/" });
      },
      login: () => {
        loginWithRedirect();
        this.$store.commit("setUserIsAuthorized", isAuthenticated);
        this.$store.commit("setUser", user);
      },
      user,
      isAuthenticated,
    };
  },
  methods: {
    showProfile() {
      this.$router.replace("/moviemain/profile");
    },
  },
};
</script>
<style>
template {
  overflow: hidden;
}
.top-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  background-color: #000;
  z-index: 5;
}
.top-banner #searchBar {
  height: 2rem;
  width: 15rem;
  background-color: #666;
  margin: 0 2rem;
}
.top-banner .navlink {
  text-decoration: none;
  background: none;
  color: #fff;
  font-size: 1.75rem;
  border: none;
  padding: 0;
  height: 3rem;
}
.top-banner .navlink .navlink:hover {
  cursor: pointer;
  transform: scale(1.1);
  box-shadow: inset 0 -0.1rem #fff;
}
.top-banner .navlink .navlink.active {
  border-bottom: 1px solid #fff;
}
#notProfilePage {
  display: flex;
}
</style>

<!-- <style lang="scss" scoped>
template {
 overflow: hidden;
}
.top-banner {
 display: flex;
 justify-content: space-between;
 align-items: center;
 text-align: center;
 width: 100vw;
 background-color: #000;
 z-index: 5;
 #searchBar {
  height: 2rem;
  width: 15rem;
  background-color: #666;
  margin: 0 2rem;
 }
 .navlink {
  text-decoration: none;
  background: none;
  color: #fff;
  font-size: 1.75rem;
  border: none;
  padding: 0;
  height: 3rem;
  .navlink:hover {
   cursor: pointer;
   transform: scale(1.1);
   box-shadow: inset 0 -0.1rem #fff;
  }
  .navlink.active {
   border-bottom: 1px solid #fff;
  }
 }
}
</style> -->
