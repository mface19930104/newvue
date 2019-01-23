import Vue from 'vue'
import Vuex, { Store } from 'Vuex'
Vue.use(Vuex)
// 一进来先获取下localstorage数据
var count = JSON.parse(localStorage.getItem('count') || '[]')
export default new Store({
  state: {
      count: count
  },
  mutations: {
      addToCar(state, goodsinfo) {
          var flag = false
          state.count.forEach(item => { 
              if (item.id == goodsinfo.id) {
                  item.value += goodsinfo.value
                  flag = true
              }
          });
          if (!flag) {
              state.count.push(goodsinfo)
          }
          localStorage.setItem('count', JSON.stringify(state.count))
      }
  },
  getters:{
      getAllCount(state){
          var n = 0
          state.count.forEach(item=>{
              n+=item.value
          })
          return n
      }
  }
})
