<template>
  <div>
    <van-cell-group v-for="(item,index) in getImitateMessage">
      <van-cell class="displayflex">
        <div class="img-zone">
          <span class="van-avatar"><img :src="item.sendUserImg" alt="" class="van-avatar-img"></span>
        </div>
        <div class="contents-zone">
          <div class="flex-space-between">
            <span>@{{item.sendUserName}}</span>
            <span><i class="fa fa-thumbs-o-up thumb-icon" :class="{ 'red-color': item.isLike }" aria-hidden="true"></i>200</span>
          </div>
          <div>
            <span class="comments-contents">{{item.contents}}</span><span class="publish-time">{{COMMONFUNC.commentsTimeFormatter(item.time)}}</span>
          </div>
        </div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'myfans',
    data () {
      return {
        msg: '1',
        arrs: [],
        count: 0,
        isLoading: false,
        messageActive: -1,
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
          this.isLoading = false;
        }, 500);
      },
       onClose(clickPosition, instance){
        this.$toast('删除成功'+instance.$el.dataset.id);
        instance.close();
      }
    }
  }
</script>
<style lang="css" scoped>
  .topTabbar{
    position: initial;
  }
  .displayflex{
    padding: 0 0.4rem;
  }
  .img-zone{
    line-height: 1.2rem;
  }
  .contents-zone{
    margin-left: 10px;
    width: calc(100% - 40px);
  }
  .comments-contents{
    font-size: 0.438rem;
  }
  .publish-time{
    font-size: 0.375rem;
    color: rgb(144, 154, 164);
    margin: 0 0 0 0.312rem;
  }
  .thumb-icon{
    margin: 0 0.156rem 0 0;
  }
</style>
