<template>
  <div class="list">
    <div class="list-head">
      <div class="head-icon">
        <van-icon name="arrow-left" size="20" @click="back()" />
      </div>
      <div class="head-name">影视播放</div>
      <div class="head-search" @click="search()">
        <van-icon name="search" size="20" />
      </div>
    </div>
    <div class="buttona">
        <button class="btna">全部</button>
        <button class="btna">视频</button>
        <button class="btna">音乐</button>
        <button class="btna">铃声</button>
        <button class="btna">电台</button>
    </div>
    <div class="list-content">
      <div class="Popularity-item">
        <ul class="popu-ul">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <li v-for="(r,index) in hotapp" :key="index">
              <div class="popularity-img">
                <img :src="r.imgurl" alt />
              </div>
              <div class="introduce">
                <h4 class="tit-h" v-text="r.name"></h4>
                <p class="size">
                  <span v-text="r.num"></span>
                  <span v-text="r.size"></span>
                </p>
              </div>
              <div class="download">
                <span class="down">下载</span>
              </div>
            </li>
          </van-list>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
import { List } from "vant";

Vue.use(List);
Vue.use(Icon);
export default {
   data() {
    return {
      list: [],
      loading: false,
      finished: false,
      hotapp: []
    };
  },
  methods: {
    back(){
       this.$router.go(-1);
    },
    search(){
       this.$router.push({ name: "search" });
    },
    onLoad() {
      this.$axios.get("http://localhost:3000/softpopu").then(({ data }) => {
        this.hotapp = this.hotapp.concat(data);
        // 加载状态结束
        window.console.log(this.hotapp);
        this.loading = false;
        // 数据全部加载完成
        if (this.hotapp.length >=7) {
          this.finished = true;
        }
      });
      // window.console.log("到底部了");
    },
  }
};
</script>