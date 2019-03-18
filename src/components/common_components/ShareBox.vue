<template>
  <div class="shareBox">
    <!-- 分享选项 -->
    <div class="shareBox-item">
      <i class="fa fa-weixin fa-2x shareBox-icon" aria-hidden="true"></i>
      <p>微信</p>
    </div>
    <div class="shareBox-item">
      <i class="fa fa-qq fa-2x shareBox-icon" aria-hidden="true"></i>
      <p>QQ</p>
    </div>
    <div class="shareBox-item">
      <i class="fa fa-star fa-2x shareBox-icon" aria-hidden="true"></i>
      <p>收藏</p>
    </div>
    <div class="shareBox-item">
      <i class="fa fa-clone fa-2x shareBox-icon" aria-hidden="true"></i>
      <p>复制链接</p>
    </div>
    <div class="shareBox-item">
      <i class="fa fa-exclamation-triangle fa-2x shareBox-icon" aria-hidden="true"></i>
      <p>举报</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'share',
   // 父子通信
  props: {
    targetId: {
      type: String,
      default: '',
    }
  },
  data () {
    return {
    };
  },
  mounted () {

  },
  computed: {
  },
  methods: {

  },
  watch: {
  }
};
</script>

<style lang="less" scoped>
  .shareBox{
    height: 1.5rem;
    display: flex;
    align-items: center;
  }
  .shareBox-item{
    text-align: center;
    width: 1.5rem;
  }
  .shareBox-item p{
    padding: 0 0.1rem 0 0;
  }
  .shareBox-icon{
    margin: 0 0.1rem 0 0;
  }
</style>
