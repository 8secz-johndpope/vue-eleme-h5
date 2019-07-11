<template>
  <div>
    <van-nav-bar
      left-arrow
      title="保证金"
      right-text="服务费说明"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fiexed
      >
    </van-nav-bar>
    <div class="bond-bg img-common white-color">
      00
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    components:{
    },
    name: 'serviceCharge',
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
        this.COMMONFUNC.goBack();
      },
      onClickRight(){
        this.COMMONFUNC.goBack();
      },
    }
  }
</script>
<style lang="css" scoped>
  .bond-bg{
    height: 10rem;
    background-image: url('https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2294469634,3819017600&fm=15&gp=0.jpg');
  }
</style>
