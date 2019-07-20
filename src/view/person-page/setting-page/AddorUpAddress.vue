<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="收货地址编辑"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div class="top-space"></div>
    <!-- 新增或收货地址 -->
    <van-address-edit
      :area-list="getAreaList"
      show-postal
      show-delete
      show-set-default
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>
<script>
  import Vue from 'vue';
  import { AddressEdit } from 'vant';
  import { mapGetters } from 'vuex';
  Vue.use(AddressEdit);
  export default {
    components:{
    },
    name: 'addorUpAddress',
    data () {
      return {
      };
    },
    mounted () {

    },
    computed: {
      ...mapGetters([
        'getAreaList',
      ])
    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
      onSave() {
        this.$toast('save');
      },
      onDelete() {
        this.$toast('delete');
      },
    }
}
</script>

<style lang="less" scoped>
  .van-popup .van-area{
    height: 500px;
  }
</style>
