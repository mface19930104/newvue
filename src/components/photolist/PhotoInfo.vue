<template>
  <div>
    <h4 class="title">{{imginfo.title}}</h4>
    <div class="info">
      
        <span>发表时间:{{imginfo.add_time}}</span>
        <span>点击:{{imginfo.click}}</span>
  </div>
      <p class="content">{{imginfo.content}}</p>
       <div class="imgarea"> 
      <img v-for="item in Images" :src="item.src" alt="" :key="item.id" @click="swiperImage" >
    </div>                                                                                                                                                                                                                                                                                                                                                                
      <comment :id="id"></comment>
   
  </div>
</template>
<script>
import { ImagePreview } from 'vant';
import comment from "../subcomponents/comment.vue";
export default {
  data: () => ({
    id: "",
    imginfo: "",
    Images:""
    
  }),
  
  created() {
    this.id = this.$route.params.id;
    this.getimginfo();
    this.getthumimages()
  },
  methods: {
    getimginfo() {
      this.$axios.get("api/getimageInfo/" + this.id).then(res => {
        this.imginfo = res.data.message;
      });
    },
    getthumimages(){
       this.$axios.get("/api/getthumimages/"+this.id ).then(res =>{
         console.log(res);
         
         this.Images=res.data.message;
         
       } )
    },
    // swiperImage(){
    //   ImagePreview(this.Images)
    // },
     swiperImage() {
      let images = [];
      // 遍历过滤需要的图片
      this.Images.forEach(item => {
        if (item.src != null) {
          images.push(item.src);
        }
        // 触发预览效果
        ImagePreview({
          // 添加所有的预览图片他是一个数组
          images,
          // 设定预览图片的索引
       
        });
      });
    }

  },
  components: {
    comment
  }
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.title {
  text-align: center;
  font-weight: normal;
  font-size: 14px;
  color: red;
}
.info {
  margin-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.content {
  margin-top: 10px;
  font-size: 14px;
}
.imgarea{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  img{
    height: 100px;
    width:100px;
  }
}

</style>
