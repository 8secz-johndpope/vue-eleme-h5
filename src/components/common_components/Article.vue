<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="我也是底线的"
      :lazy-load="true"
      @load="onLoad"
    >
      <router-link v-for="(item, index) in composition" :to="'/articleDetail/' + item.id" >
        <van-card
            :tag="item.isCarefullyChosen ? '精选' : '' "
            :thumb="item.imgSrc"
            @click="goArticleDetail(item.id)"
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
    </van-list>
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
      loading: false,
      finished: false
    };
  },
  mounted () {
  },
  computed: {
    
  },
  methods: {
    onLoad() {
      let obj = {
        id: 'zs20190214',
        title: '网上撩妹怎么聊？老司机给你带路',
        desc: '如何像案例中这样搜索话术聊天，可以微信添加导师微信领取与咨询,老司机带你一夜暴富，脱贫脱单.....',
        imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552210959430&di=c51a258d17691b5059e1ad6db3ee56fb&imgtype=0&src=http%3A%2F%2Fimg18.3lian.com%2Fd%2Ffile%2F201709%2F21%2Fa05161a4469dc5ef8be88ee217d53d92.jpg',
        time: '2019.02.13',
        readingNumbers: 99999,   // 阅读数
        isCarefullyChosen: true, // 是否精选
      };
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.composition.push(obj);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.composition.length >= 20) {
          this.finished = true;
        }
      }, 500);
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
