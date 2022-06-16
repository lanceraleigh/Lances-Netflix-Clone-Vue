<template>
  <img :src="require('../../assets/website.jpg')" id="index_background" />
  <div class="top-banner">
    <a href="/" class="logo">NETFLIX</a>
  </div>
  <div class="showcase">
    <h1>Finishing signin process</h1>
  </div>
</template>
<script>
// Check programatic navigation

// import router from "../../router";
// import Store from "../../store";
export default {
  data() {
    return {
      newAccount: true,
      emailRequirements: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
      passwordRequirements:
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      email: null,
      password: null,
      passwordcon: null,
    };
  },
  methods: {
    signupValidation() {
      //  if (this.emailRequirements.test(this.email) && this.passwordRequirements.test(this.password) && this.password === this.passwordcon) {
      //   let newAccount = { email: this.email, password: this.password };
      //   let accountsArray = [JSON.parse(localStorage.getItem("accounts")), newAccount];
      //   localStorage.setItem("accounts", JSON.stringify(accountsArray));
      //  } else if (!this.emailRequirements.test(this.email)) {
      //   alert("please check email");
      //  } else if (!this.passwordRequirements.test(this.password)) {
      //   alert("Please confirm your password meets the requirements: Minimum eight characters, at least one letter, one number and one special character");
      //  } else if (this.password !== this.passwordcon) {
      //   alert("Passwords do not match");
      //  }
      //  this.$store.commit("setUserIsAuthorized", true);
      this.$router.replace("/moviemain/");
      //  this.$store.commit("justLoggedIn");
    },
  },
};
</script>
<!-- <style scoped lang="scss">
#index_background {
 position: absolute;
 top: 0;
 left: 0;
 z-index: -1;
 animation-name: sliding;
 animation-duration: 60s;
 width: 120%;
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
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 text-align: left;

 #signupForm {
  background-color: rgba(82, 2, 2, 0.9);
  min-width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  #signupFormTitle {
   margin-top: 4rem;
  }
  p {
   display: flex;
   flex-direction: column;
   margin: 0.5rem;
   min-width: 60%;
  }
  .accountTypeToggle {
   color: rgb(233, 160, 240);
   padding-bottom: 0.5rem;
   background: none;
   border: none;
   &:hover {
    cursor: pointer;
   }
  }
 }
}
</style> -->
