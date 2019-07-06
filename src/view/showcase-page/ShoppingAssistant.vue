<template>
  <div class="questionAndAnswer-page">
    <van-nav-bar
      title="购物助手"
      right-text="好物榜"
      left-arrow
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 空格 -->
    <div class="top-space"></div>
    <van-panel class="mgt10 panel-s" v-for="(postObj, index) in postList" @click="toCommodity(postObj.goodsId)">
      <div slot="header" class="flex-space-between header">
        <div class="flex" @click.stop="toUserZone">
          <img class="van-avatar" :src="postObj.userImg">
          <div class="mgl10">
            <div>{{'@'+postObj.author}}</div>
            <div class="gray-color createTime">{{COMMONFUNC.commentsTimeFormatter(postObj.createTime)}}</div>
          </div>
        </div>
        <!-- 右边位置 -->
        <div class="flex-center">
          <div>
            <van-button @click.stop="toShowcase(postObj.shopId)" type="danger" size="small">+进店</van-button>
          </div>
        </div>
      </div>
      <div class="content-box">
        <span class="dy-font-color">在</span>
        <span @click="toPostDetail(postObj.postId)">作品</span>
        <span class="dy-font-color">发布了</span>
        <span @click="toCommodity(postObj.goodsId)">{{postObj.goodsName}} ></span>
      </div>
      <!-- 图片区域 -->
      <ul class="img-zone">
        <li v-for="(imgItem, imgIndex) in postObj.imgList" class="img-cell">
          <img :src="imgItem" @click.stop="postImgList(postObj.imgList, imgIndex)" class="img-item"/>
        </li>
      </ul>
    </van-panel>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
export default {
  name: 'shoppingAssistant',
  data () {
    return {
      postList: [
        {
          postId: 'postId1', // 帖子id
          goodsName: '商品名称，如XXX口红', //商品名称
          // 帖子图片，最少一张，最多3张
          imgList: [
              'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',
              'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',
              'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',
          ],
          author: '作者名', // 作者名
          authorId: 'userId1',  // 作者Id
          userImg: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',  // 用户头像
          createTime: 1552838875, // 发表时间
          watchNum: 140124, // 观看人数
          shopId: 'shopId', // 橱窗Id
          goodsId: 'goodsId', // 商品Id
        },
      ]
    };
  },
  components: {
  },
  mounted () {
    this.postList = this.postList.concat(this.postList)
    this.postList = this.postList.concat(this.postList)
    this.postList = this.postList.concat(this.postList)
  },
  computed: {
  },
  methods: {
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
    onClickRight(){
      this.$router.push({name: 'goodsRanking'})
    },
    // 图片预览
    postImgList (list, imgIndex) {
      ImagePreview({
        images: list,
        startPosition: imgIndex,
        onClose() {
          // do something
        }
      });
    },
    // 前往商品详情
    toCommodity (goodsId) {
      this.$router.push({
        name: 'commodity',
        params: {
          commodityId: goodsId
        }
      })
    },
    // 前往作品
    toPostDetail (postId) {
      this.$router.push({
        name: 'postDetail',
        params: {
          postId: postId
        }
      })
    },
    // 前往橱窗
    toShowcase (shopId) {
      this.$router.push({
        name: 'showcase',
        params: {
          shopId: shopId
        }
      })
    },
    // 前往用户主页
    toUserZone () {
      this.$router.push({ name: 'userzone', params: '' })
    },
  },
};
</script>

<style lang="less" scoped>
  .panel-s{
    font-size: 0.373rem;
  }
  .header{
    padding: 0.4rem;
  }
  .content-box{
    padding: 0 0.4rem 0.2rem 0.4rem;
    line-height: 0.533rem;
  }
  .createTime{
    font-size: 0.32rem;
    color: #939393;
  }
  .img-zone{
    display: flex;
    flex-wrap: wrap;
    margin: 0.1rem 0.4rem 0.2rem 0.4rem;
  }
  .img-cell{
    box-sizing: border-box;
    width: 33.33%;
    padding: 0 0.133333rem 0.133333rem 0;
  }
  .img-cell:nth-child(3n){
    box-sizing: border-box;
    width: 33.33%;
    padding: 0 0 0.133333rem 0;
  }
  .img-item{
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
</style>
