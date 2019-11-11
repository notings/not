<template>
  <div class="choiceness">
    <Swipe />
    <HotApp />
    <Popularity />
  </div>
</template>

<script>
import Swipe from "../components/Swipe";
import HotApp from "../components/HotApp.vue";
import Popularity from "../components/Popularity.vue";
export default {
  components: {
    Swipe,
    HotApp,
    Popularity
  }
};
</script>