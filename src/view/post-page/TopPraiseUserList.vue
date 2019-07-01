<template>
  <div>
    <!-- 顶部 -->
    <div>
      <van-nav-bar
      title="顶赞列表"
      left-arrow
      @click-left="onClickLeft"
      fixed
      />
    </div>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <!-- 用户列表组件 -->
    <UserList></UserList>
  </div>
</template>

<script>
  import UserList from 'components/common_components/UserList';
  import { mapGetters } from 'vuex';
  // import "../css/common.css";
  export default {
    components:{
       UserList,
    },
    name: 'topPraiseUserList',
    data () {
      return {
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
    }
  }
</script>
<style lang="css" scoped>
</style>
