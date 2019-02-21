<template>
  <div>
    <!-- 栏 -->
    <router-link to="/Order">
      <div class="some_bar first-c">
        <svg class="v-md">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order.070ae2a"></use>
        </svg>
        <span class="v-md">个人资料</span>
      </div>
    </router-link>
    <div class="some_bar">
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shop"></use>
      </svg>
      <span class="v-md">积分说明</span>
    </div>
    <div class="some_bar">
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#eleme"></use>
      </svg>
      <span class="v-md">反馈建议</span>
    </div>

    <div class="some_bar first-c">
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#discover.5811137"></use>
      </svg>
      <span class="v-md">联系我们</span>
    </div>
    <div class="some_bar first-c">
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#discover.5811137"></use>
      </svg>
      <span class="v-md">退出登录</span>
    </div>
  </div>
</template>


<style lang="less" scoped>
div.some_bar{
  width: 10rem;
  height: 1.1rem;
  padding: 0 .4rem;
  box-sizing: border-box;
  background:#fff;
  font-size:.4rem;
  line-height:1.1rem;
  border-top:1px solid #dedede;
  &.first-c{
    margin-top: .3rem;
    boeder:none;
  }
  svg{
    width: .4rem;
    height: .4rem;
  }
  span{
    margin-left:.2rem;
  }
}
</style>
