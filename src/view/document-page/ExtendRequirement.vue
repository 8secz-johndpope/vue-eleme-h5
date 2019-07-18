<template>
  <div>
    <van-nav-bar
      title="“微撩”速推投放要求"
      @click-left="onClickLeft"
      left-arrow
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <div class="pd15 white-bg content">
      <h4 class="font-16 pdt5 pdb10"></h4>
      <h4 class="font-16 pdt5 pdb10">(一)社区内容规范</h4>
      <br/>不能涉及国家领导人、公检法军、国徽国旗等形象或词语
      <br/><br/>不能借社会负面事件、热点事件、敏感事件红歌军歌、革命烈士等进行商业营销宣传
      <br/><br/>不能涉及邪教宗教、封建迷信、反动组织等相关元素
      <br/><br/>不能涉及违法违规、低俗色情、血腥恐怖相关元素
      <br/><br/>不能出现违反公序良俗、社会价值观相关元素,如岀轨、家暴、炫富、歧视、引战、抽烟、脏话、整蛊、恶搞、虐待等
      <br/><br/>不能出现危险行为和危险动作,易引发人身安全风险
      <br/><br/>不能泄露和曝光个人隐私或个人信息
      <br/><br/>不能出现密集恐惧、血腥暴力、引人不适等相关元素
      <br/><br/><h4 class="font-16 pdt5 pdb10">(二)版权要求</h4>
      <br/>不能使用未授权的第三方的名字、ogo、形象、图片、音频、视频等
      <br/><br/>不能使用微撩平台不能出现的艺人、红人相关素材
      <br/><br/>不可使用未授权的影视剧、综艺片段等素材
      <br/><br/>不可搬运站内外视频
      <br/><br/><h4 class="font-16 pdt5 pdb10">(三)未成年相关</h4>
      <br/>未成年不能作为代言人拍摄商业营销内容
      <br/><br/>未成年可参与营销视频的拍摄，但不能单独出镜
      <br/><br/>高风险行业(食品、美妆、游戏、酒水、医疗、OTC药品、医疗器械、皮草等)严禁出现任何未成年人相关元素
      <br/><br/><h4 class="font-16 pdt5 pdb10">(四)内容营销规范</h4>
      <br/>不可出现联系方式、微信号、二维码、链接、地址、日期等元素，或引导主页、评论等查看联系方式的相关话术
      <br/><br/>不可出现促销活动、商品价格、打折信息、优惠券红包、引导购买、站外平台导流等招揽信
      <br/><br/>不可对商品、产品或服务等进行细节性的产品描述(材料、外观等)或吹捧性的效果介绍不可在视频开头或结尾出现定帧，常见于品牌露出、活动介绍、产品宣传等
      <br/><br/>不可长时间主体展示商品、产品、品牌、logo等
      <br/><br/>不可以抽奖、送红包等形式引导用户点赞关注等
      <br/><br/>不可在标题直接露岀品牌，可植入性提及品牌，但不能有吹捧性质的效果引导
    </div>
  </div>
</template>

<script>
  export default {
    components:{
    },
    name: 'extendRequirement',
    data () {
      return {

      };
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
<style lang="css" scoped>
  .content{
    line-height: 0.6rem
  }
</style>
