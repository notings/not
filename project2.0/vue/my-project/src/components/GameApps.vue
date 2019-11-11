<template>
  <div class="hotapp">
    <h2 class="tit">
      新游推荐
      <van-icon name="arrow" />
    </h2>
    <div class="hot-item">
      <ul class="hot-ul">
        <li v-for="(i, index) in hotapp" :key="index">
          <div class="hot-img">
            <img :src="i.imgurl" alt />
          </div>
          <h3 class="tit-h" v-text="i.title"></h3>
          <p v-text="i.size"></p>
          <span class="down">下载</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

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
  created() {
    this.onLoad()
  },
  methods: {
    onLoad() {
      this.$axios.get("http://localhost:3000/games").then(({ data }) => {
        this.hotapp = this.hotapp.concat(data);
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.hotapp.length >=10) {
          this.finished = true;
        }
      });
      // window.console.log("到底部了");
    },
  }
};
</script>