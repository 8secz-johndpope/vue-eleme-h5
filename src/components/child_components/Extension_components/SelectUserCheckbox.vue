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
      },
      // 徽章索引
      'activeIndex': {
        type: Number,
        default: 0,
      },
      // 父徽章的
      'badgeArrsParent': {
        type: Array,
        default: [],
      }
    },
    components:{
    },
    name: 'selectUserCheckbox',
    data () {
      return {
        checkboxList: [], // 默认列表
        checkboxResult: [], // 选中结果
        userResultList: [], // 传递给父组件的结果
      };
    },
    mounted () {
      this.getUserListByIndex(this.checkboxArr)  // 获取用户列表
    },
    computed: {
      totalSelectChild: function () {
        let sum = 0;
        this.badgeArrsParent.forEach( (val, index) => {
          sum += val.badgeSelected;
        })
        return sum
      }
    },
    methods: {
      // 复选框
      toggle(index) {
        let that = this;
        let flag = true;
        let flagIndex = 0;
        // 过滤掉已含有的用户
        if (that.userResultList.length !== 0) {
          that.userResultList.forEach( (v,i) => {
            if (v.index === index) {
              flag = false;
              flagIndex = i;
            }
          })
        }
        if (flag) {
          if (that.totalSelectChild >= 10) {
            that.$toast('最多添加10个')
            return;
          }
          let obj = {
            index: index,
            userId : that.checkboxArr[index].userId,
            userName : that.checkboxArr[index].userName,
            userImg : that.checkboxArr[index].userImg,
          }
          that.userResultList.push(obj);
        }else {
          that.userResultList.splice(flagIndex, 1)
        }
        that.$refs.checkboxes[index].toggle();
        that.$emit('chlidSelectUser',{ userList: that.userResultList, checkboxResult: that.checkboxResult })
      },
      // 获取用户列表
      getUserListByIndex (badgeUserList) {
        let that = this;
        that.checkboxList = [];
        // 当前选中的用户，通过id唯一标识
        for (var i = 0; i < badgeUserList.length; i++) {
          that.checkboxList.push('bdId' + that.activeIndex + 'id000' + i.toString());
        };
      }
    },
    watch:{
      // 监听当前用户列表，左侧徽章切换的时候，用户列表会随之更换
      checkboxArr (newData,oldData) {
        this.checkboxResult = this.badgeArrsParent[this.activeIndex].currentCheckboxResult;
        this.userResultList = this.badgeArrsParent[this.activeIndex].currentBadgeSelectedList;
        this.getUserListByIndex(newData) // 获取用户列表
      }
    },
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
