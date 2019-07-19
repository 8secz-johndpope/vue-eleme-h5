<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="更多"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="share" slot="right" />
    </van-nav-bar>
    <van-cell-group>
      <van-cell class="displayflex">
        <div class="img-zone">
          <span class="van-avatar"><img :src="getImitateUser.userImg" alt="" class="van-avatar-img"></span>
        </div>
        <div class="contents-zone">
          <div class="flex-column">
            <span>{{getImitateUser.userName}}</span>
            <span class="gray-font">{{getImitateUser.LiaoNo}}</span>
          </div>
        </div>
      </van-cell>
    </van-cell-group>
    <van-cell title="备注名" is-link @click="remarkPopShow = true" :value="remarkName"/>
    <van-cell title="举报" is-link to="/accusation"/>
    <van-cell title="拉黑" is-link @click="pullBlack" />
    <!-- 分享选项 -->
    <van-actionsheet v-model="sharePopShow" title="分享到">
      <ShareBox></ShareBox>
    </van-actionsheet>
    <!-- 备注设置 -->
    <van-popup v-model="remarkPopShow" position="bottom" :overlay="true" class="grayBg">
      <van-nav-bar
        title="备注设置"
        left-text="取消"
        right-text="确认"
        @click-left="cancelRemark"
        @click-right="confirmRemark"
        class="grayBarBg"
      />
      <van-cell-group>
        <van-field v-model="remarkName" placeholder="请输入备注" clearable />
      </van-cell-group>
    </van-popup>
  </div>
</template>
<script>
  import ShareBox from 'components/common_components/ShareBox';
  import { mapGetters } from 'vuex';
  export default {
    components:{
      ShareBox
    },
    name: 'accusation',
    data () {
      return {
        sharePopShow: false,  // 分享
        remarkPopShow: false, // 备注弹框
        remarkName: '点击设置', // 备注名
      };
    },
    mounted () {

    },
    computed: {
      ...mapGetters([
        'getImitateUser', // 获取用户数据
      ])
    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
      onClickRight () {
        this.sharePopShow = true;
      },
      // 拉黑
      pullBlack () {
        let that = this;
        that.$dialog.confirm({
          message: '拉黑对方后，将不会收到对方的信息，确定拉黑吗？'
        }).then(() => {
          that.$toast('拉黑成功')
        }).catch(() => {
          // on cancel
        });
      },
      // 取消备注
      cancelRemark () {
        this.remarkName = '';
        this.remarkPopShow = false;
      },
      // 确认备注
      confirmRemark () {
        this.$toast('修改成功');
        this.remarkPopShow = false;
      }
    }
}
</script>

<style lang="less" scoped>
  .displayflex{
    padding: 0.1rem 0.4rem;
  }
  .img-zone{
    line-height: 1.2rem;
  }
  .contents-zone{
    margin-left: 10px;
    width: calc(100% - 40px);
  }
</style>
