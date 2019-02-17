<template>
  <div>
    <van-tabbar v-model="active" style="z-index:999">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot :to="'/Recommend'">推荐</van-tabbar-item>
      <van-tabbar-item icon="add" @click="addConversation">发表</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5" :to="'/Message'">消息</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20" :to="'/Myzone'">我的</van-tabbar-item>
    </van-tabbar>
    <van-popup v-model="popupShow" :close-on-click-overlay="false">
      <div class="closePop">
        <van-icon name="close" @click="closePop" />
      </div>
      <div class="flex-center selectConverstionType">
        <!-- <van-button plain type="primary">一键对话</van-button>
        <van-button plain type="danger">分段对话</van-button> -->
        <van-tabs type="card">
          <van-tab title="一键对话">
            <textarea>00</textarea>
          </van-tab>
          <van-tab title="分段对话">分段对话</van-tab>
        </van-tabs>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'fixed_nav',
  data () {
    return {
      active: 0,
      popupShow: false, 
    };
  },
  mounted () {
    setInterval(() => {
      // console.log(this.returnPageNow);
    }, 2000);
  },
  computed: {
    returnPageNow () {
      return this.$store.getters.getwhichpage;
    }
  },
  methods: {
    addConversation () {
      this.popupShow = true;
    },
    closePop () {
      this.popupShow = false;
    }
  }
};
</script>

<style lang="less" scoped>
  .van-popup {
    background-color: unset;
    width: 100%;
    height: 100%;
  }
  .closePop{
    position: fixed;
    left: 20px;
    top: 20px;
    color: #fff;
  }
  .selectConverstionType{
    width: 100%;
    height: 100%;
  }
</style>
