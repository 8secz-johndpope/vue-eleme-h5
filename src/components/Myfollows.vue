<template>
  <div>
    <!-- 用户列表组件 -->
    <UserList :userType="1"></UserList>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <!-- 固定标签页 -->
    <Fixednav></Fixednav>
  </div>
</template>

<script>

  import Fixednav from './common_components/Fixed_nav';
  import UserList from './common_components/UserList';
  import { mapGetters } from 'vuex';

  // import "../css/common.css";
  export default {
    components:{
       Fixednav,
       UserList,
    },
    name: 'myfollows',
    data () {
      return {
      };
    },
    mounted () {
    },
    computed: {
    },
    methods: {
    }
  }
</script>
<style lang="css" scoped>
</style>
