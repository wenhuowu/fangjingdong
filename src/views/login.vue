<template>
  <div class="register">
    <img
      class="img"
      src="https://file.xdclass.net/video/2020/aliyun-3%E6%9C%88/%E8%BD%AE%E6%92%AD%E5%9B%BE.png"
      alt
    />
    <cube-form :model="model" :schema="schema" @submit="submitHandler"></cube-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      schema: {
        fields: [
          //用户名
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "用户名：jingdong"
            },
            rules: {
              required: true,
              min: 3,
              max: 15
            },
            trigger: "blur",
            messages: {
              required: "用户名不能为空",
              min: "用户名不能少于3个字符",
              max: "用户名大于15个字符"
            }
          },
          //密码
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              placeholder: "密码：123456",
              type: "password",
              eye: {
                open: false
              }
            },
            rules: {
              required: true
            },
            trigger: "blur",
            messages: {
              required: "密码不能为空"
            }
          },
          {
            type: "submit",
            label: "登录"
          }
        ]
      }
    };
  },
  methods: {
    async submitHandler(e) {
      e.preventDefault(); //阻止默认事件
      try {
        const result = await this.$http.get("/login", { params: this.model });
        if (result.code == 0) {
          this.$store.commit("setToken", result.token);
          window.localStorage.setItem("token", result.token);
          if (this.$route.query.redirect) {
            this.$router.replace({ path: this.$route.query.redirect });
          } else this.$router.replace({ path: "/" });
        } else {
          alert(result.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style>
.img {
  height: 150px;
  width: 100%;
}
</style>
