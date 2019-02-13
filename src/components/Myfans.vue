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
      <van-swipe-cell :right-width="130" v-for="(item,index) in arrs">
        <van-cell-group>
          <van-cell class="displayflex">
            <div class="displayflex-1 tleft">
              <span class="van-avatar"><img src="../images/slider-pic/slider-pic11.jpeg" alt="" class="van-avatar-img"></span>
            </div>
            <div class="displayflex-1 tright">
              <van-button type="danger" size="mini" @click="addInterest(index)" v-show="item == 0">关注</van-button>
              <van-button type="default" size="mini" @click="cancelInterest(index)" v-show="item == 1">已关注</van-button>
              <van-button type="default" size="mini" @click="cancelInterest(index)" v-show="item == 2">互相关注</van-button>
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

  import { Dialog,Toast } from "vant";
  import Fixednav from './small_components/Fixed_nav';

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
        arrs: [0, 1, 2],
        count: 0,
        isLoading: false,
      };
    },
    mounted () {

    },
    computed: {

    },
    methods: {
      // 添加关注
      addInterest (index){
         Toast('成功关注');
         this.arrs.splice(index,1,1);
      },
      // 取消关注
      cancelInterest (index) {
        Dialog.confirm({
          message: '确定取消关注吗？'
        }).then(() => {
          this.arrs.splice(index,1,0);
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
          this.arrs.push(0);
        }, 500);
      }
    }
  }
</script>
<style lang="css" scoped>
</style>
