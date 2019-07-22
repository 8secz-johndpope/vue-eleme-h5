<template>
  <div class="addorUpAddress">
    <!-- 顶部 -->
    <van-nav-bar
      title="收货地址编辑"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div class="top-space"></div>
    <!-- 新增或收货地址 -->
    <van-cell-group>
      <van-field required clearable label="姓名" v-model="username" placeholder="收货人姓名" />
      <van-field required clearable label="电话" type="number" v-model="telephone" placeholder="收货人手机号" />
      <van-field required readonly label="地区" v-model="address" placeholder="请选择地区" @click="areaPopShow = true" right-icon="arrow" />
      <van-field
        v-model="detailAddress"
        required
        label="详细地址"
        type="textarea"
        placeholder="街道门牌、楼层房间号等信息"
        rows="1"
        autosize
      />
      <van-field clearable label="邮政编码" type="number" v-model="postal" placeholder="邮政编码" />
      <van-switch-cell v-model="isDefaultAddress" title="设为默认收货地址" size="50px" />
    </van-cell-group>
    <van-button type="danger" size="large" class="mgt15" @click="onSave">保存</van-button>
    <van-button type="default" size="large" class="mgt15" @click="onDelete">删除</van-button>
    <!-- 发货地址设置 -->
    <van-popup v-model="areaPopShow" position="bottom" :overlay="true">
      <van-area :area-list="getAreaList" value="440303" :item-height="80" @confirm="confirmArea" @cancel="areaPopShow=false" />
    </van-popup>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { AddressEdit } from 'vant';
  import { mapGetters } from 'vuex';
  Vue.use(AddressEdit);
  export default {
    components:{
    },
    name: 'addorUpAddress',
    data () {
      return {
        username: '', // 收货人姓名
        telephone: '', // 收货人手机号
        address: '广东省·深圳市·罗湖区', // 地址
        detailAddress: '', // 详细地址
        postal:  '', // 邮政编码
        isDefaultAddress: true,  // 设为默认收货地址
        areaPopShow: false, // 地址栏弹框
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
      onSave() {
        this.$toast('save');
      },
      onDelete() {
        this.$toast('delete');
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
