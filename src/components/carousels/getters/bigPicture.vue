<template>
  <div class="bigPictureContainer">
    <div v-for="img in bigPicImg" :key="img" class="bigPictureCarousel">
      <div class="textContainer">
        <h2 class="bigPictureTitle">{{ img.title }}</h2>
        <h2 v-if="img.title === undefined" class="bigPictureTitle">
          {{ img.name }}
        </h2>
        <p class="bigPictureSummary">{{ img.overview }}</p>
      </div>
      <img
        v-bind:src="'http://image.tmdb.org/t/p/original' + img.backdrop_path"
        alt="{{img.title}}"
        class="bigPicturePoster"
      />
    </div>
  </div>
  <div class="buttonContainer">
    <button
      id="bigPicButton1"
      class="bigPicButtons active"
      @click="firstPosition"
    >
      .
    </button>
    <button id="bigPicButton2" class="bigPicButtons" @click="secondPosition">
      .
    </button>
    <button id="bigPicButton3" class="bigPicButtons" @click="thirdPosition">
      .
    </button>
    <button id="bigPicButton4" class="bigPicButtons" @click="fourthPosition">
      .
    </button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "BigPic",
  data() {
    return {
      bigPicImg: [],
      bigPicFinal: [],
    };
  },
  methods: {
    async mainMoviePulls() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=fa73fbb2a48739b593cdcc467151fa54&language=en-US`
      );
      for (let i = 0; i < 4; i++) {
        this.bigPicImg.push(res.data.results[i]);
      }
    },
    movePosition(e) {
      console.log(e.target);
    },
    firstPosition() {
      document.querySelector(".bigPictureContainer").style =
        "transform: translate(0)";
      document.querySelector(".active").classList.remove("active");
      document.querySelector("#bigPicButton1").classList.add("active");
    },
    secondPosition() {
      document.querySelector(".bigPictureContainer").style =
        "transform: translate(-25%)";
      document.querySelector(".active").classList.remove("active");
      document.querySelector("#bigPicButton2").classList.add("active");
    },
    thirdPosition() {
      document.querySelector(".bigPictureContainer").style =
        "transform: translate(-50%)";
      document.querySelector(".active").classList.remove("active");
      document.querySelector("#bigPicButton3").classList.add("active");
    },
    fourthPosition() {
      document.querySelector(".bigPictureContainer").style =
        "transform: translate(-75%)";
      document.querySelector(".active").classList.remove("active");
      document.querySelector("#bigPicButton4").classList.add("active");
    },
    bigPicLoop() {
      this.firstPosition();
      this.secondPosition();
      this.thirdPosition();
      this.fourthPosition();
    },
  },
  mounted() {
    this.mainMoviePulls();
  },
};
</script>
<style>
template {
  background: #000;
}
.bigPictureContainer {
  height: 60vh;
  display: flex;
  flex: 0 0 25%;
  width: 400%;
}
.bigPictureContainer .bigPictureCarousel {
  height: 100%;
  width: 25%;
  background: #000;
  display: flex;
  border-bottom: 1px solid #222;
  border-top: 1px solid #222;
}
.bigPictureContainer .bigPictureCarousel .textContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
}
.bigPictureContainer .bigPictureCarousel .textContainer h2 {
  font-size: 3.5rem;
  margin-bottom: 0;
}
.bigPictureContainer .bigPictureCarousel .textContainer p {
  font-size: 1.75rem;
}
.bigPictureContainer .bigPictureCarousel img {
  width: 65%;
}
.buttonContainer {
  display: flex;
  position: relative;
  bottom: 0;
  padding-top: 0.5rem;
  padding-left: calc(50% - 2rem);
}
.buttonContainer .bigPicButtons {
  border-radius: 50%;
  background: #aaa;
  color: transparent;
  border: 1px solid #666;
  margin-right: 0.5rem;
}
.buttonContainer .bigPicButtons:hover {
  cursor: pointer;
}
.buttonContainer .bigPicButtons.active {
  box-shadow: inset 0 0 7.5px #000;
}
</style>
<!-- <style lang="scss" scoped>
* {
 background: #000;
}
.bigPictureContainer {
 height: 60vh;
 display: flex;
 flex: 0 0 25%;
 width: 400%;
 .bigPictureCarousel {
  height: 100%;
  width: 25%;
  background: #000;
  display: flex;
  border-bottom: 1px solid #222;
  border-top: 1px solid #222;
  .textContainer {
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 1rem;
   h2 {
    font-size: 3.5rem;
    margin-bottom: 0;
   }
   p {
    font-size: 1.75rem;
   }
  }
  img {
   width: 65%;
  }
 }
}
.buttonContainer {
 display: flex;
 position: relative;
 bottom: 0;
 padding-top: 0.5rem;
 padding-left: calc(50% - 2rem);
 .bigPicButtons {
  border-radius: 50%;
  background: #aaa;
  color: transparent;
  border: 1px solid #666;
  margin-right: 0.5rem;
 }
 .bigPicButtons:hover {
  cursor: pointer;
 }
 .bigPicButtons.active {
  box-shadow: inset 0 0 7.5px #000;
 }
}
</style> -->
