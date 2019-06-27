<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft" fixed :title="goods.title"/>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <div class="goods">
      <van-swipe class="goods-swipe" :autoplay="3000">
        <van-swipe-item v-for="thumb in goods.thumb" :key="thumb" :height="300">
          <img :src="thumb" >
        </van-swipe-item>
      </van-swipe>
      <van-notice-bar
        :text="noticeContent"
        left-icon="volume-o"
        :speed="100"
      />
      <van-cell-group>
        <van-cell>
          <div class="goods-title">{{ goods.title }}</div>
          <div class="goods-price">{{ formatPrice(goods.price) }}</div>
        </van-cell>
        <van-cell class="goods-express">
          <van-col span="10">运费：{{ goods.express }}</van-col>
          <van-col span="14">剩余：{{ goods.remain }}</van-col>
        </van-cell>
        <van-collapse v-model="activeNames">
          <van-collapse-item title="商品详情" name="1">
            提供多样橱窗模板，快速搭建网上商城
          </van-collapse-item>
        </van-collapse>
      </van-cell-group>
      <!-- 实物收货地址 -->
      <van-cell-group title="实物商品收货信息" @click="toReceivingAddress" to="/setting/receivingAddress" v-if="goodsType === 0">
        <van-cell title="收货人" value="18124655384" icon="user-o"/>
        <van-cell title="收货地址：浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室" icon="location-o" is-link/>
        <van-field
          v-model="remarks"
          label="留言备注"
          type="textarea"
          placeholder="选填，如对快递的特殊要求"
          rows="1"
          autosize
          left-icon="comment-o"
        />
      </van-cell-group>
      <!-- 虚拟商品收货地址 -->
      <van-cell-group title="虚拟商品收货信息" v-if="goodsType === 1">
        <van-field
          v-model="phone"
          type="tel"
          label="手机号"
          placeholder="请输入手机号"
        />
      </van-cell-group>
      <div class="space"></div>
      <div class="immediately-exchange-zone">
        <van-button type="warning" size="large" @click="toExchange">立即兑换</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Col,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
} from 'vant';
export default {
  components: {
    [Col.name]: Col,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn,
  },
  data() {
    return {
      goods: {
        title: '美国伽力果（约680g/3个）',
        price: 2680,
        express: '免运费',
        remain: 19,
        thumb: [
          'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
          'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
        ]
      },
      activeNames: ['1'],
      phone: '',  // 兑换手机号码
      goodsType: 0, // 商品类型 0-实物， 1-虚拟物品 虚拟物品不需要填写地址
      remarks: '',  // 留言备注
    };
  },
  computed: {
    // 通知内容
    noticeContent () {
      let imitateUserList = ["130****8875的沈阳市", "131****8124的北京市", "132****8748的天津市", "133****1878的厦门市", "135****6188的南宁市",
      "137****1486的成都市", "138****1145的重庆市", "170****8045的呼和浩特市", "187****7414的贵港市", "189****4175的合肥市",
      "130****9847的南京市", "131****2122的广州市", "132****8777的南昌市", "133****8244的深圳市", "135****2486的福州市",
      "137****8168的贵阳市", "138****8466的攀枝花市", "170****5288的武汉市", "187****7415的长沙市", "189****6029的太原市"];
      let str = '';
      for (var i = 0; i < imitateUserList.length; i++) {
        str += '恭喜' + imitateUserList[i] + '用户获得' + this.goods.title + '；';
      }
      return str
    }
  },
  mounted () {
    this.goodsType = parseInt(this.$route.query.goodsType)
  },
  methods: {
    onClickLeft () {
      this.COMMONFUNC.goBack();
    },
    formatPrice () {
      return '¥' + (this.goods.price / 100).toFixed(2);
    },
    // 前往收货地址
    toReceivingAddress() {
      this.$router.push({
        name: 'receivingAddress',
        params: {
          userId: 'userId0001'
        },
      })
    },
    // 前往兑换
    toExchange () {
      let that = this;
      that.$dialog.confirm({
        title: '标题',
        message: '若用户金币低于商品需要的金币部分或者没有填写收货信息或虚拟物品未填写手机号码，兑换按钮默认置灰；'
      }).then(() => {
        that.$router.push({
          name: 'payment',
          params: '',
        })
      }).catch(() => {
        // on cancel
      });
    }
  }
};
</script>

<style lang="less" scoped>
  .goods {
    padding-bottom: 50px;
    &-swipe {
      img {
        width: 100%;
        height: 5rem;
        display: block;
      }
    }
    &-title {
      font-size: 16px;
    }
    &-price {
      color: #f44;
    }
    &-express {
      color: #999;
      font-size: 12px;
      padding: 5px 15px;
    }
    &-cell-group {
      margin: 15px 0;
      .van-cell__value {
        color: #999;
      }
    }
    &-tag {
      margin-left: 5px;
    }
  }
  .immediately-exchange-zone{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
