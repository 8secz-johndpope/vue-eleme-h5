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
      />
    </form>
    <van-cell class="mgt10">
      <template slot="title">
        <div class="flex-start">
          <span class="gray-color">推荐话题（备注：默认十条）</span>
        </div>
      </template>
      <template slot="right-icon">
        <div class="flex-center gray-color" @click="$toast('刷新下方10条数据')">
          <van-icon name="replay" class="flex-center"></van-icon>
          <span>换一批</span>
        </div>
      </template>
    </van-cell>
    <div class="topicList-box">
      <van-checkbox-group v-model="childSelectTopicArrList">
        <van-cell-group>
          <van-cell
            v-for="(item, index) in topicListArrData"
            clickable
            :key="topicListObjData[item.topicId]"
            :max="3"
            @click="toggle(item, index)"
            >
            <template slot="title">
              <van-card
                :thumb="topicListObjData[index].topicImg"
                class="van-card"
              >
                <div slot="title" class="title">
                  {{topicListObjData[index].name}}
                </div>
                <div slot="price">
                  <span class="reading-number">讨论数：{{COMMONFUNC.formatterW(topicListObjData[index].discussNum)}}</span>
                  <span class="reading-number">分类：{{topicListObjData[index].topicTypeName}}</span>
                </div>
              </van-card>
            </template>
            <van-checkbox :name="item" ref="checkboxes"/>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// 数组对象vant复选框不主动渲染，故转化成数组形式
export default {
  name: 'topicList',
  props: {
    // 选择的话题列表--对象
    selectTopicList: {
      type: Array,
      default: ()=>[]
    },
  },
  data () {
    return {
      searchValue: '',  // 搜索关键词
      checked: true,
      topicListArrData: [],  // 话题列表--数组
      topicListObjData: [],  // 话题列表--对象
      childSelectTopicArrList: [],  // 选择的话题列表--数组
      childSelectTopicObjList: [],  // 选择的话题列表--对象
    };
  },
  mounted () {
    let that = this;
    that.topicListArrData = [];
    that.getImitateTopicList.forEach( (val,index)=> {
      that.topicListArrData.push(val.name)
      that.topicListObjData.push(val)
    })
    let newArr = JSON.parse(JSON.stringify(this.selectTopicList));
  },
  computed: {
    ...mapGetters([
      'getImitateTopicList',  // 模拟推荐话题列表
    ])
  },
  methods: {
    // 查找关键词
    onSearch () {
    },
    onCancel () {

    },
    // 选择话题
    toggle (item,index) {
      let that = this;
      let flag = false; // 所选的话题跟已选话题是否一致
      let topicIndex = null;  // 所选的话题跟已选话题的索引
      if (that.childSelectTopicArrList.length > 0) {
        that.childSelectTopicArrList.forEach( (v, i)=> {
          if (v === item) {
            flag = true
            topicIndex = i;
          }
        })
      }
      if (flag) {
        that.childSelectTopicArrList.splice(topicIndex, 1)
        that.childSelectTopicObjList.splice(topicIndex, 1)
      }else{
        if (that.childSelectTopicArrList.length > 2) {
          that.$toast('最多选择3个话题')
          return
        }
        that.childSelectTopicArrList.push(item)
        that.childSelectTopicObjList.push(that.topicListObjData[index])
      }
    },
    // 完成选择
    finishedSelect () {
      this.$emit('on-finished-select',this.childSelectTopicObjList);
      this.childSelectTopicObjList = [];
      this.childSelectTopicArrList = [];
    },
    // 取消选择
    cancelSelect () {
      this.$emit('on-cancel-select',this.selectTopicList);
      this.childSelectTopicObjList = [];
      this.childSelectTopicArrList = [];
    }
  },
  watch: {
    selectTopicList (newVal, oldVal){
      let that = this;
      that.childSelectTopicArrList = [];
      that.childSelectTopicObjList = [];
      if (newVal.length > 0) {
        newVal.forEach( (val,index)=> {
          that.childSelectTopicArrList.push(val.name)
          that.childSelectTopicObjList.push(val)
        })
      }
    },
    searchValue (newVal, oldVal) {
      let that = this;
      let arr1 = [];
      let arr2 = [];
      if (newVal !== '') {
        that.getImitateTopicList.forEach ( (val,index)=> {
          if (val.name.indexOf(newVal) !== -1) {
            arr1.push(val)
          }
          if (val.name.indexOf(newVal) !== -1) {
            arr2.push(val.name)
          } 
        })
        that.topicListArrData = [];
        that.topicListObjData = [];
        that.topicListObjData = arr1;
        that.topicListArrData = arr2;
      }else{
        that.topicListObjData = that.getImitateTopicList;
        that.topicListArrData = [];
        that.getImitateTopicList.forEach( (val,index)=> {
          that.topicListArrData.push(val.name)
        })
      }
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
