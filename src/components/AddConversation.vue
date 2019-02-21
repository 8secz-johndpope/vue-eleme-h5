<template>
  <van-popup v-model="popupShow" :close-on-click-overlay="false">
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
              placeholder="写标准的内容并使用合适的话题，能让更多的人看到"
              rows="4"
              autosize
            />
          </van-cell-group>
        </van-tab>
        <van-tab title="分段对话">
          <van-cell-group class="fieldDiv">
            <van-field
              v-model="ManMessage"
              label="男"
              type="textarea"
              placeholder="请输入留言"
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
              placeholder="请输入留言"
              rows="1"
              autosize
              clearable
              >
            </van-field>
            <van-button slot="button" size="mini" type="default">添加</van-button>
          </van-cell-group>
          <van-button plain type="primary" size="mini">他</van-button>
          <van-button plain type="danger" size="mini">她</van-button>
        </van-tab>
      </van-tabs>
    </div>
    <div class="theme-type">
      <van-cell-group>
        <van-field
          v-model="theme"
          type="textarea"
          placeholder="请输入类型"
          rows="1"
          autosize
        />
      </van-cell-group>
      <van-button size="mini">#类型</van-button>
    </div>
    <div class="spaceDiv"></div>
    <div class="opt-zone">
      <van-button type="default"><i class="fa fa-edit" aria-hidden="true"></i>草稿</van-button>
      <van-button type="danger"><i class="fa fa-arrow-up" aria-hidden="true"></i>发表</van-button>
    </div>
  </van-popup>
</template>

<script>
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
      this.$emit('closePop-ok')
    },
  }
};
</script>

<style lang="less" scoped>
  .van-popup {
    background-color: unset;
    width: 100%;
    height: 100%;
  }
  .closePop{
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
    position: fixed;
    bottom: 15px;
    width: 100%;
    text-align: center;
  }
  .fieldDiv{
    margin-top: 10px;
  }
</style>
