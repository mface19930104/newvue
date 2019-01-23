<template>
<div class="myswipre">
 <van-swipe :autoplay="3000" indicator-color="white" class="swiper">
      <van-swipe-item v-for="(item,index) in list" :key="index">
        <img :src="item.img" alt>
      </van-swipe-item>
    </van-swipe>
</div>
  
</template>
<script>
export default {
  props:['list']
}
</script>
<style lang="less">

</style>
