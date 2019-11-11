<template>
  <div class="popularityApp">
    <h2 class="tit">
      影音播放
      <van-icon name="arrow" />
    </h2>

    <div class="Popularity-item">
      <ul class="popu-ul">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoads">
          <li v-for="(t,index) in softpopu" :key="index">
              <div class="popularity-img">
                <img
                  :src="t.imgurl"
                  alt
                />
              </div>
              <div class="introduce">
                <h4 class="tit-h" v-text="t.name"></h4>
                <p class="size">
                  <span v-text="t.num"></span>
                  <span v-text="t.size"></span>
                </p>
                <p class="intro" v-text="t.intra"></p>
              </div>
              <div class="download">
                <span class="down">下载</span>
              </div>
          </li>
        </van-list>
      </ul>
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
      softpopu: []
    };
  },
  created() {
    this.$parent.$data.test = "abc";
    // window.console.log(this);
  },
  methods: {
    onLoads() {
      this.$axios.get("http://localhost:3000/softpopu").then(({ data }) => {
        this.softpopu = this.softpopu.concat(data);
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.softpopu.length >= 20) {
          this.finished = true;
        }
      });
      window.console.log("到底部了");
    }
  }
};
</script>