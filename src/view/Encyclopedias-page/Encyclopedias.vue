<template>
  <div>
    <!-- 顶部 -->
    <div class="fixed-top">
      <van-nav-bar
        title="工作996，生病ICU，年轻人，你的头发还好吗？"
        left-arrow
        @click-left="onClickLeft"
      >
      </van-nav-bar>
    </div>
    <div class="content">
      <van-cell class="mgt10">
        <template slot="title">
          <div class="flex-start">
            <van-icon name="like-o" class="red-color mgr5" />
            <span class="custom-text">问题</span>
          </div>
        </template>
      </van-cell>
      <div class="white-bg pd10">工作996，生病ICU，年轻人，你的头发还好吗？</div>
      <van-cell class="mgt10">
        <template slot="title">
          <div class="flex-start">
            <van-icon name="like-o" class="red-color mgr5" />
            <span class="custom-text">回答</span>
          </div>
        </template>
      </van-cell>
      <div class="white-bg pd10">
        这是富文本
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'encyclopedias',
  components: {
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
