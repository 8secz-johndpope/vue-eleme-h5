<template>
  <div>
    <!-- 顶部 -->
    <div class="fixed-top">
      <van-nav-bar
        :title="tabTitle"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="fixed-content-box">
      <!-- 主体内容 -->
      <van-pull-refresh v-model="isRefreshLoading" @refresh="onRefresh">
        <van-list
          v-model="listLoading"
          :finished="finished"
          finished-text="我也是底线的"
          @load="onLoadMore"
        >
          <van-cell-group v-for="(item,index) in arrs">
            <van-cell class="displayflex" @click="seeDetail(item,index)">
              <div class="tleft van-user-item-left">
                <div class="van-avatar-large"><img :src="item.firstUserImg" alt="" class="van-avatar-img"></div>
                <div class="flex-column van-user-item-text-info">
                  <span class="van-userName">@{{item.firstUserName}}</span>
                  <span class="van-autograph" v-if="msgType === 0 && item.type === 0">等{{item.total}}人赞了你的作品</span>
                  <span class="van-autograph" v-if="msgType === 0 && item.type === 1">等{{item.total}}人赞了你的评论</span>
                  <span class="van-autograph" v-if="msgType === 1 ">{{item.comments}}</span>
                  <!-- 如果是点赞，则会同一时间有多个点赞，评论则是单独的 -->
                  <div v-if="msgType === 0 ">
                    <div class="van-avatar-small" v-for="(c_item, c_index) in item.userList" v-if="c_index < 4"><img :src="c_item.userImg" alt="" class="van-avatar-img"></div>
                  </div>
                  <span>{{COMMONFUNC.commentsTimeFormatter(item.time)}}</span>
                </div>
              </div>
              <!-- 作品内容 -->
              <div class="van-user-item-right">
                <van-panel :title="'@' + item.workAuthor" class="panel-s">
                  <div class="content-box" v-html="item.workFirstHtml">
                    {{item.workFirstHtml}}
                  </div>
                </van-panel>
              </div>
            </van-cell>
          </van-cell-group>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex';

  export default {
    // 父子通信
    props: {
      // 回复消息类型 0-赞， 1-评论
      msgType: {
        type: Number,
        default: 0,
      }
    },
    components:{
    },
    name: 'userList',
    data () {
      return {
        tabTitle: '', // 头部名称
        arrs: [],
        isRefreshLoading: false,  // 下拉重新刷新
        listLoading: false, // 下拉加载更多
        finished: false,
      };
    },
    mounted () {
      let that = this;
      this.arrs = [...this.getImitateMyPraiseAndComments];
      switch (this.msgType) {
        case 0:
          that.tabTitle = '赞'
          break;
        case 1:
          that.tabTitle = '评论'
          break;
        default:
          that.tabTitle = '赞'
      }
    },
    computed: {
      ...mapGetters([
        'getImitateMyPraiseAndComments', // 获取回复消息数据
      ])
    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
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
            userList: [ // 子一级评论/点赞用户列表
                {
                    userId: '',
                    userName: '最新用户',
                    userImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',
                },
                {
                    userId: '',
                    userName: '最新用户',
                    userImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',
                },
            ],
            workId: 'workId001',    // 作品Id
            workAuthor: '作品作者',  // 作品作者
            workFirstHtml: '<p>男：点赞评论html</p>',
            time: '1552838875',
            type: 1,    // 0-点赞作品，1-点赞评论，2-评论内容
            total: 2,   // 点赞/评论 总人数
            comments: '这是一条评论',
            firstUserId: '',    // 最新用户的id，跟userList数组第一个一致
            firstUserName: '最新用户',    // 最新用户的名称
            firstUserImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4', // 最新用户的头像
            commentsId: 'cID000001', // 该评论的Id
            commentsType: 0,  // 评论所属类型， 0-作品，1-文章
        };
        // 异步更新数据
        setTimeout(() => {
          // 每次加载10条
          for (let i = 0; i < 10; i++) {
            this.arrs.push(obj);
          }
          // 加载状态结束
          this.listLoading = false;
          // 数据全部加载完成
          if (this.arrs.length >= 10) {
            this.finished = true;
          }
        }, 500);
      },
      // 查看详情
      seeDetail (item,index) {
        // commentsType: 0,  // 评论所属类型， 0-作品，1-文章
        if (item.commentsType == 0) {
          this.$router.push('replyDetail/'+item.commentsId)
        }else if (item.commentsType === 1) {
          this.$router.push('/articleComments/'+item.commentsId)
        }
      }
    }
  }
</script>
<style lang="css" scoped>
  .panel-s{
    font-size: 0.375rem;
  }
  .content-box{
    padding: 0 0.469rem;
    line-height: 0.625rem;
    font-size: 0.375rem;
  }
  .van-user-item-left{
    display: flex;
    align-items: center;
    width: 60%;
  }
  .van-user-item-right{
    width: 40%;
  }
  .van-user-item-text-info{
    margin-left: 0.2rem;
  }
  .van-autograph{
    max-width: 6rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .van-avatar-small{
    margin: 0 0.156rem 0 0;
  }
</style>
