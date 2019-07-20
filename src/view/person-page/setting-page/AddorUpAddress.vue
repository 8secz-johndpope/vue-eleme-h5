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
      @save="onSave"
      @delete="onDelete"
    >
      <template slot="default">
        <van-cell-group>
          <van-switch-cell v-model="isDefaultAddress" title="设为默认收货地址" size="50px" />
        </van-cell-group>
      </template>
    </van-address-edit>
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
        isDefaultAddress: true,  // 设为默认收货地址
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
