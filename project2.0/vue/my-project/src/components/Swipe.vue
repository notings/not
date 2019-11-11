<template>
  <div class="swipe">

    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <nav class="navs">
        <div class="wraps">
          <img class="navImg" src="//ascdn.baidu.com/appsearch/magneton/homepage_rank.png"/>
          <span @click="list()">风云应用</span>
        </div>
        <div class="wraps">
          <img class="navImg" src="//ascdn.baidu.com/appsearch/magneton/homepage_praise.png"/>
          <span @click="list()">轻蜂优选</span>
        </div>
        <div class="wraps">
          <img class="navImg" src="//ascdn.baidu.com/appsearch/magneton/homepage_recommend.png"/>
           <span @click="list()">格调青年</span>
        </div>
    </nav>
    
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import { Lazyload } from "vant";
Vue.use(Lazyload);
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      images: [
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1222885799,4105197580&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2902542888,3173204706&fm=15&gp=0.jpg"
      ]
    };
  },
   methods: {
     list(){
        this.$router.push({ name: "list" });
     }
   }
};
</script>