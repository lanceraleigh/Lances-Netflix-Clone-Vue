<template>
  <router-view />
</template>

<script>
// import createAuth0Client from "@auth0/auth0-spa-js";
import { useAuth0 } from "@auth0/auth0-vue";
export default {
  name: "App",
  setup() {
    const { loginWithRedirect, user, isAuthenticated } = useAuth0();

    return {
      login: () => {
        loginWithRedirect();
      },
      user,
      isAuthenticated,
    };
  },
  // components: {},

  // data() {
  //   return {};
  // },
  // methods: {
  //   async storedInfo() {
  //     const auth0 = await createAuth0Client({
  //       domain: "dev-csmlbd3j.us.auth0.com",
  //       client_id: "Ii26ojtfciDFZoLIf4V6oDDlRpGk5ciP",
  //     });
  //     // either with async/await
  //     // async () => {
  //     await auth0.loginWithRedirect({
  //       redirect_uri: "http://localhost:8080/moviemain/",
  //     });
  //     //logged in. you can get the user profile like this:
  //     const user = await auth0.getUser();
  //     console.log(user);
  //     // };
  //   },
  // },
};
</script>
<style>
:root {
  --primary-color: red;
  --primary-hover: #dc0303;
}
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background: #000;
	 */
  color: #ddd;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
#app .btn {
  background-color: var(--primary-color);
  color: #fff;
  font-size: 1rem;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
}
#app .btn:hover {
  background-color: var(--primary-hover);
  cursor: pointer;
}
#app #landingPageSignup {
  margin-right: 3rem;
  margin-top: 1rem;
}
/* Media Query */
.logo {
  color: red;
  text-decoration: none;
  font-size: 3.5rem;
  font-weight: 900;
}
.logo:hover {
  color: var(--primary-hover);
}
</style>

<!-- <style module lang="scss">
:root {
 --primary-color: red;
 --primary-hover: rgb(220, 3, 3);
}
#app {
 position: relative;
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 /* background: #000; */
 color: #ddd;
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 overflow: hidden;
 .btn {
  background-color: var(--primary-color);
  color: #fff;
  font-size: 1rem;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
 }
 .btn:hover {
  background-color: var(--primary-hover);
  cursor: pointer;
 }
 #landingPageSignup {
  margin-right: 3rem;
  margin-top: 1rem;
 }
}

/* Media Query */

.logo {
 color: red;
 text-decoration: none;
 font-size: 3.5rem;
 font-weight: 900;
}
.logo:hover {
 color: var(--primary-hover);
}
</style> -->
