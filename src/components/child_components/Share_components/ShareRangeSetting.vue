<template>
  <div class="select-content">
    <p class="flex-center select-content-item" :class=" currentPublishValue == item.value ? 'select-content-item-selected' : '' "
      v-for="(item,index) in publishTypeList" @click="changePublishType(item)">
        {{item.name}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'shareRangeSetting',
   // 父子通信
  props: {
  },
  data () {
    return {
      currentPublishValue: 0,  // 当前发布类型， 0-公开，默认
      publishTypeList: [ // 选择分享类型
        {
          name: '公开',
          value: 0,
        },
        {
          name: '相互关注',
          value: 1
        },
        {
          name: '仅自己可见',
          value: 2
        },
      ],
    };
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    // 选择发布类型
    changePublishType(item) {
      this.$toast('设置成功')
      this.$emit('on-finished-select-share-range', '')
      this.currentPublishValue = item.value;
    },
  },
  watch: {
  }
};
</script>

<style lang="less" scoped>
  .select-content-item{
    height: 1rem;
    font-size: 0.426667rem;
  }
  .select-content-item-selected{
    background-color: #FEF2F4;
    color: #C13B66;
  }
</style>
