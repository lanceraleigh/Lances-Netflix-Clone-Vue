<template>
  <div class="top-banner">
    <router-link to="/" class="logo">NETFLIX</router-link>
    <router-link to="/moviemain/" class="navlink">Genres</router-link>
    <router-link to="/moviemain/mylist" class="navlink">My List</router-link>
    <!-- <h6>{{ user }}</h6> -->
    <input
      id="searchBar"
      type="text"
      placeholder="Search.."
      @click="logAllMovies"
      @keyup="searchBarFunctionality"
    />
    <button @click="logout" class="btn">logout</button>
    <button @click="showProfile">
      <font-awesome-icon icon="fas fa-user" />
    </button>
    <!-- <img v-bind:src="user._rawValue.profile" alt="" /> -->
    <!-- <button v-if="this.$store.state.userIsAuthorized" @click="logout">
      Sign Out
    </button> -->
  </div>
  <!-- <pre v-if="isAuthenticated">
          <code>{{ user }}</code>
        </pre> -->
  <router-view></router-view>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  name: "MovieMain",
  setup() {
    const { logout, user, isAuthenticated } = useAuth0();

    localStorage.setItem("currentUser", JSON.stringify(user._value));
    if (!isAuthenticated) {
      this.$router.replace("/");
    }
    return {
      logout: () => {
        logout({ returnTo: "http://localhost:8080/" });
      },
      user,
    };
  },
  methods: {},
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
