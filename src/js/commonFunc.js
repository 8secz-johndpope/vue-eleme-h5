/**
 * @author: ganluhua
 * @time: 2018.02.13
 * @dec: 全局方法，可以定义全局事件
 * @type {String}
 */
const httpUrl = 'http://39.105.17.99:8080/';
// 返回上一页
function goBack() {
  history.go(-1)
}
// 数字格式化
function formatterW(num) {
  if (parseFloat(num).toString() == "NaN") {
　　　return;
　} else {
　　　return num >= 10000 ? (num - num % 1000)/10000 + 'W' : num;
　}
}
export default {
  httpUrl,
  goBack,
  formatterW
}
