<template>
  <van-tabs v-model="active" line-height="1" line-width="20" color="black">
    <van-tab class="tabH" title="精选">
      <Choiceness/>
    </van-tab>
    <van-tab class="tabH" title="软件"><Software/></van-tab>
    <van-tab class="tabH" title="游戏"><GameNav/></van-tab>
    <van-tab class="tabH" title="分类"><Classify/></van-tab>
  </van-tabs>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs, Sticky } from "vant";
import Choiceness from "../pages/Choiceness.vue";
import Software from "../pages/Software.vue";
import GameNav from "../pages/Game.vue"
import Classify from "../pages/Classify.vue"

Vue.use(Tab)
  .use(Tabs)
  .use(Sticky);

export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    Choiceness,
    Software,
    GameNav,
    Classify
  }
};
</script>
