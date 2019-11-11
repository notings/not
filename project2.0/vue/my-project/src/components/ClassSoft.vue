<template>
  <div class="classsoft">
    <div class="wape-item" @click="listb()">
      <div class="name">
        <div class="img-wrap">
          <van-icon name="comment" color="orangered" size="22" />
        </div>
        <h3 class="h-wrap">
          社交通讯
          <van-icon name="play" color="#ccc" size="10" />
        </h3>
      </div>
      <div class="content">
        <ul class="content-ul">
          <li>
            <span>聊天</span>
          </li>
          <li>
            <span>社区</span>
          </li>
          <li>
            <span class="none">通信</span>
          </li>
          <li>
            <span>婚恋</span>
          </li>
          <li>
            <span>直播</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="wape-item" @click="lista()">
      <div class="name">
        <div class="img-wrap">
          <van-icon name="video" color="royalblue" size="22" />
        </div>
        <h3 class="h-wrap">
          影音播放
          <van-icon name="play" color="#ccc" size="10" />
        </h3>
      </div>
      <div class="content">
        <ul class="content-ul">
          <li>
            <span>视频</span>
          </li>
          <li>
            <span>音乐</span>
          </li>
          <li>
            <span class="none">铃声</span>
          </li>
          <li>
            <span>电台</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="wape-item">
      <div class="name">
        <div class="img-wrap">
          <van-icon name="setting" color="springgreen" size="22" />
        </div>
        <h3 class="h-wrap">
          实用工具
          <van-icon name="play" color="#ccc" size="10" />
        </h3>
      </div>
      <div class="content">
        <ul class="content-ul">
          <li>
            <span>输入法</span>
          </li>
          <li>
            <span>浏览器</span>
          </li>
          <li>
            <span class="none">天气</span>
          </li>
          <li>
            <span>日历</span>
          </li>
          <li>
            <span class="none">计算器</span>
          </li>
          <li>
            <span class="none">wi-if</span>
          </li>
          <li>
            <span class="none">扫码</span>
          </li>
          <li>
            <span>手电筒</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="wape-item">
      <div class="name">
        <div class="img-wrap">
          <van-icon name="gold-coin" color="orangered" size="22" />
        </div>
        <h3 class="h-wrap">
          金融理财
          <van-icon name="play" color="#ccc" size="10" />
        </h3>
      </div>
      <div class="content">
        <ul class="content-ul">
          <li>
            <span>股票基金</span>
          </li>
          <li>
            <span>银行</span>
          </li>
          <li>
            <span class="none">记账</span>
          </li>
          <li>
            <span>支付</span>
          </li>
          <li>
            <span>彩票</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="wape-item">
      <div class="name">
        <div class="img-wrap">
          <van-icon name="bag" color="plum" size="22" />
        </div>
        <h3 class="h-wrap">
          网上购物
          <van-icon name="play" color="#ccc" size="10" />
        </h3>
      </div>
      <div class="content">
        <ul class="content-ul">
          <li>
            <span>购物</span>
          </li>
          <li>
            <span>团购特卖</span>
          </li>
          <li>
            <span class="none">淘宝</span>
          </li>
          <li>
            <span>商城</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="wape-item">
      <div class="name">
        <div class="img-wrap">
          <van-icon name="graphic" color="darkseagreen" size="22" />
        </div>
        <h3 class="h-wrap">
          手机管理
          <van-icon name="play" color="#ccc" size="10" />
        </h3>
      </div>
      <div class="content">
        <ul class="content-ul">
          <li>
            <span>安全</span>
          </li>
          <li>
            <span>优化</span>
          </li>
          <li>
            <span class="none">Root</span>
          </li>
          <li>
            <span>文件管理</span>
          </li>
          <li>
            <span>省电</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="wape-item">
      <div class="name">
        <div class="img-wrap">
          <van-icon name="photograph" color="plum" size="22" />
        </div>
        <h3 class="h-wrap">
          拍摄美化
          <van-icon name="play" color="#ccc" size="10" />
        </h3>
      </div>
      <div class="content">
        <ul class="content-ul">
          <li>
            <span>拍摄美化</span>
          </li>
          <li>
            <span>照片</span>
          </li>
          <li>
            <span class="none">摄像</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="wape-item">
      <div class="name">
        <div class="img-wrap">
          <van-icon name="map-marked" color="springgreen" size="22" />
        </div>
        <h3 class="h-wrap">
          旅行出游
          <van-icon name="play" color="#ccc" size="10" />
        </h3>
      </div>
      <div class="content">
        <ul class="content-ul">
          <li>
            <span>地图导航</span>
          </li>
          <li>
            <span>购票</span>
          </li>
          <li>
            <span class="none">旅行攻略</span>
          </li>
          <li>
            <span>购票</span>
          </li>
          <li>
            <span>公交地铁</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="wape-item">
      <div class="name">
        <div class="img-wrap">
          <van-icon name="column" color="orangered" size="22" />
        </div>
        <h3 class="h-wrap">
          资讯阅读
          <van-icon name="play" color="#ccc" size="10" />
        </h3>
      </div>
      <div class="content">
        <ul class="content-ul">
          <li>
            <span>电子书</span>
          </li>
          <li>
            <span>新闻</span>
          </li>
          <li>
            <span class="none">听书</span>
          </li>
          <li>
            <span>漫画</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="wape-item">
      <div class="name">
        <div class="img-wrap">
          <van-icon name="star" color="royalblue" size="22" />
        </div>
        <h3 class="h-wrap">
          娱乐八卦
          <van-icon name="play" color="#ccc" size="10" />
        </h3>
      </div>
      <div class="content">
        <ul class="content-ul">
          <li>
            <span>星座占卜</span>
          </li>
          <li>
            <span>笑话</span>
          </li>
          <li>
            <span class="none">恶搞</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="wape-item">
      <div class="name">
        <div class="img-wrap">
          <van-icon name="graphic" color="royalblue" size="22" />
        </div>
        <h3 class="h-wrap">
          手机美化
          <van-icon name="play" color="#ccc" size="10" />
        </h3>
      </div>
      <div class="content">
        <ul class="content-ul">
          <li>
            <span>桌面壁纸</span>
          </li>
          <li>
            <span>锁屏</span>
          </li>
          <li>
            <span class="none">字体</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="wape-item">
      <div class="name">
        <div class="img-wrap">
          <van-icon name="bag" color="springgreen" size="22" />
        </div>
        <h3 class="h-wrap">
          效率办公
          <van-icon name="play" color="#ccc" size="10" />
        </h3>
      </div>
      <div class="content">
        <ul class="content-ul">
          <li>
            <span>效率</span>
          </li>
          <li>
            <span>笔记</span>
          </li>
          <li>
            <span class="none">邮箱</span>
          </li>
          <li>
            <span class="none">名片</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="wape-item">
      <div class="name">
        <div class="img-wrap">
          <van-icon name="manager" color="palevioletred" size="22" />
        </div>
        <h3 class="h-wrap">
          教育学习
          <van-icon name="play" color="#ccc" size="10" />
        </h3>
      </div>
      <div class="content">
        <ul class="content-ul">
          <li>
            <span>外语学习</span>
          </li>
          <li>
            <span>考试作业</span>
          </li>
          <li>
            <span class="none">驾考</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="wape-item">
      <div class="name">
        <div class="img-wrap">
          <van-icon name="card" color="yellow" size="22" />
        </div>
        <h3 class="h-wrap">
          生活服务
          <van-icon name="play" color="#ccc" size="10" />
        </h3>
      </div>
      <div class="content">
        <ul class="content-ul">
          <li>
            <span>生活票务</span>
          </li>
          <li>
            <span>求职</span>
          </li>
          <li>
            <span class="none">美食外卖</span>
          </li>
          <li>
            <span>房产居家</span>
          </li>
          <li>
            <span>便捷生活</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="wape-item">
      <div class="name">
        <div class="img-wrap">
          <van-icon name="add" color="yellow" size="22" />
        </div>
        <h3 class="h-wrap">
          医疗健康
          <van-icon name="play" color="#ccc" size="10" />
        </h3>
      </div>
      <div class="content">
        <ul class="content-ul">
          <li>
            <span>健身减肥</span>
          </li>
          <li>
            <span>医疗</span>
          </li>
          <li>
            <span class="none">女性健康</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="wape-item">
      <div class="name">
        <div class="img-wrap">
          <van-icon name="like" color="orangered" size="22" />
        </div>
        <h3 class="h-wrap">
          母婴育儿
          <van-icon name="play" color="#ccc" size="10" />
        </h3>
      </div>
      <div class="content">
        <ul class="content-ul">
          <li>
            <span>怀孕备孕</span>
          </li>
          <li>
            <span>育儿社区</span>
          </li>
          <li>
            <span class="none">儿童教育</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
   methods: {
    //跳转页面
    lista() {
      this.$router.push({ name: "lista" });
    },
    listb() {
      this.$router.push({ name: "listb" });
    }
   }
};
</script>