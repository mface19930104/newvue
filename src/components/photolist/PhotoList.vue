<template>
  <div class="getimages">
    <van-tabs @click="onClick">
      <van-tab v-for="item in cate" :title="item.title " :key="item.id"   >
          
        </van-tab>
    </van-tabs>
    <router-link v-for="item in imageList" :key="item.id" :to="'/home/photoinfo'+item.id">
<img  v-lazy="item.img_url"  >
    </router-link>
   
  </div>
</template>
<script>
export default {
  data:()=>({
    cate:[],
    imageList:[]

  }),
  created(){
    this.getCate(),
    this.getImg(0)
  },
  methods:{
    getCate(){
      this.$axios.get('api/getimgcategory').then((res)=>{
       if (res.data.status===0) {
         this.cate=res.data.message;
         this.cate.unshift({ title:'全部', id:0 })
         console.log(this.cate);
         
       }
        
      })
    },
    getImg(cateId){
      this.$axios.get('api/getimages/'+cateId).then((res)=>{
    this.imageList=res.data.message;
        console.log(this.imageList);
        
      })
    },
      onClick(index, title) {
     this.getImg(index)
    
    
    }
  }
};
</script>
<style lang="less">
</style>
