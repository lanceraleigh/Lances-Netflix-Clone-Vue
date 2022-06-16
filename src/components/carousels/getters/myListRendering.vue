<template>
  <h1 class="listTitle">My List</h1>
  <div class="carousel">
    <button @click="leftScroll" class="btn-left">&lt;</button>
    <ul>
      <li
        v-for="object of myListStore"
        :key="object"
        class="card carouselList"
        :id="object.id"
      >
        <img
          v-bind:src="'http://image.tmdb.org/t/p/w185' + object.backdrop_path"
        />
        <h4>{{ object.title }}</h4>
        <h4 v-if="object.title === undefined">{{ object.name }}</h4>
        <button @click="openMovieModal(object.id)" class="cardButton">
          Open
        </button>
        <div :id="'modal' + object.id" class="movieModal noshow">
          <button @click="closeMovieModal(object.id)" class="closing">X</button>

          <h2>{{ object.title }}</h2>
          <p>{{ object.overview }}</p>

          <button @click="addToMyList(object)">Add to My List</button>
        </div>
      </li>
    </ul>
    <button @click="rightScroll" class="btn-right">></button>
  </div>
</template>

<script>
export default {
  name: "myListRendering",
  computed() {
    {
      return this.$store.state.myList;
    }
  },
};
</script>
<!-- <style lang="scss" scoped>
template {
 overflow: hidden;
}
.carousel {
 display: flex;
 .btn-left,
 .btn-right {
  background: #333;
  color: #fff;
  font-weight: 900;
  border: 1px solid #444;
  z-index: 5;
  position: absolute;
  height: 15rem;
  margin: 0.5rem;
  opacity: 0.8;
 }
 .btn-right {
  right: 0;
 }
 .btn-left {
  left: 0;
 }
 .btn-left:hover,
 .btn-right:hover {
  font-size: 1.5rem;
  cursor: pointer;
 }
}
.fullCarousel {
 background: #000;
 color: #ddd;
 .listElement {
  display: flex;
  flex-direction: column;
  h1 {
   margin: 1rem;
   text-align: left;
  }
  .carousel {
   display: flex;
   ul {
    display: flex;
    border-bottom: 1px solid #222;

    li {
     background: #000;
     list-style: none;
     .movieModal {
      display: flex;
      color: #fff;
     }
     .noshow {
      display: none;
     }
    }
   }
  }
 }
}
.fullCarousel {
 background: #000;
 color: #ddd;
 margin: 0;
 padding: 0;
 .listElement {
  display: flex;
  flex-direction: column;
  .carousel {
   display: flex;
   ul {
    display: flex;
    border-bottom: 1px solid #222;
    margin: 0;
    button:hover {
     cursor: pointer;
    }
    h1 {
     text-align: left;
    }
    li {
     background: #000;
     list-style: none;
     z-index: 5;
     .cardButton {
      background: #000;
      color: #fff;
     }
     .noshow {
      display: none;
      z-index: 1;
     }
    }
   }
  }
 }
}
.card {
 display: flex;
 flex-direction: column;
 align-items: center;
 text-align: center;
 font-size: 1.5rem;
 margin: 0.3rem;
 text-decoration: none;
 color: #ddd;
 a {
  text-decoration: none;
  color: #ddd;
 }
 h4 {
  font-size: 1.3rem;
  color: #ddd;
 }
}
.card:hover {
 transform: scale(1.05);
 /* z-index: 2; */
}
</style> -->
