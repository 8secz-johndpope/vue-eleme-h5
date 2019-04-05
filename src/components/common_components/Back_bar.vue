<template>
  <!-- 我只是个头 -->
  <div>
    <van-nav-bar
      :title="titleName"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
export default {
  name: 'back_bar',
  props: {
    titleName: {
      type: String,
      default: '头部名称'
    },
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
    onClickLeft(){
      history.go(-1)
    },
  }
};
</script>

<style lang="less" scoped>

</style>
