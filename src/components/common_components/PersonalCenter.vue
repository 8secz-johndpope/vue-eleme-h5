<template>
  <div class="myzone_index">
      <div class="bgImg" :style="{backgroundImage: 'url(' + background_wall_img + ')' }" @click="backgroundWallImg">
        <!-- 用户自己的主页 -->
        <div v-if="centerType === 0 ">
          <i class="fa fa-bars setting" @click.stop="goPerson"></i>
        </div>
        <!-- 他人用户主页 -->
        <div v-else-if="centerType === 1 ">
          <van-icon name="arrow-left" @click.stop="onClickLeft" class="arrow-left" />
          <i class="fa fa-bars setting" @click.stop="goUserSetting"></i>
        </div>
      </div>
      <!-- <div class="myzone_content" :style="{backgroundImage: 'url(' + background_wall_img + ')' }"> -->
      <div class="myzone_content">
        <!-- 头 -->
        <div class="myzone_info">
          <div class="basic-info">
            <img :src="getImitateUser.userImg" alt="" @click.stop="userAvatar">
            <h3 class="userName">{{ getImitateUser.userName }}</h3>
            <p class="userNo">
              <span
                v-clipboard:copy="getImitateUser.LiaoNo"
                v-clipboard:success="onCopyUserNo"
                v-clipboard:error="onCopyUserError"><!-- 复制 -->
                <span>账号:{{ getImitateUser.LiaoNo }}</span>
              </span>
              <!-- 点击按钮跳转个人信息编辑页 -->
              <van-tag color="#3A758C" @click.stop = 'goUserInfo'>
                <van-icon name="manager-o" v-if="getImitateUser.sex == 0 " class="blue-color" />
                <van-icon name="manager-o" v-if="getImitateUser.sex == 1 " class="red-color" />
                <span class="gray-color">{{ getImitateUser.year }}岁</span>
              </van-tag>
              <van-tag color="#3A758C" class="gray-color" v-if="getImitateUser.area" @click.stop = 'goUserInfo'>
                <span class="gray-color">{{ getImitateUser.area }}</span>
              </van-tag>
            </p>
          </div>
          <div class="myzone_uid">
            <van-button type="danger" class="zone-btn" size="small" @click.stop="sign" v-if="!isSign && centerType === 0 "><van-icon name="sign" class="iconType" />签到</van-button>
            <van-button type="danger" class="zone-btn" size="small" @click.stop="sign" v-if="isSign && centerType === 0 "><van-icon name="sign" class="iconType" />已签到</van-button>
            <van-button type="danger" class="zone-btn" size="small" @click.stop="goMywallet" v-if="centerType === 0 "><van-icon name="gold-coin-o" class="iconType" />{{COMMONFUNC.formatterW(getImitateUser.goldCoin)}}</van-button>
            <van-button type="danger" class="zone-btn" size="small" v-if="follow_type == '0' && centerType === 1 " @click.stop="addInterest"><van-icon name="plus" class="iconType" />加关注</van-button>
            <!-- <van-button type="danger" class="zone-btn" size="small" v-if="follow_type == '1' && centerType === 1 " @click.stop="sendMsg" ><van-icon name="chat-o" class="iconType" />发消息</van-button> -->
            <van-button type="danger" class="zone-btn" size="small" v-if="follow_type == '1' && centerType === 1 " @click.stop="cancelInterest"><van-icon name="exchange" class="iconType"  /></van-button>
            <router-link :to="{ name: 'showcase', params: { 'shopId': '01' } }" >
              <div class="gold-color showcase">
                <span class="showcaseDec">商品橱窗</span><van-icon name="cart-o" />
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="user-dec" @click.stop = 'goUserInfo'>
        <p class="user-autograph gray-color"> {{ getImitateUser.autograph ? getImitateUser.autograph : '填写个性签名更容易获得别人关注哦' }}
        </p>
      </div>
      <!-- 3分 -->
      <div class="three_lan">
        <a class="three_lan_">
          <p class="big_colorful" @click="getPraisedNum">
            <span class="index-2FmrF_0">{{getImitateUser.getPraised}}</span><span class="index-2V-Hh_0">获赞</span>
          </p>
        </a>
        <a class="three_lan_">
          <router-link :to="'/myfans'">
            <p class="big_colorful">
              <span class="index-2FmrF_0">{{getImitateUser.fans}}</span><span class="index-2V-Hh_0">粉丝</span>
            </p>
          </router-link>
        </a>
        <a class="three_lan_">
          <router-link :to="'/myfollows'">
            <p class="big_colorful">
              <span class="index-2FmrF_0">{{getImitateUser.follow}}</span><span class="index-2V-Hh_0">关注</span>
            </p>
          </router-link>
        </a>
      </div>
      <!-- 我的作品以及收藏 -->
      <van-tabs v-model="tabActive" sticky @click="changeTab" class="worksAndFavorite" swipeable>
        <van-tab :title="item.tabName" v-for="(item, index) in tabsList">
          <PostList :composition="getImitatePostList"></PostList>
        </van-tab>
      </van-tabs>
      <GetPraisedNum :praisedNumPopup="praisedNumPopup" @closePraisedNumPop-ok="closePraisedNumPop"></GetPraisedNum>
    </div>
</template>

<script>
import PostList from 'components/common_components/PostList';
import GetPraisedNum from 'components/child_components/Myzone_components/GetPraisedNum';
import { ImagePreview } from 'vant';
import { mapGetters } from 'vuex';
export default {
  name: 'myzone',
  components: {
    PostList,
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
      background_wall_img: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg', // 背景墙图片
      isSign: false, // 是否已签到
      // tab列表
      tabsList: [
        {
          tabName: '作品 999',
          desc: '仅限自己发布的微撩作品，不包括自己的提问，转发',
        },{
          tabName: '喜欢 1024',
          desc: '用户的喜欢收藏，包括但不限于自己或者他人的微撩作品，问答，转发',
        },{
          tabName: '动态 999',
          desc: '只包括自己的提问，转发',
        }
      ],
    };
  },
  mounted () {
  },
  beforeRouteLeave(to, from, next) {
       // 设置下一个路由的 meta
      to.meta.keepAlive = true;  // 让 A 缓存，即不刷新
      next();
  },
  computed: {
    ...mapGetters([
      'setWhichpage',
      'getImitateUser', // 获取用户数据
      'getImitatePostList', // 获取模拟帖子列表
    ])
  },
  methods: {
    // 切换tab 我的作品和收藏
    changeTab(index, title) {
      let that = this;
      that.$dialog.alert({
        title: '说明',
        message: that.tabsList[index].desc
      }).then(() => {
        // on close
      });
    },
    // 签到
    sign () {
      this.$router.push({
        name: 'taskCenter',
        params: '',
      })
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
    // 前往个人中心页
    goPerson () {
      this.$router.push({
        name: 'personalCenter',
      })
    },
    // 前往设置页
    goUserSetting () {
      this.$router.push({
        name: 'userSetting',
        params: { userId: 'userId001' }
      })
    },
    // 前往我的钱包页
    goMywallet () {
      this.$router.push({
        name: 'mywallet',
      })
    },
    // 发消息
    sendMsg () {
      this.$toast('跳转聊天室')
    },
     // 复制成功
    onCopyUserNo: function (e) {
      this.$toast('复制成功！')
    },
    // 复制失败
    onCopyUserError: function (e) {
      this.$toast('复制失败！')
    },
    // 用户自己主页可跳转
    goUserInfo () {
      if (this.centerType === 0)  this.$router.push({ name: 'userinfo' })
    }
  },
};
</script>

<style lang="less" scoped>
.bgImg{
  height: 7.8rem;
  position: fixed;
  top: 0;
  background-size: 100% auto;
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
  font-size: 0.6rem;
}
.setting{
  z-index: 999;
  position: fixed;
  right: 0.1rem;
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
  height: 3rem;
  padding: 0 0.58rem;
  box-sizing: border-box;
  position: relative;
  background-color: #006599;
  margin-top: 3rem;
  .basic-info{
    position: absolute;
    bottom: 0.2rem;
  }
  .myzone_uid{
    position: absolute;
    right: 0.4rem;
    top: 0.267rem;
    height: 2.54rem;
    width: 4.4rem;
    text-align: right;
  }
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
.user-dec{
  color: #fff;
  background-color: #006599;
  padding: 0 0.58rem;
  font-size: 0.34rem;
  position: relative;
  margin-top: -1px;
}
.three_lan{
  display: table;
  width: 100%;
  height: 1rem;
  color: #fff;
  background-color: #006599;
  position: relative;
  margin-top: -1px;
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
        font-size: .5rem;
        line-height: .6rem;
        color: #fff;
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
.showcase{
  font-size: 22px;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
}
.showcaseDec{
  font-size: 18px;
  padding: 0 0.04rem 0 0;
}
</style>
