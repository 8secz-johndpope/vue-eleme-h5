<template>
  <div>
    <div class="daren-content-box">
      <div class="cell-item">
        <div class="flex-column" @click="darenSelectPop = true">
          <span class="van-avatar van-avatar-select">+</span>
          <span class="van-avatar-name">添加</span>
        </div>
        <div class="flex-column hasSelectedUser" v-for="(item, index) in getImitateUserList">
          <img src="https://avatars1.githubusercontent.com/u/34303195?s=460&v=4" class="van-avatar van-avatar-select" />
          <span class="van-avatar-name">{{getImitateUserList[0].userName}}</span>
          <van-icon name="close" class="close-icon" @click="deleteSelectUser(index)"/>
        </div>
      </div>
    </div>
    <!--达人选择弹框 -->
    <van-popup v-model="darenSelectPop" position="bottom" :overlay="true">
      <div class="flex-space-between blue-color popTop">
        <div @click="darenSelectPop = false">取消</div>
        <div class="popTop-title">
          <span>选择达人</span>
          <span class="gray-color popTop-title-dec">建议选择5个达人以上</span>
        </div>
        <div @click="finishedSelect">完成({{totalSelect}}/20)</div>
      </div>
      <div>
        <van-search placeholder="请输入搜索关键词" v-model="searchValue" />
      </div>
      <div class="select-zone">
        <div class="select-zone-left">
          <van-badge-group :active-key="activeKey" @change="onChangeBadge">
            <van-badge :title="item.badgeName" :info="item.badgeSelected > 0 ? item.badgeSelected : '' " v-for="(item, index) in badgeArrs" />
          </van-badge-group>
        </div>
        <div class="select-zone-right">
          <SelectUserCheckbox :checkboxArr = "getImitateUserList"></SelectUserCheckbox>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import SelectUserCheckbox from './SelectUserCheckbox';
  import Vue from 'vue';
  import { mapGetters } from 'vuex';
  import { Badge, BadgeGroup } from 'vant';
  Vue.use(Badge);
  Vue.use(BadgeGroup);
  export default {
    components:{
      SelectUserCheckbox,
    },
    name: 'daren',
    data () {
      return {
        searchValue: '',  // 搜索内容
        darenSelectPop: true, // 达人选择弹框
        address: '广东省·深圳市·罗湖区', // 地址
        activeKey: 0, // 选中badge/徽章的索引
        badgeArrs: [  // badge/徽章/商品分类的列表
          {
            badgeType: '0001',  // 类型
            badgeName: '服装',  // 标签名称
            badgeSelected: 0,  // 标签已选数量
          },
          {
            badgeType: '0001',  // 类型
            badgeName: '数码',  // 标签名称
            badgeSelected: 0,  // 标签已选数量
          },
          {
            badgeType: '0001',  // 类型
            badgeName: '奢侈品',  // 标签名称
            badgeSelected: 0,  // 标签已选数量
          },
          {
            badgeType: '0001',  // 类型
            badgeName: '饮食',  // 标签名称
            badgeSelected: 0,  // 标签已选数量
          },
        ],
        currentRate: 100, // 当前进度
      };
    },
    mounted () {
    },
    computed: {
      ...mapGetters([
        'getAreaList',
        'getImitateUserList', // 获取用户列表数据
      ]),
      totalSelect: function () {
        let sum = 0;
        this.badgeArrs.forEach( (val, index) => {
          sum += val.badgeSelected;
        })
        return sum
      }
    },
    methods: {
      // 切换徽章
      onChangeBadge(key) {
        this.activeKey = key;
      },
      // 完成选择
      finishedSelect () {
        this.darenSelectPop = false;
      },
      // 删除已经选择的达人
      deleteSelectUser (index) {
        this.$toast('删除操作');
      }
    }
  }
</script>
<style lang="css" scoped>
  .daren-content-box{
    color: #969799;
    padding: 0 0.4rem;
  }
  .cell-item{
    height: 1.6rem;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .van-avatar-select{
    font-size: 0.533333rem;
    background: #D4BBA7;
    margin: 0 0.4rem 0.1rem 0;
  }
  .van-avatar-name{
    max-width: 1.066667rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .hasSelectedUser{
    position: relative;
  }
  .close-icon{
    position: absolute;
    top: 0;
    right: 0.266667rem;
    font-size: 0.373333rem;
  }
  .popTop{
    font-size: 0.373333rem;
    height: 1rem;
    align-items: center;
    padding: 0.133333rem 0.4rem;
  }
  .popTop-title{
    font-size: 0.426667rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333;
  }
  .popTop-title-dec{
    font-size: 0.32rem;
  }
  .select-zone{
    display: flex;
    justify-content: space-between;
  }
  .select-zone-left{
    width: 30%;
    height: 6.133333rem;
    overflow: scroll;
  }
  .select-zone-right{
    width: 70%;
    height: 6.133333rem;
    overflow: scroll;
  }
</style>
