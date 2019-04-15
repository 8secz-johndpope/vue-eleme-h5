<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="商店通用信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell title="联系电话" is-link :value="tel" @click="telPop = true" />
    <van-cell title="发货地址" is-link :value="address" @click="areaPopShow = true" />
    <!-- 联系电话 -->
    <van-popup v-model="telPop" position="bottom" :overlay="true" class="grayBg">
      <van-nav-bar
        title="联系电话"
        left-text="取消"
        right-text="确认"
        @click-left="cancelUpdateTel"
        @click-right="updateTel"
        class="grayBarBg"
      />
      <van-cell-group>
        <van-field v-model="tel" placeholder="请输入手机号码" clearable />
      </van-cell-group>
    </van-popup>
    <!-- 发货地址设置 -->
    <van-popup v-model="areaPopShow" position="bottom" :overlay="true">
      <van-area :area-list="getAreaList" value="440303" :item-height="80" @confirm="confirmArea" @cancel="areaPopShow=false" />
    </van-popup>
    <div class="fixed-footer-btn-zone">
      <router-link :to="{ name: 'addOrUpdateCommodity', params: {} }"><van-button type="danger" size="large" >添加商品</van-button></router-link>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    components:{
    },
    name: 'addOrUpdateShowcase',
    data () {
      return {
        areaPopShow: false, // 地址栏弹框
        telPop: false,  // 联系电话弹框
        address: '广东省·深圳市·罗湖区', // 地址
        tel: '18124655386',  // 联系电话
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
      // 取消修改手机
      cancelUpdateTel () {
        this.telPop = false;
      },
      // 修改手机
      updateTel () {
        this.$toast('修改用户名成功')
        this.telPop = false;
      },
      // 确认地址
      confirmArea (e) {
        this.areaPopShow = false;
        this.address = e[0].name+'·'+e[1].name+'·'+e[2].name;
      },
    }
}
</script>

<style lang="less" scoped>
</style>
