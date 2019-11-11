<template>
  <div class="top">
    <div class="header">
      <div class="logo">
        <img class="imgs" src="//ascdn.baidu.com/magneton/imgs/logo_f9cd37f3.png" alt />
      </div>
      <div class="inputsearch" @click="search()">
        <van-icon class="search-icon" name="search" />
        <div class="search-text">24小时热搜</div>
      </div>
      <div class="icons" @click="hrefLogin()">
        <van-icon name="contact" />
      </div>
    </div>

    <div class="option">
      <van-tabs v-model="active" line-height="1" line-width="20" color="black">
        <van-tab class="tabH" to="/main/choiceness" title="精选"></van-tab>
        <van-tab class="tabH" to="/main/software" title="软件"></van-tab>
        <van-tab class="tabH" to="/main/game" title="游戏"></van-tab>
        <van-tab class="tabH" to="/main/classify" title="分类"></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);
Vue.use(Icon);

export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    //跳转页面
    hrefLogin() {
      this.$router.push({ name: "login" });
      this.$router.go(0);
      // window.location.reload();
    },
    search() {
      this.$router.push({ name: "search" });
    }
  }
};
</script>



