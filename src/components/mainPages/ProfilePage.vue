<template>
  <img v-bind:src="user.picture" alt="User Profile Pic" />
  <h3>Username:</h3>
  <p>{{ user.nickname }}</p>
  <h3>Email:</h3>
  <p>{{ user.email }}</p>
  <h3>User Id:</h3>
  <p>{{ user.sub }}</p>
  <button @click="logout">Logout</button>
</template>
<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  name: "ProfilePage",
  setup() {
    const { logout, user, isAuthenticated } = useAuth0();

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
};
</script>
<style scoped>
#movies_showcase {
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #000;
}
</style>
