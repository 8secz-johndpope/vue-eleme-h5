<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="收货地址列表"
      left-arrow
      @click-left="onClickLeft"
      right-text="保存并使用"
      @click-right="onClickRight"
      fixed
    />
    <div class="top-space"></div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>
<script>
  import Vue from 'vue';
  export default {
    components:{
    },
    name: 'receivingAddress',
    data () {
      return {
        chosenAddressId: '1',
        list: [
          {
            id: '1',
            name: '张三',
            tel: '13000000000',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
          },
          {
            id: '2',
            name: '李四',
            tel: '1310000000',
            address: '浙江省杭州市拱墅区莫干山路 50 号'
          }
        ],
      };
    },
    mounted () {

    },
    computed: {

    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
      // 保存收货地址
      onClickRight () {
        this.$toast('保存并使用选中的收货地址')
        this.COMMONFUNC.goBack();
      },
      onAdd() {
        this.$router.push({
          name: 'addorUpAddress',
          params: '',
        })
      },
      onEdit(item, index) {
        this.$router.push({
          name: 'addorUpAddress',
          params: '',
        })
      }
    }
}
</script>

<style lang="less" scoped>

</style>
