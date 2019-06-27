<template>
  <div class="app">
    <!-- 顶部 -->
    <div class="fixed-top">
      <van-nav-bar
        title="小仙女"
        left-arrow
        @click-left="onClickLeft"
      >
        <van-icon name="ellipsis" slot="right" @click="onClickRight" />
      </van-nav-bar>
    </div>
    <div :class=" showEmoji ? 'fixed-content-box' : 'fixed-content-box-large' ">
      <!-- 对话框高度 -->
      <div class="xw-content" ref="xwBody">
        <div class="xw-chat-wrap">
          <ul>
            <li v-for="messageList in records">
              <!-- 自己发送消息 -->
              <div v-if="messageList.type==1">
                <div class="xw-chat-time">{{messageList.time}}</div>
                <div class="xw-chat-servicer">
                   <div class="xw-servicer-avantar-wrap">
                     <img :src="userImg1" class="xw-servicer-avantar" />
                   </div>
                   <div class="xw-chat-msg">
                     <span v-html="replaceFace(messageList.content)"></span>
                   </div>
                </div>
              </div>
              <!-- 用户发送的消息模板-->
              <div v-else="">
                 <div class="xw-chat-time">{{messageList.time}}</div>
                 <div class="xw-chat-customer">
                   <div class="xw-customer-avantar-wrap">
                     <img :src="userImg2" class="xw-customer-avantar" />
                   </div>
                   <div class="xw-chat-msg" style="display:inline-block">
                      <span v-html="replaceFace(messageList.content)"></span>
                   </div>
                  </div>
               </div>
             </li>
          </ul>
        </div>
     </div>
     <!-- 提示音 -->
     <audio style="display:none" preload="metadata" controls="controls" autoplay="autoplay" ref="hintAudio" src="https://github.com/yiluxiangbei87110/vue-chat/blob/master/static/audio/msg.mp3">
     </audio>
    </div>
    <div class="xw-footer-wrap">
      <div class="xw-footer-content">
       <div class="xw-vmodel-wrap">
        <van-cell-group>
          <van-field
            type="textarea"
            v-model="content" @focus="onFocusText"
            rel="inputMsg"
            rows="1"
            id="inputMsgId"
            :autosize = '{ maxHeight: 120, minHeight: 50 }'
          />
        </van-cell-group>
       </div>
       <div class="xw-chat-tool">
        <div class="xw-chat-tool-item">
         <transition name="fade">
          <van-button :disabled="content.trim().length <= 0 ? true : false" @click="sendMsg" size="small" type="danger">发送</van-button>
         </transition>
        </div>
        <div class="xw-chat-tool-item">
         <a href="javascript:;" :class="[showEmoji ? 'xw-face' :'xw-face-close','xw-chat-tool-btn']" @click="emojiFuc"></a>
        </div>
        <div class="xw-chat-tool-item">
         <a :class="[showMoreOpratin ? 'xw-hide-operation-close' :'xw-hide-operation','xw-chat-tool-btn']" @click="showMoreOpratin=!showMoreOpratin"></a>
         <transition name="fade">
          <div class="xw-window-text" v-if="showMoreOpratin">
           <label for="uploadImg"> <span> <input type="file" name="image" accept="image/*" multiple="" style="display:none;" id="uploadImg" />图片 </span> </label>
          </div>
         </transition>
        </div>
       </div>
      </div>
      <!-- 表情开始 -->
      <transition name="slide-fade" style="display:none">
       <div class="xw-window-text xw-face-emoji-ul" v-if="showEmoji">
        <div class="xw-chat-ul-box">
         <van-swipe :auto="0">
          <van-swipe-item v-for="n in Math.ceil(EXPS.length/15)" :key="n">
           <li v-for="(item, index) in getEmotionData(n,15)" class="xw-faceEmoji"> <img :src="item.file" :data="item.code" v-on:click="content+=item.code" /> </li>
          </van-swipe-item>
         </van-swipe>
        </div>
       </div>
      </transition>
     </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    components: {
      // emojiSlider
    },
    data() {
      return {
        comment:{},
        showEmoji: false,//是否显示表情
        showMoreOpratin:false,//是否显示更多操作
        bellStatus: false,//头部区域铃声图标
        myaudio: '/static/audio/msg.mp3',//铃音
        testContents: ["今天天气不错", '这个问题还没遇到过', '你说什么，我听不明白', '今天周五了', '请稍后--', '当前客服忙', '您还有什么咨询的吗', '正在查询', 'gone with the wind'],
        content: '',
        //聊天记录
        records: [{
          type: 1,
          time: new Date().toLocaleTimeString(),
          content: '如果对方未关注你，你只能发送最多三条消息，需要对方关注或者回复后才能恢复正常聊天！'
          },
          {
            type: 2,
            time: new Date().toLocaleTimeString(),
            content: '谢谢您的帮助'
          },
          {
            type: 2,
            time: new Date().toLocaleTimeString(),
            content: '谢谢您的帮助'
          },
        ],
        imgFile :{},
        userImg1: require('chatSrc/images/logo.jpg'),  // 用户图片1
        userImg2: require('chatSrc/images/female.jpg'),  // 用户图片2
        EXPS: [],
      }
    },
    computed: {
      ...mapGetters([
        'getEXPSList',
      ])
    },
    created(){
      this._loadEmojiData();
    },
    mounted () {
      this.scrollToBottom();
    },
    methods: {
      //点击控制表情切换（显示和隐藏）
      emojiFuc(){
        this.showEmoji = !this.showEmoji;
      },
      //提示音
      hint(staus){
        if (staus != undefined) {
          this.bellStatus = !this.bellStatus;
        }
        this.bellStatus ? this.$refs.hintAudio.play() : this.$refs.hintAudio.pause();
      },
      sendMsg(){
        var content = this.content.trim();
        this.records.push({
          time: new Date().toLocaleTimeString(),
          content: content,
          type: 2
        });
        this.content = "";
        setTimeout(() => {
          this.hint();
          this.records.push({
            time: new Date().toLocaleTimeString(),
            content: this.testContents[Math.floor(Math.random() * 9)],
            type: 1
          });
          this.scrollToBottom();
        }, 800);
        var idObj = document.getElementById('inputMsgId');
        this.content = "";
        idObj.focus();
      },
      getEmotionData(pageNow, pageSize) {
        return this.EXPS.slice((pageNow - 1) * pageSize, pageSize * pageNow)
      },
      replaceFace(con) {
        if (!con) {
          return;
        }
        if (con.toString().indexOf('/:') > -1) {
          var exps = this.EXPS;
          for (var i = 0; i < exps.length; i++) {
            con = con.replace(exps[i].reg, '<img src="' + exps[i].file + '"  alt="" style="width: 0.533rem; vertical-align: middle;" />');
          }
        }
        return con;
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
      onFocusText(){
        this.scrollToBottom();
        this.showEmoji = false;
      },
      _loadEmojiData(){
        let that = this;
        var json = that.getEXPSList;
        this.EXPS = json.EXPS.slice(0);
      },
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
      onClickRight() {
        this.$router.push('/userSetting');
      },
    }
  }
</script>
<style lang="css" scoped>
  ::-webkit-scrollbar-track {
    border-radius: 0;
    padding: 0;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    padding: 0;
    background-color: rgba(0, 0, 0, .2);
  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    background-color: transparent;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }

  .xw-chat-servicer:after,
  .xw-chat-servicer:before,
  .xw-chat-customer:after,
  .xw-chat-customer:before,
  .xw-chat-wrap:after,
  .xw-chat-wrap:before,
  .xw-chat-tool:after,
  .xw-chat-tool:before,
  .xw-chat-ul-box:after,
  .xw-chat-ul-box:before {
    display: table;
    content: "";
  }

  .xw-chat-wrap {
    overflow: auto;
    padding: 14px;
  }

  .xw-chat-wrap .xw-chat-time,
  .xw-chat-wrap time {
    line-height: 1;
    text-align: center;
    display: block;
    margin-bottom: 8px;
    margin-top: 8px;
    font-size: 12px;
    color: #999;
    text-shadow: 1px 1px 1px hsla(0, 0%, 100%, .6);
  }

  .xw-chat-servicer,
  .xw-chat-customer {
    position: relative;
    margin-bottom: 16px;
    padding: 0 10px 0 45px;
  }

  .xw-servicer-avantar-wrap {
    position: absolute;
    bottom: 0;
    line-height: 0;
  }
  .xw-customer-avantar-wrap {
    position: absolute;
    bottom: 0;
    right: 8px;
    line-height: 0;
  }

  .xw-chat-servicer .xw-servicer-avantar-wrap,.xw-customer-avantar-wrap{
    left: 0;
  }

  .xw-servicer-avantar {
    border-radius: 100%;
  }

  .xw-servicer-avantar-wrap img,.xw-customer-avantar-wrap img {
    height: 34px;
    width: 34px;
  }

  .xw-chat-msg {
    -webkit-font-smoothing: antialiased;
    hyphens: auto;
    word-wrap: break-word;
    word-break: normal;
    position: relative;
    clear: both;
    padding: 8px 16px;
    border: 1px solid transparent;
    max-width: 100%;
    min-width: 50px;
    min-height: 22px;
    line-height: 1.6em;
    max-width: 70%;
  }

  .xw-chat-servicer .xw-chat-msg {
    background: #fff;
    border-color: #efefef;
    float: left;
  }

  .xw-chat-msg :last-child {
    margin-bottom: 0;
  }

  .xw-chat-msg span{
    white-space: pre-line;
  }
  .xw-chat-servicer,
  .xw-chat-customer {
    position: relative;
    margin-bottom: 16px;
    padding: 0 10px 0 45px;
  }

  .xw-chat-customer {
    text-align: right;
  }

  .xw-chat-customer .xw-chat-msg {
    float: right;
    text-align: left;
    background: #ed4858;
    border-color: #ed4858;
    color: #fff;
    margin-right: 45px;
  }
  .xw-customer-avantar{
    border-radius: 50%;
  }
  .xw-chat-msg :last-child {
    margin-bottom: 0;
  }

  .xw-chat-wrap .xw-system-info-time,
  .xw-chat-wrap time {
    line-height: 1;
    text-align: center;
    display: block;
    margin-bottom: 8px;
    font-size: 12px;
    color: #999;
    text-shadow: 1px 1px 1px hsla(0, 0%, 100%, .6);
  }

  .xw-system-info{
    margin-bottom: 8px;
  }

  .xw-chat-wrap>:last-child {
    margin-bottom: 16px;
  }

  .xw-system-info {
    text-align: center;
    font-size: 12px;
  }

  .xw-system-info span {
    display: inline-block;
    background: rgba(0, 0, 0, .08);
    padding: 4px 8px;
    line-height: 1;
    color: #7c7c7c;
    border-radius: 2px;
    text-shadow: 1px 1px 1px hsla(0, 0%, 100%, .6);
  }

  .xw-footer-wrap {
    justify-content:flex-end;
    width: 100%;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, .05);
    background: #fff;
    z-index: 2;
    position: fixed;
    bottom: 0;
  }

  .xw-footer-content {
    position: relative;
    height: 52px;
    display: flex;
   box-shadow: rgba(0, 0, 0, 0.05) 0px -1px 4px;
  }
  .xw-vmodel-wrap{
    width: 65%;
    padding: 0.133rem 0 0 0;
  }

  .xw-chat-tool {
    width: 35%;
    display: flex;
    justify-content: flex-end;
  }

  .xw-chat-tool-item {
    height: 52px;
    margin: 0 0 0 0.267rem;
    position: relative;
    float: left;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .xw-chat-tool-btn {
    display: block;
    height: 38px;
    width: 0.533rem;
    border-radius: 100%;
    text-indent: -9999px;
    opacity: 1;
    overflow: hidden;
    transform: translateZ(0);
  }

  .xw-chat-tool-btn.xw-face {
    background: url(../../chatSrc/images/smileOn.svg) no-repeat 100%;
    background-size: 100% 100%;
  }
  .xw-chat-tool-btn.xw-face-close {
    background: url(../../chatSrc/images/smileClose.svg) no-repeat 100%;
    background-size: 100% 100%;
  }

  .xw-chat-tool-item .xw-window-text {
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-bottom: -3px;
    -webkit-transform: translateX(-60%);
    transform: translateX(-60%);
    white-space: nowrap;
    box-shadow: 0 3px 18px 2px rgba(0, 0, 0, .1), 0 0 1px rgba(0, 0, 0, .05);
    font-size: 12px;
    background: #fff;
    line-height: 1em;
  }

  .xw-chat-tool-item .xw-window-text.xw-face-emoji-ul {
    right: -23px;
    left: auto;
    -webkit-transform: none;
    transform: none;
  }

  .xw-chat-tool-item .xw-window-text h4 {
    font-size: 12px;
    margin: 0;
    font-weight: 400;
    padding: 12px 8px;
    padding-bottom: 0;
  }


  .xw-chat-ul-box{
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .xw-chat-ul-box {
    position: relative;
    z-index: 1;
    background: #fff;
    padding: 8px;
    /*height: 130px;*/
    overflow: hidden;
    width: 340px;
    margin: 0px auto;
  }

  .xw-chat-tool-item .xw-window-text .xw-chat-ul-box {
    padding: 8px;
  }
  .swiper-slide{
    float: left;
  }

  .xw-chat-ul-box a {
    display: block;
    height: 40px;
    width: 40px;
  }
  .swiper-pagination{
    display: flex;
    width: 100%;
    justify-content:center;
  }
  .swiper-pagination-bullet{
    width: 8px;
    height: 8px;
    display: inline-block;
    background: #ccc;
    border-radius: 10px;
    margin-left:5px;
    margin-right: 5px;
  }
  .swiper-pagination-bullet-active{
    background: #007aff;
  }
  .xw-hide-operation{
    background: url(../../chatSrc/images/addOn.svg) no-repeat 100%;
    background-size: 100% 100%;
    width: 0.533rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.533rem;
    margin-right:10px;
  }

  .xw-hide-operation-close{
    background: url(../../chatSrc/images/addClose.svg) no-repeat 100%;
    background-size: 100% 100%;
    width: 0.533rem;
    height: 0.533rem;
    margin-right:10px;
  }

  .xw-chat-tool-item .xw-window-text span {
    display: block;
    padding: 10px 12px;
    background: #fff;
    position: relative;
    z-index: 1;
    font-size: 17px;
    line-height: 16px;
  }


  .xw-chat-servicer:after,
  .xw-chat-customer:after,
  .xw-chat-wrap:after,
  .xw-chat-tool:after,
  .xw-chat-ul-box:after{
    clear: both;
  }

  .xw-chat-msg:last-child:before {
    bottom: -1px;
  }

  .xw-chat-msg:last-child:after,
  .xw-chat-msg:last-child:before {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    display: block;
  }

  .xw-chat-customer .xw-chat-msg:last-child:before {
    display: inline-block;
    height: 0;
    width: 0;
    border: 10px solid transparent;
    border-bottom: 10px solid #ed4858;
    right: -10px;
    border-left-width: 9px;
  }

  .xw-chat-servicer .xw-chat-msg:last-child:before {
    display: inline-block;
    height: 0;
    width: 0;
    border: 10px solid transparent;
    border-bottom: 10px solid #efefef;
    left: -10px;
    border-left-width: 9px;
  }

  .xw-chat-servicer .xw-chat-msg:last-child:after {
    display: inline-block;
    height: 0;
    width: 0;
    border: 10px solid transparent;
    border-bottom: 10px solid #fff;
    left: -8px;
    border-left-width: 9px;
    bottom: 0px;
  }

  .xw-show-info-box{
    height: 200px;
    margin-top: -50px;
    z-index: 1000;
    background: #ed4858;
    color:#fff;
  }

  .xw-logo{
    text-align: center;
  }

  .xw-logo img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 20px;
  }

  .xw-faceEmoji{
    margin-bottom: 7px;
    width:20%;
    float: left;
    text-align: center;
  }
  .xw-faceEmoji img{
    width: 0.533rem;
  }

  .xw-chat-msg span img{
    vertical-align: middle;
  }
  .mint-swipe-items-wrap > div{
    text-align: center;
  }
  .xw-scroll-ul{
    min-height: 340px;
  }
  .mint-swipe-indicator.is-active {
    background: #ed4858;
    opacity: 1;
  }
  #app{
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .app{
    display: flex;
    flex-direction:column;
    width: 100%;
    height: 100%;
  }
  .xw-content{
    flex:1;
    position: relative;
    overflow: auto;
    transition: height .8s;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .animated.bounceIn,
  .animated.bounceOut {
    -webkit-animation-duration: .75s;
    animation-duration: .75s;
  }

  @-webkit-keyframes bounceInDown {
    from, 60%, 75%, 90%, to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -3000px, 0);
      transform: translate3d(0, -3000px, 0);
    }

    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, 25px, 0);
      transform: translate3d(0, 25px, 0);
    }

    75% {
      -webkit-transform: translate3d(0, -10px, 0);
      transform: translate3d(0, -10px, 0);
    }

    90% {
      -webkit-transform: translate3d(0, 5px, 0);
      transform: translate3d(0, 5px, 0);
    }

    to {
      -webkit-transform: none;
      transform: none;
    }
  }

  .bounceInDown {
    -webkit-animation-name: bounceInDown;
    animation-name: bounceInDown;
  }

  @keyframes bounceInLeft {
    from, 60%, 75%, 90%, to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
      opacity: 0;
      -webkit-transform: translate3d(-3000px, 0, 0);
      transform: translate3d(-3000px, 0, 0);
    }

    60% {
      opacity: 1;
      -webkit-transform: translate3d(25px, 0, 0);
      transform: translate3d(25px, 0, 0);
    }

    75% {
      -webkit-transform: translate3d(-10px, 0, 0);
      transform: translate3d(-10px, 0, 0);
    }

    90% {
      -webkit-transform: translate3d(5px, 0, 0);
      transform: translate3d(5px, 0, 0);
    }

    to {
      -webkit-transform: none;
      transform: none;
    }
  }

  .bounceInLeft {
    -webkit-animation-name: bounceInLeft;
    animation-name: bounceInLeft;
  }

  @-webkit-keyframes bounceInRight {
    from, 60%, 75%, 90%, to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    from {
      opacity: 0;
      -webkit-transform: translate3d(3000px, 0, 0);
      transform: translate3d(3000px, 0, 0);
    }

    60% {
      opacity: 1;
      -webkit-transform: translate3d(-25px, 0, 0);
      transform: translate3d(-25px, 0, 0);
    }

    75% {
      -webkit-transform: translate3d(10px, 0, 0);
      transform: translate3d(10px, 0, 0);
    }

    90% {
      -webkit-transform: translate3d(-5px, 0, 0);
      transform: translate3d(-5px, 0, 0);
    }

    to {
      -webkit-transform: none;
      transform: none;
    }
  }

  .bounceInRight {
    -webkit-animation-name: bounceInRight;
    animation-name: bounceInRight;
  }

  @keyframes bounceInUp {
    from, 60%, 75%, 90%, to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 3000px, 0);
      transform: translate3d(0, 3000px, 0);
    }

    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0);
    }

    75% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 10px, 0);
    }

    90% {
      -webkit-transform: translate3d(0, -5px, 0);
      transform: translate3d(0, -5px, 0);
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .bounceInUp {
    -webkit-animation-name: bounceInUp;
    animation-name: bounceInUp;
  }
  .emoji-icon{
    width: 0.533rem;
  }
  .fixed-content-box{
    height: 8.4rem;
    margin-top: 1.2rem;
  }
  .fixed-content-box-large{
    height: 12.2rem;
    margin-top: 1.2rem;
  }
</style>
