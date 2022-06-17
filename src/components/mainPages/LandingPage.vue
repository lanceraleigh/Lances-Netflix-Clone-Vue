<template>
  <img :src="require('../../assets/website.jpg')" id="index_background" />
  <div class="top-banner">
    <router-link to="/" class="logo">NETFLIX</router-link>
    <button @click="login" class="btn" id="signinCorner">Login</button>
  </div>
  <div class="showcase">
    <div class="signup-main">
      <h2>All kinds of good stuff from us to you.</h2>
      <h3>Watch wherever you are, whenever you want</h3>
      <h4>Ready to get watching? Sign up below.</h4>
      <!-- <form action="openSignup">
    <input type="email" placeholder="Email.." /> -->
      <div>
        <button @click="login" class="btn">Signup</button>
        <!-- <router-link to="/signin" class="btn">Signup</router-link> -->
        <!-- <a href="https://www.google.com/" class="btn">google</a> -->
      </div>
      <!-- <input type="submit" @submit="emailCatch()" class="btn" id="landingPageSignup" value="Sign Up" /> -->
      <!-- </form> -->
    </div>
  </div>
  <aside>
    <div class="columns">
      <h1>Lorem ipsum dolor sit amet consectetur.</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, amet
        cum aliquam nobis consequuntur dolor in dolores, asperiores nemo
        voluptas ab possimus quis, repellendus corporis atque error! Eveniet,
        eius facilis?
      </p>
    </div>
    <div class="columns">
      <h1>Lorem ipsum dolor sit amet consectetur.</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, amet
        cum aliquam nobis consequuntur dolor in dolores, asperiores nemo
        voluptas ab possimus quis, repellendus corporis atque error! Eveniet,
        eius facilis?
      </p>
    </div>
    <div class="columns">
      <h1>Lorem ipsum dolor sit amet consectetur.</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, amet
        cum aliquam nobis consequuntur dolor in dolores, asperiores nemo
        voluptas ab possimus quis, repellendus corporis atque error! Eveniet,
        eius facilis?
      </p>
    </div>
  </aside>
  <!-- <footer>
    <div class="links-container">
      <a href=""><font-awesome-icon icon="fa fa-facebook" /></a>
      <a href="">A</a>
      <a href="">A</a>
      <a href="">A</a>
    </div>
    <div class="icons-container">
      <i><i class="fa fa-facebook"></i></i>
      <i>O</i>
      <i>O</i>
      <i>O</i>
    </div>
  </footer> -->
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  name: "LandingPage",
  components: {},
  data() {
    return {};
  },
  methods: {
    // login() {
    //   this.$auth.login();
    // },
  },
  setup() {
    const { loginWithRedirect, user, isAuthenticated } = useAuth0();

    return {
      login: () => {
        loginWithRedirect();
        this.$store.commit("setUserIsAuthorized", isAuthenticated);
        this.$store.commit("setUser", user);
      },
      user,
      isAuthenticated,
    };
  },
};
</script>
<style>
#index_background {
  position: absolute;
  top: 0;
  left: 0;
  width: 120%;
  z-index: -1;
  animation-name: sliding;
  animation-duration: 60s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
.top-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 4rem;
  width: 100%;
  background-color: #000;
  z-index: 5;
}
.top-banner #signinCorner {
  margin-right: 1rem;
  line-height: 1rem;
}
/* Animations */
@keyframes sliding {
  0% {
    transform: translate(0);
  }
  50% {
    transform: translatex(-15%);
  }
  100% {
    transform: translate(0);
  }
}
.showcase {
  height: 100vh;
  width: 100vw;
  background-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  border-bottom: 3px solid #464646;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.showcase .signup-main {
  border-radius: 10px;
  line-height: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.5);
}
.showcase .signup-main h2,
.showcase .signup-main h3,
.showcase .signup-main h4 {
  margin: 0.5rem 1rem;
}
.showcase .signup-main h2 {
  font-size: 2.5rem;
}
.showcase .signup-main h3 {
  font-size: 1.5rem;
}
.showcase .signup-main h4 {
  font-size: 1rem;
}
.showcase .signup-main form input[type="email"],
.showcase .signup-main form input[type="text"] {
  height: 2.5rem;
  width: 15rem;
  margin: 1rem;
}
.columns {
  height: 30vh;
  width: 100vw;
  line-height: 2;
  border-bottom: 1px solid gray;
  background-color: #000;
  color: #fff;
  padding: 1rem;
}
.columns h1 {
  text-align: center;
}
footer {
  height: 30vh;
  width: 100vw;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
/* Animations */
.logo {
  text-decoration: none;
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--primary-color);
  padding: 0 1rem;
}
.logo:hover {
  color: var(--primary-hover);
}
</style>
<!-- <style scoped module lang="scss">
#index_background {
 position: absolute;
 top: 0;
 left: 0;
 width: 120%;
 z-index: -1;
 animation-name: sliding;
 animation-duration: 60s;
 animation-iteration-count: infinite;
 animation-timing-function: ease-in-out;
}
.top-banner {
 display: flex;
 justify-content: space-between;
 align-items: center;
 text-align: center;
 height: 4rem;
 width: 100%;
 background-color: #000;
 z-index: 5;
 #signinCorner {
  margin-right: 1rem;
  line-height: 1rem;
 }
}

/* Animations */

@keyframes sliding {
 0% {
  transform: translate(0);
 }
 50% {
  transform: translatex(-15%);
 }
 100% {
  transform: translate(0);
 }
}

.showcase {
 height: 100vh;
 width: 100vw;
 background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
 border-bottom: 3px solid rgb(70, 70, 70);
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 .signup-main {
  border-radius: 10px;
  line-height: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.5);
  h2,
  h3,
  h4 {
   margin: 0.5rem 1rem;
  }
  h2 {
   font-size: 2.5rem;
  }
  h3 {
   font-size: 1.5rem;
  }
  h4 {
   font-size: 1rem;
  }
  form input[type="email"],
  form input[type="text"] {
   height: 2.5rem;
   width: 15rem;
   margin: 1rem;
  }
 }
}
.columns {
 height: 30vh;
 width: 100vw;
 line-height: 2;
 border-bottom: 1px solid gray;
 background-color: #000;
 color: #fff;
 padding: 1rem;
}
.columns h1 {
 text-align: center;
}
footer {
 height: 30vh;
 width: 100vw;
 background-color: #000;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
}
/* Animations */

.logo {
 text-decoration: none;
 font-size: 3.5rem;
 font-weight: 900;
 color: var(--primary-color);
 padding: 0 1rem;
}
.logo:hover {
 color: var(--primary-hover);
}
</style> -->
