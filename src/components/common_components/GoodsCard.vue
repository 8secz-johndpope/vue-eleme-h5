<template>
  <div>
    <van-card
      num="2"
      tag="标签"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg"
      origin-price="10.00"
    >
      <div slot="tags">
        <van-tag type="danger">热卖</van-tag>
        <van-tag type="danger">热卖</van-tag>
      </div>
    </van-card>
  </div>
</template>

<script>
export default {
  // 父子通信
  props: {
  },
  components : {
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
  }
};
</script>

<style lang="less" scoped>
</style>
