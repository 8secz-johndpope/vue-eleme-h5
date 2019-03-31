<template>
  <div>
    <PersonalCenter :centerType="0"></PersonalCenter>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <Fixednav></Fixednav>
  </div>
</template>

<script>
import Fixednav from './common_components/Fixed_nav';
import PersonalCenter from './common_components/PersonalCenter';
export default {
  name: 'myzone',
  components: {
    Fixednav,
    PersonalCenter,
  },
  data () {
    return {
    };
  },
  beforeCreate () {
    if (this.COMMONFUNC.getCookieValue("token") !== 'isLogin') {
      this.$router.replace('/login');
    }
  },
  mounted () {
    // if (!this.isLogin) {
    //   this.$router.replace('/login');
    // }
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>

</style>
