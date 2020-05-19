<template>
  <div>
    <transition :name="transitionName">
      <router-view class="router"></router-view>
    </transition>

    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler"
      class="btnav"
    ></cube-tab-bar>
    <span class="countsum" v-show="isshow">{{ countsum }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      transitionName: "slideRight",
      isshow: false,
      selectedLabelDefault: this.$route.name,
      tabs: [
        {
          label: "首页",
          icon: "cubeic-home"
        },
        {
          label: "分类",
          icon: "cubeic-tag"
        },
        {
          label: "搜索",
          icon: "cubeic-search"
        },
        {
          label: "购物车",
          icon: "cubeic-mall"
        },
        {
          label: "我的",
          icon: "cubeic-person"
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      countsum: "countsum"
    })
  },
  watch: {
    countsum() {
      if (this.countsum === 0) {
        console.log(0);
        this.isshow = false;
      } else {
        this.isshow = true;
      }
    },
    $route() {
      this.selectedLabelDefault = this.$route.name;
    }
  },

  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      //console.log(label);
    },
    changeHandler(label) {
      // if you clicked different tab, this methods can be emitted

      switch (label) {
        case "首页":
          this.$router.push({ path: "/index" });
          break;
        case "分类":
          this.$router.push({ path: "/list" });
          break;
        case "购物车":
          this.$router.push({ path: "/cart" });
          break;
        case "搜索":
          this.$router.push({ path: "/search" });
          break;
        case "我的":
          this.$router.push({ path: "/mine" });
          break;
      }
    }
  },
  created() {
    //this.selectedLabelDefault = this.$route.name;
  }
};
</script>

<style lang="stylus">
.cube-tab-bar.btnav {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  background: #fff;

  .cube-tab div {
    font-size: 16px;
    padding-top: 3px;
  }

  i {
    font-size: 20px;
  }
}

.router {
  width: 100%;
  // height 100%
}

// .sildeLeft-enter, .slideRight-leave-active {
// opacity 0 {
// -webkit-transform: translate(-100%, 0);
// }

// transform: translate(-100%, 0);
// }

// .slideLeft-leave-active, .slideRight-enter {
// opacity 0 {
// -webkit-transform: translate(100%, 0);
// }

// transform: translate(100%, 0);
// }
.countsum {
  position: fixed;
  bottom: 33px;
  right: 23%;
  z-index: 1001;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 50%;
  font-size: 14px;
  background: red;
  color: #fff;
}
</style>
