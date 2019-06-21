<template>
  <div class="shopInfo">
    <!-- 顶部 -->
    <van-nav-bar
      title="橱窗通用信息"    
      right-text="提交"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-cell title="发货地址" is-link :value="address" @click="areaPopShow = true" />
    <van-cell title="橱窗类型" is-link :value="shopType === -1 ? '请选择橱窗类型' : shopTypeName " @click="shopTypePop = true" />
    <van-cell title="联系电话" is-link :value="tel" @click="telPop = true" />
    <van-cell-group>
      <van-switch-cell v-model="showTelChecked" title="是否显示电话" size="0.5rem" @change="changeTel" />
    </van-cell-group>
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
    <!-- 商品类型选择 -->
    <van-popup v-model="shopTypePop" position="bottom" :overlay="true">
      <div class="flex-space-between blue-color popTop">
        <div @click="shopTypePop = false">取消</div>
        <div class="popTop-title">
          <span>商品类型选择</span>
        </div>
        <div @click="finishedSelect">确认</div>
      </div>
      <!-- 商品类型单选按钮 -->
      <van-radio-group v-model="selectShopTypeRadio" class="pop-select-conent">
        <van-cell-group>
          <van-cell :title="item.name" clickable @click="selectShopType(item,index)" v-for="(item,index) in shopTypeList">
            <van-radio :name="item.value" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </van-popup>
    <div class="footer-zone">
      <router-link :to="{ name: 'addOrUpdateCommodity', params: {} }"><van-button type="danger" size="large" >添加商品</van-button></router-link>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { mapGetters } from 'vuex';
  import { SwitchCell } from 'vant';
  Vue.use(SwitchCell);
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
        showTelChecked: false, // 是否显示电话，默认不显示
        shopTypePop: false, // 橱窗类型弹框
        shopType: -1, // 橱窗类型
        shopTypeName: '', // 橱窗类型中文名
        selectShopTypeRadio: -1,  // 选中的橱窗类型
        selectShopTypeRadioName: '',   // 选中的橱窗类型中文名
        shopTypeList: [ // 橱窗类型类别
          {
            name: '动漫',
            value: 0,
          },{
            name: '服装',
            value: 1,
          }, {
            name: '饮食',
            value: 2
          }, {
            name: '美妆',
            value: 3
          }, {
            name: '数码',
            value: 4
          },
        ]
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
      // 提交
      onClickRight () {
        let that = this;
        let errorMsg = '';
        if (that.shopType === -1) {
          errorMsg = '请选择橱窗类型'
        }else if(!(/^1[34578]\d{9}$/.test(that.tel))){
          errorMsg = '请输入正确的手机号码'
        }
        if (errorMsg !== '') {
          that.$dialog.alert({
            title: '提示',
            message: errorMsg,
          }).then(() => {
            // on close
          });
        }else{
          that.$toast('提交成功')
        }
      },
      // 取消修改手机
      cancelUpdateTel () {
        this.telPop = false;
      },
      // 修改手机
      updateTel () {
        this.telPop = false;
      },
      // 确认地址
      confirmArea (e) {
        this.areaPopShow = false;
        this.address = e[0].name+'·'+e[1].name+'·'+e[2].name;
      },
      // 选择橱窗类型
      selectShopType (item,index) {
        this.selectShopTypeRadio = item.value;
        this.selectShopTypeRadioName = item.name;
      },
      // 完成选择
      finishedSelect () {
        this.shopType = this.selectShopTypeRadio;
        this.shopTypeName = this.selectShopTypeRadioName;
        this.shopTypePop = false;
      },
      // 切换是否显示电话
      changeTel (checked) {
        this.$toast('切换状态：'+checked)
      }
    }
}
</script>

<style lang="less" scoped>
  .popTop{
    font-size: 0.373333rem;
    height: 1rem;
    align-items: center;
    padding: 0.133333rem 0.4rem;
  }
  .popTop-title{
    font-size: 0.426667rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333;
  }
  .pop-select-conent{
    height: 5rem;
    overflow: scroll;
  }
  .footer-zone {
    position: fixed;
    width: 100%;
    bottom: 0;
  }
</style>
