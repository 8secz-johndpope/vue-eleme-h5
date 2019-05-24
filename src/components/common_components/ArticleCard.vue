<template>
  <div>
    <router-link v-for="(item, index) in composition" :to="'/articleDetail/' + item.id" >
      <van-card
          :tag="item.isCarefullyChosen ? '精选' : '' "
          :thumb="item.imgSrc"
          @click="goArticleDetail(item.id)"
          class="van-card"
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
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'articleCard',
  // 父子通信
  props: {
    composition: {
      type: Array,
      default: [],
    }
  },
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
};
</script>

<style lang="less" scoped>
  .van-card{
    background-color: #fff;
    padding: 0.133333rem 0.266667rem;
  }
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
