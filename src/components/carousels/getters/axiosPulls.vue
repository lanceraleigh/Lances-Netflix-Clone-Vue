<template>
  <div v-for="item in AllCarousels" :key="item" class="fullCarousel">
    <div class="listElement" v-bind:id="item.carousel">
      <h1 class="listTitle">{{ item.carousel }}</h1>
      <!-- <p class="listTitle">{{ item.ApiData }}</p> -->
      <div class="carouselContainer">
        <button @click="leftScroll" class="carouselBtn btn-left">&lt;</button>
        <ul class="carouselListElement">
          <li
            v-for="object of item.ApiData"
            :key="object"
            class="card carouselList"
            :id="object.id"
          >
            <img
              v-bind:src="
                'http://image.tmdb.org/t/p/w185' + object.backdrop_path
              "
            />
            <div :id="'modal' + object.id" class="movieModal noshow">
              <h4>{{ object.title }}</h4>
              <h4 v-if="object.title === undefined">{{ object.name }}</h4>
              <!-- <iframe width="210" height="130" v-bind:src="'https://www.youtube.com/embed/' + object.key"> </iframe> -->
              <p>{{ object.overview }}</p>
              <button @click="addToMyList(object)" class="myListBtn">
                Add to My List
              </button>
            </div>
          </li>
        </ul>
        <button @click="rightScroll" class="carouselBtn btn-right">></button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "axiosPulls",
  data() {
    return {
      AllCarousels: [
        { carousel: "Trending", ApiData: [] },
        { carousel: "Netflix", ApiData: [] },
        { carousel: "Top", ApiData: [] },
        { carousel: "Action", ApiData: [] },
        { carousel: "Animation", ApiData: [] },
        { carousel: "Comedy", ApiData: [] },
        { carousel: "Crime", ApiData: [] },
        { carousel: "Documentary", ApiData: [] },
        { carousel: "Adventure", ApiData: [] },
        { carousel: "Drama", ApiData: [] },
        { carousel: "Family", ApiData: [] },
        { carousel: "Fantasy", ApiData: [] },
        { carousel: "History", ApiData: [] },
        { carousel: "Horror", ApiData: [] },
        { carousel: "Music", ApiData: [] },
        { carousel: "Mystery", ApiData: [] },
        { carousel: "Romance", ApiData: [] },
        { carousel: "Scifi", ApiData: [] },
        { carousel: "Tv", ApiData: [] },
        { carousel: "Thriller", ApiData: [] },
        { carousel: "War", ApiData: [] },
        { carousel: "Western", ApiData: [] },
      ],
      BigPic: [],
      AllPulls: [],
      requestLinks: [
        `https://api.themoviedb.org/3/trending/all/week?api_key=fa73fbb2a48739b593cdcc467151fa54&language=en-US`,
        `https://api.themoviedb.org/3/discover/tv?api_key=fa73fbb2a48739b593cdcc467151fa54&with_networks=213`,
        `https://api.themoviedb.org/3/movie/top_rated?api_key=fa73fbb2a48739b593cdcc467151fa54&language=en-US`,
        `https://api.themoviedb.org/3/discover/movie?api_key=fa73fbb2a48739b593cdcc467151fa54&with_genres=28&append_to_response=videos`,
        `https://api.themoviedb.org/3/discover/movie?api_key=fa73fbb2a48739b593cdcc467151fa54&with_genres=16&append_to_response=videos`,
        `https://api.themoviedb.org/3/discover/movie?api_key=fa73fbb2a48739b593cdcc467151fa54&with_genres=35&append_to_response=videos`,
        `https://api.themoviedb.org/3/discover/movie?api_key=fa73fbb2a48739b593cdcc467151fa54&with_genres=80&append_to_response=videos`,
        `https://api.themoviedb.org/3/discover/movie?api_key=fa73fbb2a48739b593cdcc467151fa54&with_genres=99&append_to_response=videos`,
        `https://api.themoviedb.org/3/discover/movie?api_key=fa73fbb2a48739b593cdcc467151fa54&with_genres=12&append_to_response=videos`,
        `https://api.themoviedb.org/3/discover/movie?api_key=fa73fbb2a48739b593cdcc467151fa54&with_genres=18&append_to_response=videos`,
        `https://api.themoviedb.org/3/discover/movie?api_key=fa73fbb2a48739b593cdcc467151fa54&with_genres=10751&append_to_response=videos`,
        `https://api.themoviedb.org/3/discover/movie?api_key=fa73fbb2a48739b593cdcc467151fa54&with_genres=14&append_to_response=videos`,
        `https://api.themoviedb.org/3/discover/movie?api_key=fa73fbb2a48739b593cdcc467151fa54&with_genres=36&append_to_response=videos`,
        `https://api.themoviedb.org/3/discover/movie?api_key=fa73fbb2a48739b593cdcc467151fa54&with_genres=27&append_to_response=videos`,
        `https://api.themoviedb.org/3/discover/movie?api_key=fa73fbb2a48739b593cdcc467151fa54&with_genres=10402&append_to_response=videos`,
        `https://api.themoviedb.org/3/discover/movie?api_key=fa73fbb2a48739b593cdcc467151fa54&with_genres=9648&append_to_response=videos`,
        `https://api.themoviedb.org/3/discover/movie?api_key=fa73fbb2a48739b593cdcc467151fa54&with_genres=10749&append_to_response=videos`,
        `https://api.themoviedb.org/3/discover/movie?api_key=fa73fbb2a48739b593cdcc467151fa54&with_genres=878&append_to_response=videos`,
        `https://api.themoviedb.org/3/discover/movie?api_key=fa73fbb2a48739b593cdcc467151fa54&with_genres=10770&append_to_response=videos`,
        `https://api.themoviedb.org/3/discover/movie?api_key=fa73fbb2a48739b593cdcc467151fa54&with_genres=53&append_to_response=videos`,
        `https://api.themoviedb.org/3/discover/movie?api_key=fa73fbb2a48739b593cdcc467151fa54&with_genres=10752&append_to_response=videos`,
        `https://api.themoviedb.org/3/discover/movie?api_key=fa73fbb2a48739b593cdcc467151fa54&with_genres=37&append_to_response=videos`,
      ],
      imgSizes: {
        imgXxs: `http://image.tmdb.org/t/p/w92`,
        imgXs: `http://image.tmdb.org/t/p/w154`,
        imgSm: `http://image.tmdb.org/t/p/w185`,
        imgM: `http://image.tmdb.org/t/p/w342`,
        imgL: `http://image.tmdb.org/t/p/w500`,
        imgXl: `http://image.tmdb.org/t/p/w780`,
        imgOri: `http://image.tmdb.org/t/p/original`,
      },
    };
  },
  computed: {
    myListStore() {
      return this.$store.state.myList;
    },
  },
  methods: {
    async pullAll() {
      await axios
        .all(this.requestLinks.map((link) => axios.get(link)))
        .then((data) => {
          this.AllPulls = data;
          if (this.AllPulls[1].data.results.title === undefined) {
            this.AllPulls[1].data.results.title =
              this.AllPulls[1].data.results.name;
          }
          this.AllCarousels[0].ApiData = this.AllPulls[0].data.results;
          this.AllCarousels[1].ApiData = this.AllPulls[1].data.results;
          this.AllCarousels[2].ApiData = this.AllPulls[2].data.results;
          this.AllCarousels[3].ApiData = this.AllPulls[3].data.results;
          this.AllCarousels[4].ApiData = this.AllPulls[4].data.results;
          this.AllCarousels[5].ApiData = this.AllPulls[5].data.results;
          this.AllCarousels[6].ApiData = this.AllPulls[6].data.results;
          this.AllCarousels[7].ApiData = this.AllPulls[7].data.results;
          this.AllCarousels[8].ApiData = this.AllPulls[8].data.results;
          this.AllCarousels[9].ApiData = this.AllPulls[9].data.results;
          this.AllCarousels[10].ApiData = this.AllPulls[10].data.results;
          this.AllCarousels[11].ApiData = this.AllPulls[11].data.results;
          this.AllCarousels[12].ApiData = this.AllPulls[12].data.results;
          this.AllCarousels[13].ApiData = this.AllPulls[13].data.results;
          this.AllCarousels[14].ApiData = this.AllPulls[14].data.results;
          this.AllCarousels[15].ApiData = this.AllPulls[15].data.results;
          this.AllCarousels[16].ApiData = this.AllPulls[16].data.results;
          this.AllCarousels[17].ApiData = this.AllPulls[17].data.results;
          this.AllCarousels[18].ApiData = this.AllPulls[18].data.results;
          this.AllCarousels[19].ApiData = this.AllPulls[19].data.results;
          this.AllCarousels[20].ApiData = this.AllPulls[20].data.results;
          this.AllCarousels[21].ApiData = this.AllPulls[21].data.results;
        });
    },
    // openMovieModal(objectId) {
    //  document.querySelector(`#modal${objectId}`).classList.remove("noshow");
    // },
    // closeMovieModal(objectId) {
    //  document.querySelector(`#modal${objectId}`).classList.add("noshow");
    // },
    addToMyList(payload) {
      this.$store.commit("addToMyList", payload);
    },
  },
  mounted() {
    this.pullAll();
  },
};
</script>
<style scoped>
template {
  overflow: hidden;
}
/* Carousel Specific Styles (no card here) */
.fullCarousel {
  background: #000;
  color: #ddd;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #222;
  width: 400%;
}
.fullCarousel .listElement {
  display: flex;
  flex-direction: column;
  /* Carousel and Buttons */
  /* Utility Classes */
  /* Card Specific Styling */
}
.fullCarousel .listElement .listTitle {
  margin: 1rem;
  text-align: left;
}
.fullCarousel .listElement .carouselContainer {
  display: flex;
  position: relative;
  display: flex;
  border-bottom: 1px solid #222;
  margin: 0;
}
.fullCarousel .listElement .carouselContainer .carouselBtn {
  background: #333;
  color: #fff;
  font-weight: 900;
  border: 1px solid #444;
  z-index: 5;
  height: 15rem;
  margin: 0.5rem;
  opacity: 0.8;
}
.fullCarousel .listElement .carouselContainer .btn-right {
  position: absolute;
  right: 0;
}
.fullCarousel .listElement .carouselContainer .btn-right:hover {
  font-size: 1.5rem;
  cursor: pointer;
}
.fullCarousel .listElement .carouselContainer .btn-left {
  position: absolute;
  left: 0;
}
.fullCarousel .listElement .carouselContainer .btn-left:hover {
  font-size: 1.5rem;
  cursor: pointer;
}
.fullCarousel .listElement .myListBtn {
  padding: 0.3rem 1rem;
  font-size: 1.15rem;
  background: #333;
  color: #fff;
}
.fullCarousel .listElement .myListBtn:hover {
  cursor: pointer;
  background: #222;
  color: #eee;
}
.fullCarousel .listElement .noshow {
  /* display: none;
	 */
}
.fullCarousel .listElement .carouselListElement {
  list-style: none;
  display: flex;
  width: inherit;
}
.fullCarousel .listElement .carouselListElement ul {
  display: flex;
  /* grid-template-columns: repeat(20, 5%);
	 */
  width: inherit;
}
.fullCarousel .listElement .carouselListElement ul ul > * {
  flex-basis: 100%;
}
.fullCarousel .listElement .carouselListElement ul li {
  width: 20vw;
  background: #000;
  z-index: 5;
  align-items: top;
  text-align: center;
  margin: 0.3rem;
  text-decoration: none;
  color: #ddd;
}
.fullCarousel .listElement .carouselListElement ul li h4 {
  font-size: 1.3rem;
  color: #ddd;
}
.fullCarousel .listElement .carouselListElement ul .card:hover {
  display: flex;
  flex-direction: row;
  transform: scale(1.05);
  cursor: pointer;
}
.fullCarousel .listElement .carouselListElement ul .card:hover .movieModal {
  display: flex;
  flex-direction: column;
  color: #fff;
}
.fullCarousel
  .listElement
  .carouselListElement
  ul
  .card:hover
  .movieModal
  .noshow {
  display: default;
}
.fullCarousel
  .listElement
  .carouselListElement
  ul
  .card:hover
  .movieModal
  .noshow
  h4 {
  margin: 0;
}
.fullCarousel
  .listElement
  .carouselListElement
  ul
  .card:hover
  .movieModal
  .noshow
  p {
  font-size: 1rem;
}
.card {
  width: 20%;
}
</style>
<!-- <style lang="scss" scoped>
template {
 overflow: hidden;
}

/* Carousel Specific Styles (no card here) */
.fullCarousel {
 background: #000;
 color: #ddd;
 margin: 0;
 padding: 0;
 border-bottom: 1px solid #222;
 width: 400%;
 .listElement {
  display: flex;
  flex-direction: column;
  .listTitle {
   margin: 1rem;
   text-align: left;
  }

  /* Carousel and Buttons */
  .carouselContainer {
   display: flex;
   position: relative;
   display: flex;
   border-bottom: 1px solid #222;
   margin: 0;
   .carouselBtn {
    background: #333;
    color: #fff;
    font-weight: 900;
    border: 1px solid #444;
    z-index: 5;
    height: 15rem;
    margin: 0.5rem;
    opacity: 0.8;
   }
   .btn-right {
    position: absolute;
    right: 0;
    &:hover {
     font-size: 1.5rem;
     cursor: pointer;
    }
   }
   .btn-left {
    position: absolute;
    left: 0;
    &:hover {
     font-size: 1.5rem;
     cursor: pointer;
    }
   }
  }

  /* Utility Classes */
  .myListBtn {
   padding: 0.3rem 1rem;
   font-size: 1.15rem;
   background: #333;
   color: #fff;
   &:hover {
    cursor: pointer;
    background: #222;
    color: #eee;
   }
  }
  .noshow {
   /* display: none; */
  }
  /* Card Specific Styling */
  .carouselListElement {
   list-style: none;
   display: flex;
   width: inherit;
   ul {
    display: flex;
    /* grid-template-columns: repeat(20, 5%); */
    width: inherit;
    ul > * {
     flex-basis: 100%;
    }
    li {
     width: 20vw;
     background: #000;
     z-index: 5;
     align-items: top;
     text-align: center;
     margin: 0.3rem;
     text-decoration: none;
     color: #ddd;
     h4 {
      font-size: 1.3rem;
      color: #ddd;
     }
    }
    .card:hover {
     display: flex;
     flex-direction: row;
     transform: scale(1.05);
     cursor: pointer;
     .movieModal {
      display: flex;
      flex-direction: column;
      color: #fff;
      .noshow {
       display: default;

       h4 {
        margin: 0;
       }
       p {
        font-size: 1rem;
       }
      }
     }
    }
   }
  }
 }
}
.card {
 width: 20%;
}
</style> -->
