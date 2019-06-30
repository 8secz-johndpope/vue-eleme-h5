<template>
  <div>
    <van-nav-bar 
      title="榜单" 
      right-text="我要提问" 
      @click-left="onClickLeft" 
      @click-right="onClickRight" 
      left-arrow 
      fixed 
    />
    </van-nav-bar>
    <!-- 空格 -->
    <div class="top-space"></div>
    <van-tabs v-model="tabActive" @click="onClickTab" sticky swipeable>
      <van-tab :title="item.tabName" v-for="(item, index) in tabsList" :key="index">
        <!-- 用户列表组件 -->
        <UserList></UserList>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserList from 'components/common_components/UserList';
export default {
  name: 'rankgingList',
  data () {
    return {
      tabActive: 0, //高亮的tab
      // tab列表
      tabsList: [
        {
          tabName: '提问榜',
          desc: '提问提问值排序，提问值=赠送金币+提问数*2',
        },{
          tabName: '回答榜',
          desc: '按照回答值排序，回答值=获得金币+回答数*2',
        }
      ],
      loading: false,
      finished: false,
    };
  },
  components: {
    UserList,
  },
  mounted () {
  },
  computed: {
  },
  watch: {

  },
  methods: {
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
    onClickRight(){
      this.$router.push({
        name: 'publishPost',
      });
    },
    // 切换tab栏
    onClickTab(index, title) {
      let that = this;
      that.$dialog.alert({
        title: '排序规则',
        message: that.tabsList[index].desc
      }).then(() => {
        // on close
      });
    },
  }
};
</script>

<style lang="less" scoped>
</style>
