<template>
  <div class="goodsinfo_container">
    <div class="swiper">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in goodsthumlist" :key="item.id">
          <img :src="item.src" alt>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="sellinfo">
      <h2 class="title">{{goodsitem.title}}</h2>
      <hr>
      <div class="sellinfodetail">
        <p class="price">
          <span>市场价：￥{{goodsitem.market_price}}</span>&nbsp;&nbsp;
          <span>销售价：￥{{goodsitem.sell_price}}</span>
        </p>
        <p class="number">
          <span>购买数量:</span>&nbsp;&nbsp;
          <van-stepper v-model="value" :step="1"/>
        </p>
        <div class="btn">
          <van-button type="default" class="atonec">立即购买</van-button>
          <van-button type="danger" @click="addcar" :disabled="disabled">加入购物车</van-button>
        </div>
      </div>
    </div>
    <div class="somedata">
      <h2 class="newtitle">商品参数</h2>
      <hr>
      <div class="somedatadel">
        <p>
          <span>商品货号：</span>&nbsp;&nbsp;
          <span>{{goodsitem.goods_no}}</span>
        </p>
        <p>
          <span>库存情况：</span>&nbsp;&nbsp;
          <span>{{goodsitem.stock_quantity}}</span>
        </p>
        <p>
          <span>上架时间：</span>&nbsp;&nbsp;
          <span>2012-21-12</span>
        </p>
      </div>
    </div>
    <transition @before-Enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" ref="myball" v-if="flag"></div>
    </transition>
  </div>
</template>
<script>
export default {
  data: () => ({
    id: "",
    goodsthumlist: "",
    flag: false,
    value: 1,
    goodsitem: "",
    disabled:false
  }),
  created() {
    this.id = this.$route.params.id;
    this.newid = parseInt(this.$route.params.id) + 100;
    this.getgoodsthum(), this.getgoodsinfo();
  },
  methods: {
    // 获取轮播图
    getgoodsthum() {
      this.$axios.get("api/getthumimages/" + this.newid).then(res => {
        console.log(res);
        this.goodsthumlist = res.data.message;
        console.log(this.goodsthumlist);
      });
    },
    // 获取产品详细信息
    getgoodsinfo() {
      this.$axios.get("api/goods/getinfo/" + this.id).then(res => {
        this.goodsitem = res.data.message;
        console.log(this.goodsitem);
      });
    },
    // 加入购物车 并对禁用按钮进行操作
    
    addcar() {
      const goodsinfo = {
        value:this.value,
        id:this.id,
        title:this.goodsitem.title,
        sell_price:this.goodsitem.sell_price,
      }
      // 对球的判断
      this.flag = !this.flag;
      // 对按钮禁用的判断
      this.disabled =! this.disabled;
      setTimeout(()=>{
        // 对按钮禁用的判断
  this.disabled =! this.disabled;
   this.$store.commit("addToCar",goodsinfo)
      },800)

    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      const myballposition = this.$refs.myball.getBoundingClientRect();
      const carinfoposition = document
        .querySelector("#shopcar .van-info")
        .getBoundingClientRect();
      const positiony = carinfoposition.top - myballposition.top;
      const positionx = carinfoposition.left - myballposition.left;

      el.offsetWidth;
      el.style.transform = `translate(${positionx}px,${positiony}px)`;
      el.style.transition = "all 0.5s ease";
      done();
    },
    afterEnter(el) {
      this.flag = !this.flag;
    }
  }
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
.goodsinfo_container {
  background-color: #eee;
  height: 100%;
  padding: 4px;
  .swiper {
    img {
      width: 100%;
      height: 367px;
    }
  }
  .sellinfo {
    background-color: #fff;
    margin: 5px 0;
    .title {
      font-size: 20px;
      font-weight: 400;
      padding: 15px;
    }
    .sellinfodetail {
      padding: 15px 0 15px 10px;
      .number {
        margin-top: 10px;
        display: flex;
        van-stepper {
          margin-left: 5px;
        }
      }
      .btn {
        padding-bottom: 10px;
        padding-top: 10px;
        .atonec {
          background-color: #26a2ff;
          color: #fff;
        }
      }
    }
  }
  .somedata {
    background-color: #fff;
    margin: 5px 0;
    .newtitle {
      font-size: 20px;
      font-weight: 400;
      padding: 15px;
    }
    .somedatadel {
      padding: 15px;
      p {
        margin-bottom: 10px;
      }
    }
  }
}
.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  top: 531px;
  left: 138px;
  opacity: 1;
}
</style>
