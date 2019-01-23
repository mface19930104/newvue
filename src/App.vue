<template>
  <div id="app">

      <van-nav-bar fixed title="黑马" left-text="返回" left-arrow @click-left="onClickLeft"/>
<!-- <van-swipe :autoplay="3000" indicator-color="white" class="swiper"> 
  <van-swipe-item><img src="./assets/l2.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="./assets/l3.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="./assets/l4.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="./assets/l5.jpg" alt=""></van-swipe-item>
</van-swipe> -->
<!-- <button @click="getl">达到</button> -->
<transition> <router-view/></transition>

<van-tabbar v-model="active" fixed>
  <van-tabbar-item icon="home-o" to="/" >首页</van-tabbar-item>
  <van-tabbar-item icon="user-circle-o" to="/member">会员</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o" id="shopcar" :info="$store.getters.getAllCount" to="/shopcar" >购物车</van-tabbar-item>
  <van-tabbar-item icon="search" info="20" to="/search" >搜索</van-tabbar-item>

</van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
   data(){
    return {
      active: 0,
   

    }
     
  },
 
  methods:{
    // 通过按钮绑定返回上一页事件
     onClickLeft(){
          history.back()
     }
       
     
  },
 


}
</script>

<style lang="less">
#app{
  padding-top:46px; 
   padding-bottom:50px;
  overflow-x: hidden;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
   opacity: 0;
  left:-200%;
  position: absolute;

}
.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
  
}
</style>
