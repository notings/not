<template>
  <div class="loging">
    <div class="header">
      <van-icon name="arrow-left" size="18" @click="goHome()" />
    </div>
    <div class="content">
      <div class="cont-img">
        <img src="//www.baidu.com/img/bd_logo1.png?qua=high" />
      </div>

      <div class="login-wrap" v-show="showLogin">
        <h3>登录</h3>
        <p v-show="showTishi">{{tishi}}</p>
        <label for="ueser">用户名：</label>
        <input type="text" placeholder="请输入用户名" v-model="user" name="ueser" />

        <label for="password">密码：</label>
        <input type="password" placeholder="请输入密码" v-model="password" name="password" />

        <button v-on:click="login">登录</button>
        <span v-on:click="ToRegister">没有账号？马上注册</span>
      </div>

      <div class="register-wrap" v-show="showRegister">
        <h3>注册</h3>
        <p v-show="showTishi">{{tishi}}</p>
        <label for="ueser">用户名：</label>
        <input type="text" placeholder="请输入用户名" v-model="newUsername" name="ueser" />

        <label for="password">密码：</label>
        <input type="password" placeholder="请输入密码" v-model="newPassword" name="password" />

        <label for="password1">确认密码：</label>
        <input type="password" placeholder="请确认密码" v-model="renewPassword" name="password1" />

        <button v-on:click="register">注册</button>
        <span v-on:click="ToLogin">已有账号？马上登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLogin: true,
      showRegister: false,
      showTishi: false, //登录注册错误提示框
      tishi: "", //登录注册错误提示框
      user: "",
      password: "",
      newUsername: "",
      newPassword: "",
      renewPassword: ""
    };
  },
  methods: {
    login() {
      if (this.user === "" || this.password === "") {
        alert("请输入用户名或密码");
      } else {
        localStorage.setItem("password", this.password);
        localStorage.setItem("user", this.user);
        // localStorage.setItem("params", JSON.stringify(Object));
        const loginUrl = "http://localhost:3000/Login";
        var params = new URLSearchParams();
        params.append("user", this.user);
        params.append("password", this.password);
        // window.console.log(this.user);
        this.$axios({
          method: "post",
          url: loginUrl,
          data: params
        })
          .then(res => {
            // window.console.log(res);
            if (res.status === 200) {
              if (res.data == 2) {
                this.tishi = "用户名或密码错误";
                this.showTishi = true;
                this.user = "";
                this.password = "";
                setTimeout(
                  function() {
                    this.tishi = "";
                  }.bind(this),
                  2000
                );
              } else {
                this.tishi = "登录成功";
                this.showTishi = true;
                this.user = "";
                this.password = "";
                setTimeout(
                  function() {
                    this.$router.push({
                      path: "/main/choiceness"
                    });
                    this.tishi = "";
                  }.bind(this),
                  500
                ); // 这是0.5秒延迟跳转
              }
            }
          })
          .catch(function(error) {
            window.console.log(error);
          });
      }
    },
    register() {
      if (this.newUsername === "" || this.newPassword === "") {
        this.tishi = "请输入用户名或密码";
        this.showTishi = true;
      } else {
        const registerUrl = "http://localhost:3000/register";
        var params = new URLSearchParams();
        params.append("user", this.newUsername);
        params.append("password", this.newPassword);
        params.append("repassword", this.renewPassword);
        this.$axios({
          method: "post",
          url: registerUrl,
          data: params
        })
          .then(res => {
            // window.console.log(res);
            if (res.status === 200) {
              // 注册成功,1s后跳转到登录
              if (res.data === 1 || res.data === 2) {
                this.tishi = "用户名或密码不能为空";
                this.showTishi = true;
              } else if (res.data === 6) {
                this.tishi = "密码至少6位";
                this.showTishi = true;
                this.newPassword = "";
                this.renewPassword = "";
              } else if (res.data === 3) {
                this.tishi = "两次输入密码不一致";
                this.showTishi = true;
                this.newPassword = "";
                this.renewPassword = "";
              } else if (res.data === 4) {
                this.tishi = "该用户已被注册";
                this.showTishi = false;
                this.newUsername = "";
                this.newPassword = "";
                this.renewPassword = "";
                setTimeout(
                  function() {
                    this.showRegister = true;
                    this.showLogin = false;
                    this.showTishi = true;
                    this.user = "";
                    this.password = "";
                  }.bind(this),
                  1000
                ); // 这是1秒延迟跳转
              } else {
                this.tishi = "注册成功";
                this.showTishi = true;
                this.newUsername = "";
                this.newPassword = "";
                this.renewPassword = "";
                setTimeout(
                  function() {
                    this.showRegister = false;
                    this.showLogin = true;
                    this.showTishi = false;
                  }.bind(this),
                  500
                ); // 这是1秒延迟跳转
              }
            }
          })
          .catch(function(error) {
            window.console.log(error);
          });
      }
    },
    ToLogin() {
      this.showRegister = false;
      this.showLogin = true;
    },
    ToRegister() {
      this.showRegister = true;
      this.showLogin = false;
    },
    goHome() {
      this.$router.push({ name: "gohome" });
      // this.$router.go(0);
    }
  }
};
</script>

