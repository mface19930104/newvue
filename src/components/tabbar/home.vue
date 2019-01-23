<template>
  <div class="home">
    <myswiper :list="list"></myswiper>
    <!-- <van-row type="flex" justify="space-around" class="itembox">
  <van-col span="6" class="smallitembox"><img src="@/assets/menu6.png" alt=""></van-col>
  <van-col span="6" class="smallitembox"><img src="@/assets/menu4.png" alt=""></van-col>
  <van-col span="6" class="smallitembox"><img src="@/assets/menu2.png" alt=""></van-col>
    </van-row>-->
    <!-- <ul class="itembox">
  <li><a href="javascript:;"><img src="@/assets/menu6.png" alt=""></a></li>
  <li><a href="javascript:;"><img src="@/assets/menu2.png" alt=""></a></li>
  <li><a href="javascript:;"><img src="@/assets/menu4.png" alt=""></a></li>
   <li><a href="javascript:;"><img src="@/assets/menu1.png" alt=""></a></li>
    <li><a href="javascript:;"><img src="@/assets/menu3.png" alt=""></a></li>
     <li><a href="javascript:;"><img src="@/assets/menu5.png" alt=""></a></li>
    i</ul>-->
    <div class="demo-icon">
      <router-link class="van-col" to="/home/newslist" tag="div">
        <i class="van-icon">
          <!---->
          <!---->
          <img src="../../assets/menu1.png" alt>
        </i>
        <span>新闻资讯</span>
      </router-link>
      <router-link class="van-col" to="/home/photolist" tag="div">
        <i class="van-icon">
          <!---->
          <!---->
          <img src="../../assets/menu6.png" alt>
        </i>
        <span>图片分享</span>
      </router-link>
      <router-link class="van-col" to="/home/buygoods" tag="div">
        <i class="van-icon">
          <!---->
          <!---->
          <img src="../../assets/menu5.png" alt>
        </i>
        <span>商品购买</span>
      </router-link>
      <div class="van-col">
        <i class="van-icon">
          <!---->
          <!---->
          <img src="../../assets/menu4.png" alt>
        </i>
        <span>留言反馈</span>
      </div>
      <div class="van-col">
        <i class="van-icon">
          <!---->
          <!---->
          <img src="../../assets/menu3.png" alt>
        </i>
        <span>视频专区</span>
      </div>
      <div class="van-col">
        <i class="van-icon">
          <!---->
          <!---->
          <img src="../../assets/menu2.png" alt>
        </i>
        <span>联系我们</span>
      </div>
    </div>
  
  </div>
</template> 

<script>
// import { Toast } from "vant";
// import ssr from "../../view/ssr.vue";
import myswiper from "../subcomponents/myswiper.vue";
export default {
  data() {
    return { list: [] };
  },

  created() {
    this.$axios.get("api/getlunbo").then(res => {
      this.list = res.data.message;
      console.log(this.list);
      // Toast("成功");
    });
  },
  components: {

    myswiper
  }
};
</script>
<style lang="less">
.swiper img {
  width: 100%;
  height: 200px;
  display: block;
}
// .itembox{
//   margin-top: 30px;
//   width: 100%;
//   overflow: hidden;
//   li{
//     float: left;
//     width:33.33%;
//   text-align: center;
//   margin-top: 10px;
//    img{
//     width: 60px;

//   }
//   }

// }
.demo-icon {
  font-size: 0;
  padding-top: 10px;
}
.demo-icon-list {
  padding-top: 10px;
  box-sizing: border-box;
  min-height: calc(100vh - 65px);
}
.demo-icon .van-col {
  float: none;
  text-align: center;
  width: 33.3333%;

  display: inline-block;
  vertical-align: middle;
}
.demo-icon .van-col span {
  display: block;
  padding: 0 5px;
  font-size: 12px;
  line-height: 14px;
}
.demo-icon .van-icon {
  font-size: 32px;
  margin: 15px 0;
  color: #455a64;
  img {
    height: 60px;
    width: 60px;
  }
}
</style>