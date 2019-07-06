<template>
  <div>
    <!-- 商品组件 -->
    <GoodsCard></GoodsCard>
    <div class="btn-zone">
      <router-link :to="{ name: 'commodity', params: {'id':'01'} }" >
        <van-button size="large" round type="danger">去看看</van-button>
      </router-link>
    </div>
    <router-link :to="{ name: 'showcase', params: {'shopId':'01'} }" >
      <p class="flex-center goShowcase red-color">
        XXX的商品橱窗
      </p>
    </router-link>
  </div>
</template>

<script>
import GoodsCard from 'components/common_components/GoodsCard';
import { mapGetters } from 'vuex';
export default {
  name: 'videoCard',
  components: {
    GoodsCard,
  },
  data () {
    return {
    };
  },

  mounted () {

  },
  beforeDestroy () {

  },
  computed: {
  },
  methods: {

  },
};
</script>

<style lang="less" scoped>
  .btn-zone{
    padding: 0.2rem 1rem;
  }
  .goShowcase{
    padding: 0.2rem 0 0.6rem 0;
    font-size: 16px;
  }
</style>
