<template>
    <div>
        <!-- 列表单个 -->
        <van-panel title="@他" class="panel-s">
          <div>
            <p>男：xxx</p>
            <p>女：xxx</p>
            <p>男：xxx</p>
          </div>
          <div slot="footer">
            <!-- <i class="fa fa-eye" aria-hidden="true"></i><span>1w</span> -->
            <span><i class="fa fa-files-o" aria-hidden="true"></i></span><!-- 复制 -->
            <i class="fa fa-heart-o" aria-hidden="true"></i><span>1w</span><!-- 收藏 -->
            <i class="fa fa-share" aria-hidden="true" @click="share"></i><!-- 分享 -->
          </div>
        </van-panel>
        <!-- 底部选项 -->
        <van-actionsheet
        v-model="show"
        :actions="actions"
        cancel-text="取消"
        @select="onSelect"
        @cancel="onCancel"
        />
    </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      actions: [
        {
          name: '分享到'
        },
        {
          name: '选项',
          subname: '描述信息'
        },
        {
          loading: true
        },
      ]
    };
  },
  mounted () {
  },
  computed: {

  },
  methods: {
    share () {
      this.show = true;
    },
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      Toast(item.name);
    },
    onCancel () {
      this.show = false;
    }
  }
};
</script>

<style lang="less" scoped>
  .panel-s{
    margin: 10px;
  }
</style>
