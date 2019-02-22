<!-- 共获得赞数 -->
<template>
  <van-popup v-model="praisedNumPopup" :close-on-click-overlay="false">
    <div class="advertising">
      <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3934558351,204464023&fm=173&app=49&f=JPEG?w=552&h=330&s=E5E021F5448070E5D6981E600300B074"  />
      <p class="flex-center">
        放广告的图片
      </p>
      <p class="flex-center">
        xxx 共获得 99999（具体）赞数
      </p>
    </div>
    <div class="flex-center btn-zone">
      <van-button plain type="danger" size="small" @click="closePraisedNumPop">确认</van-button>
    </div>
  </van-popup>
</template>

<script>
export default {
  name: 'get_praiseNum',
  props: {
      praisedNumPopup: {
        type: Boolean,
        default: false,
      },
  },
  data () {
    return {
      active: 0,
    };
  },
  mounted () {
  },
  computed: {

  },
  methods: {
    closePraisedNumPop () {
      this.$emit('closePraisedNumPop-ok')
    },
  }
};
</script>

<style lang="less" scoped>
  .advertising{
    width: 5rem;
    height: 4rem;
  }
  .btn-zone{
    margin-bottom: 10px;
  }
</style>
