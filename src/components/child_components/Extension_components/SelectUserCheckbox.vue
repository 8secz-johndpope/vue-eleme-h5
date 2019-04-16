<template>
  <div>
    <van-checkbox-group v-model="checkboxResult">
      <van-cell-group>
        <van-cell
          v-for="(item, index) in checkboxList"
          clickable
          :key="item"
          @click="toggle(index)"
          class="checkbox-cell"
          >
          <template slot="title">
            <div class="tleft van-user-item-left">
              <div class="van-avatar-large"><img :src="checkboxArr[0].userImg" alt="" class="van-avatar-img"></div>
              <div class="flex-column van-user-item-text-info">
                <span class="van-userName">{{checkboxArr[0].userName}}</span>
                <span>粉丝：{{COMMONFUNC.formatterW(checkboxArr[0].fansNum)}}</span>
                <span class="van-autograph">{{checkboxArr[0].autograph}}</span>
              </div>
            </div>
          </template>
          <van-checkbox :name="item" ref="checkboxes" class="van-user-item-right"/>
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>
  </div>
</template>

<script>
  export default {
    props: {
      // 复选框内容
      'checkboxArr':{
        type: Array,
        default: [],
      }
    },
    components:{
    },
    name: 'selectUserCheckbox',
    data () {
      return {
        checkboxList: ['数码', '美妆', '音乐', '教育', '交通'],
        checkboxResult: ['数码', '美妆'],
      };
    },
    mounted () {
    },
    computed: {
    },
    methods: {
      // 复选框
      toggle(index) {
        this.$refs.checkboxes[index].toggle();
      }
    }
  }
</script>
<style lang="css" scoped>
  .checkbox-cell{
    display: flex;
    justify-content: space-between;
  }
  .van-user-item-left{
    display: flex;
    align-items: center;
    width: 170%;
  }
  .van-user-item-right{
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
  }
  .van-autograph{
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
