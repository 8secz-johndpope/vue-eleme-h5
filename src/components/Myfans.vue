<template>
  <div>
    <van-swipe-cell :right-width="65">
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
      </van-cell-group>
      <span slot="right">删除00</span>
    </van-swipe-cell>
    <van-swipe-cell :right-width="65" :on-close="onClose">
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
      </van-cell-group>
      <span slot="right">删除</span>
    </van-swipe-cell>
    <Fixednav></Fixednav>
  </div>
</template>

<script>

  import { Dialog } from "vant";
  import Fixednav from './small_components/Fixed_nav';

import "../css/common.css";
export default {
  components:{
         Fixednav,
         // [Swipe.name]:Swipe,
         // [SwipeCell.name]:SwipeCell,
         // [CellGroup.name]:CellGroup,
         // [Cell.name]:Cell,
         [Dialog.name]:Dialog,
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
    onClose (clickPosition, instance) {
      switch (clickPosition) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？'
          }).then(() => {
            instance.close();
          });
          break;
      }
    }
  }
}
</script>
<style lang="css" scoped>
</style>
