<template>
  <div class="myzone_index">
    <i class="fa fa-bars setting" @click="openSetting"></i>
    <div class="bgImg">
      0
    </div>
    <!-- <van-icon name="setting-o" class="setting" /> -->
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      class="main-content"
      pulling-text=" "
      loosing-text=" "
      loading-text=" "
    >
      <div class="myzone_content">
        <!-- 头 -->
        <div class="myzone_info">
          <div class="basic-info">
            <img :src="getImitateUser.userImg" alt="">
            <h3>{{ getImitateUser.userName }}</h3>
            <p>183*****935</p>
          </div>
          <div class="myzone_uid">
              <van-button type="danger"><van-icon name="plus" />加关注</van-button>
          </div>
        </div>
      </div>
      <!-- 3分 -->
      <div class="three_lan">
        <a class="three_lan_">
          <p class="big_colorful">
            <span class="index-2FmrF_0" style="color: rgb(255, 153, 0);">{{getImitateUser.getPraised}}</span><span class="index-2V-Hh_0">获赞</span>
          </p>
        </a>
        <a class="three_lan_" style="border-left: 1px solid #ddd;border-right: 1px solid #ddd;">
          <p class="big_colorful">
            <span class="index-2FmrF_0" style="color: rgb(255, 95, 62);">{{getImitateUser.fans}}</span><span class="index-2V-Hh_0">粉丝</span>
          </p>
        </a>
        <a class="three_lan_">
          <p class="big_colorful">
            <span class="index-2FmrF_0" style="color: rgb(106, 194, 11);">{{getImitateUser.follow}}</span><span class="index-2V-Hh_0">关注</span>
          </p>
        </a>
      </div>
      <!-- 我的作品以及收藏 -->
      <van-tabs v-model="active" sticky @click="onClick" class="worksAndFavorite">
        <van-tab title="我的作品">
          <Conversation :composition="getImitateConversation"></Conversation>
        </van-tab>
        <van-tab title="我的收藏">
          <Conversation :composition="getImitateConversation"></Conversation>
        </van-tab>
      </van-tabs>
      <!-- 设置栏 默认隐藏 -->
      <van-popup v-model="show" position="right" :overlay="true">
        <!-- 栏 -->
        <Setting></Setting>
      </van-popup>
    </van-pull-refresh>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <Fixednav></Fixednav>
  </div>
</template>

<script>
import Fixednav from './small_components/Fixed_nav';
import Conversation from './small_components/Conversation';
import Setting from './Setting';
import { mapGetters } from 'vuex';
export default {
  name: 'myzone',
  data () {
    return {
      uname: '',
      active: 0,
      show: false,
      isLoading: false
    };
  },
  mounted () {
    if (!this.isLogin) {
      this.$router.replace('/login');
    } else {
      this.uname = this.$store.getters.getuname;
      // 设置当前标记为我的
      this.$store.dispatch('setWhichpage', 'myzone');
    }
  },
  computed: {
    isLogin () {
      if(this.COMMONFUNC.getCookieValue("token") == 'isLogin'){
        return true;
      }else {
        return this.$store.getters.getLogin;
      }
    },
    ...mapGetters([
      'getImitateUser', // 获取用户数据
      'getImitateConversation', // 获取模拟对话
    ])
  },
  methods: {
    onClick(index, title) {
      this.$toast(title);
    },
    openSetting(){
      this.show = true;
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    }
  },
  components: {
    Fixednav,
    Setting,
    Conversation,
  }
};
</script>

<style lang="less" scoped>
.bgImg{
  height: 8rem;
  background-image: url(https://www.cpyzj.com/H5/images/bg_wode.png);
  position: fixed;
  top: 0;
  background-size: 100%;
  width: 100%;
  background-repeat: no-repeat;
}
.main-content{
  margin-top: 2rem;
}
.setting{
  z-index: 999;
  position: fixed;
  right: 0.3rem;
  top: 0.3rem;
  color: #fff;
}
.myzone_info {
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: -0.5rem;
  z-index: 9999;
  width: 90%;
}
.myzone_content{
  height: 2rem;
  padding: 0.2rem .4rem;
  box-sizing: border-box;
  background: #0097ff;
  position: relative;
  img{
    width:2rem;
    height:2rem;
    border-radius:50%;float: left;
  }
  .myzone_uid{
    float: left;
    margin-left:.5rem;
    color:#fff;
    h3{
      font-size:.7rem;
    }
    p{
      font-size:.4rem;
    }
  }
}
.three_lan{
  display: table;
  width: 100%;
  height: 2.24rem;
  color: #fff;
  border-bottom: 1px solid #ddd;
  background-color: #0097ff;
  .three_lan_{
    display: table-cell;
    width: 33.3333%;
    vertical-align: middle;
    text-align: center;
    p.big_colorful{
      line-height:.4rem;
    }
    .index-2FmrF_0 {
        padding: .4rem 0 0;
        font-size: .6rem;
        line-height: .6rem;
        font-weight: 700;
    }
    .index-2V-Hh_0 {
        font-size: .32rem;
        line-height: .32rem;
        color: #fff;
    }
    .index-3S6cZ_0 {
        font-size: .32rem;
        line-height: .37rem;
        font-weight: 500;
        color: #fff;
    }

  }
}
.worksAndFavorite{
  background: #F4F4F4;
}
</style>
