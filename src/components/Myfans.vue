<template>
  <div>
    <!-- 用户列表组件 -->
    <UserList :userType="0"></UserList>
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
