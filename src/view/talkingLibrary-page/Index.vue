<template>
  <div class="white-bg">
    <div>
      <van-nav-bar
        title="恋爱话术"
        left-arrow
        @click-left="onClickLeft"
        fixed
        >
      </van-nav-bar>
    </div>
    <div class="top-space"></div>
    <div>
      <div class="tcenter">
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2128793460,2380442370&fm=26&gp=0.jpg" class="mgt15 logo" />
        <div class="font-14 dy-font-color mgt10">微撩，让天下没有难谈的恋爱</div>
        <van-search placeholder="请输入搜索关键词" class="search-zone" v-model="keywords" />
        <van-button round type="danger" @click="onSearch" class="search-btn mgt5 font-14">搜一搜</van-button>
      </div>
      <van-panel class="pd10 mgt10" v-for="(menuItem, index) in getImitateMenu">
        <div slot="header">
          <span class="main-name font-14">{{menuItem.levelOneName}}</span>
          <span class="font-14 dy-font-color">|</span>
          <span class="font-12 dy-font-color">{{menuItem.levelOneDesc}}</span>
        </div>
        <div class="flex-space-around">
          <router-link v-for="(child_item, child_index) in menuItem.menuList" :to="'/talkingLibrary/result/' + child_item.listId" >
            <van-button type="danger" class="item-linear dy-font-color">{{child_item.levelTwoName}}</van-button>
          </router-link>
        </div>
      </van-panel>
    </div>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      showMe: false, // 是否展示当前页面
      keywords: '',  // 搜索词
      images: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550992736&di=b5f7eaa82f8368773fc73615fdec6ee4&imgtype=jpg&er=1&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F11%2F23%2F16pic_1123089_b.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550992736&di=b5f7eaa82f8368773fc73615fdec6ee4&imgtype=jpg&er=1&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F11%2F23%2F16pic_1123089_b.jpg',
      ]
    };
  },
  mounted () {
  },
  beforeDestroy () {
  },
  computed: {
    ...mapGetters([
      'getImitateMenu' // 话术分类信息
    ])
  },
  methods: {
    onSearch () {
      if (!this.keywords) {this.$toast('请输入搜索关键词'); return}
      this.$store.dispatch('setKeywords', this.keywords);
      this.$router.push('/talkingLibrary/result/'+this.keywords);
    },
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
  },
};
</script>

<style lang="less" scoped>
  .logo{
    width: 2rem;
    height: 2rem;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .search-zone{
    width: 80%;
    margin: 5px auto;
    padding: 10px;
  }
  .search-btn{
    width: 3rem;
    height: 1rem;
    line-height: 1rem;
    background-color: #3B4151;
    border: 0.026667rem solid #3B4151;
  }
  .item-linear{
    background: #F3F6FD;
    color: #333;
    border: 0;
    margin: 0.312rem 0.156rem 0 0.156rem;
    width: 2.57rem;
    padding: 0 0.156rem;
    height: 0.8rem;
    line-height: 0.8rem;
  }
  .main-name{
    margin-left: 0.312rem;
  }
  .panel-header{
    padding-top: 0.312rem;
  }
</style>
