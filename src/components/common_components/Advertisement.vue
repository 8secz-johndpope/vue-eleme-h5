<template>
  <div class="advertisement-zone">
    <div>
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1711883993,3649783666&fm=26&gp=0.jpg" class="advertisement-img">
    </div>
    <section class="flex-between advertisement-footer">
      <van-tag plain type="primary">广告</van-tag>
      <a href="https://www.baidu.com" class="a-href">了解更多>></a>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'advertisement',
    data () {
      return {
        msg: '1',
        sharePopShow: false,  // 更多选项
        targetId: '', // 文章Id
      };
    },
    mounted () {

    },
    computed: {

    },
    methods: {
    }
}
</script>

<style lang="less" scoped>
  .advertisement-zone{
    padding: 0 0.4rem 0.266667rem 0.4rem;
  }
  .advertisement-img{
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
  .advertisement-footer{
    padding: 0.266667rem 0;
  }
  .a-href{
    color: #377DF8;
  }
</style>
