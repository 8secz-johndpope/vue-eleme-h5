<template>
  <div>
    <PersonalCenter :centerType="0" v-if="isLogin"></PersonalCenter>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <Fixednav></Fixednav>
  </div>
</template>

<script>
import Fixednav from 'components/common_components/Fixed_nav';
import PersonalCenter from 'components/common_components/PersonalCenter';
export default {
  name: 'myzone',
  components: {
    Fixednav,
    PersonalCenter,
  },
  data () {
    return {
      isLogin: false, // Error in render: "TypeError: Cannot read property '0' of undefined"”渲染错误问题
    };
  },
  beforeCreate () {
    if (this.COMMONFUNC.getCookieValue("token") !== 'isLogin') {
      this.$router.push('/login');
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log(this,'beforeRouteEnter'); // undefined
    next(vm => {
      //因为当钩子执行前，组件实例还没被创建
      // vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
      console.log(vm);//当前组件的实例
    });
  },
  mounted () {
    this.isLogin = true;
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>

</style>
