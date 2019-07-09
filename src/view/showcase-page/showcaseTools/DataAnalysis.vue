<template>
  <div>
    <van-nav-bar
      left-arrow
      title="数据分析"
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
    name: 'dataAnalysis',
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
