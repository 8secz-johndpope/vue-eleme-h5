<template>
  <div>
    <div class="daren-content-box">
      <div class="cell-item">
        地区（单选）
        <van-button size="mini" plain @click="darenSelectPop = true" type="danger" class="address-btn">{{address}}</van-button>
      </div>
    </div>
    <!--达人选择弹框 -->
    <van-popup v-model="darenSelectPop" position="bottom" :overlay="true">
      <div class="flex-space-between">
        <span>取消</span>
        <span>头部</span>
        <span>确认</span>
      </div>
      <div>
        <van-search placeholder="请输入搜索关键词" v-model="searchValue" />
      </div>
      <div class="flex-space-between">
        <div class="select-zone-left">
          <van-badge-group :active-key="activeKey" @change="onChangeBadge">
            <van-badge title="标签名称" />
            <van-badge title="标签名称" info="8" />
            <van-badge title="标签名称" info="99" />
            <van-badge title="标签名称" info="99+" />
          </van-badge-group>
        </div>
        <div class="select-zone-right">
          <van-checkbox-group v-model="checkboxResult">
            <van-cell-group>
              <van-cell
                v-for="(item, index) in checkboxList"
                clickable
                :key="item"
                :title="`复选框 ${item}`"
                @click="toggle(index)"
                >
                <van-checkbox :name="item" ref="checkboxes" />
              </van-cell>
            </van-cell-group>
          </van-checkbox-group>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapGetters } from 'vuex';
  import { Badge, BadgeGroup } from 'vant';
  Vue.use(Badge);
  Vue.use(BadgeGroup);
  export default {
    components:{
    },
    name: 'daren',
    data () {
      return {
        searchValue: '',  // 搜索内容
        darenSelectPop: true, // 达人选择弹框
        address: '广东省·深圳市·罗湖区', // 地址
        activeKey: 0,
        checkboxList: ['a', 'b', 'c'],
        checkboxResult: ['a', 'b']
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
      // 确认地址
      confirmArea (e) {
        this.darenSelectPop = false;
        this.address = e[0].name+'·'+e[1].name+'·'+e[2].name;
      },
      // 切换徽章
      onChangeBadge(key) {
        this.activeKey = key;
      },
      // 复选框
      toggle(index) {
        this.$refs.checkboxes[index].toggle();
      }
    }
  }
</script>
<style lang="css" scoped>
  .daren-content-box{
    color: #969799;
    padding: 0 0.4rem;
  }
  .cell-item{
    height: 0.7rem;
    display: flex;
    align-items: center;
  }
  .select-zone-left{
    width: 30%;
  }
  .select-zone-right{
    width: 70%;
  }
</style>
