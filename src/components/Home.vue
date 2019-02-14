<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Fixednav from './small_components/Fixed_nav';
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  data () {
    return {
      showMe: false, // 是否展示当前页面
      value: '',  // 搜索词
      images: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    };
  },
  mounted () {

  },
  beforeDestroy () {

  },
  computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
    // 等同于
    // isLogin () {
    //   return this.$store.getters.getLogin
    // }
    // 能少写不少代码
    ...mapGetters([
      'getLogin',
      'getFalseHotWord',
      'getFalseBussinessbrief' // 商家简略信息
    ])
  },
  methods: {
    onSearch () {
      this.$toast(this.value)
    }
  },
  components: {
    Fixednav,
  }
};
</script>

<style lang="less" scoped>
</style>
