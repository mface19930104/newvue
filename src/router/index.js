// 在这里引入路由
import Vue from 'vue'
// import Vuex, {Store} from 'vuex'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import  Member from '@/components/tabbar/member.vue'
import  Home from '@/components/tabbar/home.vue'
import  Shopcar from '@/components/tabbar/shopcar.vue'
import  Search from '@/components/tabbar/search.vue'
import NewsList from '@/components/news/NewsList.vue'
import NewsInfo from '@/components/news/NewsInfo.vue'
import PhotoList from '@/components/photolist/PhotoList.vue'

import PhotoInfo from '@/components/photolist/PhotoInfo.vue'
import BuyGoods from '@/components/buygoods/BuyGoods.vue'
import GoodsInfo from '@/components/buygoods/GoodsInfo.vue'
Vue.use(Router)
// Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },   {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/shopcar',
      name: 'Shopcar',
      component: Shopcar
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/home/newslist',
      name: 'NewsList',
      component: NewsList
    },  
    {
      path: '/home/photolist',
      name: 'PhotoList',
      component: PhotoList
    },
    {
      path: '/home/buygoods',
      name: 'BuyGoods',
      component: BuyGoods
    },
    {
      path: '/home/goodsinfo/:id',
      name: 'GoodsInfo',
      component: GoodsInfo
    },
    {
      path: '/home/newsinfo/:id',
      name: 'NewsInfo',
      component: NewsInfo
    },
    {
      path: '/home/photoinfo:id',
      name: 'PhotoInfo',
      component: PhotoInfo
    }
  ]
})
