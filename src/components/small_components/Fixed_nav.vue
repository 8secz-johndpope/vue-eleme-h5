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
      <div class="selectConverstionType">
        <!-- <van-button plain type="primary">一键对话</van-button>
        <van-button plain type="danger">分段对话</van-button> -->
        <van-tabs type="card">
          <van-tab title="一键对话" class="placehoder-setting">
            <van-cell-group class="tabContents">
              <van-field
                v-model="message"
                type="textarea"
                placeholder="写标准的内容并使用合适的话题，能让更多的人看到"
                rows="4"
                autosize
              />
            </van-cell-group>
          </van-tab>
          <van-tab title="分段对话">分段对话</van-tab>
        </van-tabs>
      </div>
      <div class="theme-type">
        <van-cell-group>
          <van-field
            v-model="theme"
            type="textarea"
            placeholder="请输入类型"
            rows="1"
            autosize
          />
        </van-cell-group>
        <van-button size="mini">#类型</van-button>
      </div>
      <div class="spaceDiv"></div>
      <div class="opt-zone">
        <van-button type="default"><i class="fa fa-edit" aria-hidden="true"></i>草稿</van-button>
        <van-button type="danger"><i class="fa fa-arrow-up" aria-hidden="true"></i>发表</van-button>
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
      message: '',
      theme: '',
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
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
  .theme-type{
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .tabContents{
    margin-top: 15px;
  }
  .spaceDiv{
    height: 10rem;
  }
  .opt-zone{
    position: fixed;
    bottom: 15px;
    width: 100%;
    text-align: center;
  }
</style>
