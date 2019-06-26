<template>
  <div>
    <van-nav-bar
      title="品牌联盟说明"
      @click-left="onClickLeft"
      left-arrow
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <van-cell-group>
      <!-- pc 和 移动端看到的样式有出入  -->
      <van-collapse v-model="goldCoinActiveNames">
        <van-collapse-item title="1、精选爆款" name="1">
          1.1 该分类是我们选部分热卖商品放在兑换商城首页</br>
        </van-collapse-item>
        <van-collapse-item title="2、品牌联盟" name="2">
          2.1 目的在于吸引大牌品牌长期入驻，给他们的固定商品展示位</br>
        </van-collapse-item>
        <van-collapse-item title="3、该页面将用海报显示" name="3">
          具体规则将以海报说明</br>
        </van-collapse-item>
      </van-collapse>
    </van-cell-group>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'mywallet',
    data () {
      return {
        goldCoinActiveNames: ['1','2','3'], // 金币说明折叠筐
      }
    },
    mounted () {

    },
    computed: {

    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
    }
}
</script>

<style lang="less" scoped>
</style>
