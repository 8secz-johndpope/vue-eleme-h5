<template>
  <div>
    <div class="orientation-content-box">
      <div class="cell-item">
        性别（单选）
        <van-button size="mini" plain v-for="(item,index) in sex" @click="selectSex(item,index)" :type="currentSex == index ? 'danger' : 'default' ">{{item.name}}</van-button>
      </div>
      <div class="cell-item">
        年龄（多选）
        <van-button size="mini" plain v-for="(item,index) in age" @click="selectAge(item,index)" :type="currentAge.indexOf(index) !== -1 ? 'danger' : 'default' ">{{item.name}}</van-button>
      </div>
      <div class="cell-item">
        地区（单选）
        <van-button size="mini" plain @click="areaPopShow = true" type="danger" class="address-btn">{{address}}</van-button>
      </div>
    </div>
    <!-- 发货地址设置 -->
    <van-popup v-model="areaPopShow" position="bottom" :overlay="true">
      <van-area :area-list="getAreaList" value="440303" :item-height="80" @confirm="confirmArea" @cancel="areaPopShow=false" />
    </van-popup>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    components:{
    },
    name: 'orientation',
    data () {
      return {
        currentSex: 0,  // 当前选择性别
        currentAge: [0],  // 当前选择年龄
        sex: [
          {
            name: '不限',
            value: 0,
          },
          {
            name: '男',
            value: 1,
          },
          {
            name: '女',
            value: 2,
          },
        ],
        age: [
          {
            name: '不限',
            value: 0,
          },
          {
            name: '18-23岁',
            value: 1,
          },
          {
            name: '14-40岁',
            value: 2,
          },
          {
            name: '40岁+',
            value: 3,
          },
        ],
        areaPopShow: false, // 地址栏弹框
        address: '广东省·深圳市·罗湖区', // 地址
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
      // 选择性别
      selectSex (item,index) {
        this.currentSex = index;
      },
      // 选择年龄
      selectAge (item,index) {
        if (index === 0) {
          this.currentAge = [0]
        }else {
          if (this.currentAge.indexOf(index) !== -1) {  // 当前存在，重复点击，去除
            this.currentAge = this.currentAge.filter(t => t !== index);
            if (this.currentAge.length === 0) { // 没有选的情况下，默认是0-不限
              this.currentAge.push(0);
            }
          }else {
            this.currentAge = this.currentAge.filter(t => t !== 0)
            this.currentAge.push(index);
          }
        }
      },
      // 确认地址
      confirmArea (e) {
        this.areaPopShow = false;
        this.address = e[0].name+'·'+e[1].name+'·'+e[2].name;
      },
    }
  }
</script>
<style lang="css" scoped>
  .orientation-content-box{
    color: #969799;
    padding: 0 0.4rem;
  }
  .cell-item{
    height: 0.7rem;
    display: flex;
    align-items: center;
  }
  .address-btn{
    width: auto;
    padding: 0 0.1rem;
  }
</style>
