<template>
  <div class="shareBox">
    <!-- 分享选项 -->
    <div class="shareBox-item" @click="retransmission">
      <i class="fa fa-share-alt fa-2x shareBox-icon" aria-hidden="true"></i>
      <p>转发</p>
    </div>
    <!-- <div class="shareBox-item">
      <i class="fa fa-weixin fa-2x shareBox-icon" aria-hidden="true"></i>
      <p>微信</p>
    </div>
    <div class="shareBox-item">
      <i class="fa fa-qq fa-2x shareBox-icon" aria-hidden="true"></i>
      <p>QQ</p>
    </div> -->
    <!-- <div class="shareBox-item">
      <i class="fa fa-star fa-2x shareBox-icon" aria-hidden="true"></i>
      <p>收藏</p>
    </div> -->
    <!-- <div class="shareBox-item"
      v-clipboard:copy="copyContent"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError">
      <i class="fa fa-clone fa-2x shareBox-icon" aria-hidden="true"></i>
      <p>复制链接</p>
    </div> -->
    <router-link :to="{ name: 'accusation', params: {} }" v-if="!isShowRoofPlacementChild">
      <div class="shareBox-item">
        <i class="fa fa-exclamation-triangle fa-2x shareBox-icon" aria-hidden="true"></i>
        <p>举报</p>
      </div>
    </router-link>
    <router-link :to="{ name: 'extension', params: {'id':'001'} }">
      <div class="shareBox-item">
        <i class="fa fa-link fa-2x shareBox-icon" aria-hidden="true"></i>
        <p>速推计划</p>
      </div>
    </router-link>
    <div class="shareBox-item" v-if="isShowRoofPlacementChild" @click="openShareRangeSetting">
      <i class="fa fa-cog fa-2x shareBox-icon" aria-hidden="true"></i>
      <p>设置</p>
    </div>
    <div class="shareBox-item" v-if="isShowRoofPlacementChild" @click="deletePost">
      <i class="fa fa-trash-o fa-2x shareBox-icon" aria-hidden="true"></i>
      <p>删除</p>
    </div>
    <div class="shareBox-item" v-if="isShowRoofPlacementChild&&isTopNow === 1">
      <i class="fa fa-paper-plane fa-2x shareBox-icon" aria-hidden="true"></i>
      <p>置顶</p>
    </div>
    <div class="shareBox-item" v-if="isShowRoofPlacementChild&&isTopNow === 0">
      <i class="fa fa-paper-plane-o fa-2x shareBox-icon" aria-hidden="true"></i>
      <p>取消置顶</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shareBox',
   // 父子通信
  props: {
    targetId: {
      type: String,
      default: '',
    },
    // 是否在分享弹框显示置顶按钮
    isShowRoofPlacementChild: {
      type: Boolean,
      default: false,
    },
    // 当前是置顶还是取消置顶
    isTopNow: {
      type: Number,
      default: 1,
    },
  },
  data () {
    return {
      copyContent: '复制内容（可以是链接，文本等）',  // 复制内容
    };
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    // 复制成功
    onCopy: function (e) {
      this.$toast('复制成功！')
    },
    // 复制失败
    onError: function (e) {
      this.$toast('复制失败！')
    },
    retransmission: function () {
      this.$router.push({
        name: 'retransmission',
         params: { postId: '01' },
      })
    },
    deletePost: function () {
      let that = this;
      that.$dialog.confirm({
        title: '提示',
        message: '确认删除吗'
      }).then(() => {
        that.$emit('on-delete-post', that.targetId)
      }).catch(() => {
        // on cancel
      });
    },
    // 打开分享范围选择框
    openShareRangeSetting () {
      this.$emit('on-open-share-range-setting', '')
    }
  },
  watch: {
  }
};
</script>

<style lang="less" scoped>
  .shareBox{
    height: 1.5rem;
    display: flex;
    align-items: center;
  }
  .shareBox-item{
    text-align: center;
    width: 1.4rem;
  }
  .shareBox-item p{
    padding: 0 0.1rem 0 0;
  }
  .shareBox-icon{
    margin: 0 0.1rem 0 0;
  }
</style>
