<template>
  <div class="darenActionsheet">
    <div class="daren-content-box">
      <div class="cell-item">
        <div class="flex-column" @click="openDarenSelectPop">
          <span class="van-avatar van-avatar-select">+</span>
          <span class="van-avatar-name">添加</span>
        </div>
        <div class="hasSelectedUser-zone">
          <div class="flex-column hasSelectedUser" v-for="(item, index) in hasSelectedUserList">
            <img :src="item.userImg" class="van-avatar van-avatar-select" />
            <span class="van-avatar-name">{{item.userName}}</span>
            <van-icon name="close" class="close-icon" @click="deleteSelectUser(item,index)"/>
          </div>
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
        <div @click="finishedSelect">完成({{totalSelect}}/10)</div>
      </div>
      <div>
        <van-search placeholder="请输入搜索关键词" v-model="searchValue" />
      </div>
      <div class="search-zone" v-if="isSearch">
        <!-- 复选框组 -->
        <SelectUserCheckbox
          :curentIsSearchCheckbox="isSearch"
          :badgeArrsParent="badgeArrs"
          :checkboxArr="badgeArrs[activeKey].userList"
          :activeIndex="activeKey"
          @chlidSelectUser="getChildSelectUser"
          v-if="badgeArrs[activeKey].userList.length !== 0">
        </SelectUserCheckbox>
      </div>
      <div class="select-zone" v-else>
        <div class="select-zone-left">
          <van-badge-group :active-key="activeKey" @change="onChangeBadge">
            <van-badge :title="item.badgeName" :info="item.badgeSelected > 0 ? item.badgeSelected : '' " v-for="(item, index) in badgeArrs" />
          </van-badge-group>
        </div>
        <div class="select-zone-right">
          <!-- 复选框组 -->
          <SelectUserCheckbox
            :curentIsSearchCheckbox="isSearch"
            :badgeArrsParent="badgeArrs"
            :checkboxArr="badgeArrs[activeKey].userList"
            :activeIndex="activeKey"
            @chlidSelectUser="getChildSelectUser"
            v-if="badgeArrs[activeKey].userList.length !== 0">
          </SelectUserCheckbox>
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
        darenSelectPop: false, // 达人选择弹框
        address: '广东省·深圳市·罗湖区', // 地址
        activeKey: 0, // 选中badge/徽章的索引
        isSearch: false,  // 是否是搜索框
        badgeArrs: [  // badge/徽章/商品分类的列表
          {
            badgeType: '0001',  // 类型
            badgeName: '服装',  // 标签名称
            badgeSelected: 0,  // 标签已选数量
            userList: [], // 该徽章下的用户列表
            currentBadgeSelectedList:[], //当前选择的总用户列表，用来提交给后端
            currentCheckboxResult: [],  // 当前选择的复选标识
          },
          {
            badgeType: '0001',  // 类型
            badgeName: '数码',  // 标签名称
            badgeSelected: 0,  // 标签已选数量
            userList: [], // 该徽章下的用户列表
            currentBadgeSelectedList:[], //当前选择的总用户列表，用来提交给后端
            currentCheckboxResult: [],  // 当前选择的复选标识
          },
          {
            badgeType: '0001',  // 类型
            badgeName: '奢侈品',  // 标签名称
            badgeSelected: 0,  // 标签已选数量
            userList: [], // 该徽章下的用户列表
            currentBadgeSelectedList:[], //当前选择的总用户列表，用来提交给后端
            currentCheckboxResult: [],  // 当前选择的复选标识
          },
          {
            badgeType: '0001',  // 类型
            badgeName: '饮食',  // 标签名称
            badgeSelected: 0,  // 标签已选数量
            userList: [], // 该徽章下的用户列表
            currentBadgeSelectedList:[], //当前选择的总用户列表，用来提交给后端
            currentCheckboxResult: [],  // 当前选择的复选标识
          },
          {
            badgeType: '0001',  // 类型
            badgeName: '生活技巧',  // 标签名称
            badgeSelected: 0,  // 标签已选数量
            userList: [], // 该徽章下的用户列表
            currentBadgeSelectedList:[], //当前选择的总用户列表，用来提交给后端
            currentCheckboxResult: [],  // 当前选择的复选标识
          },
          {
            badgeType: '0001',  // 类型
            badgeName: '母婴',  // 标签名称
            badgeSelected: 0,  // 标签已选数量
            userList: [], // 该徽章下的用户列表
            currentBadgeSelectedList:[], //当前选择的总用户列表，用来提交给后端
            currentCheckboxResult: [],  // 当前选择的复选标识
          },
          {
            badgeType: '0001',  // 类型
            badgeName: '美妆',  // 标签名称
            badgeSelected: 0,  // 标签已选数量
            userList: [], // 该徽章下的用户列表
            currentBadgeSelectedList:[], //当前选择的总用户列表，用来提交给后端
            currentCheckboxResult: [],  // 当前选择的复选标识
          },
        ],
        badgeArrsInit: [],  // 徽章数据init
        hasSelectedUserList: [],  // 已选择的用户
      };
    },
    mounted () {
      this.getImitateUserListByActiveKey(0);  // 通过徽章索引获得每一个徽章下的用户列表数
      this.badgeArrsInit = JSON.parse(JSON.stringify(this.badgeArrs));
    },
    computed: {
      ...mapGetters([
        'getAreaList',
        'getImitateUserList', // 获取用户列表数据
      ]),
      // 选择的总数
      totalSelect: function () {
        let sum = 0;
        this.badgeArrs.forEach( (val, index) => {
          sum += val.badgeSelected;
        })
        return sum
      },
      // 自定义播放预计播放指数
      darenBasicMultiplePlaybackVolume () {
        if (this.hasSelectedUserList.length === 0) {
          return 1000
        }else{
          return 500
        }
      }
    },
    watch: {
      // 是否是搜索框
      searchValue (newData,oldData) {
        if (newData !== '') {
          this.isSearch = true;
        }else {
          this.isSearch = false;
        }
      },
    },
    methods: {
      // 打开弹框
      openDarenSelectPop () {
        this.darenSelectPop = true;
        this.badgeArrs = JSON.parse(JSON.stringify(this.badgeArrsInit));
      },
      // 切换徽章
      onChangeBadge (key) {
        this.activeKey = key;
        this.getImitateUserListByActiveKey(key);
      },
      // 完成选择
      finishedSelect () {
        let that = this;
        this.darenSelectPop = false;
        that.hasSelectedUserList = [];
        that.badgeArrs.forEach( (val,index) => {
          if (val.badgeSelected !== 0) {
            val.currentBadgeSelectedList.forEach( (c_val, c_index) => {
              let obj = {
                userId : c_val.userId,
                userName : c_val.userName,
                userImg : c_val.userImg,
                p_index: index,
                c_index: c_index,
              }
              that.hasSelectedUserList.push(obj)
            })
          }
        })
        that.badgeArrsInit = JSON.parse(JSON.stringify(that.badgeArrs));
        this.$emit('childMultiple',this.darenBasicMultiplePlaybackVolume);
      },
      // 删除已经选择的达人
      deleteSelectUser (item,index) {
        let deleltArr = this.hasSelectedUserList.splice(index,1);
        let obj_p_index = deleltArr[0].p_index;
        let obj_c_index = deleltArr[0].c_index;
        this.badgeArrsInit[obj_p_index].badgeSelected -= 1;
        this.badgeArrsInit[obj_p_index].currentBadgeSelectedList.splice(obj_c_index,1);
        this.badgeArrsInit[obj_p_index].currentCheckboxResult.splice(obj_c_index,1);
        this.$emit('childMultiple',this.darenBasicMultiplePlaybackVolume);
      },
      // 获取用户选择子组件选择的用户
      getChildSelectUser ({userList, checkboxResult}){
        let that = this;
        that.badgeArrs[that.activeKey].currentBadgeSelectedList = userList;
        that.badgeArrs[that.activeKey].currentCheckboxResult = checkboxResult;
        that.badgeArrs[that.activeKey].badgeSelected = userList.length;
      },
      // 通过徽章索引获得每一个徽章下的用户列表数
      getImitateUserListByActiveKey (activeKey) {
        let that = this;
        that.badgeArrs[activeKey].userList = [];
        for (var i = 0; i < 10; i++) {
          let obj = {
            userId : that.getImitateUserList[0].userId,
            userName : that.getImitateUserList[0].userName,
            userImg : that.getImitateUserList[0].userImg,
            autograph : that.getImitateUserList[0].autograph,
            fansNum : that.getImitateUserList[0].fansNum,
          }
          that.badgeArrs[activeKey].userList.push(obj);
        }
      },
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
    padding: 0.1rem 0;
  }
  .van-avatar-select{
    font-size: 0.533333rem;
    background: #D4BBA7;
    margin: 0 0.4rem 0.1rem 0;
    line-height: 0.94rem;
  }
  .van-avatar-name{
    max-width: 1.066667rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .hasSelectedUser-zone{
    display: flex;
    overflow-x: scroll;
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
  .search-zone{
    height: 10.6rem;
    overflow: scroll;
  }
  .select-zone{
    display: flex;
    justify-content: space-between;
  }
  .select-zone-left{
    width: 30%;
    height: 10.6rem;
    overflow: scroll;
  }
  .select-zone-right{
    width: 70%;
    height: 10.6rem;
    overflow: scroll;
  }
</style>
