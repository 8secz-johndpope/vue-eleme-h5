<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="收货地址编辑"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 新增或收货地址 -->
    <van-address-edit
      :area-list="getAreaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
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
        searchResult: []
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
      onChangeDetail(val) {
        if (val) {
          this.searchResult = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }];
        } else {
          this.searchResult = [];
        }
      }
    }
}
</script>

<style lang="less" scoped>

</style>
