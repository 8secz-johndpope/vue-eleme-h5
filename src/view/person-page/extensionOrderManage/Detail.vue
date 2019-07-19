<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="速推订单详情"
      left-arrow
      right-text="问题与帮助"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 订单详情 -->
    <div class="pd15 white-bg">
      <div class="dy-font-color">当前订单状态：</div>
      <div class="flex-center font-20 font-bold">{{ status === 0 ? '进行中' : status === 1 ? '已完成' : '中途结束' }}</div>
    </div>
    <van-cell-group>
      <van-cell title="订单号" :value="order" />
      <van-cell title="下单时间" :value="COMMONFUNC.crtTimeFtt(createTime, 'yy-mm-dd hh-mm')" />
      <van-cell title="下单金币" :value="orderCoin" />
    </van-cell-group>
    <!-- 数据总览 -->
    <div class="pd15 white-bg">
      <div class="dy-font-color">数据总览：</div>
      <!-- 菜单分类 -->
      <div class="flex-wrap white-bg classify-zone font-16">
        <div class="classify-item">
          <div class="red-color">{{showNum}}</div>
          <div class="font-14">展示量</div>
        </div>
        <div class="classify-item">
          <div class="red-color">{{playNum}}</div>
          <div class="font-14">播放量</div>
        </div>
        <div class="classify-item">
          <div class="red-color">{{interactionNum}}</div>
          <div class="font-14">互动量</div>
        </div>
      </div>
    </div>
    <!-- 投放内容 -->
    <div class="pd15 white-bg">
      <div class="dy-font-color">投放内容：</div>
      <div class="flex-wrap mgt10">
        <div class="flex-center"><img :src="userImg" class="van-avatar" /></div>
        <div class="pdl15">
          <div>{{workDesc}}</div>
          <div class="gray-color">{{userName}}的作品</div>
        </div>
      </div>
    </div>
    <van-cell-group>
      <van-cell title="已消耗金币" :value="usedCoin" />
      <van-cell title="消耗完成度" :value="progress + '%'" />
    </van-cell-group>
    <div class="footer-space"></div>
    <div class="fixed-footer-btn-zone">
      <van-button round type="danger" size="large" @click="continueExtend">继续投放</van-button>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    components:{
    },
    name: 'contact',
    data () {
      return {
        order: '2019071708170421',
        createTime: 1550281133875, //下单时间
        orderCoin: 100, // 下单金币
        status: 1,  // 0-进行中  1-已完成  2-中途结束
        showNum: 100, // 展示量，用户看到的数量
        playNum: 1000, // 展示量，包含重复播放的
        interactionNum: 50, // 互动量 包括点赞，评论，转发，帮顶的数量
        usedCoin: 100,  // 已消耗金币
        progress: 100,  // 进度
        userImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4', // 作品的用户头像
        userName: '被投放者名称', // 作品的作者
        userId: 'userId0001', // 作品的作者的Id
        workDesc: '这是作品的描述，估计这么长，长就用省略号', // 作品的描述
        workId: 'workId001',  // 作品Id
      };
    },
    mounted () {

    },
    computed: {
      ...mapGetters([
        'getImitateUser', // 获取用户数据
      ])
    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
      onClickRight () {
        this.$router.push({ name: 'extendDesc'})
      },
      // 继续投放
      continueExtend () {
        this.$router.push( { name: 'extension', params: { id: 'od0001' } })
      },
    }
}
</script>

<style lang="less" scoped>
  .classify-zone{
    padding: 0.266667rem 0 0 0;
  }
  .classify-item{
    width: 33%;
    text-align: center;
    line-height: 0.8rem;
  }
  .footer-space{
    height: 2.2rem;
  }
  .fixed-footer-btn-zone{
    background-color: #fff;
    bottom: 0;
    padding: 0.4rem 0;
  }
</style>
