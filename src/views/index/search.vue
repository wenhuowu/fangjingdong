<template>
  <div>
    <!-- 搜索框 -->
    <div class="header1">
      <div class="header1-content">
        <div class="herder1-icon" @click="back"></div>
        <div class="herder1-middle">
          <div class="herder1-serch">
            <div class="jd-serch"></div>
            <input
              type="text"
              :placeholder="pdefault"
              class="input"
              v-model="defaultWord"
              ref="gain"
            />
          </div>
        </div>
        <div class="herder-login" @click="serch">搜索</div>
      </div>
    </div>
    <div class="zjserch">
      <div class="zjserch-top">
        <p>最近搜索</p>
        <i class="cubeic-delete" @click="deletes"></i>
      </div>
      <div class="zjserch-content">
        <p v-for="(item,index) in zjserch" :key="index">{{item}}</p>
      </div>
    </div>
    <div class="hotserch">
      <div class="hotserch-top">
        <p>热门搜索</p>
        <div class="isshow">隐藏</div>
      </div>
      <div class="hotserch-content">
        <p v-for="item in hotserch" :key="item">{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pdefault: "华为平板",
      defaultWord: "",
      zjserch: [],
      hotserch: [
        "电饭煲",
        "剃须刀",
        "牙刷",
        "毛巾",
        "随便写点",
        "什么东西",
        "夏季上新",
        "冬季换装",
        "春意黯然",
        "意气风发"
      ]
    };
  },
  mounted() {
    this.$refs.gain.focus();
  },
  methods: {
    back() {
      this.$router.push({ path: "/index" });
    },
    serch() {
      if (this.defaultWord === "") {
        if (this.pdefault !== "") {
          this.zjserch.unshift(this.pdefault);
        }
      } else {
        this.zjserch.unshift(this.defaultWord);
        this.defaultWord = "";
        this.pdefault = "";
      }
    },
    deletes() {
      this.zjserch = [];
    }
  }
};
</script>

<style lang="stylus" >
.zjserch {
  padding: 10px 5px 0;
  margin-bottom: 10px;

  .zjserch-top {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 15px;
      line-height: 15px;
      color: #232326;
      width: 100px;
    }
  }

  .zjserch-content {
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;

    p {
      min-width: 40px;
      margin-bottom: 10px;
      margin-right: 10px;
      font-size: 14px;
      padding: 5px;
      background-color: rgba(209, 209, 209, 0.5);
    }
  }
}

.hotserch {
  padding: 10px 5px 0;

  .hotserch-top {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 15px;
      line-height: 15px;
      color: #232326;
      width: 100px;
    }

    .isshow {
      font-size: 15px;
      line-height: 15px;
      width: 50px;
      opacity: 0.5;
    }
  }

  .hotserch-content {
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;
    margin-top: 10px;

    p {
      min-width: 40px;
      margin-right: 10px;
      margin-bottom: 8px;
      font-size: 14px;
      padding: 5px;
      background-color: rgba(209, 209, 209, 0.5);
    }
  }
}
</style>

<style>
.header1 {
  height: 44px;
  background-size: contain;
  border-bottom: 1px solid rgb(209, 209, 209);
}
.header1-content {
  position: fixed;
  top: 0;
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}
.header1-content .herder1-icon {
  margin-left: 5px;
  height: 20px;
  width: 20px;
  background: url(../../assets/images/jd-sprites.png) no-repeat -20px 0;
  background-size: 200px auto;
}

.header1-content .herder1-middle {
  float: left;
  width: 280px;
  height: 44px;
  position: relative;
  display: flex;
  align-items: center;
}
.herder1-serch {
  width: 100%;

  background-color: rgb(241, 241, 241);
  border-radius: 15px;
  height: 28px;
  line-height: 28%;
}

.herder1-serch .jd-serch {
  position: absolute;
  top: 15px;
  left: 5px;
  width: 16px;
  height: 60%;
  background: url(../../assets/images/jd-sprites.png) no-repeat -81px 0;
  background-size: 200px auto;
}
.herder1-serch .input {
  -web-kit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  font-size: 14px;
  color: #6a6f77;
  background-color: rgb(241, 241, 241);
  position: absolute;
  left: 30px;
  top: 15px;
  width: 70%;
}
.header1-content .herder-login {
  margin-right: 10px;
  width: 40px;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  border-radius: 10px;
  color: #fff;
  background-color: rgb(219, 38, 38);
}
</style>
