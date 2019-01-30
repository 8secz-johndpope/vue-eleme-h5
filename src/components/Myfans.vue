<template>
  <div>
    <van-swipe-cell :right-width="130">
      <van-cell-group>
        <van-cell class="displayflex">
          <div class="displayflex-1 tleft">
            <span class="van-avatar"><img src="../images/slider-pic/slider-pic11.jpeg" alt="" class="van-avatar-img"></span>
          </div>
          <div class="displayflex-1 tright">
            <van-button type="danger" size="mini" @click="addInterest">关注</van-button>
          </div>
        </van-cell>
      </van-cell-group>
      <span slot="right">删除</span>
    </van-swipe-cell>
    <van-swipe-cell :right-width="130">
      <van-cell-group>
        <van-cell class="displayflex">
          <div class="displayflex-1 tleft">
            <span class="van-avatar"><img src="../images/slider-pic/slider-pic11.jpeg" alt="" class="van-avatar-img"></span>
          </div>
          <div class="displayflex-1 tright">
            <van-button type="default" size="mini" @click="cancelInterest">已关注</van-button>
          </div>
        </van-cell>
      </van-cell-group>
      <span slot="right">删除</span>
    </van-swipe-cell>
    <van-swipe-cell :right-width="130">
      <van-cell-group>
        <van-cell class="displayflex">
          <div class="displayflex-1 tleft">
            <span class="van-avatar"><img src="../images/slider-pic/slider-pic11.jpeg" alt="" class="van-avatar-img"></span>
          </div>
          <div class="displayflex-1 tright">
            <van-button type="default" size="mini" @click="cancelInterest">互相关注</van-button>
          </div>
        </van-cell>
      </van-cell-group>
      <span slot="right">删除</span>
    </van-swipe-cell>
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
        msg: '1'
      };
    },
    mounted () {

    },
    computed: {

    },
    methods: {
      // 添加关注
      addInterest (instance){
         Toast('成功关注');
      },
      // 取消关注
      cancelInterest (clickPosition, instance) {
        Dialog.confirm({
          message: '确定取消关注吗？'
        }).then(() => {
          instance.close();
        });
      }
    }
  }
</script>
<style lang="css" scoped>
</style>
