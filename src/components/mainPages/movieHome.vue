<template>
  <!-- This will be the highlight -->
  <BigPic />
  <div id="movies_showcase">
    <!-- This is where all the movies will populate -->
    <!-- <myList /> -->
    <axiosPulls />
  </div>
</template>
<script>
import axiosPulls from "../carousels/getters/axiosPulls.vue";
import BigPic from "../carousels/getters/bigPicture.vue";
// import myList from "../mainPages/myList.vue";

export default {
  name: "movieHome",
  components: {
    axiosPulls,
    BigPic,
    //  myList
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
