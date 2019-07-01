<template>
  <div class="white-bg">
    <van-nav-bar
      :title="isRetransmission ? '转发微博' : '发微博'"
      left-arrow
      @click-left="onClickLeft"
      fixed
    >
      <div slot="right" @click="onClickRight">
        <van-button type="danger" size="small" :disabled=" uploadImgList.length === 0 && message.length === 0" v-if="!isRetransmission">发表</van-button>
        <van-button type="danger" size="small" v-if="isRetransmission">发表</van-button>
      </div>
    </van-nav-bar>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <!-- 内容区域 -->
    <div>
      <div class="mgb15 input-box">
        <van-cell-group>
          <van-field
          v-model="message"
          type="textarea"
          placeholder="分享新鲜事"
          :rows="isRetransmission ? 12 : 15"
          ref="postContent"
          @focus="inputFieldFocus"
          />
        </van-cell-group>
        <div class="gray-color msglen pdr15" v-if="message.length > 0">字数：{{message.length}}</div>
      </div>
      <!-- 转发帖子 -->
      <RetransmissionCard v-if="isRetransmission"></RetransmissionCard>
      <!-- 话题选择区域 -->
      <div class="pdl15 pdr15" v-if="selectTopicList.length > 0">
        <span v-for="(item, index) in selectTopicList" :key="item.topicId" class="mg5 mgr10 mgb10 display-block position-r" @click="openTopicPop">
          <van-tag plain type="danger" size="medium">
            {{item.name}}
          </van-tag>
          <van-icon name="close" class="gray-color close-icon-tag" @click.stop="deleteTopic(item, index)" />
        </span>
      </div>
      <!-- 图片预览区域 -->
      <div class="flex-wrap pd15">
        <div v-for="(item, index) in uploadImgList" :key="index" class="upload-img-item">
          <img :src="item" class="upload-img-item-img"/>
          <van-icon name="close" class="gray-color close-icon" @click="deleteImg(item, index)" />
        </div>
        <div class="flex-center upload-img-item" v-if="uploadImgList.length < 9 && uploadImgList.length > 0">
          <van-uploader :after-read="onRead" accept="image/gif, image/jpeg, image/png, video/*" :max-count="9" multiple>
            <van-icon name="plus" />
          </van-uploader>
        </div>
      </div>
      <!-- 商品橱窗 -->
      <div class="position-r selectGoodZone" v-if="selectGoodsResult">
        <GoodsCard :isSelectGoods="true"></GoodsCard>
        <van-icon name="close" class="gray-color close-icon" @click="selectGoodsResult = false" />
      </div>
    </div>
    <!-- 底部空隙 -->
    <div class="footer-space"></div>
    <!-- 底部固定区域 -->
    <footer class="fixed-footer white-bg">
      <div class="flex-space-between pd15">
        <div class="fixed-footer-left">
          <van-icon name="smile-o" class="footer-icon" @click="showEmoji = !showEmoji"/>
          <van-uploader :after-read="onRead" accept="image/gif, image/jpeg, image/png" :max-count="9" multiple v-if="uploadImgList.length < 9 && !isRetransmission">
            <van-icon name="photo-o" class="footer-icon" />
          </van-uploader>
          <van-icon name="label-o" class="footer-icon" @click="openTopicPop" v-if="!isRetransmission"/>
          <van-icon name="cart-circle-o" class="footer-icon" @click="addGoods"/>
        </div>
        <div @click="publishTypePop = true">
          <van-tag plain color="#f2826a">
            {{ currentPublishValue === 0 ? '公开' : currentPublishValue === 1 ? '相互关注可见' : '仅自己可见'}}
          </van-tag>
        </div>
      </div>
      <!-- emoji表情 -->
      <van-swipe :auto="0" v-if="showEmoji">
       <van-swipe-item v-for="n in Math.ceil(emojiList.length/15)" :key="n" class="footer-van-swipe-item">
        <li v-for="(item, index) in getEmotionData(n,15)" class="xw-faceEmoji"> <img :src="item.file" :data="item.title" v-on:click="message+=item.title" /> </li>
       </van-swipe-item>
      </van-swipe>
    </footer>
    <!-- 话题类型 弹框 -->
    <van-popup v-model="topicShowPop" position="bottom" :overlay="true">
      <TopicList
        :selectTopicList="selectTopicList"
        @on-finished-select="finishedSelect"
        @on-cancel-select="cancelSelect"
      >
      </TopicList>
    </van-popup>
    <!-- 发布类型上拉菜单 弹框 -->
    <van-actionsheet v-model="publishTypePop" title="选择分享范围" >
      <div class="select-content">
        <p class="flex-center select-content-item" :class=" currentPublishValue == item.value ? 'select-content-item-selected' : '' "
          v-for="(item,index) in publishTypeList" @click="changePublishType(item)">
            {{item.name}}
        </p>
      </div>
    </van-actionsheet>
    <!-- 商品列表 弹框 -->
    <van-actionsheet v-model="goodsListPop" title="添加商品" >
      <div class="goodsList-box">
        <!-- 商品组件 -->
        <GoodsCard v-for="(item,index) in 7" :isSelectGoods="true" @on-select-goods="selectGoods"></GoodsCard>
      </div>
    </van-actionsheet>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TopicList from 'components/child_components/Topic_components/TopicList';
import GoodsCard from 'components/common_components/GoodsCard';
import RetransmissionCard from 'components/child_components/Publish_components/RetransmissionCard';
export default {
  name: 'add_conversation',
  props: {
    // 是否为转发帖子
    isRetransmission: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {
      message: '',  // 微博文本内容
      emojiList: [],  // emoji表情集合
      showEmoji: false, // 是否显示emoji
      uploadImgList: [],  // 预览图片区域
      selectTopicList: [],  // 选择的话题列表，最多选3个
      publishTypePop: false,  // 发布类型弹框
      topicShowPop: false,  // 话题弹框
      goodsListPop: false,  // 商品列表弹框
      currentPublishValue: 0,  // 当前发布类型， 0-公开，默认
      publishTypeList: [ // 选择分享类型
        {
          name: '公开',
          value: 0,
        },
        {
          name: '相互关注',
          value: 1
        },
        {
          name: '仅自己可见',
          value: 2
        },
      ],
      goodsRadio: -1, // 选择的商品
      selectGoodsResult: false, // 选择商品
    };
  },
  components: {
    GoodsCard,
    TopicList,
    RetransmissionCard,
  },
  mounted () {
    this.emojiList = this.getEXPSList.EXPS.slice(0);
  },
  computed: {
    ...mapGetters([
      'getEXPSList',  // emoji表情
    ])
  },
  watch: {

  },
  methods: {
    onClickLeft () {
      this.COMMONFUNC.goBack();
    },
    // 发表微博
    onClickRight () {
      let that = this;
      this.$toast.success({
        message: '发表成功',
        duration: 1000,
      })
      setTimeout( ()=> {
        that.onClickLeft();
      },1000)
    },
    // 草稿箱
    draft () {
      this.$toast('成功保存至草稿')
    },
    // 读取文件
    onRead(file) {
      let that = this;
      that.showEmoji = false;
      let fileList = [];  // 文件集合，转成数组
      let img = new Image();  //创建对象，这个img就是传给上面的compress
      // 单选和多选图片
      if (!Array.isArray(file)) {
        fileList.push(file)
      }else {
        fileList = file;
      }
      fileList.forEach( (val, index)=> {
        img.src = val.content
        let reader = new FileReader()
        reader.readAsDataURL(val.file)
        img.onload = function (){//回调
          let id_card = that.compress(img)//这个id_card就是压缩后的一串base64代码，目测3M图片压缩后800kb
          //这下面写接口，这里传base64格式给后台
        }
      })
      for(var i=0; i<3; i++){
        that.uploadImgList.push('https://avatars1.githubusercontent.com/u/34303195?s=460&v=4')
      }
      that.$toast('最多上传9张，上传图片至服务器，服务器返回图片地址')
      that.scrollToBottom();
    },
    // 获取emoji表情
    getEmotionData(pageNow, pageSize) {
      return this.emojiList.slice((pageNow - 1) * pageSize, pageSize * pageNow)
    },
    // 压缩图片
    compress(img){
        let url = ''
        var w = Math.min(700, img.width);//当图片像素>700的时候，等比例压缩，这个数字可以调
        var h = img.height * (w / img.width);
        var canvas = document.createElement('canvas')
        var ctx = canvas.getContext('2d')
        canvas.width = w
        canvas.height = h
        ctx.drawImage(img, 0, 0, w, h)
        url = canvas.toDataURL('image/png',1)//1代表精细度，越高越好
        return url
    },
    // 删除上传的图片
    deleteImg(item, index) {
      this.uploadImgList.splice(index, 1)
      this.$toast('物理删除服务器的图片')
    },
    // 删除选择的话题
    deleteTopic(item, index) {
      this.selectTopicList.splice(index, 1)
    },
    // 选择发布类型
    changePublishType(item) {
      this.publishTypePop = false;
      this.currentPublishValue = item.value;
    },
    // 输入框获取焦点
    inputFieldFocus() {
      this.showEmoji = false;
    },
    // 打开话题弹框
    openTopicPop () {
      this.showEmoji = false;
      this.topicShowPop = true;
      let newArr = JSON.parse(JSON.stringify(this.selectTopicList));
      this.selectTopicList = [];
      this.selectTopicList = newArr
    },
    // 完成选择
    finishedSelect (list) {
      this.topicShowPop = false;
      this.selectTopicList = list;
    },
    // 取消选择
    cancelSelect (list) {
      this.topicShowPop = false;
      this.selectTopicList = list;
    },
    //滚动到底
    scrollToBottom(){
      let that = this;
      this.$nextTick(() => {
        document.body.scrollTop = that.getScroll().top + 1000;
        document.documentElement.scrollTop = that.getScroll().top + 1000;
        window.pageYOffset = that.getScroll().top + 1000;
      });
    },
    //获得页面向左、向上卷动的距离
    getScroll () {
      return {
        top: window.pageYOffset + 1000 || document.documentElement.scrollTop + 1000 || document.body.scrollTop + 1000 || 0 + 1000
      };
    },
    // 添加商品
    addGoods () {
      this.$dialog.alert({
        title: '标题',
        message: '只有开通有橱窗，并且发微撩作品的时候，才有此功能，其他情形如转发、提问等，皆不显示该功能'
      }).then(() => {
        this.goodsListPop = true;
      });
    },
    // 选择商品
    selectGoods () {
      this.selectGoodsResult = true;
      this.goodsListPop = false;
    }
  }
};
</script>

<style lang="less" scoped>
  .input-box{
    position: relative;
  }
  .msglen{
    position: absolute;
    right: 0;
    bottom: -0.266667rem;
  }
  .fixed-footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ECECEC;
  }
  .fixed-footer-left{
    font-size: 0.666667rem;
  }
  .footer-icon{
    width: 1.066667rem;
  }
  .xw-faceEmoji{
    margin-bottom: 0.186667rem;
    width: 20%;
    float: left;
    text-align: center;
  }
  .xw-faceEmoji img{
    width: 0.533rem;
  }
  .footer-van-swipe-item{
    margin: 0 0 0.4rem 0;
  }
  .upload-img-item{
    flex-basis: 32.3%;
    margin: .5%;
    position: relative;
    height: 2.666667rem;
    box-sizing: border-box;
    border: 1px solid #ECECEC;
  }
  .upload-img-item:last-child{
    border: 1px dashed #cbd1d7;
    font-size: 1rem;
  }
  .upload-img-item-img{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .footer-space{
    height: 1.6rem;
  }
  .close-icon{
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.426667rem;
  }
  .close-icon-tag{
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 0.426667rem;
  }
  .select-content{
    width: 100%;
    text-align: center;
    padding: 0 0 0.2rem 0;
  }
  .select-content-item{
    height: 1rem;
    font-size: 0.426667rem;
  }
  .select-content-item-selected{
    background-color: #FEF2F4;
    color: #C13B66;
  }
  .input-box .van-hairline--top-bottom::after{
    border: 0;
  }
  .goodsList-box{
    height: 8rem;
    overflow: scroll;
  }
</style>
