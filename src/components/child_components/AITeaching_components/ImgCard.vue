<template>
  <div class="list-content">
    <router-link :to="{ name: 'AITeachingChat', params: {'id': item.videoId} }"  v-for="(item, index) in composition" :key="index">
      <div class="AI-list-item">
      <div class="img-zone" v-bind:style="{backgroundImage:'url(' + item.videopic + ')' }">
        <div class="img-zone-dec">{{item.title}}</div>
      </div>
      <div class="flex-space-between card-desc">
        <div>
          <van-tag color="#f2826a" v-for="(c_item, c_index) in item.list" :key="c_item.itemId" class="mgr5">{{c_item.itemName}}</van-tag>
        </div>
        <div>
          <span><i class="fa fa-eye" aria-hidden="true"></i> {{COMMONFUNC.formatterW(item.watchers)}}</span><!-- 查看次数 -->
        </div>
      </div>
    </div>
    </router-link>
  </div>
</template>
<script>

export default {
  name: 'imgCard',
  // 父子通信
  props: {
    composition: {
      type: Array,
      default: [],
    }
  },
  components: {
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

  },
};
</script>

<style lang="less" scoped>
  .list-content{
    width: 100%;
    padding: 0 0.133333rem;
  }
  .AI-list-item{
    height: 5rem;
    width: 100%;
    box-shadow: 3px 3px 2px #ddd;
    margin: 0 0 10px 0
  }
  .img-zone{
    height: 80%;
    width: 100%;
    overflow: hidden;
    position: relative;
    color: #fff;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .img-zone-dec{
    position: absolute;
    height: 0.9rem;
    width: 100%;
    bottom: 0;
    padding: 0 0.266667rem;
    align-items: center;
    display: flex;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .card-desc{
    padding: 0.133333rem 0.266667rem;
  }
</style>
