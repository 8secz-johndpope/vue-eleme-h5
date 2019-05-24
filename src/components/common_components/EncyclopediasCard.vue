<template>
  <div>
    <van-panel :title="item.title" v-for="(item, index) in getImitateEncyclopediasList" :key="index" class="van-panel">
      <div class="encyclopediasList">
        <div class="flex-between gray-color">
          <div>
            {{item.praiseNum}}人觉得有用
          </div>
          <div>
            来自 {{item.belongsClassificationCnName}}
          </div>
        </div>
      </div>
    </van-panel>
    <!-- 词条分类 -->
    <div class="flex encyclopediasItem" v-for="(item, index) in getImitateEncyclopediasClassfication" :key="item.id">
      <!-- 左侧-词条图片 -->
      <div class="flex-center pdt5 encyclopediasItem-l">
        <img class="van-avatar-large" :src="item.img" />
      </div>
      <!-- 右侧-分类 -->
      <div class="flex-space-between encyclopediasItem-r pdl5">
        <div class="flex-column">
          <div class="pdb5 encyclopediasItem-title">{{item.name}}</div>
          <div>
            <van-tag color="#f2826a" v-for="(c_item, c_index) in item.list" :key="c_item.itemId" class="mgr5">{{c_item.itemName}}</van-tag>
          </div>
        </div>
        <div>
          <van-icon name="arrow" class="gray-color encyclopediasItem-r-icon" />
        </div>
      </div>
    </div>
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
  .van-panel .van-cell{
    padding: 0.266667rem 10px;
  }
  .encyclopediasList{
    padding: 0 0.4rem
  }
  .encyclopediasItem{
    height: 1.2rem;
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
