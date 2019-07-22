<template>
  <div>
    <van-nav-bar
      left-arrow
      title="保证金"
      right-text="保证金说明"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed
      >
    </van-nav-bar>
    <div class="top-space"></div>
    <div class="bond-bg img-common white-color flex-center">
      <div class="tcenter">
        <div class="bondAmount">{{bondAmount}}</div>
        <div class="font-14 mgt10">您的保证金</div>
      </div>
    </div>
    <div class="flex-center mgt15" v-if="bondState === 0">
      <van-button type="default" class="mgr10" @click="thaw">解冻</van-button>
      <van-button type="info" @click="recharge">充值</van-button>
    </div>
    <div class="flex-center mgt15" v-if="bondState === 2">
      <div class="tcenter">
        <div class="font-14 mgb10">2019.07.25 08:01:14 申请解冻</div>
        <van-button loading type="default" disabled  round loading-text="处理中..." />
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Toast } from 'vant';

  Vue.use(Toast);
  import { mapGetters } from 'vuex';
  export default {
    components:{
    },
    name: 'bond',
    data () {
      return {
        bondState: 0, // 保证金状态 0-有金额 1-无金额 2-解冻中
        bondAmount: 500,  // 保证金金额
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
      onClickRight(){
        this.$router.push({ name: 'bondDesc' })
      },
      // 保证金解冻
      thaw () {
        let that = this;
        that.$dialog.confirm({
          title: '提示',
          message: '保证金解冻之后，将不会继续享受到保证金服务，保证金将在3个工作日后退回到原账号，是否继续',
          confirmButtonColor: '#323233',
          cancelButtonColor: '#1989fa',
        }).then(() => {
          const toast = Toast.loading({
            mask: true,
            message: '加载中...',
            duration: 0,       // 持续展示 toast
          });
          setTimeout( ()=> {
            Toast.clear();
            that.successThaw()
            that.bondState = 2;
          }, 1500)
        }).catch(() => {
          // on cancel
        });
      },
      // 保证金成功解冻
      successThaw () {
        let that = this;
        that.$dialog.alert({
          title: '提交成功',
          message: '保证金将在3个工作日后退回到原账号，请注意查收'
        }).then(() => {
          // on close
        });
      },
      // 保证金充值
      recharge () {
        this.$dialog.confirm({
          title: '提示',
          message: '若您的保证金低于所店铺所属商品类目表，就无法享受到保证金服务，请尽快充值哦',
        }).then(() => {
          this.$router.push({ name: 'payment' })
        }).catch(() => {
          // on cancel
        });
      },
    }
  }
</script>
<style lang="css" scoped>
  .bond-bg{
    height: 7rem;
    background-image: url('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1390879277,1643069879&fm=26&gp=0.jpg');
  }
  .bondAmount{
    font-size: 1rem;
  }
</style>
