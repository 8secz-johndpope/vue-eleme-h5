<template>
  <div class="goodsList">
    <van-nav-bar 
      left-arrow 
      @click-left="onClickLeft" 
      title="兑换商城" 
      right-text="使用说明"
      @click-right="onClickRight"
      fixed 
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <van-search placeholder="请输入搜索关键词" v-model="searchValue" />
    <van-swipe :autoplay="1000" class="white-bg swipe-zone">
      <van-swipe-item v-for="(image, index) in swiptImages" :key="index" class="flex-center">
        <router-link :to="{ name: 'goodsDetail', params: { goodsId: 'goodsId00001'} }">
          <img v-lazy="image" class="swipe-img" />
        </router-link>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'goodsList',
  components: {
  },
  data () {
    return {
      searchValue: '',  // 搜索关键词
      swiptImages: [
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=32246159,1850476516&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2412391619,1402500369&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2412391619,1402500369&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2412391619,1402500369&fm=26&gp=0.jpg',
      ],
      classifyList: [
        {
          name: '全部',
          icon: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=32246159,1850476516&fm=26&gp=0.jpg',
        }
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
    onClickRight() {
      this.$router.push({
        name: 'goodsList',
        params: '',
      })
    },
    
  },
};
</script>

<style lang="less" scoped>
  .swipe-zone{
    height: 4.2rem;
  }
  .swipe-img{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%
  }
</style>
