import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store =  new Vuex.Store({
  state: {
    token:'',
    cartarr: JSON.parse(localStorage.getItem('cartarr')) || []
  },
  mutations: {
    //获取token
    setToken(state,token){
      state.token = token
    },
    //添加到购物车
    addcart(state,tag){
      const good = state.cartarr.find(v=>v.tittle == tag.label)
      if(good){
        good.count+=1
      }else {
        state.cartarr.push({tittle:tag.label,count:1})
      }
    },
    //增加
    addCount(state,index){
      state.cartarr[index].count++
    },
    //减少
    reduceCount(state,index){
      
      if(state.cartarr[index].count>1){
        state.cartarr[index].count--
      }else{
        if(window.confirm(`你确定移除${state.cartarr[index].tittle}吗`)){
          state.cartarr.splice(index,1)
        }
        
      }
    },
    //清空
    clearcart(state){
      if(window.confirm(`你确定清空购物车吗`)){
        state.cartarr = []
      }
      
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    countsum:state=>{
      let num=0
      state.cartarr.forEach(v=>{
        num+=v.count
      })
      return num
    }
  }
})

store.subscribe((mutations,state)=>{
  localStorage.setItem('cartarr',JSON.stringify(state.cartarr))
})

export default store
