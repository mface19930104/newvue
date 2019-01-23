<template>
  <div class="newslist">
    <ul>
      <li v-for="item in newslist" :key="item.id">
        <!--带id过去-->
        <router-link :to="'/home/newsinfo/'+item.id" class="imgdatabox">
          <img src="../../assets/123.jpg" alt class="imgdata">
          <div class="textdata">
            <a href="javascript:;">{{item.title}}</a>
            <p>
              <span>发表时间：{{item.add_time}}</span>
              <span class="sec">点击：{{item.click}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
   
    <!-- <van-card v-for="item in newslist" :key="item.id"
      num="2"
      price="2.00"
      title="商品标题"
      :thumb="'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'"
    />-->
  </div>
</template>
<script>
export default {
  data: () => ({
    newslist: []
  }),

  methods: {
    getnews() {
      this.$axios.get("api/getnewslist").then(res => {
        console.log(res);

        if (res.data.status === 0) {
          this.newslist = res.data.message;
          console.log(this.newslist);
        }
      });
    }
  },
  created() {
    this.getnews();
  }
};
</script>

<style lang="less">
ul,
li {
  box-sizing: border-box;
}
a {
  color: black;
  font-size: 12px;
}
ul {
  width: 100%;
  padding-left: 10px;

  li {
    position: relative;
    width: 100%;
    font-size: 12px;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    height: 70px;
    padding: 10px 10px 10px 0;
    .imgdatabox {
      display: block;
    }
    .imgdata {
      float: left;
    }
    .textdata {
      float: left;
      width: 80%;
      height: 50px;
      margin-left: 10px;
      p {
        display: flex;
        justify-content: space-between;
        color: #226aff;
        &:first-child {
        
          font-size: 12px;
        }
        .sec {
          font-size: 12px;
        }
      }
    }
    img {
      height: 50px;
    }
  }
}
</style>
