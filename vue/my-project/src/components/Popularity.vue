<template>
  <div class="popularityApp">
    <h2 class="tit">
      人气应用风向标
      <van-icon name="arrow" />
    </h2>
    <div class="Popularity-item">
      <ul class="popu-ul">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <li v-for="(r,index) in hotapp" :key="index" @click="toDetal(index)">
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
    onLoad() {
      this.$axios.get("http://localhost:3000/hotapp").then(({ data }) => {
        this.hotapp = this.hotapp.concat(data);
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.hotapp.length >= 20) {
          this.finished = true;
        }
      });
      // window.console.log("到底部了");
    },
    // 跳转详情页
    toDetal(index) {
      this.$router.push({
        name: "detail",
        params: {
          id: index
        }
      });
    }
  }
};
</script>