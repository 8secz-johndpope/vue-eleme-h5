<template>
  <div>
    <van-nav-bar
      left-arrow
      title="服务费"
      @click-left="onClickLeft"
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

    }
  }
</script>
<style lang="css" scoped>
</style>
