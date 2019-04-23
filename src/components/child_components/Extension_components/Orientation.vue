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
        <div v-if="address == '' ">
          <van-button size="mini" plain type="danger" class="address-btn">不限</van-button>
          <van-button size="mini" plain class="address-btn" @click="areaPopShow = true">添加+</van-button>
        </div>
        <div class="hasSelectedAddress" v-else>
          <van-button size="mini" plain @click="areaPopShow = true" type="danger" class="address-btn">{{address}}</van-button>
          <van-icon name="close" class="close-icon" @click="deleteAddress"/>
        </div>
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
        address: '', // 地址，默认不限
        areaPopShow: false, // 地址栏弹框
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
      };
    },
    mounted () {
    },
    computed: {
      ...mapGetters([
        'getAreaList',
      ]),
      // 自定义播放预计播放指数
      orientationBasicMultiplePlaybackVolume () {
        if (this.currentSex === 0 && this.currentAge.toString() === [0].toString() && this.address === '') {
          return 1000
        }else if (this.currentSex === 0 && (this.currentAge.toString() !== [0].toString() || this.address !== '')) {
          return 500
        }else if(this.currentSex === 1){
          return 800
        }else if (this.currentSex === 2) {
          return 200
        }
      }
    },
    methods: {
      // 选择性别
      selectSex (item,index) {
        this.currentSex = index;
        this.$emit('childMultiple',this.orientationBasicMultiplePlaybackVolume);
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
        this.$emit('childMultiple',this.orientationBasicMultiplePlaybackVolume);
      },
      // 确认地址
      confirmArea (e) {
        this.areaPopShow = false;
        this.address = e[0].name+'·'+e[1].name+'·'+e[2].name;
        this.$emit('childMultiple',this.orientationBasicMultiplePlaybackVolume);
      },
      deleteAddress () {
        this.address = '';
        this.$emit('childMultiple',this.orientationBasicMultiplePlaybackVolume);
      }
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
  .hasSelectedAddress{
    margin: 0 0.1rem;
    position: relative;
  }
  .close-icon{
    position: absolute;
    top: 0.1rem;
    right: -0.4rem;
    font-size: 0.373333rem;
  }
</style>
