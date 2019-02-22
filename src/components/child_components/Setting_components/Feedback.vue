<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="个人信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell title="头像" icon="user-o" is-link to="index" class="cellDiv" />
    <van-cell title="名称" icon="gem-o" is-link to="index" />
    <van-cell title="性别" icon="orders-o" is-link to="index" class="cellDiv" />
    <van-cell title="地区" icon="envelop-o" is-link to="index" />
    <van-cell title="个性签名" icon="more-o" is-link to="index" />
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'setting',
    data () {
      return {
        msg: '1',
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
  .cellDiv{
    margin-top: 5px;
  }
</style>
