<template>
  <div id="cart">
      <div v-for="(item,index) in cartarr" :key="index" class="goods">
          {{item.tittle}}
      <div class="goodsright">
        <i class="cubeic-remove" @click="reduceCount(index)"></i>
        <span>{{item.count}}</span>
        <i class="cubeic-add" @click="addCount(index)"></i>
      </div>
      </div>
      <cube-button style="margin:10px 0;">下单</cube-button>
      <cube-button @click="clearcart">清空购物车</cube-button>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    data() {
      return {
        
      }
    },
    computed:{
      ...mapState({ 
        cartarr:state=>state.cartarr
      })
    },
    methods:{
      //减少数量
      reduceCount(index){
        
        this.$store.commit('reduceCount',index)
      },
      //增加数量
      addCount(index){
        this.$store.commit('addCount',index)
      },
      //清空购物车
      clearcart(index){
        this.$store.commit('clearcart')
      }
    }
}
</script>

<style lang="stylus">
.goods
    text-align left 
    padding 10px
  .goodsright
    float right
    i,span 
      font-size 20px
      padding-left 10px 
</style>
