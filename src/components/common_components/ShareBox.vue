<template>
  <div>
    <!-- 分享选项 -->
    <i class="fa fa-weixin" aria-hidden="true"></i>
    <i class="fa fa-qq" aria-hidden="true"></i>
    <i class="fa fa-heart-o" aria-hidden="true"></i>
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
</style>
