<template>
  <div class="encyclopediasClassification">
    <!-- 顶部 -->
    <div class="fixed-top">
      <van-nav-bar
        title="单身期"
        left-arrow
        @click-left="onClickLeft"
        fixed
      >
      </van-nav-bar>
    </div>
    <div class="top-space"></div>
    <van-tabs sticky swipeable v-model="tabActive">
      <van-tab v-for="(item, index) in getImitateEncyclopediasClassfication[0].list" :key="index" :title="item.itemName">
        <router-link :to="{ name: 'encyclopedias', params: {'id': c_item.id} }" v-for="(c_item, c_index) in encyclopediasListData" :key="c_index">
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
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'encyclopediasClassification',
  components: {
  },
  data () {
    return {
      encyclopediasListData: [],  // 模拟百科列表
      tabActive: 0, // 绑定当前选中标签的标识符
    };
  },
  mounted () {
    this.encyclopediasListData = [...this.getImitateEncyclopediasList];
    this.encyclopediasListData = this.encyclopediasListData.concat(this.encyclopediasListData);
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
