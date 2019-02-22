<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="我的粉丝"
      left-text="返回"
      right-text="添加"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 主体内容 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-cell-group v-for="(item,index) in arrs">
        <van-cell class="displayflex">
          <div class="displayflex-1 tleft">
            <span class="van-avatar"><img :src="item.userImg" alt="" class="van-avatar-img"></span>
            <span>{{item.userName}}</span>
          </div>
          <div class="displayflex-1 tright">
            <van-button type="danger" size="mini" @click="addInterest(index)" v-show="item.follow_type == 0">关注</van-button>
            <van-button type="default" size="mini" @click="cancelInterest(index)" v-show="item.follow_type == 1">已关注</van-button>
            <van-button type="default" size="mini" @click="cancelInterest(index)" v-show="item.follow_type == 2">互相关注</van-button>
          </div>
        </van-cell>
      </van-cell-group>
      <p>下拉刷新</p>
    </van-pull-refresh>
    <!-- 固定标签页 -->
    <Fixednav></Fixednav>
  </div>
</template>

<script>

  import { Dialog,Toast } from "vant";
  import Fixednav from './common_components/Fixed_nav';
  import { mapGetters } from 'vuex';

  import "../css/common.css";
  export default {
    components:{
           Fixednav,
           [Dialog.name]:Dialog,
           [Toast.name]:Toast,
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
      this.arrs = [...this.getImitateUserList];
    },
    computed: {
      ...mapGetters([
        'getImitateUserList', // 获取用户列表数据
      ])
    },
    methods: {
      // 添加关注
      addInterest (index){
         Toast('成功关注');
         this.arrs[index].follow_type = 1;
      },
      // 取消关注
      cancelInterest (index) {
        Dialog.confirm({
          message: '确定取消关注吗？'
        }).then(() => {
          this.arrs[index].follow_type = 0;
        });
      },
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
      onClickRight() {
        Toast('按钮');
      },
      // 下拉刷新
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
        }, 500);
      }
    }
  }
</script>
<style lang="css" scoped>
</style>
