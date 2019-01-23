<template>
 <div class="cmt">
    <h4 class="cmtdetail">发表评论</h4>
  <hr>
  <textarea placeholder="请输入评论内容(最多120字)" maxlength="120" v-model="msg"></textarea>
  <van-button type="default" size="large" text="发表评论"  @click="postcmt"></van-button>
  <div class="cmtlist" v-for="(item , i) in cmtlist" :key="item.id">
    <div class="cmtlist_title">
      <span>第{{i+1}}楼</span>&nbsp; <span>用户：{{item.user_name}}</span>&nbsp;<span>发表时间：{{item.add_time}}</span>
    </div>
    <div class="cmtlist_content">{{item.content}}</div>
   
  </div>
  <van-button plain type="danger" size="large" text="加载更多" @click="addcmt"></van-button>
 </div>
</template>
<script>
export default {
  data:()=>({
    pageindex:1,
    cmtlist:[],
    msg:''
  }),
   props:['id'],
  created(){
    this.getcomment()
    console.log(this.id);
    
  },
  methods:{
    getcomment(){
      this.$axios.get('api/getcomments/'+this.id+'?pageindex='+this.pageindex).then((res)=>{
    if (res.data.status==0) {
      this.cmtlist=this.cmtlist.concat(res.data.message)
      console.log(this.cmtlist);
    }
      })
    },
    //加载更多数据 只需要给页面加一 再请求 
    addcmt(){
   this.pageindex++;
      this.getcomment()
    },
     postcmt(){
       if (this.msg.trim()=='') {
         alert('不能为空')
         return;
       }
      
      // this.$http.post('http://localhost:5000/api/postcomment/'+this.id,{content:this.msg},{emulateJSON:true}).then(res=>{
      //   if (res.body.status===0) {
      //     var newcmt={
      //       user_name:'匿名用户',
      //       add_time:new Date(),
      //       content:this.msg
      //     };
      //     this.cmtlist.unshift(newcmt)
      //   }
        
      // });
   this.$axios.post('api/postcomment/'+this.id,{content:this.msg}).then((res)=>{
    
     
      if (res.data.status===0) {
          var newcmt={
            user_name:'匿名用户',
           add_time:new Date(),
          content:this.msg
          };
           this.cmtlist.unshift(newcmt)
        }
   })
      
       
 }
  },

}
</script>
<style lang="less">
.cmt{
  margin-top: 20px;
  padding:0 5px; 

}
.cmtdetail{
  font-size: 14px;
  padding-bottom: 5px;
}
textarea{
   margin-top:10px;
height: 100px;
  width: 99%;
  overflow:auto;

}
.van-button--default{
  background-color: #226aff;
  color: #fff;
   margin-bottom: 5px;
}
.cmtlist{
 
  font-size: 13px;

.cmtlist_title{
  background-color: #ccc;
  line-height: 35px;
} 
.cmtlist_content{
  line-height: 35px;
}
}
</style>
