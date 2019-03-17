<template>
  <div>
    <van-cell-group v-for="(item,index) in getImitateMessage">
      <van-cell class="displayflex">
        <div class="img-zone">
          <span class="van-avatar"><img :src="item.sendUserImg" alt="" class="van-avatar-img"></span>
        </div>
        <div class="contents-zone">
          <div class="flex-space-between">
            <span>{{item.sendUserName}}</span>
            <span>{{item.time}}</span>
          </div>
          <div>
            <span>{{item.contents}}</span>
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
</style>
