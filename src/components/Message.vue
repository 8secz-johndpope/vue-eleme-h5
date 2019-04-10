<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="消息"
    />
    <van-tabbar v-model="messageActive" class="topTabbar" active-color="#7d7e80">
      <van-tabbar-item icon="friends-o" :to="'/myfollows'">关注</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" info="20" :to="'/myfans'">粉丝</van-tabbar-item>
      <van-tabbar-item icon="thumb-circle-o" :to="'/mypraise'" dot>赞</van-tabbar-item>
      <van-tabbar-item icon="comment-circle-o" :to="'/mycomments'" info="5">评论</van-tabbar-item>
    </van-tabbar>
    <!-- 主体内容 -->
    <van-pull-refresh v-model="isRefreshLoading" @refresh="onRefresh">
        <van-list
        v-model="listLoading"
        :finished="finished"
        finished-text="我也是底线的"
        @load="onLoadMore"
        >
        <div @click="toChat($event)" v-for="(item,index) in arrs">
          <van-swipe-cell :right-width="180" :on-close.stop="onClose" :data-id="item.messageId" class="messageModule">
            <van-cell-group>
              <van-cell class="displayflex">
                <div class="img-zone">
                  <span class="van-avatar"><img :src="item.sendUserImg" alt="" class="van-avatar-img"></span>
                </div>
                <div class="contents-zone">
                  <div class="flex-space-between">
                    <span>{{item.sendUserName}}</span>
                    <span>{{COMMONFUNC.commentsTimeFormatter(item.time)}}</span>
                  </div>
                  <div>
                    <span>{{item.contents}}</span>
                  </div>
                </div>
              </van-cell>
            </van-cell-group>
            <span slot="right">删除</span>
          </van-swipe-cell>
        </div>
      </van-list>
    </van-pull-refresh>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <!-- 固定标签页 -->
    <Fixednav></Fixednav>
  </div>
</template>

<script>
  import Fixednav from './common_components/Fixed_nav';
  import { mapGetters } from 'vuex';
  // import "../css/common.css";
  export default {
    components:{
       Fixednav,
    },
    name: 'message',
    data () {
      return {
        msg: '1',
        arrs: [],
        count: 0,
        isRefreshLoading: false, // 下拉刷新
        listLoading: false, // 下拉加载更多
        messageActive: -1,  // 默认高亮位置
        finished: false,
        isToChat: true,  // 是否前往聊天室，解决右滑跟点击的时候的冲突
      };
    },
    mounted () {
      this.arrs = [...this.getImitateMessage];
    },
    computed: {
      ...mapGetters([
        'getImitateMessage', // 获取用户列表数据
      ])
    },
    methods: {
      // 下拉刷新
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isRefreshLoading = false;
        }, 500);
      },
      // 删除信息
      onClose(clickPosition, instance){
        let that = this;
        that.isToChat = false;
        switch (clickPosition) {
          case 'left':
          case 'cell':
          case 'outside':
            instance.close();
            break;
          case 'right':
            that.$dialog.confirm({
              message: '确定删除吗？'
            }).then(() => {
              this.$toast('删除成功');
              instance.close();
            }).catch( () => {
              // console.log('取消删除');
            });
            break;
          }
      },
      // 下拉加载更多
      onLoadMore() {
        let obj = {
          isOfficial: 0,  // 是否官方，0-是，1-否
          sendUserImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',
          sendUserName: '消息助手',
          time: '1552833875',
          contents: '欢迎来到xxx',
          isReaded: 0,    // 是否已读， 0-是， 1-否
          messageId: 'mId000001',  // 消息Id
        };
        // 异步更新数据
        setTimeout(() => {
          // 每次加载10条
          for (let i = 0; i < 5; i++) {
            this.arrs.push(obj);
          }
          // 加载状态结束
          this.listLoading = false;
          // 数据全部加载完成
          if (this.arrs.length >= 5) {
            this.finished = true;
          }
        }, 500);
      },
      // 跳转聊天室
      toChat (ev){
        if (this.isToChat) {
          // console.log('s');
          this.$router.push('chat/userId')
        }
        this.isToChat = true;
      },
    }
  }
</script>
<style lang="css" scoped>
  .topTabbar{
    position: initial;
  }
  .displayflex{
    padding: 0.1rem 0.4rem;
  }
  .img-zone{
    line-height: 1.2rem;
  }
  .contents-zone{
    margin-left: 10px;
    width: calc(100% - 40px);
  }
</style>
