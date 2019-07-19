<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="邀请好友"
      right-text="活动规则"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="main-content">
      <div class="img-zone">
        <img src="http://img.zcool.cn/community/031aa6a567797a900000138c4216392.jpg" class="img" />
      </div>
      <div class="txt-zone">
        <p class="flex-center giveGoldCoin">
          邀请成功，您将获得<span class="red-color num">30</span>金币
        </p>
        <p class="flex-center allHas">
          邀请好友 你我都有
        </p>
      </div>
      <div class="btn-zone" @click="sharePopShow = true">
        <van-button size="large" type="danger" round >立即邀请</van-button>
      </div>
      <!-- 我的邀请记录 -->
      <div class="flex-center record">
        <div>
          <p class="title">
            <span class="gray-color">——</span> 我的邀请记录 <span class="gray-color">——</span>
          </p>
          <p class="detail">
            累计邀请<span class="red-color prominent">10</span>人，
            共获得<span class="red-color prominent">300</span>金币
          </p>
        </div>
      </div>
    </div>
    <!-- 分享选项 -->
    <van-actionsheet v-model="sharePopShow" title="分享到">
      <ShareBox></ShareBox>
    </van-actionsheet>
  </div>
</template>
<script>
  import ShareBox from 'components/common_components/ShareBox';
  export default {
    components:{
      ShareBox,
    },
    name: 'invitation',
    data () {
      return {
        sharePopShow: false,  // 分享弹框
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
      onClickRight () {
        this.$router.push({ name: 'invitationRules' })
      }
    }
}
</script>

<style lang="less" scoped>
  .img-zone{
    width: 100%;
    height: 6.5rem;
  }
  .img{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .main-content{
    background-color: #fff;
  }
  .txt-zone{
    height: 2rem;
    text-align: center;
  }
  .giveGoldCoin{
    font-size: 0.586667rem;
    color: #333;
    height: 1.2rem;
  }
  .allHas{
    font-size: 0.373333rem;
    height: 0.6rem;
  }
  .btn-zone{
    width: 80%;
    margin: 0 auto;
  }
  .record{
    background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553666997575&di=236bc6df0208ee0d18294fe85c7b5ad1&imgtype=0&src=http%3A%2F%2Fpic.nipic.com%2F2008-02-29%2F200822910582141_2.jpg');
    background-size: 100% 100%;
    height: 3rem;
    width: 80%;
    margin: 0.4rem auto;
    text-align: center;
  }
  .title{
    font-size: 0.373333rem;
    padding: 0 0 0.2rem 0;
  }
  .detail{
    font-size: 0.373333rem;
  }
  .prominent{
    font-size: 0.48rem;
  }
  .num{
    margin: 0 0.133rem;
  }
</style>
