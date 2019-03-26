<template>
  <div>
    <van-popup v-model="popupShow" :close-on-click-overlay="false" overlay-class="blackBg">
      <div class="topIcon">
        <van-icon name="close" @click="closePop" />
        <van-icon name="question-o" @click="question" />
      </div>
      <div class="main-zone">
        <div class="selectConverstionType">
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
                <van-button plain type="primary" size="mini" @click="addDialogBox(0)">他</van-button>
                <van-button plain type="danger" size="mini" @click="addDialogBox(1)">她</van-button>
              </div>
            </van-tab>
          </van-tabs>
        </div>
        <!-- 主题类型 -->
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
          <van-button size="mini" class="mgt10" @click="addTheme">#类型</van-button>
        </div>
        <!-- 主题类型列表 -->
        <div class="theme-list">
          <div class="theme-list-item" v-for="(item,index) in currentThemeList" @click="selectTheme(item.levelTwoName)">
            <div class="theme-lsit-item-left">
              <span class="levelTwoName">#{{item.levelTwoName}}</span>
              <van-tag type="primary">荐</van-tag>
            </div>
            <div class="theme-lsit-item-right gray-font">
              3.4亿
            </div>
          </div>
        </div>
        <div class="opt-zone" :class="currentTabIndex == 0 ? 'absolute-position' : '' ">
          <van-button type="default" @click="draft"><i class="fa fa-edit" aria-hidden="true"></i>草稿</van-button>
          <van-button type="danger" @click="publish"><i class="fa fa-arrow-up" aria-hidden="true"></i>发表</van-button>
        </div>
      </div>
    </van-popup>
    <van-popup v-model="questionPopShow" overlay-class="blackBg">
      <div class="topIcon">
        <div class="questionPopTitle">
          <van-icon name="arrow-left" @click="questionPopShow=false" />
          <span class="questionPopDesc">帮助说明</span>
        </div>
      </div>
      <div class="question-zone">
        <p class="question-tips">注意：<span class="font-orange">请确保您的内容符合规范，否则将不能通过审核</span></p>
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
import { mapGetters } from 'vuex';
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
      currentTabIndex: 0, // 当前tab栏索引，默认0，控制绝对、相对高度
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
      themeList: [],  // 主题类型
      currentSelectThemeList: [], // 当前选择的主题集合
    };
  },
  mounted () {
    let that = this;
    this.getImitateMenu.forEach( (val, index) => {
      val.menuList.forEach( (c_val, c_index) => {
        let obj = {
          levelTwoName: c_val.levelTwoName,
          listId: c_val.listId,
        }
        that.themeList.push(obj)
      })
    })
  },
  computed: {
    ...mapGetters([
      'getImitateMenu' // 话术分类信息
    ]),
    // 当前主题列表，会通过输入的内容进行过滤
    currentThemeList: {
      // 通过get(),set()方法，解决this.currentThemeList = []的问题
      get: function() {
        let that = this;
        if ( that.theme.indexOf('#') != -1 ){
          if (that.theme.length > 1) {
            let arr = that.theme.split('#');
            // 得到输入内容后过滤的
            let themeListFilter = that.themeList.filter( (val, index) => {
              return val.levelTwoName.indexOf( arr[arr.length - 1] ) != -1;
            } )
            // 再过滤已经选择的
            if (that.currentSelectThemeList.length != 0) {
              that.currentSelectThemeList.forEach( (t_val, t_index) => {
                themeListFilter = themeListFilter.filter( (f_val, f_index) => {
                  return t_val !== '#' + f_val.levelTwoName ;
                } )
              })
            }
            return themeListFilter
          }else{
            return that.themeList
          }
        }
      },
      set: function () {
      }
    }
  },
  watch: {
    // 监听主题
    theme: function () {
      this.currentSelectThemeList = [];
      let arrs = this.theme.split('#');
      for(let i = 1; i < arrs.length; i++){
        this.currentSelectThemeList.push( '#' + arrs[i]);
      }
    }
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
    // 添加TA说
    addDialogBox(type) {
      let obj = {
        sex: type, // 0-男，1-女
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
      this.message = ''; // 内容初始化
      this.theme = '';
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
    },
    // 添加话题
    addTheme () {
      if ((this.theme.split('#')).length > 3) {
        this.$toast('最多添加3个话题')
        return;
      }
      this.theme += '#';
    },
    // 选择主题
    selectTheme (levelTwoName) {
      this.currentThemeList = [];
      if (this.currentSelectThemeList.length > 3) {
        this.$toast('最多添加3个话题')
        return;
      }
      // 先删除最后一个#的内容
      let lastIndex = this.theme.lastIndexOf('#');
      this.theme = this.theme.slice( 0, lastIndex + 1 );
      this.currentSelectThemeList.push( '#' + levelTwoName);
      this.theme += levelTwoName;
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
    color: #fff;
    left: 0.533333rem;
    top: 0.533333rem;
    display: flex;
    justify-content: space-between;
    width: 90%;
  }
  .main-zone{
    position: relative;
    min-height: 12rem;
    color: #fff;
    width: 80%;
    margin: 0 auto;
  }
  .selectConverstionType{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
  .theme-type{
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
    width: 80%;
    margin: 0 auto;
    color: #fff;
    font-size: 0.373333rem;
    text-align: left;
    padding: 0.3rem 0 0 0;
  }
  .theme-list{
    height: 2rem;
    overflow: scroll;
    margin-bottom: 0.5rem;
  }
  .theme-list-item{
    display: flex;
    justify-content: space-between;
    padding: 0.1rem 0;
  }
  .theme-lsit-item-left{
    display: flex;
    align-items: center;
  }
  .levelTwoName{
    padding-right: 0.1rem;
  }
  .font-orange{
    color: #ed6a0c;
  }
</style>
