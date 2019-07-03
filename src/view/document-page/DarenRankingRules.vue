<template>
  <div>
    <van-nav-bar
      title="问答达人榜榜单规则"
      @click-left="onClickLeft"
      left-arrow
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <!-- 疑难解惑  -->
    <van-collapse v-model="activeNames">
      <van-collapse-item title="1、榜单介绍" name="1">
        1.1 问答达人榜是微撩推出的旨在反映微撩问答热度情况，展示在微撩问答内高人气的达人。
        榜单影响力值根据用户的回答值、回答量、互动量、所获得提问用户的感谢金币量、贡献值等数据，通过多维度的算法计算而成。</br>
      </van-collapse-item>
      <van-collapse-item title="2、上榜规则" name="2">
        2.1 开通并认证微撩账号的所有用户。</br>
      </van-collapse-item>
      <van-collapse-item title="3、计分规则" name="3">
        3.1 榜单影响力根据回答者的回答值及其和提问者间的互动值和贡献值等数据，通过多维度的算法计算而成。</br>
        3.2 回答值：统计周一至周日共7天内用户在问答专区参与回答、评论的次数。</br>
        3.3 浏览量：记录微撩问答的浏览次数，统计周一至周日共7天内容的浏览数。</br>
        3.4 金币量：记录微撩问答的其他用户感谢提问者所赠送的金币，统计周一至周日共7天所获得的金币。</br>
        3.4 互动量：互动量是用户近一周内发布的问答（包括视频、评论）产生的互动数据（评论、赞、回复评论）的数据统计。</br>
        3.5 贡献值：包含用户站内对用户搜索，产生的搜索量，这些内容产生播放量都将记录到用户的影响力，反映用户的近期热度。</br>
        3.6 说明：除自然流量以外，通过投放【速推计划】所提升的数据，均会被计入用户影响力的数据统计。
      </van-collapse-item>
      <van-collapse-item title="4、平台资源" name="4">
        4.1 榜单周冠军可获得榜单首页顶部banner位推荐。</br>
        4.2 榜单双周冠军（连续两周获得榜单周冠军）可获得微撩所有banner推荐。</br>
        4.3 榜单月冠军（连续四周获得榜单周冠军）可获得微撩开机屏1天使用机会。
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'mywallet',
    data () {
      return {
        activeNames: ['1','2','3','4'], // 常见问题折叠筐
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
