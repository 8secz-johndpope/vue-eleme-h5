<template>
  <div>
    <div class="fixed-top">
        <van-nav-bar
          title="商品橱窗"
          right-text="我也要卖货"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
          >
        </van-nav-bar>
    </div>
    <div class="fixed-content-box">
      <van-panel>
        <div slot="header" class="flex-space-between header">
          <div class="flex-start">
            <router-link :to="{ name: 'userzone', params: {} }">
              <div>
                <span class="van-avatar"><img src="https://avatars1.githubusercontent.com/u/34303195?s=460&v=4" alt="" class="van-avatar-img"></span>
              </div>
            </router-link>
            <div class="flex-column shopkeeper">
              <span>XXX的商品橱窗</span>
              <span class="gray-font">全部商品 10</span>
            </div>
          </div>
          <div>
            <router-link :to="{ name: 'shopInfo', params: {} }" class="flex-center">编辑橱窗<van-icon name="edit" /></router-link>
          </div>
        </div>
      </van-panel>
      <van-list
        v-model="listLoading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoadMore"
      >
      <!-- 轮询商品 -->
      <div v-for="(item,index) in goodsArr">
        <!-- 商品组件 -->
        <GoodsCard :moreOperate="true"></GoodsCard>
      </div>
      </van-list>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import GoodsCard from 'components/common_components/GoodsCard';
  export default {
    components:{
      GoodsCard,
    },
    name: 'showcase',
    data () {
      return {
        goodsArr: [], // 商品数组
        goodsObj:{
          num: 2, // 商品数量
          originPrice: 10.00, //商品划线原价
          title: '商品标题', // 商品标题
          desc: '描述信息', //描述信息
          price: '2.00', //商品价格
          tag: '推荐',  // 标签
          tags: [], // 自定义描述下方标签区域
          imageURL: 'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg',  // 商品预览图
          lazyLoad: true,
          commodityId: 'cID00114',  // 商品ID
        },
        listLoading: false, // 是否处于加载状态，加载过程中不触发load事件
        finished: false,  // 是否已加载完成，加载完成后不再触发load事件
      };
    },
    mounted () {
      this.goodsArr.push(this.goodsObj);
    },
    computed: {
    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
      onClickRight () {
        this.$router.push('/setting/applyOpenShop')
      },
      // 下拉加载更多
      onLoadMore() {
        // 异步更新数据
        setTimeout(() => {
          // 每次加载10条
          for (let i = 0; i < 10; i++) {
            this.goodsArr.push(this.goodsObj);
          }
          // 加载状态结束
          this.listLoading = false;
          // 数据全部加载完成
          if (this.goodsArr.length >= 10) {
            this.finished = true;
          }
        }, 500);
      },
    }
  }
</script>
<style lang="css" scoped>
  .header{
    padding: 0.2rem 0.4rem;
  }
  .shopkeeper{
    padding: 0 0 0 0.2rem;
  }
</style>
