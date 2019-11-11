<template>
  <div class="login">
    <div class="login-item">
      <p>个人中心</p>
      <div class="wrap-items">
        <p v-if="users" v-text="users"></p>
        <van-icon v-else name="user-circle-o" color="#fff" size="80" />
      </div>
      <button class="btn" @click="tui()" v-if="users">点击退出</button>
      <button class="btn" @click="loging()" v-else>点击登录</button>
    </div>

    <div class="opinion">
      <div class="opinion-item">
        意见反馈
        <van-icon name="arrow" size="20" />
      </div>
      <div class="opinion-item">
        声明
        <van-icon name="arrow" size="20" />
      </div>
      <div class="opinion-item">
        帮助
        <van-icon name="arrow" size="20" />
      </div>
      <div class="opinion-item nones">
        白名单
        <van-icon name="arrow" size="20" />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  data() {
    return {};
  },
  computed: {
    users() {
      // window.console.log(localStorage.user);
      return localStorage.user;
    }
  },
  methods: {
    //跳转页面
    loging() {
      this.$router.push({ name: "loging" });
    },
    tui() {
      localStorage.removeItem("user");
      localStorage.removeItem("password");
      this.$router.go(0);
      //   window.location.reload();
    }
  },
};
</script>
