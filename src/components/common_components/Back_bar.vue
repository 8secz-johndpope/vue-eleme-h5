<template>
  <!-- 我只是个头 -->
  <div>
    <van-nav-bar
      :title="titleName"
      left-arrow
      @click-left="onClickLeft"
      fixed
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
