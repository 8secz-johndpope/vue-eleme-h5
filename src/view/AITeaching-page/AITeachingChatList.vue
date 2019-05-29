<template>
  <div>
    <van-nav-bar
      title="AI导师"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div class="content">
      <ImgCard :composition="getImitateVideoList"></ImgCard>
    </div>
  </div>
</template>
<script>
import ImgCard from 'components/child_components/AITeaching_components/ImgCard';
import { mapGetters } from 'vuex';
export default {
  name: 'home',
  components: {
    ImgCard,
  },
  data () {
    return {
    };
  },
  mounted () {

  },
  beforeDestroy () {

  },
  computed: {
    ...mapGetters([
      'getImitateVideoList', // 获取模拟视频列表
    ])
  },
  methods: {
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
  },
};
</script>

<style lang="less" scoped>
  .content{
    margin: 1.333333rem 0 0 0;
  }
</style>
