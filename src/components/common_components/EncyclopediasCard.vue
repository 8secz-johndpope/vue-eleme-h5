<template>
  <div>
    <router-link :to="{ name: 'encyclopedias', params: {'id': item.id} }" v-for="(item, index) in getImitateEncyclopediasList" :key="index">
      <div  class="van-panel">
        <div class="title">
          {{item.title}}
        </div>
        <div class="encyclopediasList">
          <div class="flex-between dy-font-color">
            <div>
              {{item.praiseNum}}人觉得有用
            </div>
            <div>
              来自 {{item.belongsClassificationCnName}}
            </div>
          </div>
        </div>
      </div>
    </router-link>
    <!-- 词条分类 -->
    <router-link :to="{ name: 'encyclopediasClassification', params: {'id': item.id} }" v-for="(item, index) in getImitateEncyclopediasClassfication" :key="item.id">
      <div class="flex encyclopediasItem">
        <!-- 左侧-词条图片 -->
        <div class="flex-center pdt5 encyclopediasItem-l">
          <img class="van-avatar-large" :src="item.img" />
        </div>
        <!-- 右侧-分类 -->
        <div class="flex-space-between encyclopediasItem-r pdl5">
          <div class="flex-column">
            <div class="pdb5 encyclopediasItem-title">{{item.name}}</div>
            <div>
              <van-tag color="#f2826a" class="mgr5" v-for="(c_item, c_index) in item.list" :key="c_item.itemId" v-if="c_index < 3">{{c_item.itemName}}</van-tag>
            </div>
          </div>
          <div class="flex-center">
            <span class="dy-font-color">{{item.desc}}</span>
            <van-icon name="arrow" class="dy-font-color encyclopediasItem-r-icon" />
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'encyclopediasCard',
  components: {
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
    ...mapGetters([
      'getImitateEncyclopediasClassfication', // 模拟百科分类
      'getImitateEncyclopediasList', // 模拟百科列表
    ])
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
  .title{
    color: #323233;
    font-size: 0.373333rem;
  }
  .van-panel{
    padding: 0 0.266667rem;
  }
  .encyclopediasList{
    padding: 10px 0
  }
  .encyclopediasItem{
    height: 1.3rem;
    margin: 0.266667rem 0 0 0;
    padding: 0.266667rem 0 0 0;
    border-top: 1px solid #ececec;
  }
  .encyclopediasItem-l{
    width: 15%;
  }
  .encyclopediasItem-r{
    width: 85%;
  }
  .encyclopediasItem-r-icon{
    font-size: 16px;
  }
  .encyclopediasItem-title{
    color: #323233;
    font-size: 0.373333rem;
  }
</style>
