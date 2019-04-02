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
    <van-cell is-link class="cellTop">
      <template slot="title">
        <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" class="uploaderImg">
          <span class="custom-text">背景</span>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553668757135&di=5265263d5697ddcde0103e16aa02114e&imgtype=0&src=http%3A%2F%2Fimage2.5253.com%2Fimages%2Fuser_cover%2F201410%2F24%2F1452%2F46%2F201410241452460660_1000.png" class="avatar" />
        </van-uploader>
      </template>
    </van-cell>
    <van-cell title="名称" is-link :value="userName" @click="openUserNameSettingPopup" />
    <van-cell title="生日" is-link :value="birthDay" @click="birthDayPop = true" />
    <van-cell title="性别" is-link value="男" @click="showSexPop" />
    <van-cell title="地区" is-link :value="address" @click="areaPopShow = true" />
    <van-cell title="签名" is-link :value="autograph" @click="openAutographSettingPopup" />
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
    <!-- 地址设置 -->
    <van-popup v-model="areaPopShow" position="bottom" :overlay="true">
      <van-area :area-list="getAreaList" value="110101" :item-height="80" @confirm="confirmArea" @cancel="areaPopShow=false" />
    </van-popup>
    <!-- 生日设置 -->
    <van-popup v-model="birthDayPop" position="bottom" :overlay="true">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :item-height="80"
        @confirm="confirmBirth"
      />
    </van-popup>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { Area } from 'vant';
  import { DatetimePicker } from 'vant';
  import { mapGetters } from 'vuex';
  Vue.use(DatetimePicker);
  Vue.use(Area);
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
        areaPopShow: false, // 地址栏弹框
        birthDayPop: false, // 生日弹框
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
        address: '中国·广东·深圳', // 地址
        userName: 'lisan',  // 用户名
        autograph: '做个俗人，贪财好色', // 个性签名
        currentDate: new Date(),
        minDate: new Date(),
        birthDay: '2019-04-02',
      };
    },
    mounted () {
    },
    computed: {
      ...mapGetters([
        'getAreaList',
      ])
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
      },
      // 确认地址
      confirmArea (e) {
        this.areaPopShow = false;
        this.address = e[0].name+'·'+e[1].name+'·'+e[2].name;
      },
      // 确认生日
      confirmBirth (e) {
        this.birthDayPop = false;
        this.birthDay = this.COMMONFUNC.crtTimeFtt(e);
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
