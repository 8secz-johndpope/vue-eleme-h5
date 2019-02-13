<template>
  <div>
    <van-tabs v-model="active" type="card" @click="onClick" class="tab">
      <van-tab title="推荐">
        <Conversation :composition="composition"></Conversation>
      </van-tab>
      <van-tab title="好友">
        <Conversation :composition="composition"></Conversation>
      </van-tab>
    </van-tabs>
    <Fixednav></Fixednav>
  </div>
</template>

<script>
import Fixednav from './small_components/Fixed_nav';
import Conversation from './small_components/Conversation';
export default {
  name: 'myzone',
  data () {
    return {
      uname: '',
      active: 0,
      show: false,
      composition: [  // 作品
        {
          userName: '',
          userId: '',
          id: 'zs20190213',
          author: '张三',
          time: '2019.02.13',
          likers: 9999,
          isLike: false,
          contentHtml: '<p>男：justify-content: flex-start | flex-end | center | space-between | space-around;</p><p>女：xxx</p><p>男：xxx</p>',
          content: 'justify-content: flex-start | flex-end | center | space-between | space-around;xxx;xxx',
        },
      ]
    };
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    onClick(index, title) {
      this.$toast(title);
    },
  },
  components: {
    Fixednav,
    Conversation,
  }
};
</script>

<style lang="css" scoped>
  

</style>
