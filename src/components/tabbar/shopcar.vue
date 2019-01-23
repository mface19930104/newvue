<template>
<div class="cart">
  <div class="items">
<div  class="switch" >
    <van-switch v-model="checked"  size="24px" />
</div>
     
   
<van-card class="card"
  num="2"
  price="2.00"
  desc="描述信息"  
  title="商品标题"
  :thumb="'http://localhost:5000/goods/images/1.jpg'"
/>
  </div>
  <div class="newitem">
  
  </div>
</div>
</template>

<script>

export default {
  data:()=>({
          checked: true
  })
}
</script>
<style lang="less">
*{
  padding-top: 0;
  margin: 0;
}
//flex中左边固定右边自适应 可以给父盒子flex 右边1 
.items{
display: flex;
padding: 10px;


.card{
  flex: 1
}
// flex中左边固定右边自适应 
// flex中垂直居中 
.switch{
  display:flex;
  align-items:center
}
}
</style>