<!-- 共获得赞数 -->
<template>
  <div class="topicList">
    <div class="flex-space-between blue-color popTop">
      <div@click="cancelSelect">取消</div>
      <div class="popTop-title">
        <span>选择话题</span>
      </div>
      <div @click="finishedSelect">完成</div>
    </div>
    <form action="/">
      <van-search
        v-model="searchValue"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div class="topicList-box">
      <van-checkbox-group v-model="selectTopicList">
        <van-cell-group>
          <van-cell
            v-for="(item, index) in topicListData"
            clickable
            :key="item.topicId"
            @click="toggle(item, index)"
            >
            <template slot="title">
              <van-card
                :thumb="item.topicImg"
                class="van-card"
              >
                <div slot="title" class="title">
                  {{item.name}}
                </div>
                <div slot="price">
                  <span class="reading-number">讨论数：{{COMMONFUNC.formatterW(item.discussNum)}}</span>
                  <span class="reading-number">分类：{{item.topicTypeName}}</span>
                </div>
              </van-card>
            </template>
            <van-checkbox :name="item" ref="checkboxes" class="van-user-item-right"/>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topicList',
  props: {
    topicListData: {
      type: Array,
      default: [],
    },
  },
  data () {
    return {
      searchValue: '',  // 搜索关键词
      checked: true,
      selectTopicList: [],  // 选择的话题列表
    };
  },
  mounted () {
  },
  computed: {

  },
  methods: {
    // 查找关键词
    onSearch () {
      this.$emit('closePraisedNumPop-ok')
    },
    onCancel () {

    },
    // 选择话题
    toggle (item,index) {
      let that = this;
      let flag = false; // 所选的话题跟已选话题是否一致
      let topicIndex = null;  // 所选的话题跟已选话题的索引
      if (that.selectTopicList.length > 0) {
        that.selectTopicList.forEach( (v, i)=> {
          if (v.topicId === item.topicId) {
            flag = true
            topicIndex = i;
          }
        })
      }
      if (flag) {
        that.selectTopicList.splice(topicIndex, 1)
      }else{
        if (that.selectTopicList.length > 2) {
          that.$toast('最多选择3个话题')
          return
        }
        that.selectTopicList.push(item)
      }
    },
    // 完成选择
    finishedSelect () {
      this.$emit('on-finished-select',this.selectTopicList);
    },
    // 取消选择
    cancelSelect () {
      this.$emit('on-cancel-select',this.selectTopicList);
    }
  }
};
</script>

<style lang="less" scoped>
  .popTop{
    font-size: 0.373333rem;
    height: 1rem;
    align-items: center;
    padding: 0.133333rem 0.266667rem;
  }
  .popTop-title{
    font-size: 0.426667rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333;
  }
  .topicList .van-card{
    background-color: #fff;
    height: 1.6rem;
    padding: 0;
  }
  .title{
    font-weight: 700;
    padding: 0.1rem 0 0.2rem 0;
  }
  .desc{
    height: 2rem;
  }
  .reading-number{
    color: #3d3d3d;
    font-weight: normal;
  }
  .topicList-box{
    height: 10rem;
    overflow: scroll;
  }
</style>
