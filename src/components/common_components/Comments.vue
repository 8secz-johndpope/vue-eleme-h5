<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="我也是底线的"
      @load="onLoad"
    >
      <van-cell-group v-for="(item,index) in arrs" class="van-cell-group">
        <van-cell class="displayflex">
          <div class="img-zone">
            <span class="van-avatar"><img :src="item.sendUserImg" alt="" class="van-avatar-img"></span>
          </div>
          <div class="contents-zone">
            <!-- 评论者头像以及评论数 -->
            <div class="flex-space-between">
              <span>@{{item.sendUserName}}</span>
              <div @click="praise(index)" class="praise">
                <i class="fa fa-thumbs-o-up thumb-icon" :class="{ 'red-color': item.isPraised }" aria-hidden="true"></i>
                <span>{{COMMONFUNC.formatterW(item.praiseNum)}}</span>
              </div>
            </div>
            <!-- 评论内容 -->
            <div class="comments-zone">
              <span class="comments-contents" v-if="item.contentsStatus == 0">{{item.contents}}</span>
              <span class="comments-contents deletedContents" v-if="item.contentsStatus == 1">#该内容已被删除（涉黄涉反等后台支持删除）</span>
            </div>
            <!-- 评论时间，地点 -->
            <div class="flex-space-between">
              <div>
                <span class="reply-operate">{{item.position}}</span>
                <span class="reply-operate">{{COMMONFUNC.commentsTimeFormatter(item.time)}}</span>
                <span class="reply-operate" @click="replyComments(item.sendUserName, index)" v-show="item.isShowReply">回复TA</span>
                <span class="reply-operate" @click="cancelReply(item.sendUserName, index)" v-show="!item.isShowReply">取消回复</span>
              </div>
              <div>
                <van-icon name="more-o" />
              </div>
            </div>
            <!-- 回复内容 -->
            <div class="reply-zone" v-if="item.childLength !== 0">
              <div v-for="(c_item, c_index) in item.child" class="reply-item">
                <div class="flex-space-between">
                  <div>
                    <span class="van-avatar-small"><img :src="c_item.childUserImg" alt="" class="van-avatar-img"></span>
                    <span>@{{c_item.childUserName}}</span>
                  </div>
                  <div @click="praise(index)" class="praise">
                    <i class="fa fa-thumbs-o-up thumb-icon" :class="{ 'red-color': c_item.childIsPraised }" aria-hidden="true"></i>
                    <span>{{COMMONFUNC.formatterW(c_item.childPraiseNum)}}</span>
                  </div>
                </div>
                <div class="reply-child-zone">
                  <span v-if="c_item.childContentsStatus == 0">{{c_item.childCommentsContents}}</span>
                  <span class="deletedContents" v-if="c_item.childContentsStatus == 1">#该内容已被删除（涉黄涉反等后台支持删除）</span>
                  <span class="reply-operate">&nbsp;{{COMMONFUNC.commentsTimeFormatter(c_item.childTime)}}</span>
                  <span class="reply-operate" @click="childReplyComments(c_item.childUserName, index, c_index)" v-show="c_item.childIsShowReply">回复TA</span>
                  <span class="reply-operate" @click="childCancelReply(c_item.childUserName, index, c_index)" v-show="!c_item.childIsShowReply">取消回复</span>
                </div>
              </div>
              <div v-if="item.childLength >=2 ">
                <span class="reply-operate" @click="seeMoreReply(index)">展开{{item.childLength}}条回复>></span>
              </div>
            </div>
          </div>
        </van-cell>
      </van-cell-group>
    </van-list>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <!-- 固定评论区 -->
    <FixedCommentsZone :replyWho="replyWho"></FixedCommentsZone>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import FixedCommentsZone from './FixedCommentsZone';
  export default {
    name: 'myfans',
    data () {
      return {
        loading: false,
        finished: false,
        replyWho: '', // 回复谁
        arrs: [], // 用来接收 用户列表数据,用来动态新增修改值
      };
    },
    components: {
      FixedCommentsZone,
    },
    mounted () {
      this.arrs = this.getImitateComments;
    },
    computed: {
      ...mapGetters([
        'getImitateComments', // 获取用户列表数据
      ]),
      isLogin () {
        if(this.COMMONFUNC.getCookieValue("token") == 'isLogin'){
          return true;
        }else {
          return false;
        }
      },
    },
    methods: {
      // 点赞
      praise: function (index) {
        let that = this;
        if(that.isLogin){
          if (that.arrs[index].isPraised) {
            that.arrs[index].isPraised = false;
            that.arrs[index].praiseNum -= 1;
          }else{
            that.arrs[index].isPraised = true;
            that.arrs[index].praiseNum += 1;
          }
        }else {
          that.$dialog.confirm({
            title: '未登录',
            message: '登录后才可以点赞哦',
            confirmButtonText: '立即登录'
          }).then(() => {
            that.$router.push({  //核心语句
              path:'/login'   //跳转的路径
            })
          }).catch(() => {
            // on cancel
          });
        }
      },
      // 下拉加载更多
      onLoad() {
        let obj = {
          isOfficial: 0,  // 是否官方，0-是，1-否
          vipLevel: 1,  // VIP等级，后续可能做vip评论高亮等处理
          sendUserImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',   // 评论者头像
          sendUserName: '评论者名称', // 评论者的用户名
          time: '1552833875',   // 评论时间戳
          contents: '评论内容',  // 评论内容
          contentsStatus: 0,  // 评论内容状态，0-正常，1-被删除， 因为有的评论发动等被后台删除
          praiseNum: 10000, // 评论数
          isPraised: 0,    // 是否已点赞， 0-是， 1-否
          commentsId: 'mId000001',  // 评论Id
          position: '中国·深圳·南山', // 评论者所在位置
          Id: 'mId000001',  // 消息Id
          postId: 'postId0000121', // 所评论文章，对话的id
          childLength: 0,
          child: [],
        };
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 2; i++) {
            this.arrs.push(obj);
          }
          // 加载状态结束
          this.loading = false;
          // 数据全部加载完成
          if (this.arrs.length >= 10) {
            this.finished = true;
          }
        }, 500);
      },
      // 查看更多回复
      seeMoreReply (index) {
        let that = this;
        let obj = {
          childId: 'mId000001', // 子级二级评论id,
          childUserId: 'mId000001', // 子级二级评论者id,
          childUserImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',   // 评论者头像
          childTime: '1552833875',   // 子级评论时间戳，子级评论按照时间先后
          childPraiseNum: 99,   // 子级评论评论数,评论说多的前三条放在最前面，后面的按照时间先后顺序
          childUserName: '二级评论员', // 子级二级评论者id,
          childCommentsNum: 12, // 子级二级评论数,
          childCommentsContents: '我是二级评论内容', // 子级二级评论内容,
          childContentsStatus: 0,  // 评论内容状态，0-正常，1-被删除， 因为有的评论发动等被后台删除
        };
        for (let i = 0; i < 3; i++) {
          that.arrs[index].child.push(obj)
        }
      },
      // 评论回复某人
      replyComments (userName, index) {
        this.replyWho = '@'+userName;
        this.arrs[index].isShowReply = false;
      },
      // 取消回复
      cancelReply (userName, index) {
        this.replyWho = '';
        this.arrs[index].isShowReply = true;
      },
      // 二级 评论回复某人
      childReplyComments (userName, index, c_index) {
        this.replyWho = '@'+userName;
        this.arrs[index].child[c_index].childIsShowReply = false;
      },
      // 二级 取消回复
      childCancelReply (userName, index, c_index) {
        this.replyWho = '';
        this.arrs[index].child[c_index].childIsShowReply = true;
      },
    }
  }
</script>
<style lang="css" scoped>
  .displayflex{
    padding: 0 0.4rem;
  }
  .van-cell-group{
    padding: 0.156rem 0;
  }
  .img-zone{
    line-height: 1.2rem;
  }
  .contents-zone{
    margin-left: 10px;
    width: calc(100% - 40px);
  }
  .comments-zone{
    padding: 0 0.8rem 0 0;
  }
  .comments-contents{
    font-size: 0.438rem;
  }
  .deletedContents{
    color: rgb(144, 154, 164);
  }
  .reply-operate{
    font-size: 0.375rem;
    color: rgb(144, 154, 164);
    margin: 0 0.1rem 0 0;
  }
  .reply-zone{
    background-color: #F5F5F5;
    padding: 0.1rem;
  }
  .reply-child-zone{
    padding: 0 0.8rem 0 0.9rem;
  }
  .thumb-icon{
    margin: 0 auto;
    font-size: 0.5rem;
  }
  .praise{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
</style>
