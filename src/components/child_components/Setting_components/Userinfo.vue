<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="个人信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell is-link class="cellTop">
      <template slot="title">
        <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" class="uploaderImg">
          <span class="custom-text">头像</span>
          <img src="https://avatars1.githubusercontent.com/u/34303195?s=460&v=4" class="avatar" />
        </van-uploader>
      </template>
    </van-cell>
    <van-cell title="名称" is-link value="全村的希望" />
    <van-cell title="性别" is-link value="男" @click="showSexPop" />
    <van-cell title="地区" is-link value="中国·广东·深圳" />
    <van-cell title="签名" is-link value="做个俗人，贪财好色" />
    <!-- 性别弹出层 -->
    <van-actionsheet
      v-model="sexPopShow"
      :actions="actions"
      @select="onSelectSex"
    />
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'userinfo',
    data () {
      return {
        msg: '1',
        sexPopShow: false,  // 性别弹出层
        actions: [
          {
            name: '男',
            value: 0,
          },
          {
            name: '女',
            value: 1
          },
        ]
      };
    },
    mounted () {

    },
    computed: {

    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
      // 展示性别弹出层
      showSexPop () {
        this.sexPopShow = true;
      },
      // 选择性别
      onSelectSex(item) {
        // 点击选项时默认不会关闭菜单，可以手动关闭
        this.sexPopShow = false;
        this.$toast(item.name);
      },
      onRead(file) {
        this.$toast('上传成功')
        console.log(file)
      }
    }
}
</script>

<style lang="less" scoped>
  .cellDiv{
    margin-top: 5px;
  }
  .cellTop{
    padding-top: 10px;
    line-height: 1rem;
    .van-cell__right-icon{
      line-height: 1rem;
    }
  }
  .avatar{
    width: 40px;
    height: 40px;
    float: right;
  }
  .uploaderImg{
    width: 100%;
  }
</style>
