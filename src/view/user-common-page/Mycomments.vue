<template>
  <div>
    <PraiseAndComments :msgType="1"></PraiseAndComments>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import PraiseAndComments from 'components/common_components/PraiseAndComments';
  export default {
    components:{
      PraiseAndComments,
    },
    name: 'myPraise',
    data () {
      return {
      };
    },
    mounted () {
    },
    computed: {
    },
    methods: {
    }
  }
</script>
<style lang="css" scoped>

</style>
