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
    <van-cell title="名称" is-link value="全村的希望" @click="openUserNameSettingPopup" />
    <van-cell title="性别" is-link value="男" @click="showSexPop" />
    <van-cell title="地区" is-link value="中国·广东·深圳" />
    <van-cell title="签名" is-link value="做个俗人，贪财好色" @click="openAutographSettingPopup" />
    <!-- 性别弹出层 -->
    <van-actionsheet
    v-model="sexPopShow"
    :actions="actions"
    @select="onSelectSex"
    />
    <!-- 名称设置 -->
    <van-popup v-model="userNameSettingShow" position="bottom" :overlay="true" class="grayBg">
      <van-nav-bar
        title="名称设置"
        left-text="取消"
        right-text="确认"
        @click-left="cancelUpdateUserName"
        @click-right="updateUserName"
        class="grayBarBg"
      />
      <van-cell-group>
        <van-field v-model="userName" placeholder="请输入用户名" clearable />
      </van-cell-group>
    </van-popup>
    <!-- 个人签名设置 -->
    <van-popup v-model="autographSettingShow" position="bottom" :overlay="true" class="grayBg">
      <van-nav-bar
        title="个性签名设置"
        left-text="取消"
        right-text="确认"
        @click-left="cancelUpdateAutograph"
        @click-right="updateAutograph"
        class="grayBarBg"
      />
      <van-cell-group>
        <van-field v-model="autograph" placeholder="请输入个性签名" clearable />
      </van-cell-group>
    </van-popup>
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
        userNameSettingShow: false,  // 名称设置弹框
        autographSettingShow: false,  // 个性签名设置弹框
        actions: [
          {
            name: '男',
            value: 0,
          },
          {
            name: '女',
            value: 1
          },
        ],
        userName: 'lisan',  // 用户名
        autograph: '做个俗人，贪财好色', // 个性签名
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
      // 上传文件
      onRead(file) {
        this.$toast('上传成功')
        console.log(file)
      },
      // 打开修改用户名弹框
      openUserNameSettingPopup () {
        this.userNameSettingShow = true;
      },
      // 取消修改用户名
      cancelUpdateUserName () {
        this.userNameSettingShow = false;
      },
      // 修改用户名
      updateUserName () {
        this.$toast('修改用户名成功')
        this.userNameSettingShow = false;
      },
      // 打开修改个性签名弹框
      openAutographSettingPopup () {
        this.autographSettingShow = true;
      },
      // 取消修改个性签名
      cancelUpdateAutograph () {
        this.autographSettingShow = false;
      },
      // 修改个性签名
      updateAutograph () {
        this.$toast('修改个性签名成功')
        this.autographSettingShow = false;
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
