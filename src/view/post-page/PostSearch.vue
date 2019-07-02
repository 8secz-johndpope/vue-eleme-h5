<template>
  <div class="white-bg postSearch">
    <div class="pdl15 pdr15 white-bg top-zone">
      <van-icon name="arrow-left" class="top-zone-left"/>
      <form action="/" class="top-zone-right">
        <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        />
      </form>
    </div>
    <!-- 搜索历史 -->
    <div class="pdl15 pdr15">
      <div class="flex-space-between pdb10" v-for="(item, index) in searchRecordList" :key="index">
        <div class="flex-center">
          <van-icon name="clock-o" class="mgr10"/>
          <span>{{item}}</span>
        </div>
        <van-icon name="close" @click="deleteRecord(index)" />
      </div>
    </div>
    <div class="tcenter pdb10 more-zone" v-if="moreRecordBtnShow" @click="moreRecord">全部搜索记录</div>
    <div class="tcenter pdb10 more-zone" v-if="!moreRecordBtnShow && searchRecordList.length > 0" @click="deleteRecord('all')">清除全部搜索记录</div>
    <!-- 推荐标签 -->
    <div class="pdl15 pdr15 flex-wrap">
      <div class="flex-center mg5 recommendItem" v-for="(item, index) in recommendList" :key="index">
        <span class="mgr5">{{item.name}}</span>
        <van-tag type="danger" class="tag" v-if="item.type === 0">热</van-tag>
        <van-tag color="#f2826a" class="tag" v-if="item.type === 1">新</van-tag>
        <van-tag type="primary" class="tag" v-if="item.type === 2">荐</van-tag>
      </div>
    </div>
    <div class="tcenter pdb10 more-zone" @click="moreRecord">查看更多热搜</div>
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
      value: '',
      searchRecordList: ['搜索记录1，存于后台，最多30条','搜索记录1，存于后台，最多30条','搜索记录1，存于后台，最多30条'],
      moreRecordBtnShow: true, // 更多历史记录
      recommendList: [
        {
          name: '这是热搜',
          type: 0,  // 0-热搜，1-新品，2-推荐
        },{
          name: '这是热搜2',
          type: 0,  // 0-热搜，1-新品，2-推荐
        },{
          name: '这是新品',
          type: 1,  // 0-热搜，1-新品，2-推荐
        },{
          name: '这是推荐',
          type: 2,  // 0-热搜，1-新品，2-推荐
        },
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
      this.$toast('sd')
    },
    // 删除记录
    deleteRecord (parem) {
      if (parem === 'all') {
        this.searchRecordList = [];
      }else {
        this.searchRecordList.splice(1,1)
      }
    },
    moreRecord () {
      for (var i = 0; i < 10; i++) {
        this.searchRecordList.push('搜索记录1，存于后台，最多30条')
      }
      this.moreRecordBtnShow = false;
    }
  }
}
</script>

<style lang="less" scoped>
  .postSearch{
    font-size: 14px;
  }
  .top-zone{
    display: flex;
    align-items: center;
    width: 100%;
  }
  .top-zone-left{
    font-size: 18px
  }
  .top-zone-right{
    width: 100%;
  }
  .more-zone{
    font-size: 14px;
    color: rgb(150, 151, 153);
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
</style>
