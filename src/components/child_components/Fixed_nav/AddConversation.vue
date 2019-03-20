<template>
  <van-popup v-model="popupShow" :close-on-click-overlay="false" overlay-class="blackBg">
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
              placeholder="写标准的内容，能让更多的人看到"
              rows="4"
              autosize
            />
          </van-cell-group>
        </van-tab>
        <van-tab title="分段对话">
          <div id="demo">
            <van-cell-group class="fieldDiv">
              <van-field
                v-model="ManMessage"
                label="男"
                type="textarea"
                placeholder="请输入内容"
                rows="1"
                autosize
                clearable
                >
              </van-field>
            </van-cell-group>
            <van-cell-group class="fieldDiv">
              <van-field
                v-model="WomanMessage"
                label="女"
                type="textarea"
                placeholder="请输入内容"
                rows="1"
                autosize
                clearable
                >
              </van-field>
            </van-cell-group>
          </div>
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
    <div class="spaceDiv"></div>
    <div class="opt-zone">
      <van-button type="default"><i class="fa fa-edit" aria-hidden="true"></i>草稿</van-button>
      <van-button type="danger"><i class="fa fa-arrow-up" aria-hidden="true"></i>发表</van-button>
    </div>
  </van-popup>
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
    };
  },
  mounted () {
  },
  computed: {

  },
  methods: {
    closePop () {
      let that = this;
      // confirm({
      //   // title: '标题',
      //   message: '直接退出将不会保存您输入的内容，</br>是否退出'
      // }).then(() => {
      //   that.$emit('closePop-ok')
      // }).catch(() => {
      //   // on cancel
      // });
      let text = '直接退出将不会保存您输入的内容哦';
      let r = confirm(text)
      if (r==true) {
         that.$emit('closePop-ok')
      }else{

      }
    },
    addManBox() {
      var MyComponent = Vue.extend({
        template: `<van-cell-group style="margin-top:0.266667rem"><van-field label="男" type="textarea" placeholder="请输入内容" rows="1" autosize clearable ></van-field></van-cell-group>`,
        data() {
          return {
            dataId: '0'
          };
        }
      });
      var component = new MyComponent().$mount();
      var dom = document.querySelector("#demo");
      dom.appendChild(component.$el);
    },
    addWomanBox() {
      var MyComponent = Vue.extend({
        template: `<van-cell-group style="margin-top:0.266667rem"><van-field label="女" type="textarea" placeholder="请输入内容" rows="1" autosize clearable ></van-field></van-cell-group>`,
        data() {
          return {
            dataId: '0'
          };
        }
      });
      var component = new MyComponent().$mount();
      var dom = document.querySelector("#demo");
      dom.appendChild(component.$el);
    },
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
  .closePop{
    font-size: 0.6rem;
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
    position: absolute;
    bottom: 15px;
    width: 100%;
    text-align: center;
  }
  .fieldDiv{
    margin-top: 10px;
  }
</style>
