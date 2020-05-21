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
          //登录
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名"
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
          //登录
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              placeholder: "请输入密码",
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
            label: "注册"
          }
        ]
      }
    };
  },
  methods: {
    submitHandler(e) {
      e.preventDefault(); //阻止默认事件
      this.$http
        .get("/register", { params: this.model })
        .then(res => {
          console.log(res.success);
        })
        .catch(err => {
          console.log("失败", err);
        });
    }
  }
};
</script>

<style >
.img {
  height: 150px;
  width: 100%;
}
</style>
