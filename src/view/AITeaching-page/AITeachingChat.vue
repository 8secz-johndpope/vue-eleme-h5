<template>
  <div class="app">
    <!-- 顶部 -->
    <div class="fixed-top">
      <van-nav-bar
        title="小仙女"
        left-arrow
        @click-left="onClickLeft"
      >
      </van-nav-bar>
    </div>
    <div class="content" @click="sendMsg">
       <van-progress :percentage="percentage" :show-pivot="false" color="#f2826a" />
       <!-- 对话框高度 -->
       <div class="xw-content" ref="xwBody">
         <div class="xw-chat-wrap">
           <ul>
             <li v-for="messageList in records">
               <div v-if="messageList.type==1">
                  <!-- <div class="xw-chat-time">
                    {{messageList.time}}
                  </div> -->
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
                  <!-- <div class="xw-chat-time">
                    {{messageList.time}}
                  </div> -->
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
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Progress } from 'vant';
  import { mapGetters } from 'vuex';
  Vue.use(Progress);
  export default {
    name: 'AITeachingChat',
    components: {
      // emojiSlider
    },
    data() {
      return {
        testContents: ["今天天气不错", '这个问题还没遇到过', '你说什么，我听不明白', '今天周五了', '请稍后--', '当前客服忙', '您还有什么咨询的吗', '正在查询', 'gone with the wind'],
        //聊天记录
        records: [{
          type: 1,
          // time: new Date().toLocaleTimeString(),
          content: '您好！欢迎来到小薇客服，请问有什么能帮到您？如有疑问请在线咨询或者拨打400-926-2012咨询！感谢您的支持! '
          },
          {
            type: 2,
            // time: new Date().toLocaleTimeString(),
            content: '开始AI聊天'
          },
          {
            type: 2,
            // time: new Date().toLocaleTimeString(),
            content: '点击屏幕继续'
          },
        ],
        userImg1: require('chatSrc/images/logo.jpg'),  // 用户图片1
        userImg2: require('chatSrc/images/female.jpg'),  // 用户图片2
        EXPS: [],
        percentage: 1,  // 进度百分比
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
    },
    methods: {
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
      sendMsg(){
        let that = this;
        setTimeout(() => {
          that.currentType = that.currentType === 1 ? 2 : 1
          that.records.push({
            time: new Date().toLocaleTimeString(),
            content: that.testContents[Math.floor(Math.random() * 9)],
            type: that.currentType
          });
          if (that.percentage <= 100) {
            that.percentage += 5;
          }
        }, 300);
      },
      _loadEmojiData(){
        let that = this;
        var json = that.getEXPSList;
        this.EXPS = json.EXPS.slice(0);
      },
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
    }
  }
</script>
<style lang="css" scoped>
  .content{
    margin: 1.333333rem 0 0 0;
  }
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

  .xw-chat-ul-box a {
    display: block;
    height: 40px;
    width: 40px;
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
