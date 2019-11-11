<template>
  <van-tabs v-model="active" line-height="2" line-width="60" color="#37c3ff">
    <van-tab title="软件">
      <ClassSoft />
    </van-tab>
    <van-tab title="游戏">
      <Classgame />
    </van-tab>
  </van-tabs>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import ClassSoft from "../components/ClassSoft.vue";
import Classgame from "../components/Classgame.vue";

Vue.use(Tab).use(Tabs);

export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    ClassSoft,
    Classgame
  }
};
</script>