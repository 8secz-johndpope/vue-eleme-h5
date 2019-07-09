<template>
  <div>
    <div @click="select()">
      <van-card
        tag="标签"
        price="2.00"
        desc="描述信息"
        title="2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男"
        :thumb="imgSrc"
        origin-price="10.00"
        v-lazy="imgSrc"
      >
      <div slot="num">
        9.9w+人看过
      </div>
      <div slot="tags">
        <van-tag type="danger">满13减1</van-tag>
        <van-tag type="danger">热卖</van-tag>
      </div>
    </van-card>
    </div>
    <div class="opt-zone" v-if="moreOperate">
      <router-link :to="{ name: 'addOrUpdateCommodity', params: {'showcaseId':'showcaseId00001'} }">
        <van-button size="mini">编辑</van-button>
      </router-link>
      <van-button size="mini" @click="moreOperatePop = true" class="mgl5">更多操作</van-button>
    </div>
    <!-- 更多操作弹框 -->
    <van-actionsheet v-model="moreOperatePop" title="更多操作">
      <div class="select-content">
        <p class="flex-center select-content-item" @click="roofPlacement()">置顶</p>
        <p class="flex-center select-content-item" @click="deleteGoods()">删除</p>
      </div>
    </van-actionsheet>
  </div>
</template>

<script>
export default {
  // 父子通信
  props: {
    // 是否显示更多
    moreOperate:{
      type: Boolean,
      default: false,
    },
    // 是否选择商品
    isSelectGoods: {
      type: Boolean,
      default: false,
    }
  },
  components : {
  },
  data () {
    return {
      imgSrc: 'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg',
      moreOperatePop: false,  // 更多操作弹框
    };
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    // 跳转商品详情
    select () {
      this.moreOperatePop = false;
      if (this.isSelectGoods) {
        this.$emit('on-select-goods', true)
      }else {
        this.$router.push({ name: 'commodity', params: { id: 'id000000' }})
      }
    },
    // 置顶
    roofPlacement () {
      this.$toast('置顶成功');
      this.moreOperatePop = false;
    },
    // 删除商品
    deleteGoods () {
      let that = this;
      this.$dialog.confirm({
        title: '提示',
        message: '删除后不可恢复，是否删除'
      }).then(() => {
        that.$toast('删除成功');
        this.moreOperatePop = false;
      }).catch(() => {
        // on cancel
      });
    }
  }
};
</script>

<style lang="less" scoped>
  .opt-zone{
    display: flex;
    justify-content: flex-end;
    padding: 0.133333rem 0.4rem;
    background-color: #fff;
  }
  .select-content{
    width: 100%;
    text-align: center;
    padding: 0 0 0.2rem 0;
  }
  .select-content-item{
    height: 1rem;
    font-size: 0.426667rem;
  }
</style>
