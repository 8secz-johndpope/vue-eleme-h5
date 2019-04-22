<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="新增商品"
      left-text="返回"
      right-text="提交"
      :fixed="true"
      left-arrow
      @click-left="onClickLeft"
      @click-right="addOrUpdate"
    />
    <div class="van-content-box">
      <van-notice-bar mode="closeable">
        注意：带*为必填内容，价格默认是人民币
      </van-notice-bar>
      <!-- 输入框组 商品名称，价格，原价格，数量，角标，发货地 -->
      <van-cell-group>
        <van-field
        v-model="goodsName"
        required
        clearable
        label="商品名称"
        placeholder="请输入商品名称"
        />
        <van-field
        v-model="goodsPrice"
        required
        clearable
        type="number"
        label="商品价格"
        placeholder="请输入商品价格"
        />
        <van-field
        v-model="goodsOriginalPrice"
        clearable
        label="商品原价"
        type="number"
        placeholder="请输入商品原价"
        />
        <van-field
        v-model="goodsNum"
        clearable
        required
        label="商品数量"
        type="number"
        placeholder="请输入商品数量"
        />
        <van-field
        v-model="goodsCornerMarker"
        clearable
        label="商品角标"
        right-icon="question-o"
        @click-right-icon="$toast('推荐名称：推荐，精品，热卖等')"
        placeholder="长度不得超过四个字"
        />
      </van-cell-group>
      <!-- 标签组 -->
      <div class="dec flex-space-between">
        <span>商品标签（选填)，最多3个，长度不得超过六个字</span>
        <van-icon name="question-o" class="question-icon" @click="$toast('如：满100减5')" />
      </div>
      <van-cell-group>
        <van-field
          v-model="goodsTag"
          center
          clearable
          label="商品标签"
          placeholder="请输入商品标签"
        >
          <van-button slot="button" size="small" type="danger" @click="addGoodsTag">添加</van-button>
        </van-field>
      </van-cell-group>
      <div class="cellItem" v-if="goodsTagArr.length !== 0">
        <span>已添加标签</span>
        <div v-for="(item,index) in goodsTagArr" class="tagItem">
          <van-tag type="danger">{{item}}</van-tag>
          <van-icon name="close" class="deleteTag" @click="deleteGoodsTag(item, index)"/>
        </div>
      </div>
      <div class="dec">
        <span>*商品运费</span>
      </div>
      <!-- 运费按钮切换 -->
      <van-radio-group v-model="goodsFreightRadio">
        <van-cell-group>
          <van-cell title="免运费" clickable @click="goodsFreightRadio = '1'">
            <van-radio name="1" />
          </van-cell>
          <van-cell title="自定义运费" clickable @click="goodsFreightRadio = '2'">
            <van-radio name="2" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
      <!-- 自定义运费 -->
      <div v-show="goodsFreightRadio === '2' ">
        <div class="dec">
          <span>*自定义运费</span>
        </div>
        <van-cell-group>
          <van-field
          v-model="goodsFreight"
          required
          clearable
          label="运费价格"
          type="number"
          placeholder="请输入运费价格"
          />
          <van-field
          v-model="goodsFreightRemark"
          clearable
          label="运费备注"
          placeholder="商品运费备注选填"
          />
        </van-cell-group>
      </div>

      <div class="flex-space-between dec">
        <span>商品描述（选填）</span>
        <span>{{goodsDec.length}}/200</span>
      </div>
      <!-- 详细描述商品 -->
      <van-cell-group>
        <van-field
        v-model="goodsDec"
        type="textarea"
        placeholder="详细描述商品"
        rows="3"
        autosize
        class="cellDiv"
        />
      </van-cell-group>
      <div class="dec">
        <span>*封面图片</span>
      </div>
      <!-- 封面图片上传 -->
      <van-cell size="large" class="cellDiv">
        <van-uploader :after-read="onRead" accept="image/gif, image/jpeg">
          <van-icon name="photograph" />
        </van-uploader>
      </van-cell>
      <div class="dec">
        <span>*详情轮播图片（最少两张，最多五张）</span>
      </div>
      <!-- 详情轮播图片上传 -->
      <van-cell size="large" class="cellDiv">
        <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple>
          <van-icon name="photograph" />
        </van-uploader>
      </van-cell>
    </div>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'addOrUpdateCommodity',
    data () {
      return {
        goodsName: '', // 商品名称
        goodsPrice: null, // 商品价格
        goodsOriginalPrice: null, // 商品原价
        goodsCornerMarker: '', // 商品角标
        goodsNum: 0, // 商品数量
        goodsFreightRadio: '1', // 商品运费类型
        goodsFreight: '', // 商品运费
        goodsFreightRemark: '', // 运费备注
        goodsDec: '', // 商品描述
        goodsTag: '', // 商品标签
        goodsTagArr: [],  // 商品标签组
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
      onRead(file) {
        console.log(file);
        this.$toast('上传成功')
      },
      // 提交商品
      addOrUpdate () {
        this.$toast('提交成功');
        this.goodsDec = '';
      },
      // 添加标签
      addGoodsTag () {
        if (this.goodsTag == '') {
          this.$toast('标签不能为空');
        }else if (this.goodsTagArr.length >= 3) {
          this.$toast('最多添加三个标签');
          this.goodsTag = '';
        }else {
          this.goodsTagArr.push(this.goodsTag);
          this.goodsTag = '';
        }
      },
      // 删除商品标签
      deleteGoodsTag (item, index) {
        this.goodsTagArr.splice(index, 1);
      },
    },
    watch: {
      // 商品描述长度
      goodsDec: function (curVal, oldVal) {
        if (curVal.length > 200) {
          this.goodsDec = this.goodsDec.slice(0, 200);
        }
      },
      // 商品标签长度
      goodsTag: function (curVal, oldVal) {
        if (curVal.length > 6) {
          this.goodsTag = this.goodsTag.slice(0, 6);
        }
      }
    }
}
</script>

<style lang="less" scoped>
  .cellDiv{
    margin-top: 5px;
  }
  .accusation-cell{
    margin: 0.133333rem 0 0 0;
  }
  .dec{
    padding: 0.166667rem 0.4rem 0.1rem 0.4rem;
    color: #969799;
  }
  .dec-txt{
    padding: 0.266667rem 0.4rem;
    color: #969799;
  }
  .cellItem{
    padding: 0 0.4rem;
    display: flex;
    align-items: center;
    height: 1rem;
  }
  .tagItem{
    margin: 0 0 0 20px;
    position: relative;
    height: 0.8rem;
    align-items: center;
    display: flex;
  }
  .deleteTag{
    position: absolute;
    top: 0;
    right: -0.3rem;
  }
  .question-icon{
    font-size: 0.373333rem;
  }
</style>
