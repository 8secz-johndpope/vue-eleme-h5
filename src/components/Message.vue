<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="消息"
    />

    <!-- 主体内容 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-swipe-cell :right-width="130" v-for="(item,index) in arrs" :on-close="onClose" :data-id="item.messageId">
        <van-cell-group>
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
        <span slot="right">删除</span>
      </van-swipe-cell>
      <p>下拉刷新</p>
    </van-pull-refresh>
    <!-- 固定标签页 -->
    <Fixednav></Fixednav>
  </div>
</template>

<script>

  import { Dialog } from "vant";
  import Fixednav from './small_components/Fixed_nav';
  import { mapGetters } from 'vuex';

  import "../css/common.css";
  export default {
    components:{
           Fixednav,
           [Dialog.name]:Dialog,
        },
    name: 'myfans',
    data () {
      return {
        msg: '1',
        arrs: [],
        count: 0,
        isLoading: false,
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
