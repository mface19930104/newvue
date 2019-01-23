<template>
<div class="member">
这是会员页面

</div>
</template>

<script>
export default {
  data:()=>({
    list:[]
  }),
  created(){
    this.getLunbo()
   
  },
  methods:{
    getLunbo(){
      this.$http.get('http://localhost:5000/api/getlunbo').then((res)=>{
   
        if(res.status==200){
          this.list=res.data.message
           console.log(this.list);
        }
      })
      
      
    }
  }
}
</script>
<style  lang="less">

</style>