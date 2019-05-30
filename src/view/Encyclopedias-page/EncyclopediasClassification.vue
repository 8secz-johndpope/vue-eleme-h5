<template>
  <div>
    <!-- 顶部 -->
    <div class="fixed-top">
      <van-nav-bar
        title="单身期"
        left-arrow
        @click-left="onClickLeft"
      >
      </van-nav-bar>
    </div>
    <div class="content">
      <van-tabs>
        <van-tab v-for="(item, index) in getImitateEncyclopediasClassfication[0].list" :key="item.itemId" :title="item.itemName">
          <router-link :to="{ name: 'encyclopedias', params: {'id': c_item.id} }" v-for="(c_item, c_index) in getImitateEncyclopediasList" :key="c_index">
            <div class="van-panel">
              <div class="title">
                {{c_item.title}}
              </div>
              <div class="encyclopediasList">
                <div class="flex-between gray-color">
                  <div>
                    {{c_item.praiseNum}}人觉得有用
                  </div>
                  <div>
                    来自 {{c_item.belongsClassificationCnName}}
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'encyclopediasClassification',
  components: {
  },
  data () {
    return {
    };
  },
  mounted () {
  },
  computed: {
    ...mapGetters([
      'getImitateEncyclopediasClassfication', // 模拟百科分类
      'getImitateEncyclopediasList', // 模拟百科列表
    ])
  },
  methods: {
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
  },
};
</script>

<style lang="less" scoped>
  .content{
    margin: 1.2rem 0 0 0;
  }
  .title{
    color: #323233;
    font-size: 0.373333rem;
  }
  .van-panel{
    padding:  0.266667rem  0.266667rem 0 0.266667rem;
  }
  .encyclopediasList{
    padding: 10px 0
  }
</style>
