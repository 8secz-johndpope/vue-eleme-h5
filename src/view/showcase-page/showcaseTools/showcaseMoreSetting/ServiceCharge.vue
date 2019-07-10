<template>
  <div>
    <van-nav-bar
      left-arrow
      title="服务费"
      right-text="服务费说明"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fiexed
      >
    </van-nav-bar>
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
</style>
