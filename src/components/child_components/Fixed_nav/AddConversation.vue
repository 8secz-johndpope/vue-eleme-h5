<template>
  <div>
    <van-popup v-model="popupShow" :close-on-click-overlay="false" overlay-class="blackBg">
      <div class="topIcon">
        <van-icon name="close" @click="closePop" />
        <van-icon name="question-o" @click="question" />
      </div>
      <div class="main-zone">
        <div class="selectConverstionType">
          <!-- <van-button plain type="primary">一键对话</van-button>
          <van-button plain type="danger">分段对话</van-button> -->
          <van-tabs type="card" @change="changeTabs">
            <van-tab title="一键对话" class="placehoder-setting">
              <van-cell-group class="tabContents">
                <van-field
                v-model="message"
                type="textarea"
                placeholder="写标准的内容，能让更多的人看到"
                rows="4"
                autosize
                />
              </van-cell-group>
            </van-tab>
            <van-tab title="分段对话">
              <van-cell-group class="fieldDiv" v-for="(item, index) in newDialog">
                <van-field
                  v-model="item.msg"
                  :label="item.sex == 0 ? '男：' : '女：' "
                  type="textarea"
                  placeholder="请输入内容"
                  rows="1"
                  autosize
                  clearable
                  right-icon="close"
                  @click-right-icon="deleletNewDialog(index)"
                  >
                </van-field>
              </van-cell-group>
              <div class="mgt10">
                <van-button plain type="primary" size="mini" @click="addManBox">他</van-button>
                <van-button plain type="danger" size="mini" @click="addWomanBox">她</van-button>
              </div>
            </van-tab>
          </van-tabs>
        </div>
        <div class="theme-type">
          <van-cell-group>
            <van-field
            v-model="theme"
            type="textarea"
            placeholder="添加合适的话题，能让更多的人看到"
            rows="1"
            autosize
            />
          </van-cell-group>
          <van-button size="mini" class="mgt10">#类型</van-button>
        </div>
        <div class="opt-zone" :class="currentTabIndex == 0 ? 'absolute-position' : '' ">
          <van-button type="default" @click="draft"><i class="fa fa-edit" aria-hidden="true"></i>草稿</van-button>
          <van-button type="danger" @click="publish"><i class="fa fa-arrow-up" aria-hidden="true"></i>发表</van-button>
        </div>
      </div>
    </van-popup>
    <van-popup v-model="questionPopShow" overlay-class="blackBg" :lock-scroll="false">
      <div class="topIcon">
        <div class="questionPopTitle">
          <van-icon name="arrow-left" @click="questionPopShow=false" />
          <span class="questionPopDesc">帮助说明</span>
        </div>
      </div>
      <div class="question-zone">
        <p class="question-tips">一键对话实例</p>
        <img src="../../../images/dialogCase/01.png" class="caseImg" />
        <p class="question-tips">分段对话实例</p>
        <img src="../../../images/dialogCase/02.png" class="caseImg" />
      </div>
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: 'add_conversation',
  props: {
      popupShow: {
        type: Boolean,
        default: false,
      },
  },
  data () {
    return {
      active: 0,
      message: '',
      theme: '',
      ManMessage: '', //男说
      WomanMessage: '', //女说
      currentTabIndex: 0, // 当前tab栏索引，默认0
      newDialog: [
        {
          sex: 0, // 0-男，1-女
          msg: '',  // 对话内容
        },
        {
          sex: 1, // 0-男，1-女
          msg: '',  // 对话内容
        },
      ],
      questionPopShow: false, // 问号，帮助弹框
    };
  },
  mounted () {
  },
  computed: {

  },
  methods: {
    closePop () {
      let that = this;
      let text = '直接退出将不会保存您输入的内容哦';
      let r = confirm(text)
      if (r==true) {
         that.$emit('closePop-ok')
      }else{

      }
    },
    // 添加男说
    addManBox() {
      let obj = {
        sex: 0, // 0-男，1-女
        msg: '',  // 对话内容
      }
      this.newDialog.push(obj);
    },
    // 添加女说
    addWomanBox() {
      let obj = {
        sex: 1, // 0-男，1-女
        msg: '',  // 对话内容
      }
      this.newDialog.push(obj);
    },
    // 切换一键对话和分段对话
    changeTabs (index, title) {
      this.newDialog = [
        {
          sex: 0, // 0-男，1-女
          msg: '',  // 对话内容
        },
        {
          sex: 1, // 0-男，1-女
          msg: '',  // 对话内容
        },
      ],
      this.currentTabIndex = index;
    },
    // 删除对话
    deleletNewDialog (index) {
      this.newDialog.splice(index, 1)
    },
    // 草稿箱
    draft () {
      this.$toast('成功保存至草稿')
    },
    // 发表
    publish () {
      this.$toast('发表成功，已转至后台审核')
    },
    // 问号，帮助
    question () {
      this.questionPopShow = true;
    }
  }
};
</script>

<style lang="less" scoped>
  .blackBg{
    position: relative;
  }
  .van-popup {
    background-color: unset;
    width: 100%;
    height: 100%;
  }
  .topIcon{
    font-size: 0.6rem;
    position: fixed;
    left: 0.533333rem;
    top: 0.533333rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    width: 90%;
  }
  .main-zone{
    position: relative;
    min-height: 15rem;
  }
  .selectConverstionType{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
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
    width: 100%;
    text-align: center;
  }
  .absolute-position{
    position: absolute;
    bottom: 15px;
  }
  .fieldDiv{
    margin-top: 10px;
  }
  .question-zone{
    width: 90%;
    margin: 0 auto;
    margin-top: 1.2rem;
    text-align: center;
  }
  .questionPopTitle{
    display: flex;
    width: 100%;
  }
  .questionPopDesc{
    width: 90%;
    display: flex;
    justify-content: center;
    font-size: 0.426667rem;
  }
  .caseImg{
    width: 80%;
    height: 80%;
    background-repeat: no-repeat;
    background-size: 80% 80%;
  }
  .question-tips{
    color: #fff;
    width: 80%;
    font-size: 0.373333rem;
    text-align: left;
    margin: 0 auto;
    padding: 0.4rem 0;
  }
</style>
