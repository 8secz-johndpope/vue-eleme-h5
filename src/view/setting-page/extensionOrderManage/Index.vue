<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="速推+上热门"
      left-arrow
      right-text="问题与帮助"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 主体内容 -->
    <van-pull-refresh v-model="isRefreshLoading" @refresh="onRefresh">
      <div class="tcenter white-bg pd15">
        <img :src="getImitateUser.userImg" class="van-avatar-large" />
        <div class="mgt10 font-bold font-16">
          <span class="font-16 dy-font-color">昵称：</span>
          <span class="font-bold font-16">{{getImitateUser.userName}}</span>
          <span class="font-16 dy-font-color">，金币：</span>
          <span class="font-bold font-16 red-color">{{getImitateUser.goldCoin}}</span>
        </div>
      </div>
      <van-list
        v-model="listLoading"
        :finished="finished"
        finished-text="我也是底线的"
        @load="onLoadMore"
        >
        <!-- 订单区域区域 -->
        <div v-for="(item, index) in orderList" class="pd15 white-bg border-bottom" @click="toOrderDetail(item)">
          <div class="flex-space-between">
            <div>订单号：{{item.order}}</div>
            <div>
              <span>状态：</span>
              <span class="red-color" v-if="item.status === 0">进行中</span>
              <span v-else-if="item.status === 1">已完成</span>
              <span v-else>中途结束</span>
            </div>
          </div>
          <div class="flex-wrap mgt10">
            <div class="flex-center"><img :src="item.userImg" class="van-avatar" /></div>
            <div class="pdl15">
              <div>{{item.workDesc}}</div>
              <div class="gray-color">{{item.userName}}的作品</div>
            </div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
    <div class="fixed-footer-btn-zone">
      <van-button round type="danger" size="large" @click="submit">去上热门</van-button>
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
        orderList: [
          {
            order: '2019071708170421',
            status: 0,  // 0-进行中  1-已完成  2-中途结束
            userImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4', // 作品的用户头像
            userName: '被投放者名称', // 作品的作者
            userId: 'userId0001', // 作品的作者的Id
            workDesc: '这是作品的描述，估计这么长，长就用省略号', // 作品的描述
            workId: 'workId001',  // 作品Id
          }
        ],
        isRefreshLoading: false,  // 下拉重新刷新
        listLoading: false, // 是否处于加载状态，加载过程中不触发load事件
        finished: false,  // 是否已加载完成，加载完成后不再触发load事件
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
      // 前往订单详情
      toOrderDetail (item) {
        this.$router.push( { name: 'extensionOrdeDetail', params: { orderId: 'orderId0001' } })
      },
      // 前往上热门
      submit () {
        this.$toast('上热门')
      },
      // 下拉刷新
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isRefreshLoading = false;
        }, 500);
      },
      // 下拉加载更多
      onLoadMore() {
        let obj = {
          order: '2019071708170421',
          status: 1,  // 0-进行中  1-已完成  2-中途结束
          userImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4', // 作品的用户头像
          userName: '被投放者名称', // 作品的作者
          userId: 'userId0001', // 作品的作者的Id
          workDesc: '这是作品的描述，估计这么长，长就用省略号', // 作品的描述
          workId: 'workId001',  // 作品Id
        };
        // 异步更新数据
        setTimeout(() => {
          // 每次加载10条
          for (let i = 0; i < 10; i++) {
            this.orderList.push(obj);
          }
          // 加载状态结束
          this.listLoading = false;
          // 数据全部加载完成
          if (this.orderList.length >= 20) {
            this.finished = true;
          }
        }, 500);
      },
    }
}
</script>

<style lang="less" scoped>
  .fixed-footer-btn-zone{
    background-color: #fff;
    bottom: 0;
    padding: 0.4rem 0;
  }
</style>
