<template>
  <div>
    <van-nav-bar
      title="热搜榜"
      @click-left="onClickLeft"
      left-arrow
      fixed
    />
    </van-nav-bar>
    <!-- 空格 -->
    <div class="top-space"></div>
    <div>
      <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1177216182,3827976010&fm=11&gp=0.jpg" class="top-bg" />
    </div>
    <div class="pd15 font-14">
      <div class="mgb10 dy-font-color">
        更新于 2019-07-02 20:30:00
      </div>
      <div class="mg5 recommendItem" v-for="(item, index) in recommendList" :key="index" @click="toPostClassify">
        <div class="flex-space-between">
          <div class="flex">
            <span :class=" index < 3 ? 'gold-color' : '' " class="mgr5">{{index + 1}}.</span>
            <span class="van-ellipsis mgr5">{{item.name}}</span>
            <van-tag type="danger" class="tag" v-if="item.type === 0">热</van-tag>
            <van-tag color="#f2826a" class="tag" v-if="item.type === 1">新</van-tag>
            <van-tag type="primary" class="tag" v-if="item.type === 2">荐</van-tag>
          </div>
          <div>
            <van-icon name="fire-o" />
            <span class="dy-font-color">132.2w</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserList from 'components/common_components/UserList';
export default {
  name: 'rankgingList',
  data () {
    return {
      // tab列表
      recommendList: [
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
          name: '这是热搜，常常长的热搜，非常长sdfsdfasf ',
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
  components: {
    UserList,
  },
  mounted () {
    let obj = {
      name: '只显示30条数据',
      type: 1,  // 0-热搜，1-新品，2-推荐
    }
    for(var i=0; i<24; i++){
      this.recommendList.push(obj)
    }
  },
  computed: {
  },
  watch: {

  },
  methods: {
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
    // 前往帖子分类
    toPostClassify () {
      this.$router.push({ name: 'postClassify', params: { containerid: '0' }})
    },
  }
};
</script>

<style lang="less" scoped>
  .top-bg{
    background-repeat: no-repeat;
    width: 100%;
    height: 4rem;
    background-size: 100% 100%;
  }
  .recommendItem{
    height: 0.8rem;
  }
  .van-ellipsis{
    max-width: 5.4rem;
  }
</style>
