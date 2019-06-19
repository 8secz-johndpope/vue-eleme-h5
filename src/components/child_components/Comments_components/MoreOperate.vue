<template>
  <div class="select-content">
    <p class="flex-center select-content-item" @click="popupReply()">回复</p>
    <p class="flex-center select-content-item"
      v-clipboard:copy="optObj.copyText"
      v-clipboard:success="onCopyUserNo"
      v-clipboard:error="onCopyUserError">
      复制
    </p>
    <p class="flex-center select-content-item red-color" @click="accusation()">举报</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'moreOperate',
    // 父子通信
    props: {
      // 操作对象
      optObj: {
        type: Object,
        default: {},
      }
    },
    data () {
      return {

      };
    },
    components: {
    },
    mounted () {
    },
    computed: {
    },
    methods: {
      // 弹框回复
      popupReply () {
        this.$emit('on-after-more-operate', true, this.optObj)
        this.moreOptPopup = false;
      },
      // 复制成功
     onCopyUserNo: function (e) {
       this.$emit('on-after-more-operate', false, this.optObj)
       this.$toast('复制成功！')
     },
     // 复制失败
     onCopyUserError: function (e) {
       this.$emit('on-after-more-operate', false, this.optObj)
       this.$toast('复制失败！')
     },
     // 举报
     accusation () {
       this.$router.push('/accusation')
     }
    }
  }
</script>
<style lang="css" scoped>
  .select-content{
    width: 100%;
    text-align: center;
    padding: 0 0 0.2rem 0;
  }
  .select-content-item{
    height: 1.2rem;
    font-size: 0.426667rem;
    border-bottom: 1px solid #c9c9c9;
  }
  .select-content-item:last-child{
    border-bottom: 0;
  }
</style>
