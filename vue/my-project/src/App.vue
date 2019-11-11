<template>
  <div id="app">
    <!-- <Header /> -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>

// import Header from "./pages/Header.vue";
export default {
 name: "app",
  data() {
    return {
      test: "lon",
    };
  },
  components: {
    // Header
  }
};
</script>

