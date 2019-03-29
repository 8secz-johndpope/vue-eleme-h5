<template>
  <PersonalCenter :centerType="1"></PersonalCenter>
</template>

<script>
import PersonalCenter from './common_components/PersonalCenter';
export default {
  name: 'personalCenter',
  components: {
    PersonalCenter,
  },
  data () {
    return {
    };
  },
  beforeRouteLeave(to, from, next) {
       // 设置下一个路由的 meta
      to.meta.keepAlive = true;  // 让 A 缓存，即不刷新
      next();
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>

</style>
