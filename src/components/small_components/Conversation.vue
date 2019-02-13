<template>
    <div>
        <!-- 列表单个 -->
        <van-panel :title="'@'+item.author" class="panel-s" v-for="(item,index) in composition">
          <div class="content-box" v-html="item.contentHtml">
            {{item.contentHtml}}
          </div>
          <div slot="footer" class="flex-r">
            <!-- <i class="fa fa-eye" aria-hidden="true"></i><span>1w</span> -->
            <span class="copy"
              v-clipboard:copy="item.content"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"><!-- 复制 -->
              <i class="fa fa-files-o" aria-hidden="true"></i>
            </span>
            <span @click="addMyLike(index)" class="myLike"><i class="fa fa-heart-o" :class="{ 'red-color': item.isLike }" aria-hidden="true"></i> {{COMMONFUNC.formatterW(item.likers)}}</span><!-- 收藏 -->
            <span @click="share" class="share"><i class="fa fa-share" aria-hidden="true"></i></span><!-- 分享 -->
          </div>
        </van-panel>
        <!-- 分享选项 -->
        <van-actionsheet v-model="show" title="分享到">
          <i class="fa fa-weixin" aria-hidden="true"></i>
          <i class="fa fa-qq" aria-hidden="true"></i>
        </van-actionsheet>
    </div>
</template>

<script>
export default {
  // 父子通信
  props: {
    composition: {
      type: Array,
      default: [],
    }
  },
  data () {
    return {
      show: false,  // 底部 -- 分享
    };
  },
  mounted () {
  },
  computed: {

  },
  methods: {
    // 点击分享
    share () {
      this.show = true;
    },
    // 复制成功
    onCopy: function (e) {
      this.$toast('复制成功！')
    },
    // 复制失败
    onError: function (e) {
      this.$toast('复制失败！')
    },
    // 加入喜欢
    addMyLike: function (index) {
      if (this.composition[index].isLike) {
        this.composition[index].isLike = false;
        this.composition[index].likers -= 1;
      }else{
        this.composition[index].isLike = true;
        this.composition[index].likers += 1;
        this.$toast('成功收藏！');
      }
    },
  }
};
</script>

<style lang="less" scoped>
  .flex-r{
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    .copy{
      width: 30px;
      text-align: center;
    }
    .myLike{
      width: 60px;
      text-align: center;
    }
    .share{
      width: 20px;
      text-align: right;
    }
  }
  .panel-s{
    margin: 10px;
    font-size: 14px;
  }
  .content-box{
    padding: 0 15px;
    line-height: 20px;
  }
  .red-color{
    color: red;
  }
</style>
