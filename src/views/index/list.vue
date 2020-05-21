<template>
  <!-- 左边列表 -->
  <div class="panelsbox">
    <cube-scroll class="leftpanels">
      <ul>
        <li v-for="(list, index) in tabslabel" @click="selectlist(index)" :class="list.active ? 'active' : ''" :key="index">
          {{ list.label }}
        </li>
      </ul>
    </cube-scroll>
    <!-- 右边列表 -->
    <cube-scroll class="rightpanels">
      <ul>
        <li v-for="(tag, index1) in tags" :key="index1">
          <img :src="tag.image" alt="" />
          <p>{{ tag.label }} <i class="cubeic-add" @click="addcart($event, tag)"></i></p>
        </li>
      </ul>
    </cube-scroll>
    <!-- 移动小球 -->
    <div class="ball-wrap">
      <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter" v-on:before-leave="beforeLeave">
        <div class="ball" v-if="ball.show">
          <div class="inner">
            <i class="cubeic-add"></i>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ball: {
        show: false,
        el: "",
      },
      tags: [],
      tabslabel: [
        {
          label: "热门推荐",
          active: true,
        },
        {
          label: "手机数码",
          active: false,
        },
        {
          label: "家用电器",
          active: false,
        },
        {
          label: "家用空调",
          active: false,
        },
        {
          label: "电脑产品",
          active: false,
        },
        {
          label: "计生情趣",
          active: false,
        },
        {
          label: "美妆护肤",
          active: false,
        },
        {
          label: "口红",
          active: false,
        },
        {
          label: "手袋",
          active: false,
        },
        {
          label: "金银财宝",
          active: false,
        },
        {
          label: "手机数码",
          active: false,
        },
        {
          label: "手机数码",
          active: false,
        },
      ],
    };
  },
  methods: {
    selectlist(index) {
      this.tabslabel.forEach((val, ind) => {
        if (index == ind) {
          val.active = true;
        } else {
          val.active = false;
        }
      });
      this.getclassify(index);
    },
    //获取分类
    async getclassify(index) {
      const result = await this.$http.get("/classify", { params: { type: index } });
      this.tags = result.data;
    },
    //添加到购物车
    addcart(e, tag) {
      this.$store.commit("addcart", tag);
      //console.log(e)
      //获取点击元素
      this.ball.show = true;
      this.ball.el = e.target;
    },
    //添加购物车的小球的运动钩子函数
    beforeEnter(el) {
      let rect = this.ball.el.getBoundingClientRect();
      let x = rect.left - window.innerWidth * 0.7;
      let y = rect.top - window.innerHeight;
      el.style.display = "block";
      el.style.transform = `translate(0,${y}px)`;
      const inner = el.querySelector(".inner");
      inner.style.transform = `translate(${x}px,0)`;
    },
    enter(el, done) {
      document.body.offsetHeight;
      el.style.transform = `translate(0,0)`;
      const inner = el.querySelector(".inner");
      inner.style.transform = `translate(0,0)`;
      el.addEventListener("transitionend", done);
    },
    afterEnter(el) {
      //结束隐藏小球
      this.ball.show = false;
      el.style.display = "none";
    },
    beforeLeave(el) {
      console.log("111");
    },
  },
  created() {
    //获取默认的分类数据
    this.getclassify(0);
  },
  mounted() {
    //设置滚动盒子的高度
    const leftpanels = document.querySelector(".leftpanels");
    const rightpanels = document.querySelector(".rightpanels");
    const bodyheight = document.documentElement.clientHeight;
    leftpanels.style.height = bodyheight - 57 + "px";
    rightpanels.style.height = bodyheight - 57 + "px";
  },
};
</script>

<style lang="stylus" scoped>
.ball-wrap
        .ball
            font-size 25px
            position fixed
            left 70%
            bottom 15px
            z-index 1003
            color red
            transition all 0.8s cubic-bezier(0.49,-0.29,0.75,0.41)
            .inner
                width 30px
                height  30px
                transition all 1s linear

.panelsbox
    display flex
    .leftpanels
        width 30%
        li
            height 50px
            line-height 50px
            color #333
            background #f8f8f8
            font-size  14px
        .active
            background #fff
            color #e93b3d
    .rightpanels
        height px
        width 70%
        ul
            display flex
            flex-wrap  wrap
            li
                width 50%
                justify-content center
                align-items center
                font-size 15px
                img
                    width 80px
                    height  80px
                i
                    font-size 18px
</style>
