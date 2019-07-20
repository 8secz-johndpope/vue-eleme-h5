<template>
  <div class="white-bg postSearch">
    <div class="pdl15 pdr15 white-bg flex-align-center top-zone">
      <van-icon name="arrow-left" class="top-zone-left" @click="onClickLeft"/>
      <form action="/" class="top-zone-right">
        <van-search
        v-model="searchValue"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        />
      </form>
    </div>
    <div class="top-space"></div>
    <!-- 搜索历史 -->
    <div class="pdl15 pdr15">
      <div class="flex-space-between pdb10" v-for="(item, index) in searchRecordList" :key="index">
        <div class="flex-center" @click="onSearch">
          <van-icon name="clock-o" class="mgr10"/>
          <span>{{item}}</span>
        </div>
        <van-icon name="close" @click="deleteRecord(index)" />
      </div>
    </div>
    <div class="tcenter pdb10 dy-font-color more-zone" v-if="moreRecordBtnShow" @click="moreRecord">全部搜索记录</div>
    <div class="tcenter pdt5 pdb10 dy-font-color more-zone" v-if="!moreRecordBtnShow && searchRecordList.length > 0" @click="deleteRecord('all')">清除全部搜索记录</div>
    <!-- 热搜 -->
    <div class="pdl15 pdr15 flex-wrap">
      <div class="flex-start mg5 recommendItem" v-for="(item, index) in hotSearchList" :key="index" @click="toPostClassify">
        <span class="van-ellipsis mgr5">{{item.name}}</span>
        <van-tag type="danger" class="tag" v-if="item.type === 0">热</van-tag>
        <van-tag color="#f2826a" class="tag" v-if="item.type === 1">新</van-tag>
        <van-tag type="primary" class="tag" v-if="item.type === 2">荐</van-tag>
      </div>
    </div>
    <div class="tcenter pdt5 pdb10 dy-font-color more-zone" @click="toHotSearchRanking">查看更多热搜</div>
    <!-- 人气榜单 -->
    <div class="pdl15 pdr15">
      <div class="flex-align-center pdt10 pdb10">
        <van-icon name="bar-chart-o" class="gold-color"/>
        <span>人气榜单</span>
      </div>
      <div class="flex">
        <div class="pd10 ranking-item-l mgr10" @click="toRedPeopleRanking">
          <div class="flex-space-between pdb10">
            <div>微撩红人榜</div>
            <van-icon name="arrow"/>
          </div>
          <div class="flex">
            <div class="mgr5">
              <img class="van-avatar" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1735688044,4235283864&fm=26&gp=0.jpg" />
            </div>
            <div>
              <div>TOP.1</div>
              <div>我是榜首</div>
            </div>
          </div>
        </div>
        <div class="pd10 ranking-item-r" @click="toDarenRanking">
          <div class="flex-space-between pdb10">
            <div>问答达人榜</div>
            <van-icon name="arrow"/>
          </div>
          <div class="flex">
            <div class="mgr5">
              <img class="van-avatar" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1735688044,4235283864&fm=26&gp=0.jpg" />
            </div>
            <div>
              <div>TOP.1</div>
              <div>我是榜首</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 推荐内容列表 -->
    <van-list
      v-model="loadingMore"
      :finished="finishedMore"
      finished-text=" "
      @load="onLoad"
      >
      <div class="flex-space-between pd15 post-zone" v-for="(item, index) in recommendPostList" @click="toPostDetail">
        <div class="pdr10 post-l">
          <div class="mgb15">{{item.title}}</div>
          <div class="flex-space-between dy-font-color">
            <span>@{{item.userName}}</span>
            <span>{{item.time}}</span>
          </div>
        </div>
        <div class="post-r">
          <img :src="item.img" class="post-img"/>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import PostList from 'components/common_components/PostList';
export default {
  components:{
    PostList,
  },
  name: 'postSearch',
  data () {
    return {
      searchValue: '',  // 搜索关键词
      loadingMore: false,
      finishedMore: false,
      searchRecordList: ['搜索记录1，存于后台，最多30条','搜索记录1，存于后台，最多30条','搜索记录1，存于后台，最多30条'],
      moreRecordBtnShow: true, // 更多历史记录
      hotSearchList: [
        {
          name: '这是热搜',
          type: 0,  // 0-热搜，1-新品，2-推荐
        },{
          name: '这是热搜，常常长的热搜，非常长',
          type: 0,  // 0-热搜，1-新品，2-推荐
        },{
          name: '这是热搜',
          type: 0,  // 0-热搜，1-新品，2-推荐
        },{
          name: '这是热搜，常常长的热搜，非常长',
          type: 0,  // 0-热搜，1-新品，2-推荐
        },{
          name: '这是新品',
          type: 1,  // 0-热搜，1-新品，2-推荐
        },{
          name: '这是推荐',
          type: 2,  // 0-热搜，1-新品，2-推荐
        },
      ],
      // 推荐帖子列表
      recommendPostList: [
        {
          title: '12小时内的热点博客，用户没有看过的，这是用户发的描述信息',
          userName: '用户昵称',
          time: '6小时前',
          img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1735688044,4235283864&fm=26&gp=0.jpg',
        }
      ]
    };
  },
  mounted () {
  },
  computed: {
    ...mapGetters([
      'getImitatePostList', // 获取模拟帖子列表
    ]),
  },
  methods: {
    onClickLeft () {
      this.COMMONFUNC.goBack();
    },
    onSearch () {
      this.$router.push({ name: 'postSearchResult', params: { content: '搜索词' }})
    },
    // 删除记录
    deleteRecord (parem) {
      if (parem === 'all') {
        this.searchRecordList = [];
      }else {
        this.searchRecordList.splice(1,1)
      }
    },
    // 前往帖子分类
    toPostClassify () {
      this.$router.push({ name: 'postClassify', params: { containerid: '0' }})
    },
    // 前往热搜榜
    toHotSearchRanking () {
      this.$router.push({ name: 'hotSearchRanking', params: '' })
    },
    // 前往红人榜
    toRedPeopleRanking () {
      this.$router.push({ name: 'redPeopleRanking', params: '' })
    },
    // 前往问答达人榜
    toDarenRanking () {
      this.$router.push({ name: 'darenRanking', params: '' })
    },
    // 前往帖子详情
    toPostDetail () {
      this.$router.push({ name: 'postDetail', params: { postId: 'postId001'} })
    },
    moreRecord () {
      for (var i = 0; i < 10; i++) {
        this.searchRecordList.push('搜索记录1，存于后台，最多30条')
      }
      this.moreRecordBtnShow = false;
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        let obj = this.recommendPostList[0];
        for (let i = 0; i < 10; i++) {
          this.recommendPostList.push(obj);
        }
        // 加载状态结束
        this.loadingMore = false;
        // 数据全部加载完成
        if (this.recommendPostList.length >= 10) {
          this.finishedMore = true;
        }
      }, 500);
    }
  }
}
</script>

<style lang="less" scoped>
  .postSearch{
    font-size: 14px;
  }
  .top-zone{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999
  }
  .top-space{
    height: 1.5rem
  }
  .top-zone-left{
    font-size: 18px;
  }
  .top-zone-right{
    width: 100%;
  }
  .more-zone{
    font-size: 14px;
    border-bottom: 1px solid #F6F6F6;
  }
  .tag{
    font-size: 12px;
    padding: .1em .3em;
  }
  .recommendItem{
    width: 45%;
    height: 30px;
    border-bottom: 1px solid #F6F6F6;
  }
  .van-ellipsis{
    max-width: 3.4rem;
  }
  .ranking-item-l{
    width: 50%;
    background: hsla(272,94%,60%,1) linear-gradient(135deg, hsla(40,75%,60%,1) , hsla(320,60%,60%,1) ,hsla(260,60%,60%,1));
    color: #fff;
  }
  .ranking-item-r{
    width: 50%;
    background: hsla(272,94%,60%,1) linear-gradient(135deg, hsla(350,75%,60%,1) , hsla(280,60%,60%,1) ,hsla(200,60%,60%,1));
    color: #fff;
  }
  .post-zone{
    border-bottom: 0.026667rem solid #F6F6F6;
  }
  .post-l{
    width: 60%;
  }
  .post-r{
  }
  .post-img{
    height: 2rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
