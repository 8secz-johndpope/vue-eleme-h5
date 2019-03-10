<template>
  <div>
    <van-card
        :tag="item.isCarefullyChosen ? '精选' : '' "
        :thumb="item.imgSrc"
        v-for="(item,index) in composition"
      >
      <div slot="title" class="title">
        {{item.title}}
      </div>
      <div slot="desc" class="desc">
        {{item.desc}}
      </div>
      <div slot="price">
        <span class="reading-number">阅读数：{{COMMONFUNC.formatterW(item.readingNumbers)}}</span>
      </div>
      <div slot="num">
        <span>阅读全文</span>
      </div>
    </van-card>
  </div>
</template>

<script>
import Vue from 'vue';
import { Card } from 'vant';
Vue.use(Card);

export default {
  // 父子通信
  props: {
    composition: {
      type: Array,
      default: [],
    }
  },
  data () {
    return {
      msg: 'ok',
    };
  },
  mounted () {
  },
  computed: {
    
  },
  methods: {
    // 点击分享
    share () {
      this.show = true;
    },
  }
};
</script>

<style lang="less" scoped>
  .title{
    font-weight: 700;
  }
  .desc{
    height: 2rem;
  }
  .reading-number{
    color: #3d3d3d;
    font-weight: normal;
  }
</style>
