<template>
  <div>
    <van-nav-bar
      title="卖家常见问题"
      @click-left="onClickLeft"
      left-arrow
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <!-- 疑难解惑  -->
    <van-collapse v-model="activeNames">
      <van-collapse-item title="1、开通橱窗需要收费吗？" name="1">
        <p class="desc">1.1 开通橱窗是不需要收费的。</p>
      </van-collapse-item>
      <van-collapse-item title="2、一个人可以开几家橱窗？" name="2">
        <p class="desc">2.1 一张身份证只能认证一个橱窗用户，所以一张身份证只能在微撩开一个橱窗</p>
        <p class="desc">2.2 如果橱窗不再使用，或者新申请，要记得及时注销原来的店铺哦</p>
      </van-collapse-item>
      <van-collapse-item title="3、认证审核不通过提示：无效照片等" name="3">
        <p class="desc">3.1 表示您的照片不符合示例图的姿势，或者照片中无法判定是否为本人手持，建议拍摄的时候身份证比例不要超过照片的1/2，直接上传示例图也属于无效，建议您重新拍摄后上传</p>
      </van-collapse-item>
      <van-collapse-item title="4、认证审核不通提示：照片有修改痕迹" name="4">
        <p class="desc">4.1 表示您的照片的内容有切割、ps过的情况，或者照片拍摄角度被误认为有修改痕迹，建议您拍摄完成之后，如果大小符合上传的要求，直接上传即可，不要对照片进行其他的不必要的处理。</p>
      </van-collapse-item>
      <van-collapse-item title="5、不同类目商品可以混合经营吗？" name="5">
        <p class="desc">5.1 一个店铺可以出售多种不同类目的商品。例：手机话费可以和男装一起销售，成人类目商品除外。且成人类目及部分类目需申请特种经营资质，</p>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'transactionDisputes',
    data () {
      return {
        activeNames: ['1'], // 常见问题折叠筐
      }
    },
    mounted () {

    },
    computed: {

    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
    }
}
</script>

<style lang="less" scoped>
  .desc{
    line-height: 0.72rem
  }
</style>
