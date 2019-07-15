<template>
  <div>
    <van-nav-bar
      title="常见问题"
      @click-left="onClickLeft"
      left-arrow
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <!-- 疑难解惑  -->
    <van-collapse v-model="activeNames">
      <van-collapse-item title="1、速推是什么？" name="1">
        1.1速推是一款微撩加热工具，购买并使用后，可实现将微撩作品推荐给更多兴趣用户，提升微撩作品的播放量与互动量。
      </van-collapse-item>
      <van-collapse-item title="2、如何投放速推？" name="2">
        2.1 选择微撩作品下单：升级微撩最新版本，选择想要加热的微撩作品--点击进入微撩作品页--点击右侧【三】--选择【速推】--选择定向模式--下单支付。</br>
        2.2 随时查看订单情况： 我的--点击右上角【三】--选择【速推订单管理】。
      </van-collapse-item>
      <van-collapse-item title="3、速推可以投放他人微撩作品吗？" name="3">
        3.1 可以！速推支持自投和代投，可以帮他人微撩作品进行投放。如需代投，请选择您想要投放的他人微撩作品，在微撩作品分享页面点击【速推】进行投放就好~。
      </van-collapse-item>
      <van-collapse-item title="4、使用了速推的微撩作品会展现在哪？" name="4">
        4.1 使用速推的微撩作品会出现在微撩-首页推荐流里，根据微撩的高效能推荐算法，微撩作品会展现给对该微撩作品可能感兴趣的用户或潜在粉丝。
      </van-collapse-item>
      <van-collapse-item title="5、什么样的微撩作品可以投放速推？" name="5">
        5.1 必须是原创微撩作品，微撩作品内容完整度好</br>
        5.2 微撩作品内容本身不能含有其他 APP 水印</br>
        5.3 内容优质有趣，多参与挑战</br>
        5.4 其他等符合速推规范的微撩作品
      </van-collapse-item>
      <van-collapse-item title="6、什么样的微撩作品不可以投放速推？" name="6">
        6.1 平台希望优质内容能够获得更多展示机会，但以下类型微撩作品，无法投放速推：</br>
        (1) 微撩作品质量差：无内容、微撩作品模糊、产品 bug、微撩作品拉伸，观看后让人感到极度不适的微撩作品。</br>
        (2) 搬运微撩作品：账号状态标签为搬运号、明显截取的内容、录屏微撩作品、微撩作品中出现其他平台水印的微撩作品。</br>
        (3) 调性不推荐：微撩作品内容低俗含有软色情、微撩作品内容引人不适、微撩作品内容不符合本平台的调性，微撩作品非正向价值观。</br>
        (4) 隐性风险类：微撩作品或文案中出现广告、出现欺诈内容、标题党、医疗养生类、抽烟喝酒的行为、违规饲养野生动物、微撩作品中出现虐童现象、微撩作品中出现疑似赌博的场景。</br>
        (5) 明显的营销、广告类信息、微撩作品：微撩作品内容中含有明显的品牌定帧、品牌词字幕、品牌水印、口播；微撩作品背景中含有明显的品牌词、商业元素。</br>
        (6) 未授权明星/影视/赛事类微撩作品。微撩作品涉及侵权，无法使用速推；请提供相关授权证明至 feedback@weliao.com。</br>
        6.2 微撩作品标题和微撩作品描述包含以下元素，无法使用速推：</br>
       （1）联系方式：电话、微信号、QQ 号、二维码、微信公众号、地址</br>
       （2）招揽信息：标题招揽、微撩作品口播招揽、微撩作品海报或传单招揽、价格信息、标题产品功效介绍</br>
       （3）曝光商标：品牌定帧、商业字幕、非官方入库商业贴纸</br>
       （4）指向性的企业店铺名称</br>
       （5）曝光商标：品牌定帧、商业字幕、非官方入库商业贴纸
      </van-collapse-item>
      <van-collapse-item title="7、速推需要审核吗？审核多长时间？审核结果被拒绝后，金币会被退到哪里？" name="7">
       速推需要审核。审核时长上，白天一般在 01 小时内，夜间时间会长。如果审核不通过，预计3-7个工作内会退还到速推账户中，您可在【我】–右上角【三】–【速推订单管理】中查看，可用于下一次速推投放。
      </van-collapse-item>
      <van-collapse-item title="8、使用了速推的微撩作品会投放给谁？" name="8">
        目前支持两种定向模式：</br>
        模式 1：系统智能投放，系统会智能选择可能对该微撩作品感兴趣的用户或潜在粉丝，对其进行微撩作品展现。</br>
        模式 2：自定义投放，客户自主选择想要看到微撩作品的用户类型：可以选择性别、年龄、地域、附近商圈等方式。</br>
      </van-collapse-item>
      <van-collapse-item title="9、使用了速推的微撩作品，加热会持续多久？" name="9">
       最长不超过 48 小时。以下情况可能会停止加热：</br>
       可能性 1：微撩作品内容的“权限设置”修改为私密或者删除了微撩作品</br>
       可能性 2：超过48小时未消费的部分预计3-7个工作内会退还到速推账户中，在【我】–右上角【三】–【速推订单管理】中查看。</br>
      </van-collapse-item>
      <van-collapse-item title="10、金币是什么？" name="10">
       “金币”是本团队向您提供的用于在本平台上进行消费的虚拟货币，您可以用“金币”自由购买速推流量，速推。
      </van-collapse-item>
      <van-collapse-item title="11、订单的消耗是如何计算的" name="11">
       微撩作品每展示给一位用户，系统会自动扣除一部分金币，直到扣减完购买金币或订单投放终止。
      </van-collapse-item>
      <van-collapse-item title="12、展现量和播放量的区别是什么？" name="12">
       展现量为微撩作品展现的次数，即微撩作品被用户看到的次数；播放量为微撩作品播放总次数，其中包含了重复播放次数。
      </van-collapse-item>
      <van-collapse-item title="13、速推订单数据是否包含自然量的统计？" name="13">
       包含。速推订单数据统计投放速推和自然量带来的展现量、播放量及互动量。
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'extendDesc',
    data () {
      return {
        activeNames: [], // 常见问题折叠筐
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
  .define-table{
    border-collapse:collapse;
    border-spacing:0;
    border-left:1px solid #888;
    border-top:1px solid #888;
  }
  .define-table th,.define-table td{
    border-right:1px solid #888;
    border-bottom:1px solid #888;
    padding:5px 15px;
  }
  .define-table th{
    font-weight:bold;background:#ccc;
  }
</style>
