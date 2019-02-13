/**
 * @author: ganluhua
 * @time: 2018.02.13
 * @dec: 全局方法，可以定义全局事件
 * @type {String}
 */
const httpUrl = 'http://39.105.17.99:8080/'
function goBack() {
  history.go(-1)
}
export default {
  httpUrl,
  goBack
}
