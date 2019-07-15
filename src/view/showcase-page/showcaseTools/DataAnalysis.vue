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
      <div class="mgt10 tcenter">
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
          <van-col span="9" class="flex-center">3,000<van-icon name="arrow-up" class="red-color mgl5"/></van-col>
          <van-col span="9" class="flex-center">1,000<van-icon name="arrow-down" class="green-color mgl5" /></van-col>
        </van-row>
      </div>
      <div class="mgt20 dy-font-color">
        近7天趋势分析
      </div>
      <!-- 趋势走势 echarts  折线图 -->
      <div id="lineEchart" class="echart mgt15"></div>
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
  require('echarts/lib/component/legend')

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
              fontSize = 36;
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
        let eChart = echarts.init(document.getElementById('lineEchart'))
        // 绘制图表
        eChart.setOption({
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985',
                        fontSize: size,//字体大小
                    },
                },
                padding: 20,    // [5, 10, 15, 20]
                textStyle : {
                     fontSize: size,//字体大小
                 },
            },
            legend: {
                data: ['浏览量(PV)','访客数(UV)'],
                textStyle:{
                    fontSize: size,//字体大小
                },
            },
            toolbox: {
                show: false,
                feature: {
                    saveAsImage: {}
                },
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日'],
                    // 网格线
                    splitLine:{
                    　　show: true
                    },
                    axisLabel: {
                      inside: false,
                      textStyle: {
                        fontSize: size
                      }
                    },
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel: {
                      textStyle: {
                        fontSize: size
                      },
                    }
                }
            ],
            series : [
                {
                    name:'浏览量(PV)',
                    type:'line',
                    stack: '总量',
                    areaStyle: {},
                    smooth: true,
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'访客数(UV)',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    smooth: true,
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        })
      }
    }
  }
</script>

<style lang="css" scoped>
  .echart{
    width: 100%;
    height: 5rem;
    font-size: 1rem;
  }
</style>
