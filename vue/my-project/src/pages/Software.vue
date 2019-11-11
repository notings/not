<template>
  <div class="software">
    <Nav />
    <SoftApp/>
    <SoftPopu/>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import SoftApp from "../components/SoftApp.vue";
import SoftPopu from "../components/SoftPopu.vue";

export default {
  components: {
    Nav,
    SoftApp,
    SoftPopu
  }
};
</script>