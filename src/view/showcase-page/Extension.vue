<template>
  <div>
    <van-nav-bar
      title="速推+上热门"
      left-arrow
      right-text="常见问题"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed
    >
    </van-nav-bar>
    <div class="top-space"></div>
    <!-- 作品区域 -->
    <div class="pdl15 pdr15 pdt10">
      <RetransmissionCard :isWxBg="false"></RetransmissionCard>
    </div>
    <!-- 内容区域 -->
    <div class="content-box">
      <!-- 期望区域 -->
      <div class="cell-zone">
        <div class="flex-center">
          <span>期望提升</span>
          <van-icon name="question-o" class="question-icon" @click="helpIcon('qiwangIcon')" />
          <span class="red-color" @click="advertisingTargetActionPop = true">{{currentAdvertisingTarget === 0 ? '视频互动量' : '粉丝增长'}}></span>
        </div>
        <span class="flex-center gray-color vertical-line">|</span>
        <div class="flex-center">
          <span>投放时长</span>
          <van-icon name="question-o" class="question-icon" @click="helpIcon('shichangIcon')"/>
          <span class="red-color" @click="durationActionPop = true">{{currentDuration === 0 ? '6小时' : currentDuration === 1 ? '12小时' : '24小时'}}></span>
        </div>
      </div>
      <!-- 选择兴趣用户 -->
      <div class="cell-zone">
        <span>把作品推荐给潜在兴趣用户</span>
        <van-icon name="question-o" class="question-icon" @click="helpIcon('xingquUseIcon')" />
      </div>
      <!-- 选择潜在用户选项 -->
      <van-radio-group v-model="targetUserRadio">
        <van-cell-group>
          <van-cell title="系统智能投放" clickable @click="targetUserRadio = '0'">
            <van-radio name="0" />
          </van-cell>
          <van-cell title="自定义定向投放" clickable @click="targetUserRadio = '1'">
            <van-radio name="1" />
          </van-cell>
          <!-- 自定义定向投放 区域 -->
          <Orientation v-show="targetUserRadio == '1'" @childMultiple="getChildMultiple"></Orientation>
          <van-cell title="达人相似粉丝投放" clickable @click="targetUserRadio = '2'">
            <van-radio name="2" />
          </van-cell>
          <!-- 达人相似粉丝投放 区域 -->
          <Daren v-show="targetUserRadio == '2'" @childMultiple="getChildMultiple"></Daren>
        </van-cell-group>
      </van-radio-group>
      <!-- 播放量提升 -->
      <div class="cell-zone">
        <span>预计播放量提升</span>
        <van-icon name="question-o" class="question-icon" @click="helpIcon('bofangIcon')" />
      </div>
      <!-- 播放量提升数 -->
      <div class="flex-center red-color playbackVolume">
        {{playbackVolume}}+
      </div>
      <!-- 投放金币 -->
      <div class="cell-zone">
        <span>投放金币</span>
        <van-icon name="question-o" class="question-icon" @click="helpIcon('jineIcon')" />
      </div>
      <!-- 金币列表区域 -->
      <div class="shopList-zone">
        <van-button plain :type=" currentSelect == index ? 'danger' : 'default' " v-for="(item, index) in shopList"  @click="selectMoney(index, item)" class="shop-btn">
          <span>{{item.value}}</span>
        </van-button>
      </div>
      <div class="cell-zone">
        <van-checkbox v-model="agreeCheckbox" @change="changeAgreeCheckbox"></van-checkbox>
        <span class="mgl5">继续表示同意</span>
        <div>
          <router-link :to="{ name: 'userAgreement', params: {} }">
            <span class="gold-color mgl5">用户服务协议</span>
          </router-link>
          <span>及</span>
          <router-link :to="{ name: 'extendRequirement', params: {} }">
            <span class="gold-color">投放要求</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="footer-space"></div>
    <van-submit-bar
      :disabled="isShoping || userCureentCoin < price"
      price=""
      button-text="提交订单"
      @submit="onSubmit"
    >
      <div class="pdl10 flex-space-between width-80">
        <div>
          <span class="font-14 dy-font-color">您的金币:</span>
          <span class="font-16 red-color mgl5">{{userCureentCoin.toLocaleString()}}</span>
        </div>
        <div>
          <span class="font-14 dy-font-color">合计:</span>
          <span class="font-16 red-color mgl5">{{price.toLocaleString()}}</span>
        </div>
      </div>
    </van-submit-bar>
    <!-- 选择广告投放类型上拉菜单 弹框 -->
    <van-actionsheet v-model="advertisingTargetActionPop" title="投放目标" >
      <div class="select-content">
        <p class="flex-center select-content-item" :class=" currentAdvertisingTarget == item.value ? 'select-content-item-selected' : '' "
          v-for="(item,index) in advertisingTargetAction" @click="onSelectAdvertisingTargetActionsheet(item)">
            {{item.name}}
        </p>
      </div>
    </van-actionsheet>
    <!-- 当前时长投放目标上拉菜单 弹框 -->
    <van-actionsheet v-model="durationActionPop" title="选择时长" >
      <div class="select-content">
        <p class="flex-center select-content-item" :class=" currentDuration == item.value ? 'select-content-item-selected' : '' "
           v-for="(item,index) in durationAction" @click="onSelectDurationActionsheet(item)">
           {{item.name}}
        </p>
      </div>
    </van-actionsheet>
    <!-- 问题 弹框 -->
    <van-popup v-model="showHelpPop" class="helpPop">
      <div class="pop-content">
        <h3 class="pop-content-title">{{currentPopCentent.title}}</h3>
        <span v-html="currentPopCentent.dec" class="questionPopDec"></span>
      </div>
      <div class="flex-center pop-close-zone">
        <van-icon name="close" @click="showHelpPop=false" class="pop-close-icon"/>
      </div>
    </van-popup>
    <!-- 自定义投放金币弹框 -->
    <van-popup v-model="definedMoneyPop" class="helpPop" :close-on-click-overlay="false">
      <div class="pop-content">
        <h3 class="pop-content-title">自定义金币</h3>
        <van-cell-group>
          <van-field v-model="definedMoneyNum" type="number" label="￥" placeholder="请输入金币" class="definedMoneyInput" >
          </van-field>
        </van-cell-group>
        <span class="red-color definedMoneyDec">金币在100~50000之间，且为100的倍数</span>
        <van-button type="danger" size="large" :disabled="isDefinedMoneyNumRight ? false : true" @click="confirmDefineMoney">确定</van-button>
      </div>
      <div class="flex-center pop-close-zone">
        <van-icon name="close" @click="definedMoneyPop=false" class="pop-close-icon"/>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import Orientation from 'components/child_components/Extension_components/Orientation';
  import RetransmissionCard from 'components/child_components/Publish_components/RetransmissionCard';
  import Daren from 'components/child_components/Extension_components/Daren';
  export default {
    components:{
      Orientation,
      RetransmissionCard,
      Daren,
    },
    name: 'extension',
    data () {
      return {
        agreeCheckbox: true,  // 同意条款
        isShoping: false, // 是否交易中
        showHelpPop: false,  // 帮助问题弹框
        advertisingTargetActionPop: false,  //逛选项上拉菜单
        durationActionPop: false,  // 时长上拉菜单
        definedMoneyPop: false, // 自定义投放金币弹框
        userCureentCoin: 500,  // 用户当前金币
        definedMoneyNum: '',  // 自定义金币
        isDefinedMoneyNumRight: false,  // 自定义金币是否准确
        currentAdvertisingTarget: 0,  // 当前广告投放目标，0-视频互动量，1-粉丝增长
        advertisingTargetAction: [ // 投放广告选项
          {
            name: '视频互动量',
            value: 0,
          },
          {
            name: '粉丝增长',
            value: 1
          },
        ],
        currentDuration: 0,  // 当前时长， 0-6小时，1-12小时，2-24小时
        durationAction: [ // 投放时长选项
          {
            name: '6小时',
            value: 0,
          },
          {
            name: '12小时',
            value: 1,
          },
          {
            name: '24小时',
            value: 2,
          },
        ],
        currentPopCentent: {  // 当前弹框显示内容
          'title': '',
          'dec': '',
        },
        qiwangDec: {
          'title': '期望说明',
          'dec': '作品互动量：整体提升优化，用户对您的作品进行点赞/评论/分享/进入您的个人主页/点击您绑定的挑战赛等与您产生互动的行为。<br />'+
                 '粉丝增长：用户通过作品头像上的+按钮关注，同时也可以进入到您的个人主页点击关注。<br />'+
                 '位置点击：用户通过作品上添加的位置信息，进入位置信息页面。<br />'+
                 '购物车点击：用户通过作品上添加的商品信息，查看商品卡片。',
        },
        shichangDec: {
          'title': '投放时长',
          'dec': '播放时间将从您完成订单之后立马生效。<br />此投放时长为最低时长，订单以实际消耗情况为准。<br />10元以上的订单建议投放6小时以上。',
        },
        xingquUseDec: {
          'title': '作品推荐',
          'dec': '将作品展现给更多潜在兴趣用户，提升作品的曝光量。',
        },
        bofangDec: {
          'title': '预计播放量',
          'dec': '数值为播放的最低时长，系统将在达到该顶点的时候结束投放。<br />自定义投放设置越精确，投放成本越高。<br />系统将会根据您的自定义投放设置实时估算预计播放量。',
        },
        jineDec: {
          'title': '投放金币',
          'dec': '投放金币为此次投放的最大消耗值，系统会100%投放完成，投放过程中如若遇到非系统故障，如'+
                  '视频删除/人工举报，系统将不予退回金币。如遇到系统故障等非用户自身操作，如系统升级，系统会自动延放到下一个版本。',
        },
        targetUserRadio: '0', // 目标用户选项，0-系统智能投放，1-自定义定向投放，2-达人相似粉丝投放
        playbackVolume: 10000, // 预计播放量
        basicMultiplePlaybackVolume: 10000,  //基本播放量
        currentMuultiple: 1,  // 当前倍数
        price: 100, // 价格，分为单位
        currentSelect: 0,  // 当前选中
        shopList: [
          {
            num: 100,
            value: '100金币',
            isHot: 0, // 是否热选，0-是，1-否
            multiple: 1,  // 预计播放倍数
          },
          {
            num: 200,
            value: '200金币',
            isHot: 1, // 是否热选，0-是，1-否
            multiple: 2,  // 预计播放倍数
          },
          {
            num: 300,
            value: '300金币',
            isHot: 1, // 是否热选，0-是，1-否
            multiple: 3,  // 预计播放倍数
          },
          {
            num: 500,
            value: '500金币',
            isHot: 1, // 是否热选，0-是，1-否
            multiple: 5,  // 预计播放倍数
          },
          {
            num: 1000,
            value: '1000金币',
            isHot: 1, // 是否热选，0-是，1-否
            multiple: 10,  // 预计播放倍数
          },
          {
            num: 0,
            value: '自定义',
            isHot: 1, // 是否热选，0-是，1-否
            multiple: 0,  // 预计播放倍数
          },
        ],
      };
    },
    mounted () {
    },
    computed: {
    },
    watch: {
      // 自定义输入金币
      definedMoneyNum (curVal, oldVal) {
        if (parseFloat(curVal).toString() !== "NaN" && curVal >= 100 && curVal <= 50000 && curVal % 100 === 0 ) {
          this.isDefinedMoneyNumRight = true;
        }else{
          this.isDefinedMoneyNumRight = false;
        }
      },
      // 目标用户选项，0-系统智能投放，1-自定义定向投放，2-达人相似粉丝投放
      targetUserRadio (curVal, oldVal) {
        if (curVal == 0) {
          this.basicMultiplePlaybackVolume = 10000;
        }
        this.playbackVolume = this.basicMultiplePlaybackVolume * this.currentMuultiple ; // 播放量
      }
    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
      onClickRight () {
        this.$router.push({ name: 'extendDesc'})
      },
      // 帮助弹框
      helpIcon (type) {
        if (type == 'jineIcon') {  // 投放金币icon
          this.currentPopCentent = this.jineDec;
        }else if (type == 'bofangIcon') { // 播放icon
          this.currentPopCentent = this.bofangDec;
        }else if (type == 'shichangIcon') { // 时长期望icon
          this.currentPopCentent = this.shichangDec;
        }else if (type == 'qiwangIcon') {  // 点击期望icon
          this.currentPopCentent = this.qiwangDec;
        }else if (type == 'xingquUseIcon') {  // 点击期望icon
          this.currentPopCentent = this.xingquUseDec;
        }
        this.showHelpPop = true;
      },
      // 选择广告类型
      onSelectAdvertisingTargetActionsheet(item) {
        this.advertisingTargetActionPop = false;
        this.currentAdvertisingTarget = item.value;
      },
      // 选择时长类型
      onSelectDurationActionsheet(item) {
        this.durationActionPop = false;
        this.currentDuration = item.value;
      },
      // 提交商品
      onSubmit () {
        let that = this;
        that.isShoping = true;
        setTimeout(() => {
          that.isShoping = false;
          that.userCureentCoin -= that.price;
          that.$dialog.confirm({
            title: '投放成功',
            message: '您可以在我的-[三]-速推订单管理查看详情',
            confirmButtonText: '前往查看',
            cancelButtonText: '继续投放',
          }).then(() => {
            this.$router.push({ name: 'extensionOrderManage' })
          }).catch(() => {
            // on cancel
          });
        }, 500);
      },
      // 切换同意条款按钮
      changeAgreeCheckbox () {
        this.isShoping = !this.isShoping;
      },
      // 选择金币
      selectMoney (index, item) {
        if (index === 5) {
          // 点击的自定义金币
          this.definedMoneyPop = true;
          this.definedMoneyNum = this.shopList[index].num == 0 ? '' : this.shopList[index].num;
        }else {
          // 点击的非自定义金币
          this.currentSelect = index; // 高亮的位置
          this.price = item.num;  // 价格
          this.definedMoneyNum = '';
          this.shopList[5].num  = 0;
          this.shopList[5].value = '自定义';
          this.currentMuultiple = this.shopList[index].multiple;  // 当前倍数
          this.playbackVolume = this.basicMultiplePlaybackVolume * this.currentMuultiple ; // 播放量
        }
      },
      // 确定自定义金币
      confirmDefineMoney () {
        this.currentSelect = 5;
        this.definedMoneyPop = false;
        this.shopList[5].num = this.definedMoneyNum;
        this.price = this.definedMoneyNum;
        this.shopList[5].value = '￥'+this.definedMoneyNum+'>';
        this.currentMuultiple = this.definedMoneyNum / 10; // 自定义倍数
        this.playbackVolume = this.basicMultiplePlaybackVolume * this.currentMuultiple ; // 播放量
      },
      // 获取子组件 -- 自定义投放，达人选择 的 播放倍数
      getChildMultiple (childVolume) {
        this.basicMultiplePlaybackVolume = childVolume;
        this.playbackVolume = this.basicMultiplePlaybackVolume * this.currentMuultiple ; // 播放量
      }
    }
  }
</script>
<style lang="css" scoped>
  .content-box{
    padding: 0 0.4rem 0 0.4rem;
  }
  .cell-zone{
    display: flex;
    height: 1rem;
    font-size: 0.373333rem;
    align-items: center;
  }
  .question-icon{
    width: 0.6rem;
    text-align: center;
  }
  .vertical-line{
    width: 0.6rem;
  }
  .helpPop{
    background-color: transparent;
  }
  .pop-content{
    width: 6rem;
    background-color: #fff;
    text-align: center;
    padding: 0.2rem 0.4rem 0.4rem 0.4rem;
    line-height: 0.666667rem;
  }
  .pop-content-title{
    padding: 0.2rem 0;
  }
  .pop-close-zone{
    margin: 0.8rem 0 0 0;
  }
  .pop-close-icon{
    color: #fff;
    font-size: 0.64rem;
  }
  .select-content{
    width: 100%;
    text-align: center;
    padding: 0 0 0.2rem 0;
  }
  .select-content-item{
    height: 1rem;
    font-size: 0.426667rem;
  }
  .select-content-item-selected{
    background-color: #FEF2F4;
    color: #C13B66;
  }
  .questionPopDec{
    display: flex;
    text-align: left;
  }
  .playbackVolume{
    height: 1rem;
    font-size: 0.8rem;
  }
  .shopList-zone{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .shop-btn{
    width: 2.5rem;
    margin: 0.133rem 0.133rem;
    padding: 0;
  }
  .content-zone{
    margin: 1.2rem 0 1.6rem 0;
  }
  .definedMoneyInput{
    background-color: #F4F4F4;
  }
  .definedMoneyDec{
    height: 1rem;
    display: flex;
    align-items: center;
  }
</style>
