<template>
  <div>
    <!-- 顶部 -->
    <div class="fixed-top">
      <van-nav-bar
        title="情感百科"
        left-arrow
        @click-left="onClickLeft"
      >
      </van-nav-bar>
    </div>
    <div class="content">
      <!-- 情感百科 -->
      <van-cell class="mgt10">
        <template slot="title">
          <div class="flex-start">
            <van-icon name="like-o" class="red-color mgr5" />
            <span class="custom-text">情感百科</span>
          </div>
        </template>
        <template slot="right-icon">
          <div class="flex-center gray-color" @click="$toast('刷新下方三条数据')">
            <van-icon name="replay" class="flex-center custom-ico"></van-icon>
            <span class="change">换一批</span>
          </div>
        </template>
      </van-cell>
      <!-- 情感百科列表，默认3篇 -->
      <div class="white-bg pd10">
        <EncyclopediasCard></EncyclopediasCard>
      </div>
    </div>
  </div>
</template>
<script>
import EncyclopediasCard from 'components/common_components/EncyclopediasCard';
export default {
  name: 'encyclopediasList',
  components: {
    EncyclopediasCard,
  },
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
  },
};
</script>

<style lang="less" scoped>
  .content{
    margin: 1.2rem 0 0 0;
  }
  .change{
    margin-top: 0.2px;
  }
</style>
