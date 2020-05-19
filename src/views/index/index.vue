<template>
  <div id="index" ref="index" @scroll="scroll">
    <!-- 搜索框 -->
    <div class="header">
      <div class="header-content">
        <div class="herder-icon"></div>
        <div class="herder-middle">
          <div class="herder-serch">
            <div class="jd-icon"></div>
            <div class="jd-serch"></div>
            <input
              type="text"
              placeholder="澳玛冰箱"
              class="input"
              v-model="defaultWord"
              @click="search"
            />
          </div>
        </div>
        <div class="herder-login" @click="login" v-if="hastoken">登录</div>
        <div class="herder-login" v-else>
          <img src="../../assets/images/logo.png" alt />
        </div>
      </div>
      <!-- 头部轮播 -->
      <cube-slide
        ref="slide"
        :data="items"
        @change="changePage"
        :interval="2000"
        :allow-vertical="true"
      >
        <cube-slide-item
          v-for="(item, index) in items"
          :key="index"
          @click.native="clickHandler(item, index, $event)"
        >
          <a :href="item.url">
            <img :src="item.image" class="banner" />
          </a>
        </cube-slide-item>
      </cube-slide>
    </div>
    <!-- 广告部分 -->
    <div class="ad">
      <a href="#">
        <img src="../../assets/upload/ad1.gif" alt />
      </a>
      <a href="#">
        <img src="../../assets/upload/ad2.gif" alt />
      </a>
      <a href="#">
        <img src="../../assets/upload/ad3.gif" alt />
      </a>
    </div>
    <!-- 滚动翻页 -->
    <cube-slide
      ref="slidelist"
      :data="list"
      @change="changePage"
      :auto-play="false"
      :loop="false"
      style="height:auto"
      reachBottomDistance="10"
      :allow-vertical="true"
    >
      <cube-slide-item v-for="(list, index1) in list" :key="index1">
        <ul class="listul">
          <li v-for="(item, index2) in list" :key="index2" class="listli">
            <a :href="item.url">
              <img :src="item.image" />
              <p>{{ item.label }}</p>
            </a>
          </li>
        </ul>
      </cube-slide-item>
    </cube-slide>
    <!-- 瀑布流 -->
    <div id="box">
      <vue-waterfall-easy
        :imgsArr="imgsArr"
        :maxCols="2"
        @click="clickFn"
        @scrollReachBottom="getData"
      >
        <div class="img-info" slot-scope="props">
          <p class="some-info">
            <span v-if="props.value.jdinfo">{{ props.value.jdinfo }}</span>
            {{ props.value.info }}
          </p>
          <div class="some-buttom">
            <p class="some-money">{{ props.value.money }}</p>
            <div class="button">看相似</div>
          </div>
        </div>
      </vue-waterfall-easy>
    </div>
  </div>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
  data() {
    return {
      imgsArr: [],
      items: [],
      list: [],
      defaultWord: "",
      hastoken: localStorage.getItem("token") ? false : true
    };
  },
  components: {
    vueWaterfallEasy
  },

  methods: {
    scroll(e) {
      if (
        e.srcElement.scrollTop + e.srcElement.offsetHeight >
        e.srcElement.scrollHeight - 100
      ) {
        this.getData();
      }
    },
    onScroll() {
      //可滚动容器的高度
      let innerHeight = document.documentElement.scrollHeight;
      //屏幕尺寸高度
      let outerHeight = document.documentElement.clientHeight;
      //可滚动容器超出当前窗口显示范围的高度
      let scrollTop = document.documentElement.scrollTop;

      if (innerHeight < outerHeight + scrollTop + 500) {
        this.getData();
        console.log("loadmore");
      }
    },
    search() {
      this.$router.push({ path: "/search" });
    },
    login() {
      console.log(1);
      console.log(this.$route.name);
      this.$router.push({ path: "/login" });
    },
    changePage(current) {
      // console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index, event) {
      console.log(item, index);
    },
    clickFn(event) {
      event.preventDefault();
    },
    getData() {
      this.$http
        .get("/api/waterfull") // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个json文件模拟
        .then(res => {
          res.data.forEach(v => {
            v.src = require(`../../assets/images/${v.src}.jpg`);
          });
          this.imgsArr = this.imgsArr.concat(res.data);

          // this.group++;
        });
    }
  },
  //尝试监听滚动事件
  // mounted() {
  //   let innerHeight = document.querySelector("#index").scrollHeight;
  //   let outerHeight = document.documentElement.clientHeight;
  //   let scrollTop = document.documentElement.scrollTop;
  //   console.log(innerHeight, scrollTop, outerHeight);
  // },
  async created() {
    this.getData();
    try {
      const items = await this.$http.get("/api/slibe");
      this.items = items.data;
      this.items.forEach(v => {
        v.image = require(`../../assets/upload/${v.image}.jpg`);
      });
      const list = await this.$http.get("/api/rollinglist");
      this.list = list.data;
      this.list[0].forEach(v => {
        v.image = require(`../../assets/upload/${v.image}.webp`);
      });
      this.list[1].forEach(v => {
        v.image = require(`../../assets/upload/${v.image}.webp`);
      });
    } catch (err) {
      console.log(new Error());
    }
  }
};
</script>

<style lang="stylus"  scoped>
#index {
  overflow: scroll;

  .cube-slide-dots {
    position: absolute;
    bottom: 5px;
  }

  a {
    .banner {
      margin: 50px auto;
      border-radius: 5px;
      display: block;
      width: 85%;
      height: 140px;
    }
  }

  .listul {
    display: flex;
    flex-wrap: wrap;
  }

  .listli {
    width: 20%;
    justify-content: center;

    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      padding: 5px 0;
    }

    p {
      font-size: 12px;
      padding-bottom: 10px;
    }
  }
}

#box {
  width: 100%;
  height: 600px;

  .some-info {
    box-sizing: border-box;
    height: 32px;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    color: #232326;
    margin-top: 5px;
    line-height: 16px;
    margin-bottom: 3px;
    padding: 0 4px;

    span {
      background-color: rgb(199, 26, 26);
      color: #fff;
      padding: 2px;
      font-size: 10px;
      height: 14px;
      position: relative;
      top: -2px;
      display: inline-block;
    }
  }

  .some-buttom {
    padding-top: 5px;
    display: flex;
    justify-content: space-between;

    .some-money {
      padding: 5px;
      color: #f23030;
    }

    .button {
      margin-right: 5px;
      margin-bottom: 5px;
      box-sizing: border-box;
      text-align: center;
      color: #686868;
      font-size: 12px;
      width: 49px;
      height: 24px;
      line-height: 25px;
      border: 1px solid #bfbfbf;
    }
  }
}
</style>

<style  >
@import "../../assets/css/index.css";
#box .vue-waterfall-easy-scroll {
  position: static !important;
}
</style>
