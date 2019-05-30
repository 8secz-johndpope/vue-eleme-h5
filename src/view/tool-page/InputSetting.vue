<template>
  <div>
    <div>
      <van-nav-bar
        title="输入零钱"
        left-arrow
        @click-left="onClickLeft"
        >
      </van-nav-bar>
    </div>
    <van-cell-group class="mgt10">
      <van-field
        v-model="amount"
        clearable
        type="number"
        label="零钱金额"
        placeholder="请输入零钱金额（元），会自动格式化"
      />
    </van-cell-group>
    <router-link :to="{ name: 'wechatBalance', params: { 'amount' : amount } }" class="flex-center">
      <van-button type="primary" size="large" :disabled="amount === '' ? true : false " class="mgt10 preview-btn">生成预览</van-button>
    </router-link>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    components:{
    },
    name: 'inputMoney',
    data () {
      return {
        amount: 8888,  // 输入金额
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
<style lang="css" scoped>
  .preview-btn{
    width: 80%;
  }
</style>
