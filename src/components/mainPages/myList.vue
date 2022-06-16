<template>
  <div v-if="this.myListHasData === true" class="mylistContainer">
    <ul>
      <li
        v-for="item of this.myListLocal"
        :key="item"
        class="card carouselList"
        :id="item.id"
      >
        <img
          v-bind:src="'http://image.tmdb.org/t/p/w185' + item.backdrop_path"
        />
        <h4>{{ item.title }}</h4>
        <h4 v-if="item.title === undefined">{{ item.name }}</h4>
        <div class="noshow">
          <p>{{ item.overview }}</p>
          <button
            @click="
              removeFromMyList(item);
              getLocalStorage();
            "
          >
            Remove from My List
          </button>
        </div>
      </li>
    </ul>
  </div>
  <div v-else>Wow, looks like your list is empty...</div>
</template>
<script>
export default {
  name: "myList",
  data() {
    return {
      myListHasData: false,
      myListLocal: [],
    };
  },
  computed: {
    myListStore() {
      return this.$store.state.myList;
    },
  },
  methods: {
    getLocalStorage() {
      if (localStorage.getItem("myList") !== null) {
        let i = JSON.parse(localStorage.getItem("myList")).length;
        if (i > 0) {
          this.myListHasData = true;
          this.myListLocal = JSON.parse(localStorage.getItem("myList"));
        } else {
          this.myListLocal = undefined;
        }
      }
    },
    removeFromMyList(payload) {
      this.$store.commit("removeFromMyList", payload.id);
    },
  },
  mounted() {
    this.getLocalStorage();
  },
};
</script>
<style scoped>
#app {
  overflow: hidden;
  background: #000;
}
template .emptyMessage {
  height: 1000rem;
  background: #000;
}

ul {
  background: #000;
  list-style: none;
}
.top-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100vw;
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
/* Carousel and Buttons */
.carouselContainer {
  display: flex;
  position: relative;
  display: flex;
  border-bottom: 1px solid #222;
  margin: 0;
  /* Utility Classes */
  /* Card Specific Styling */
}
.carouselContainer .carouselBtn {
  background: #333;
  color: #fff;
  font-weight: 900;
  border: 1px solid #444;
  z-index: 5;
  height: 15rem;
  margin: 0.5rem;
  opacity: 0.8;
}
.carouselContainer .btn-right {
  position: absolute;
  right: 0;
}
.carouselContainer .btn-right:hover {
  font-size: 1.5rem;
  cursor: pointer;
}
.carouselContainer .btn-left {
  position: absolute;
  left: 0;
}
.carouselContainer .btn-left:hover {
  font-size: 1.5rem;
  cursor: pointer;
}
.carouselContainer .noshow {
  display: none;
}
.carouselContainer .carouselListElement {
  list-style: none;
  display: flex;
}
.carouselContainer .carouselListElement li {
  width: 20%;
  background: #000;
  z-index: 5;
  align-items: top;
  text-align: center;
  margin: 0.3rem;
  text-decoration: none;
  color: #ddd;
}
.carouselContainer .carouselListElement li h4 {
  font-size: 1.3rem;
  color: #ddd;
}
.carouselContainer .carouselListElement .card:hover {
  display: flex;
  flex-direction: row;
  transform: scale(1.05);
  cursor: pointer;
}
.carouselContainer .carouselListElement .card:hover .movieModal {
  display: flex;
  flex-direction: column;
  color: #fff;
}
.carouselContainer .carouselListElement .card:hover .movieModal h4 {
  margin: 0;
}
.carouselContainer .carouselListElement .card:hover .movieModal p {
  font-size: 1rem;
}
</style>
<!-- <style lang="scss" scoped>
template {
 overflow: hidden;
 background: #000;
 .emptyMessage {
  height: 1000rem;
 }
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

 /* Utility Classes */
 .noshow {
  display: none;
 }
 /* Card Specific Styling */
 .carouselListElement {
  list-style: none;
  display: flex;
  li {
   width: 20%;
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
</style> -->
