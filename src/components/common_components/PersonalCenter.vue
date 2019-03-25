<template>
  <div class="myzone_index">
      <div v-if="centerType === 0 ">
        <router-link :to="'/setting'"><i class="fa fa-bars setting"></i></router-link>
      </div>
      <div v-else-if="centerType === 1 ">
        <van-icon name="arrow-left" @click="onClickLeft" class="arrow-left" />
        <router-link :to="'/UserSetting'"><i class="fa fa-bars setting"></i></router-link>
      </div>
      <div class="myzone_content" :style="{backgroundImage: 'url(' + background_wall_img + ')' }" @click="backgroundWallImg">
        <!-- 头 -->
        <div class="myzone_info">
          <div class="basic-info">
            <img :src="getImitateUser.userImg" alt="" @click.stop="userAvatar">
            <h3 class="userName">{{ getImitateUser.userName }}</h3>
            <p class="userNo">账号:183*****935</p>
          </div>
          <div class="flex-center myzone_uid">
            <van-button type="danger" class="zone-btn" size="small" @click.stop="sign" v-if="!isSign && centerType === 0 "><van-icon name="sign" class="iconType" />签到</van-button>
            <van-button type="danger" class="zone-btn" size="small" @click.stop="sign" v-if="isSign && centerType === 0 "><van-icon name="sign" class="iconType" />已签到</van-button>
            <van-button type="danger" class="zone-btn" size="small" v-if="follow_type == '0' && centerType === 1 " @click.stop="addInterest"><van-icon name="plus" class="iconType" />加关注</van-button>
            <van-button type="danger" class="zone-btn" size="small" v-if="follow_type == '1' && centerType === 1 " @click.stop="sendMsg" ><van-icon name="chat-o" class="iconType" />发消息</van-button>
            <van-button type="danger" class="zone-btn" size="small" v-if="follow_type == '1' && centerType === 1 " @click.stop="cancelInterest"><van-icon name="exchange" class="iconType"  /></van-button>
          </div>
        </div>
      </div>
      <!-- 3分 -->
      <div class="three_lan">
        <a class="three_lan_">
          <p class="big_colorful" @click="getPraisedNum">
            <span class="index-2FmrF_0" style="color: rgb(255, 153, 0);">{{getImitateUser.getPraised}}</span><span class="index-2V-Hh_0">获赞</span>
          </p>
        </a>
        <a class="three_lan_" style="border-left: 1px solid #ddd;border-right: 1px solid #ddd;">
          <router-link :to="'/myfans'">
            <p class="big_colorful">
              <span class="index-2FmrF_0" style="color: rgb(255, 95, 62);">{{getImitateUser.fans}}</span><span class="index-2V-Hh_0">粉丝</span>
            </p>
          </router-link>
        </a>
        <a class="three_lan_">
          <router-link :to="'/myfollows'">
            <p class="big_colorful">
              <span class="index-2FmrF_0" style="color: rgb(106, 194, 11);">{{getImitateUser.follow}}</span><span class="index-2V-Hh_0">关注</span>
            </p>
          </router-link>
        </a>
      </div>
      <!-- 我的作品以及收藏 -->
      <van-tabs v-model="tabActive" sticky @click="changeTab" class="worksAndFavorite">
        <van-tab title="我的作品">
          <Conversation :composition="getImitateConversation" :isShowRoofPlacement="true"></Conversation>
        </van-tab>
        <van-tab title="我的收藏">
          <Conversation :composition="getImitateConversation" :isShowRoofPlacement="true"></Conversation>
        </van-tab>
      </van-tabs>
      <GetPraisedNum :praisedNumPopup="praisedNumPopup" @closePraisedNumPop-ok="closePraisedNumPop"></GetPraisedNum>
    </div>
</template>

<script>
import Conversation from './Conversation';
import GetPraisedNum from '../child_components/Myzone/GetPraisedNum';
import { ImagePreview } from 'vant';
import { mapGetters } from 'vuex';
export default {
  name: 'myzone',
  components: {
    Conversation,
    GetPraisedNum
  },
  props: {
    centerType: {
      type: Number,
      default: 0, // 个人中心类型，0-自己的，1-其他人的
    }
  },
  data () {
    return {
      tabActive: 0,  // 我的作品，我的收藏
      follow_type: 0,
      praisedNumPopup: false, // 获得赞数 弹出层 查看具体赞数，可以插入广告
      background_wall_img: 'http://img.bqatj.com/img/6a51e6cae12c5002.jpg', // 背景墙图片
      isSign: false, // 是否已签到
    };
  },
  mounted () {
  },
  computed: {
    ...mapGetters([
      'setWhichpage',
      'getImitateUser', // 获取用户数据
      'getImitateConversation', // 获取模拟对话
    ])
  },
  methods: {
    // 切换tab 我的作品和收藏
    changeTab(index, title) {
      this.$toast(title);
    },
    // 签到
    sign () {
      if (this.isSign) {
        this.$toast('已签到，每天签到都会获得积分哦')
      }else {
        this.$dialog.alert({
          message: '签到成功，获得2积分'
        }).then(() => {
          // on close
        });
      }
      this.isSign = true;
    },
    // 加关注
    addInterest () {
      this.follow_type = 1;
    },
    cancelInterest () {
      this.follow_type = 0;
    },
    // 获取点赞数目
    getPraisedNum () {
      this.praisedNumPopup = true;
    },
    // 关闭 获取点赞数 弹出层
    closePraisedNumPop () {
      this.praisedNumPopup = false;
    },
    // 图片预览
    userAvatar () {
      ImagePreview([
        this.getImitateUser.userImg,
      ]);
    },
    // 背景墙图片
    backgroundWallImg () {
      ImagePreview([
        this.background_wall_img,
      ]);
    },
    // 返回上一页
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
    // 发消息
    sendMsg () {
      this.$toast('跳转聊天室')
    }
  },
};
</script>

<style lang="less" scoped>
.bgImg{
  height: 8rem;
  background-image: url(http://img.bqatj.com/img/6a51e6cae12c5002.jpg);
  position: fixed;
  top: 0;
  background-size: 100%;
  width: 100%;
  background-repeat: no-repeat;
}
.main-content{
  margin-top: 2rem;
}
.arrow-left{
  z-index: 999;
  position: fixed;
  left: 0.3rem;
  top: 0.3rem;
  color: #fff;
  width: 0.8rem;
  font-size: 0.5rem;
}
.setting{
  z-index: 999;
  position: fixed;
  right: 0.3rem;
  top: 0.3rem;
  color: #fff;
  width: 0.8rem;
  font-size: 0.5rem;
}
.myzone_info {
  display: flex;
  justify-content: space-between;
}
.myzone_content{
  height: 4.2rem;
  padding: 0.8rem 0.58rem;
  box-sizing: border-box;
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
  img{
    width:2rem;
    height:2rem;
    border-radius:50%;
    float: left;
  }
  .userName{
    color: #fff;
    font-size: 18px;
    padding: 2.1rem 0 0.1rem 0;
  }
  .userNo{
    color: #fff;
  }
}
.three_lan{
  display: table;
  width: 100%;
  height: 1.2rem;
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
.iconType{
  vertical-align: middle;
  font-size: 0.34rem;
  padding: 0 0.08rem 0.08rem 0;
}
.zone-btn{
  margin-left: 0.15rem;
}
</style>
