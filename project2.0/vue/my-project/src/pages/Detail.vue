<template>
  <div class="detail">
    <div class="det-header">
      <ul class="head-ul">
        <li @click="goMain()">精选</li>
        <li @click="goSoft()">软件</li>
        <li @click="goGame()">游戏</li>
        <li @click="goClass()">分类</li>
        <li>
          <van-icon name="search" size="16" @click="goSearch()" />
        </li>
      </ul>
    </div>
    <div class="det-tu">
      <div class="det-tus">
        <img src="//ascdn.baidu.com/magneton/imgs/logo_f9cd37f3.png" alt />
      </div>
    </div>
    <div class="det-content" v-for="(d,index) in hotapps" :key="index">
      <div class="cont-img">
        <img :src="d.imgurl" alt />
      </div>
      <h3 class="cont-hh" v-text="d.name"></h3>
      <p class="cont-pp">
        <span v-text="d.num"></span>•
        <span v-text="d.size"></span>
      </p>
    </div>
    <div class="det-download">
      <div class="down-safe" @click="onScelect()">安全下载</div>
      <van-action-sheet v-model="show" title="下载中...">
        <p class="item-bai">
          百度手机助手正在下载
          <span>王者荣耀</span>
        </p>
        <p class="item-du">打开手机助手立即安装</p>
        <div class="down-img">
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2902542888,3173204706&fm=15&gp=0.jpg"
            alt
          />
        </div>
      </van-action-sheet>
      <div class="down-Ordinary">普通下载</div>
    </div>
    <div class="det-intro">
      <div class="intro-img">
        <ul>
          <li>
            <div class="intro-src">
              <img
                src="//timg01.bdimg.com/timg?appsite&imgtype=4&quality=100&size=b240_360&sec=1572924171&nocache&di=eb572a2c13e067af31a821d857ac3f57&src=http%3A%2F%2Fgdown.baidu.com%2Fimg%2F0%2F480_800%2F61a361d19e0c2aa73f2614e787103699.jpg"
                alt
              />
            </div>
          </li>
          <li>
            <div class="intro-src">
              <img
                src="//timg01.bdimg.com/timg?appsite&imgtype=4&quality=100&size=b240_360&sec=1572924171&nocache&di=eb572a2c13e067af31a821d857ac3f57&src=http%3A%2F%2Fgdown.baidu.com%2Fimg%2F0%2F480_800%2F61a361d19e0c2aa73f2614e787103699.jpg"
                alt
              />
            </div>
          </li>
          <li>
            <div class="intro-src">
              <img
                src="//timg01.bdimg.com/timg?appsite&imgtype=4&quality=100&size=b240_360&sec=1573012785&nocache&di=31dbdd3f6e114e3d86a71aaf69b55cf8&src=http%3A%2F%2Fgdown.baidu.com%2Fimg%2F0%2F480_800%2Fbddf45999b5fbda37e66cd4c7ab0f82f.jpg"
                alt
              />
            </div>
          </li>
          <li>
            <div class="intro-src">
              <img
                src="//timg01.bdimg.com/timg?appsite&imgtype=4&quality=100&size=b240_360&sec=1573012785&nocache&di=31dbdd3f6e114e3d86a71aaf69b55cf8&src=http%3A%2F%2Fgdown.baidu.com%2Fimg%2F0%2F480_800%2Fbddf45999b5fbda37e66cd4c7ab0f82f.jpg"
                alt
              />
            </div>
          </li>
        </ul>
      </div>
      <div class="intro-title">
        <p>5V5王者峡谷、5V5深渊大乱斗、以及3V3、1V1等多样模式一键体验，热血竞技尽享快感！海量英雄随心选择，精妙配合默契作战！10秒实时跨区匹配，与好友组队登顶超强王者！操作简单易上手，一血、超神，极致还原经典体验！实力操作公平对战，回归MOBA初心！赶快加入《王者荣耀》，随时开启你的团战！</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
import { ActionSheet } from "vant";

Vue.use(Icon).use(ActionSheet);

export default {
  data() {
    return {
      show: false,
      hotapps: []
    };
  },
  created() {
    this.onLoad();
  },
  methods: {
    //跳转页面
    goMain() {
      this.$router.push({ name: "gomain" });
    },
    goSoft() {
      this.$router.push({ name: "gosoft" });
    },
    goGame() {
      this.$router.push({ name: "gogame" });
    },
    goClass() {
      this.$router.push({ name: "goclass" });
    },
    goSearch() {
      this.$router.push({ name: "gosearch" });
    },
    onScelect() {
      this.show = true;
    },
    onLoad() {
      let gid = this.$route.params.id + 1;
      // window.console.log(gid);
      this.$axios
        .get("http://localhost:3000/detailts", {
          params: {
            id: gid
          }
        })
        .then(({ data }) => {
          // window.console.log(data);
          this.hotapps = data;
        });
    }
  },
  watch: {
    $route(a, b) {
      if (a != b) {
        this.onLoad();
      }
    }
  }
};
</script>