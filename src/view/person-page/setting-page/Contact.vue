<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="联系我们"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div class="top-space"></div>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="联系方式" name="1">
        QQ：809136696；</br>
        QQ群1：xxx；QQ群2：xxx；QQ群3：xxx；</br>
        微信：xxx；</br>
        电话：xxx</br>
        商务合作热线：xxx</br>
      </van-collapse-item>
      <van-collapse-item title="地址" name="2">
        北京中关村1号
      </van-collapse-item>
      <van-collapse-item title="服务时间" name="3">
        周一至周五 9：00-20：00
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'contact',
    data () {
      return {
        activeNames: ['1','2','3']
      };
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
</style>
