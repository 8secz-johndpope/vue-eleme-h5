<template>
  <div class="advertisement-zone">
    <div class="img-zone-large">
      <img src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1552210959430&amp;di=c51a258d17691b5059e1ad6db3ee56fb&amp;imgtype=0&amp;src=http%3A%2F%2Fimg18.3lian.com%2Fd%2Ffile%2F201709%2F21%2Fa05161a4469dc5ef8be88ee217d53d92.jpg" class="advertisement-img">
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
  .img-zone-large{
    width: 9.333rem;
    height: 9rem;
  }
</style>
