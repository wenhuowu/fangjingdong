module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  devServer: {
    public: "0.0.0.0:8081",

    hot: true,

    disableHostCheck: true,
    before(app) {
      let userpoor = [
        { username: "wenhuo", password: "123456" },
        { username: "nihoa", password: "123456" },
      ];
      app.get("/register", (req, res) => {
        const { username, password } = req.query;
        const userLenght = userpoor.filter((v) => v.username === username).length;
        if (userLenght > 0) {
          res.json({
            success: "false",
            message: "用户名已存在",
          });
        } else {
          res.json({
            success: "true",
            message: "注册成功",
          });
        }
      });
      // //登录接口
      // let tokenkey = "xdclass";
      // app.get("/login", (req, res) => {
      //   const { username, password } = req.query;
      //   if ((username == "jingdong" && password == "123456") || (username == "nihoa" && password == "123456")) {
      //     res.json({
      //       code: 0,
      //       message: "登录成功",
      //       token: tokenkey + "-" + username + "-" + (new Date().getTime() + 60 * 60 * 1000),
      //     });
      //   } else {
      //     res.json({
      //       code: 1,
      //       message: "用户名或密码不正确",
      //     });
      //   }
      // });

      //轮播图接口
      // app.get("/slibe", (req, res) => {
      //   res.json({
      //     data: [
      //       {
      //         url: "",
      //         image: "pic4",
      //       },
      //       {
      //         url: "",
      //         image: "pic",
      //       },
      //       {
      //         url: "",
      //         image: "pic5",
      //       },
      //     ],
      //   });
      // });

      //滚动分类接口
      //   app.get("/rollinglist", (req, res) => {
      //     res.json({
      //       data: [
      //         [
      //           {
      //             url: "",
      //             image: "nav1",
      //             label: "分类一",
      //           },
      //           {
      //             url: "",
      //             image: "nav1",
      //             label: "分类一",
      //           },
      //           {
      //             url: "",
      //             image: "nav1",
      //             label: "分类一",
      //           },
      //           {
      //             url: "",
      //             image: "nav3",
      //             label: "分类一",
      //           },
      //           {
      //             url: "",
      //             image: "nav3",
      //             label: "分类一",
      //           },
      //           {
      //             url: "",
      //             image: "nav2",
      //             label: "分类一",
      //           },
      //           {
      //             url: "",
      //             image: "nav2",
      //             label: "分类一",
      //           },
      //           {
      //             url: "",
      //             image: "nav2",
      //             label: "分类一",
      //           },
      //           {
      //             url: "",
      //             image: "nav3",
      //             label: "分类一",
      //           },
      //           {
      //             url: "",
      //             image: "nav3",
      //             label: "分类一",
      //           },
      //         ],
      //         [
      //           {
      //             url: "",
      //             image: "nav3",
      //             label: "分类一",
      //           },
      //           {
      //             url: "",
      //             image: "nav3",
      //             label: "分类一",
      //           },
      //           {
      //             url: "",
      //             image: "nav3",
      //             label: "分类一",
      //           },
      //           {
      //             url: "",
      //             image: "nav3",
      //             label: "分类一",
      //           },
      //           {
      //             url: "",
      //             image: "nav3",
      //             label: "分类一",
      //           },
      //           {
      //             url: "",
      //             image: "nav3",
      //             label: "分类一",
      //           },
      //           {
      //             url: "",
      //             image: "nav3",
      //             label: "分类一",
      //           },
      //           {
      //             url: "",
      //             image: "nav3",
      //             label: "分类一",
      //           },
      //           {
      //             url: "",
      //             image: "nav3",
      //             label: "分类一",
      //           },
      //           {
      //             url: "",
      //             image: "nav3",
      //             label: "分类一",
      //           },
      //         ],
      //       ],
      //     });
      //   });
      //   //获取分类页的分类接口
      //   app.get("/classify", (req, res) => {
      //     switch (req.query.type) {
      //       case "0":
      //         res.json({
      //           data: [
      //             {
      //               image: "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
      //               label: "小米",
      //             },
      //             {
      //               image: "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
      //               label: "华为",
      //             },
      //             {
      //               image: "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
      //               label: "荣耀",
      //             },
      //             {
      //               image: "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
      //               label: "雪梨手机",
      //             },
      //             {
      //               image: "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
      //               label: "小米",
      //             },
      //             {
      //               image: "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
      //               label: "华为",
      //             },
      //             {
      //               image: "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
      //               label: "荣耀",
      //             },
      //             {
      //               image: "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
      //               label: "雪梨手机",
      //             },
      //             {
      //               image: "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
      //               label: "小米",
      //             },
      //             {
      //               image: "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
      //               label: "华为",
      //             },
      //             {
      //               image: "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
      //               label: "荣耀",
      //             },
      //             {
      //               image: "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
      //               label: "雪梨手机",
      //             },
      //             {
      //               image: "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
      //               label: "小米",
      //             },
      //             {
      //               image: "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
      //               label: "华为",
      //             },
      //             {
      //               image: "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
      //               label: "荣耀",
      //             },
      //             {
      //               image: "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
      //               label: "雪梨手机",
      //             },
      //             {
      //               image: "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
      //               label: "小米",
      //             },
      //             {
      //               image: "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
      //               label: "华为",
      //             },
      //             {
      //               image: "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
      //               label: "荣耀",
      //             },
      //             {
      //               image: "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
      //               label: "雪梨手机",
      //             },
      //           ],
      //         });
      //         break;
      //       case "1":
      //         res.json({
      //           data: [
      //             {
      //               image: "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
      //               label: "小米",
      //             },
      //             {
      //               image: "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
      //               label: "小米",
      //             },
      //             {
      //               image: "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
      //               label: "小米",
      //             },
      //             {
      //               image: "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
      //               label: "小米",
      //             },
      //           ],
      //         });
      //         break;
      //       case "2":
      //         res.json({
      //           data: [
      //             {
      //               image: "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
      //               label: "华为",
      //             },
      //             {
      //               image: "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
      //               label: "华为",
      //             },
      //             {
      //               image: "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
      //               label: "华为",
      //             },
      //             {
      //               image: "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
      //               label: "华为",
      //             },
      //           ],
      //         });
      //         break;
      //       case "3":
      //         res.json({
      //           data: [
      //             {
      //               image: "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
      //               label: "荣耀",
      //             },
      //             {
      //               image: "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
      //               label: "荣耀",
      //             },
      //             {
      //               image: "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
      //               label: "荣耀",
      //             },
      //             {
      //               image: "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
      //               label: "荣耀",
      //             },
      //           ],
      //         });
      //         break;
      //       case "4":
      //         res.json({
      //           data: [
      //             {
      //               image: "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
      //               label: "小米",
      //             },
      //             {
      //               image: "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
      //               label: "小米",
      //             },
      //             {
      //               image: "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
      //               label: "小米",
      //             },
      //             {
      //               image: "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
      //               label: "小米",
      //             },
      //           ],
      //         });
      //         break;
      //       case "5":
      //         res.json({
      //           data: [
      //             {
      //               image: "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
      //               label: "雪梨手机",
      //             },
      //             {
      //               image: "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
      //               label: "雪梨手机",
      //             },
      //             {
      //               image: "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
      //               label: "雪梨手机",
      //             },
      //             {
      //               image: "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
      //               label: "雪梨手机",
      //             },
      //           ],
      //         });
      //         break;
      //       case "6":
      //         res.json({
      //           data: [
      //             {
      //               image: "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
      //               label: "小米",
      //             },
      //             {
      //               image: "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
      //               label: "小米",
      //             },
      //             {
      //               image: "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
      //               label: "小米",
      //             },
      //             {
      //               image: "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
      //               label: "小米",
      //             },
      //           ],
      //         });
      //         break;
      //     }
      //   });
      //   //瀑布流图片
      //   app.get("/waterfull", (req, res) => {
      //     res.json({
      //       data: [
      //         {
      //           src: "0",
      //           href: "#",
      //           jdinfo: "【品质保证】",
      //           info: "旅行洗漱包旅游用品必备神器便携大容量多功能防水收纳包化妆包 透明中号手拿包",
      //           money: "￥220",
      //         },
      //         {
      //           src: "1",
      //           href: "#",
      //           info: "旅行洗漱包旅游用品必备神器便携大容量多功能防水收纳包化妆包 透明中号手拿包",
      //           money: "￥220",
      //         },
      //         {
      //           src: "3",
      //           href: "#",
      //           jdinfo: "京东自营",
      //           info: "旅行洗漱包旅游用品必备神器便携大容量多功能防水收纳包化妆包 透明中号手拿包",
      //           money: "￥220",
      //         },
      //         {
      //           src: "4",
      //           href: "#",
      //           info: "旅行洗漱包旅游用品必备神器便携大容量多功能防水收纳包化妆包 透明中号手拿包",
      //           money: "￥220",
      //         },
      //         {
      //           src: "5",
      //           href: "#",
      //           jdinfo: "京东自营",
      //           info: "旅行洗漱包旅游用品必备神器便携大容量多功能防水收纳包化妆包 透明中号手拿包",
      //           money: "￥220",
      //         },
      //       ],
      //     });
      //   });
    },
  },

  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"],
      },
    },
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true,
    },
  },
};
