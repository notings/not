<template>
  <div class="search">
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      @click="clear"
      show-action
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <div class="label" v-show="label">
      <div class="left">
        <h3>软件热词</h3>
        <div class="terms">
          <a href="###">QQ</a>
          <a href="###" class="color">省省回头车</a>
          <a href="###">爱奇艺影视</a>
          <a href="###">王牌战争</a>
          <a href="###" class="color">TabTab</a>
          <a href="###" class="color">奇迹暖暖</a>
          <a href="###">影视</a>
          <a href="###">方舟</a>
          <a href="###">chrome浏览器</a>
          <a href="###">宝宝bus</a>
        </div>
      </div>
      <div class="right">
        <h3>软件热词</h3>
        <div class="terms">
          <a href="###">绝地求生</a>
          <a href="###">刺激战场</a>
          <a href="###">元气骑士</a>
          <a href="###" class="color">口袋妖怪</a>
          <a href="###">奶块</a>
          <a href="###" class="color">火柴人联盟</a>
          <a href="###">贪吃蛇</a>
          <a href="###" class="color">我的安其拉</a>
          <a href="###">滚动的天空</a>
          <a href="###">星星消除</a>
        </div>
      </div>
    </div>
    <div class="search-intra" v-show="isShow">
      <ul class="popu-ul">
        <li v-for="(i,index) in searchg" :key="index"> 
          <div class="popularity-img">
            <img :src="i.imgurl" alt />
          </div>
          <div class="introduce">
            <h4 class="tit-h" v-text="i.name"></h4>
            <p class="size">
              <span v-text="i.num"></span>
              <span v-text="i.size"></span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import { Search } from "vant";

Vue.use(Search);
export default {
  data() {
    return {
      value: "",
      isShow: false,
      label: true,
      searchg: []
    };
  },

  methods: {
    clear() {
      this.value = "";
      this.isShow = false;
      this.label = true;     
    },
    onSearch() {
      this.$store.dispatch("setAuthor", {
        value: this.value
      });
      // window.console.log(this.value);
      if (this.value) {
        this.isShow = true;
        this.label = false;
        let val = this.value;
        this.$axios
          .get("http://localhost:3000/search", {
            params: {
              values: val
            }
          })
          .then(({ data }) => {
            // window.console.log(data);
            this.searchg = data;
          });
      } else {
        alert("请输入内容！！！");
      }
    }
  }
};
</script>