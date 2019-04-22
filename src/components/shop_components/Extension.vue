<template>
  <div>
    <div class="fixed-top">
        <van-nav-bar
        title="速推+上热门"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        >
      </van-nav-bar>
    </div>
    <!-- 固定内容区域 -->
    <div class="content-zone">
      <!-- 作品区域 -->
      <van-panel class="work-panel">
        <div class="flex-wrap">
          <div class="flex-center">
            <img src="https://avatars1.githubusercontent.com/u/34303195?s=460&v=4" class="van-avatar" />
          </div>
          <div class="work-panel-right">
            <div>
              <p>男：你今天有点怪</p><p>女：哪里怪了（脸红）</p><p>男：怪可爱的，哈哈哈</p>
            </div>
            <div class="gray-color">XXX的作品</div>
          </div>
        </div>
      </van-panel>
      <!-- 内容区域 -->
      <div class="content-box">
        <!-- 期望区域 -->
        <div class="cell-zone">
          <div class="flex-center">
            <span>期望提升</span>
            <van-icon name="question-o" class="question-icon" @click="qiwangIcon" />
            <span class="red-color" @click="advertisingTargetActionPop = true">{{currentAdvertisingTarget === 0 ? '视频互动量' : '粉丝增长'}}></span>
          </div>
          <span class="flex-center gray-color vertical-line">|</span>
          <div class="flex-center">
            <span>投放时长</span>
            <van-icon name="question-o" class="question-icon" @click="shichangIcon"/>
            <span class="red-color" @click="durationActionPop = true">{{currentDuration === 0 ? '6小时' : currentDuration === 1 ? '12小时' : '24小时'}}></span>
          </div>
        </div>
        <!-- 选择兴趣用户 -->
        <div class="cell-zone">
          <span>把作品推荐给潜在兴趣用户</span>
          <van-icon name="question-o" class="question-icon" @click="xingquUseIcon" />
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
            <Orientation v-show="targetUserRadio == '1'"></Orientation>
            <van-cell title="达人相似粉丝投放" clickable @click="targetUserRadio = '2'">
              <van-radio name="2" />
            </van-cell>
            <!-- 达人相似粉丝投放 区域 -->
            <Daren v-show="targetUserRadio == '2'"></Daren>
          </van-cell-group>
        </van-radio-group>
        <!-- 播放量提升 -->
        <div class="cell-zone">
          <span>预计播放量提升</span>
          <van-icon name="question-o" class="question-icon" @click="bofangIcon" />
        </div>
        <!-- 播放量提升数 -->
        <div class="flex-center red-color playbackVolume">
          {{playbackVolume}}+
        </div>
        <!-- 投放金额 -->
        <div class="cell-zone">
          <span>投放金额</span>
          <van-icon name="question-o" class="question-icon" @click="jineIcon" />
        </div>
        <!-- 金额列表区域 -->
        <div class="shopList-zone">
          <van-button plain :type=" currentSelect == index ? 'danger' : 'default' " v-for="(item, index) in shopList"  @click="selectMoney(index, item)" class="shop-btn">
            <span v-if="isDefinedMoneyNumRight && index == 5">￥</span><span>{{item.value}}</span><span v-if="isDefinedMoneyNumRight && index == 5">></span>
          </van-button>
        </div>
        <div class="cell-zone">
          <van-checkbox v-model="agreeCheckbox" @change="changeAgreeCheckbox"></van-checkbox>
          <span>继续表示同意</span>
          <div @click="showUserAgreementPop = true">
            <span class="gold-color">用户服务协议</span>
            <span>及</span>
            <span class="gold-color">投放要求</span>
          </div>
        </div>
        <van-submit-bar
          :disabled="isShoping"
          :price="price"
          button-text="支付"
          @submit="onSubmit"
        >
        </van-submit-bar>
      </div>
    </div>
    <van-submit-bar
      :disabled="isShoping"
      :price="price"
      button-text="提交订单"
      @submit="onSubmit"
    >
    </van-submit-bar>
    <!-- 选择广告投放类型上拉菜单 -->
    <van-actionsheet v-model="advertisingTargetActionPop" title="投放目标" >
      <div class="select-content">
        <p class="flex-center select-content-item" v-for="(item,index) in advertisingTargetAction" @click="onSelectAdvertisingTargetActionsheet(item)">{{item.name}}</p>
      </div>
    </van-actionsheet>
    <!-- 当前时长投放目标上拉菜单 -->
    <van-actionsheet v-model="durationActionPop" title="选择时长" >
      <div class="select-content">
        <p class="flex-center select-content-item" v-for="(item,index) in durationAction" @click="onSelectDurationActionsheet(item)">{{item.name}}</p>
      </div>
    </van-actionsheet>
    <!-- 问题弹框 -->
    <van-popup v-model="showHelpPop" class="helpPop">
      <div class="pop-content">
        <h3 class="pop-content-title">{{currentPopCentent.title}}</h3>
        <span v-html="currentPopCentent.dec" class="questionPopDec"></span>
      </div>
      <div class="flex-center pop-close-zone">
        <van-icon name="close" @click="showHelpPop=false" class="pop-close-icon"/>
      </div>
    </van-popup>
    <!-- 自定义投放金额弹框 -->
    <van-popup v-model="definedMoneyPop" class="helpPop" :close-on-click-overlay="false">
      <div class="pop-content">
        <h3 class="pop-content-title">自定义金额</h3>
        <van-cell-group>
          <van-field v-model="definedMoneyNum" type="number" label="￥" placeholder="请输入金额" class="definedMoneyInput" >
          </van-field>
        </van-cell-group>
        <span class="red-color definedMoneyDec">金额在10~5000之间，且为10的倍数</span>
        <van-button type="danger" size="large" :disabled="isDefinedMoneyNumRight ? false : true" @click="confirmDefineMoney">确定</van-button>
      </div>
      <div class="flex-center pop-close-zone">
        <van-icon name="close" @click="definedMoneyPop=false" class="pop-close-icon"/>
      </div>
    </van-popup>
    <!-- 服务协议 -->
    <van-popup v-model="showUserAgreementPop" position="bottom" :overlay="true">
      <div class="fixed-top">
        <van-nav-bar
          title="服务协议及投放要求"
          @click-left="showUserAgreementPop = false"
          left-arrow
        />
      </div>
      <div class="fixed-content-box">
        <UserAgreement></UserAgreement>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import Orientation from '../child_components/Extension_components/Orientation';
  import Daren from '../child_components/Extension_components/Daren';
  import UserAgreement from '../word_components/UserAgreement';
  export default {
    components:{
      Orientation,
      Daren,
      UserAgreement,
    },
    name: 'extension',
    data () {
      return {
        agreeCheckbox: true,  // 同意条款
        isShoping: false, // 是否交易中
        price: 1990, // 价格，分为单位
        showHelpPop: false,  // 帮助问题弹框
        advertisingTargetActionPop: false,  //逛选项上拉菜单
        showUserAgreementPop: false,  // 隐私协议条款
        durationActionPop: false,  // 时长上拉菜单
        definedMoneyPop: false, // 自定义投放金额弹框
        definedMoneyNum: '',  // 自定义金额
        isDefinedMoneyNumRight: false,  // 自定义金额是否准确
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
          'dec': '此投放时长为预估时长，订单以实际消耗情况为准。<br />10元以上的订单建议投放6小时以上。',
        },
        xingquUseDec: {
          'title': '作品推荐',
          'dec': '将作品展现给更多潜在兴趣用户，提升作品的曝光量。',
        },
        bofangDec: {
          'title': '预计播放量',
          'dec': '自定义投放设置越精确，投放成本越高，系统将会根据您的自定义投放设置实时估算预计播放量。',
        },
        jineDec: {
          'title': '投放金额',
          'dec': '投放金额为此次投放的最大消耗值，系统会100%投放完成，投放过程中如若遇到非系统故障，如'+
                  '视频删除/人工举报，系统将不予退回金额。如遇到系统故障等非用户自身操作，如系统升级，系统会自动延放到下一个版本。',
        },
        targetUserRadio: '0', // 目标用户选项，0-系统智能投放，1-自定义定向投放，2-达人相似粉丝投放
        playbackVolume: 5000, // 预计播放量
        isShoping: false, // 是否交易中
        price: 1990, // 价格，分为单位
        currentSelect: 0,  // 当前选中
        shopList: [
          {
            num: 10,
            value: '￥10',
            isHot: 0, // 是否热选，0-是，1-否
          },
          {
            num: 50,
            value: '￥50',
            isHot: 1, // 是否热选，0-是，1-否
          },
          {
            num: 100,
            value: '￥100',
            isHot: 1, // 是否热选，0-是，1-否
          },
          {
            num: 200,
            value: '￥200',
            isHot: 1, // 是否热选，0-是，1-否
          },
          {
            num: 300,
            value: '￥300',
            isHot: 1, // 是否热选，0-是，1-否
          },
          {
            num: 0,
            value: '自定义',
            isHot: 1, // 是否热选，0-是，1-否
          },
        ],
      };
    },
    mounted () {
    },
    computed: {
    },
    watch: {
      definedMoneyNum (curVal, oldVal) {
        if (parseFloat(curVal).toString() !== "NaN" && curVal >= 10 && curVal <= 5000 && curVal % 10 === 0 ) {
          this.isDefinedMoneyNumRight = true;
        }else if (curVal > 5000 ) {
          this.definedMoneyNum = 5000;
        }else{
          this.isDefinedMoneyNumRight = false;
        }
      }
    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
      // 点击期望icon
      qiwangIcon () {
        this.currentPopCentent = this.qiwangDec;
        this.showHelpPop = true;
      },
      // 时长期望icon
      shichangIcon () {
        this.currentPopCentent = this.shichangDec;
        this.showHelpPop = true;
      },
      // 时长期望icon
      xingquUseIcon () {
        this.currentPopCentent = this.xingquUseDec;
        this.showHelpPop = true;
      },
      // 播放icon
      bofangIcon () {
        this.currentPopCentent = this.bofangDec;
        this.showHelpPop = true;
      },
      // 投放金额icon
      jineIcon () {
        this.currentPopCentent = this.jineDec;
        this.showHelpPop = true;
      },
      // 提交商品
      onSubmit () {
        let that = this;
        that.isShoping = true;
        setTimeout(() => {
          that.isShoping = false;
          that.$router.push('/setting/payment')
        }, 1000);
      },
      // 选择广告类型
      onSelectAdvertisingTargetActionsheet(item) {
        this.advertisingTargetActionPop = false;
        this.currentAdvertisingTarget = item.value;
        this.$toast(item.name);
      },
      // 选择时长类型
      onSelectDurationActionsheet(item) {
        this.durationActionPop = false;
        this.currentDuration = item.value;
        this.$toast(item.name);
      },
      // 提交商品
      onSubmit () {
        let that = this;
        that.isShoping = true;
        setTimeout(() => {
          that.isShoping = false;
          that.$router.push('/setting/payment')
        }, 500);
      },
      // 切换同意条款按钮
      changeAgreeCheckbox () {
        this.isShoping = !this.isShoping;
      },
      // 选择金额
      selectMoney (index, item) {
        this.currentSelect = index;
        this.price = item.num * 100;
        if (index === 5) {
          this.definedMoneyPop = true;
          this.definedMoneyNum = this.shopList[5].value;
        }else {
          this.playbackVolume = 5000 * (index + 1);
        }
      },
      // 确定自定义金额
      confirmDefineMoney () {
        this.definedMoneyPop = false;
        this.shopList[5].value = this.definedMoneyNum;
      }
    }
  }
</script>
<style lang="css" scoped>
  .content-box{
    padding: 0 0.4rem 0 0.4rem;
  }
  .work-panel{
    padding: 0 0.4rem 0.4rem 0.4rem;
    margin: 0 0 0.2rem 0;
  }
  .work-panel-right{
    padding: 0 0 0 0.4rem;
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
