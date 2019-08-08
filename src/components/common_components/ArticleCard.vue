<template>
  <div class="article">
    <router-link v-for="(item, index) in composition" :to="'/articleDetail/' + item.id" >
      <van-card
          :tag="item.isCarefullyChosen ? '精选' : '' "
          class="van-card"
        >
        <div slot="thumb" class="img">
          <img :src="item.imgSrc" class="img-common img" />
        </div>
        <div slot="title" class="title">
          {{item.title}}
        </div>
        <div slot="desc" class="desc">
          {{item.desc}}
        </div>
        <div slot="price">
          <span class="reading-number dy-font-color">{{COMMONFUNC.formatterW(item.readingNumbers)}}人已读</span>
        </div>
        <div slot="num">
          <span class="dy-font-color">{{item.time}}</span>
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
  .article .van-card{
    background-color: #fff;
    padding: 0.2rem 0.4rem;
  }
  .img{
    width: 100%;
    height: 100%;
  }
  .title{
    font-weight: 700;
  }
  .desc{
    height: 1.5rem;
  }
  .reading-number{
    font-weight: normal;
  }
</style>
