<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft" fixed :title="goods.title" />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <div class="goods">
      <van-swipe class="goods-swipe" :autoplay="3000">
        <van-swipe-item v-for="thumb in goods.thumb" :key="thumb" :height="300">
          <img :src="thumb" >
        </van-swipe-item>
      </van-swipe>

      <van-cell-group>
        <van-cell>
          <div class="goods-title">{{ goods.title }}</div>
          <div class="goods-price">{{ formatPrice(goods.price) }}</div>
        </van-cell>
        <van-cell class="goods-express">
          <van-col span="10">运费：{{ goods.express }}</van-col>
          <van-col span="14">剩余：{{ goods.remain }}</van-col>
        </van-cell>
        <van-cell class="goods-express" isLink @click="servicePopup = true">
          <van-col span="24">服务：假一赔三/7天退换/消费者保障服务</van-col>
        </van-cell>
      </van-cell-group>

      <van-cell-group class="goods-cell-group">
        <van-cell value="进入橱窗" icon="shop-o" is-link :to="{ name: 'showcase', params: {'shopId':'01'} }">
          <template slot="title">
            <span class="van-cell-text">XXX的橱窗</span>
            <van-tag class="goods-tag" type="danger">官方</van-tag>
          </template>
        </van-cell>
        <van-cell title="发货地址" value="广东省·深圳市·罗湖区" is-link />
        <van-collapse v-model="activeNames">
          <van-collapse-item title="商品详情" name="1">
            提供多样橱窗模板，快速搭建网上商城
          </van-collapse-item>
        </van-collapse>
      </van-cell-group>
      <van-goods-action>
        <van-goods-action-big-btn
          icon="chat-o"
          v-clipboard:copy="copyText"
          v-clipboard:success="onCopySuccess"
          v-clipboard:error="onCopyError"
        >
          复制商品淘宝链接
        </van-goods-action-big-btn>
        <van-goods-action-big-btn primary @click="toTaobao">
          去淘宝看看
        </van-goods-action-big-btn>
      </van-goods-action>
    </div>
    <van-actionsheet v-model="servicePopup" title="服务说明">
      <div class="pd15">
        <div class="flex-align-center mgb15" v-for="(item, index) in serviceContent" :key="index">
          <div><img :src="item.icon" class="van-avatar"></div>
          <div class="mgl10">
            <div class="font-14">{{item.name}}</div>
            <div class="dy-font-color font-12">{{item.desc}}</div>
          </div>
        </div>
        <van-button class="mgt15" size="large" type="danger" @click="servicePopup = false">确定</van-button>
      </div>
    </van-actionsheet>
  </div>
</template>

<script>
import {
  Col,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
} from 'vant';
import MoreOperate from 'components/child_components/Comments_components/MoreOperate';
export default {
  components: {
    [Col.name]: Col,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn,
    MoreOperate,
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
      servicePopup: false,  // 消保弹框
      serviceContent: [
        {
          name: '假一赔三',
          icon: require('images/icon/service-protect/pei.png'), // 绝对路径
          desc: '为了保障消费者权益，平台商品支持假一赔三',
        },{
          name: '七天退换',
          icon: require('images/icon/service-protect/qitian.png'), // 绝对路径
          desc: '消费者咋满足7天无理由退换货申请条件的前提下，可以提出“七天无理由退换货”的申请',
        },{
          name: '消费者保障服务',
          icon: require('images/icon/service-protect/baozheng.png'), // 绝对路径
          desc: '该卖家已缴纳保证金，如有商品质量问题，描述不符等，您有权申请退款或退货',
        },
      ],
      copyText: '用户填写的该商品的淘宝链接',  // 复制的内容
    };
  },
  methods: {
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
    formatPrice() {
      return '¥' + (this.goods.price / 100).toFixed(2);
    },
    toTaobao() {
      this.$toast('跳转商品的淘宝链接');
    },
    // 复制成功
    onCopySuccess: function (e) {
      this.$toast('复制成功！')
    },
    // 复制失败
    onCopyError: function (e) {
      this.$toast('复制失败！')
    },
  }
};
</script>

<style lang="less" scoped>
  .goods {
    padding-bottom: 50px;
    &-swipe {
      img {
        width: 100%;
        height: 8.4rem;
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
  .select-content{
    width: 100%;
    text-align: center;
    padding: 0 0 0.2rem 0;
  }
  .select-content-item{
    height: 1.2rem;
    font-size: 0.426667rem;
  }
  .van-avatar{
    background-color: #fff;
  }
</style>
