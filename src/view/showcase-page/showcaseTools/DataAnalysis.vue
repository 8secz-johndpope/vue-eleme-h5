<template>
  <div>
    <van-nav-bar
      left-arrow
      title="数据分析"
      @click-left="onClickLeft"
      fixed
    />
    <div class="top-space"></div>
    <div class="font-14 pd15 white-bg">
      <div class="dy-font-color">
        实时数据
      </div>
      <div class="mgt15 tcenter">
        <van-row class="mgb10">
          <van-col span="6">时间</van-col>
          <van-col span="9">浏览量(PV)</van-col>
          <van-col span="9">访客数(UV)</van-col>
        </van-row>
        <van-row class="mgb10">
          <van-col span="6">今日</van-col>
          <van-col span="9">9,996</van-col>
          <van-col span="9">9,996</van-col>
        </van-row>
        <van-row class="mgb10">
          <van-col span="6">昨日</van-col>
          <van-col span="9">6,996</van-col>
          <van-col span="9">8,996</van-col>
        </van-row>
        <van-row>
          <van-col span="6">预计</van-col>
          <van-col span="9">3,000<van-icon name="arrow-up" class="red-color"/></van-col>
          <van-col span="9">1,000<van-icon name="arrow-down" class="green-color" /></van-col>
        </van-row>
      </div>
      <div class="mgt15 dy-font-color">
        数据来源
      </div>
      <div id="echart" style="width: 100%; height: 500px; font-size: 1rem"></div>
      <div class="mgt15 dy-font-color">
        趋势分析
      </div>
      <!-- <van-tabs v-model="active">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
      </van-tabs> -->
    </div>
  </div>
</template>


<script>
  import Vue from 'vue';
  import { Row, Col } from 'vant';
  import { mapGetters } from 'vuex';
  Vue.use(Row).use(Col);
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/line')
  require('echarts/lib/chart/bar')

  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')

  export default {
    name: 'eCharts',
    data () {
      return {
      }
    },
    mounted () {
      this.drawLine()
    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
      fGetChartFontSize(){
          const dpr = window.devicePixelRatio;
          let fontSize = 14;
          if(dpr == 2){
              fontSize = 40;
          }
          else if(dpr == 3){
              fontSize = 60;
          }
          else if(dpr > 3){
              fontSize = 60;
          }
          return fontSize;
      },
      drawLine () {
        // 基于准备好的dom，初始化echarts实例
        const size = this.fGetChartFontSize();
        let eChart = echarts.init(document.getElementById('echart'))
        // 绘制图表
        eChart.setOption({
          title: { text: '' },
          tooltip: {},
          xAxis: [{
            type: 'category',
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#e3e3e3'
              }
            },
            axisLabel: {
              inside: false,
              textStyle: {
                color: '#999',
                fontWeight: 'normal',
                fontSize: size
              }
            },
            splitLine: {show: false}, // 去除网格线
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
          }],
          yAxis: [{
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: '#bac0c0',
                fontWeight: 'normal',
                fontSize: size
              },
              formatter: '{value}'
            }
          }],
          series: [{
            type: 'bar',
            itemStyle: {
              normal: {
                show: true,
                color: '#5275FD',
                borderWidth: 0
              },
              emphasis: {
                shadowBlur: 15,
                shadowColor: 'rgba(105,123, 214, 0.7)'
              }
            },
            zlevel: 2,
            barWidth: 20,
            data: [100, 200, 400, 300, 500, 500, 500]
          },{
            zlevel: 3,
            type: 'line',
            data: [150, 220, 430, 360, 450, 680, 800],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#ff8300',
                  fontSize: size
                }
              }
            }
          }]
        })
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
