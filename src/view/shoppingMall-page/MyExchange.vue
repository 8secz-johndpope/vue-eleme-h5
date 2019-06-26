<template>
  <div>
    <van-nav-bar
      left-arrow
      @click-left="onClickLeft"
      title="我的兑换"
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
    <van-cell-group>
      <van-cell title="兑换记录" icon="records" is-link @click="exchangeRecord" />
      <van-cell title="收货地址" icon="location-o" is-link to="/setting/receivingAddress" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  components: {
  },
  name: 'exchangeRecord',
  data () {
    return {

    }
  },
  methods: {
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
    exchangeRecord () {
      this.$router.push({
        name: 'exchangeRecord',
        params: {
          userId: 'userId0001',
        },
      })
    }
  }
};
</script>

<style lang="less">
  .user {
    &-poster {
      width: 100%;
      height: 53vw;
      display: block;
    }
    &-group {
      margin-bottom: 15px;
    }
    &-links {
      padding: 15px 0;
      font-size: 12px;
      text-align: center;
      background-color: #fff;
      .van-icon {
        display: block;
        font-size: 24px;
      }
    }
  }
</style>
