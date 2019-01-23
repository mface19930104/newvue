<template>
  <div class="buygoods">
    <router-link class="goodsitem" v-for="item in list" :key="item.id" :to="'/home/goodsinfo/'+item.id" tag="div">
      <img :src="item.img_url" alt="">
       <h1>{{item.zhaiyao}}</h1>
       <div class="otherinfo">
         <p class="price"><span class="new">￥{{item.sell_price}}</span>&nbsp;&nbsp;<span class="old">￥{{item.market_price}}</span></p>
           <p class="sell"><span >热卖中</span><span >剩60件</span></p>
       </div>
    </router-link>
     <!-- <div class="goodsitem">
      <img src="../../assets/v10.jpg" alt="">
       <h1>华为荣耀v10的塑料打算打卡考虑到 </h1>
       <div class="otherinfo">
         <p class="price"><span class="new">￥2155</span>&nbsp;&nbsp;<span class="old">￥2555</span></p>
           <p class="sell"><span >热卖中</span><span >剩60件</span></p>
       </div>
    </div> -->
     <!-- <div class="goodsitem">
      <img src="../../assets/v10.jpg" alt="">
       <h1>华为荣耀v10</h1>
       <div class="otherinfo">
         <p class="price"><span class="new">￥2155</span>&nbsp;&nbsp;<span class="old">￥2555</span></p>
           <p class="sell"><span >热卖中</span><span >剩60件</span></p>
       </div>
    </div> -->
    <van-button plain type="danger" class="getMoreBtn" @click="getMoreBtn" size="large">加载更多</van-button>
  </div>
</template>
<script>
export default {
  data:()=>({
    pageindex:1,
    
    list:[]
  }),
  created(){
this.getgoods()
  },
  methods:{
    getgoods(){
       this.$axios.get('api/getgoods?pageindex='+this.pageindex ).then((res)=>{
        this.list= this.list.concat(res.data.message);
        console.log(this.list);
        
        // `api/getgoods?pageindex=${this.pageindex}&limit=${this.limit}`
    
       
       })
    },
    getMoreBtn(){
      this.pageindex++;
      this.getgoods()
    }
  },

}
</script>
<style lang="less">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.buygoods{
  position: relative;
  display: flex;
flex-wrap: wrap;
padding: 7px;
justify-content: space-between;
  .goodsitem{
     width: 49%;
     margin: 5px 0;
     border: 1px solid #ccc;
     box-shadow: 0 0 8px #ccc;
    //  将上下固定住
      display: flex;
      flex-direction: column;
      justify-content: space-between;
          //  将上下固定住
    img{
      width:100%;
    }
   h1{
     font-size: 14px;
       margin: 10px 0;
       text-align: center;
    
   }
   .otherinfo{
    background-color: #ccc;
    font-size: 14px;
    .price{
      padding: 5px;
    }
    .old{
      font-size:10px;
    }
    .sell{
        padding: 4px;
      display: flex;
      justify-content: space-between
    }
   }
  }
 
}
</style>