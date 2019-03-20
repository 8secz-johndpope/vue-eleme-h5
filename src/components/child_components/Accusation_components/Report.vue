<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="举报"
      left-text="返回"
      right-text="提交"
      left-arrow
      @click-left="onClickLeft"
      @click-right="commitAdvice"
    />
    <van-cell-group>
      <van-field
        :value="type"
        label="举报理由"
        disabled
      />
    </van-cell-group>
    <!-- 盗用TA人作品举报 -->
    <div v-if=" typeId == '7' ">
      <div class="dec">
        <span>原著信息（选填）</span>
      </div>
      <van-cell-group>
        <van-field
        v-model="userNo"
        clearable
        label="原著撩撩号"
        right-icon="question-o"
        placeholder="请输入撩撩号"
        @click-right-icon="userNoPopup=true"
        />
        <van-field
        v-model="address"
        clearable
        label="原著作品链接"
        right-icon="question-o"
        placeholder="请输入作品链接"
        @click-right-icon="userNoPopup=true"
        />
      </van-cell-group>
    </div>
    <div class="flex-space-between dec">
      <span>举报描述（选填）</span>
      <span>{{message.length}}/200</span>
    </div>
    <!-- 文本框 -->
    <van-cell-group>
      <van-field
        v-model="message"
        type="textarea"
        placeholder="详细描述举报理由"
        rows="3"
        autosize
        class="cellDiv"
      />
    </van-cell-group>
    <!-- 图片上传 -->
    <van-cell size="large" class="cellDiv">
      <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple>
        <van-icon name="photograph" />
      </van-uploader>
    </van-cell>
    <div class="dec-txt">
      您的举报将在24小时内受理，若举报成功会第一时间告知处理结果，请尽量提交完整的举报描述以及材料，无需重复举报，感谢您的配合。
    </div>
    <van-popup v-model="userNoPopup" :close-on-click-overlay="false">
      <div class="advertising">
        <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3934558351,204464023&fm=173&app=49&f=JPEG?w=552&h=330&s=E5E021F5448070E5D6981E600300B074"  />
      </div>
      <div class="flex-center btn-zone">
        <van-button plain type="danger" size="small" @click="userNoPopup=false">确认</van-button>
      </div>
    </van-popup>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'report',
    data () {
      return {
        message: '',
        type: '',
        userNo: '',  // 原著撩撩号
        address: '',  // 原作品视频链接
        userNoPopup: false,  // 原著导引弹框
        typeId: '', // 举报类型Id
      };
    },
    mounted () {
      this.typeId = window.location.hash.split('/')[3];
      switch (this.typeId) {
        case "1":
          this.type = '色情低俗';
          break;
        case "2":
          this.type = '政治敏感';
          break;
        case "3":
          this.type = '违法犯罪';
          break;
        case "4":
          this.type = '垃圾广告、售卖假货等';
          break;
        case "5":
          this.type = '造谣传谣、涉嫌欺诈';
          break;
        case "6":
          this.type = '侮辱谩骂';
          break;
        case "7":
          this.type = '盗用TA人作品';
          break;
        case "8":
          this.type = '诱导点赞、分享、关注';
          break;
        case "9":
          this.type = '其他';
          break;
        default:
          this.type = '其他';
      }
    },
    computed: {

    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
      onRead(file) {
        console.log(file);
        this.$toast('上传成功')
      },
      commitAdvice () {
        this.$toast('提交成功');
        this.message = '';
      }
    },
    watch: {
      message: function (curVal, oldVal) {
        if (curVal.length > 200) {
          this.message = this.message.slice(0, 200);
        }
      }
    }
}
</script>

<style lang="less" scoped>
  .cellDiv{
    margin-top: 5px;
  }
  .dec{
    padding: 0.166667rem 0.4rem 0.1rem 0.4rem;
    color: #969799;
  }
  .dec-txt{
    padding: 0.266667rem 0.4rem;
    color: #969799;
  }
</style>
