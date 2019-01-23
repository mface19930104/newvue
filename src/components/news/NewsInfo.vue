<template>
  <div class="newsinfo">
    <h4 class="title">{{newsinfo.title}}</h4>
    <div class="info">
      <span>发表时间:{{newsinfo.add_time}}</span>
      <span>点击:{{newsinfo.click}}</span>
    </div>
    <p class="content">{{newsinfo.content}}</p>
    <comment :id="id"></comment>
  </div>
</template>
<script>
import comment from "../subcomponents/comment.vue";
export default {
  data: () => ({
    id: "",
    newsinfo: ""
  }),
  created() {
    this.id = this.$route.params.id;
    this.getinfo();
  },
  methods: {
    getinfo() {
      this.$axios.get("api/getnew/" + this.id).then(res => {
        if (res.data.status === 0) {
          this.newsinfo = res.data.message;

          console.log(this.newsinfo);
        }
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
</style>
