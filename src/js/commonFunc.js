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
　　　return 0;
　} else {
　　　return num >= 10000 ? (num - num % 1000)/10000 + 'W+' : num;
　}
}
/**添加设置cookie**/
function addCookie(name, value, days, path) {
  var name = escape(name);
  var value = escape(value);
  var expires = new Date();
  expires.setTime(expires.getTime() + days * 3600000 * 24);
  path = path == '' ? '' : ';path=' + path;//GMT(Greenwich Mean Time)是格林尼治平时，现在的标准时间，协调世界时是UTC //path=/，表示cookie能在整个网站下使用，path=/temp，表示cookie只能在temp目录下使用
  //参数days只能是数字型
  var _expires = (typeof days) == 'string' ? '' : ';expires=' + expires.toUTCString();
  document.cookie = name + '=' + value + _expires + path;
}
// 获取cookie
function getCookieValue(name) {
  /**获取cookie的值，根据cookie的键获取值**/
    //用处理字符串的方式查找到key对应value
  var name = escape(name);
  //读cookie属性，这将返回文档的所有cookie
  var allcookies = document.cookie;
  //查找名为name的cookie的开始位置
  name += '=';
  var pos = allcookies.indexOf(name);
  //如果找到了具有该名字的cookie，那么提取并使用它的值
  if (pos != -1) {                                             //如果pos值为-1则说明搜索"version="失败
    var start = pos + name.length;                  //cookie值开始的位置
    var end = allcookies.indexOf(';', start);        //从cookie值开始的位置起搜索第一个";"的位置,即cookie值结尾的位置
    if (end == -1) end = allcookies.length;        //如果end值为-1说明cookie列表里只有一个cookie
    var value = allcookies.substring(start, end);   //提取cookie的值
    return (value);                                //对它解码
  } else {  //搜索失败，返回空字符串
    return '';
  }
}

function deleteCookie(name, path) {
  /**根据cookie的键，删除cookie，其实就是设置其失效**/
  var name = escape(name);
  var expires = new Date(0);
  path = path == '' ? '' : ';path=' + path;
  document.cookie = name + '=' + ';expires=' + expires.toUTCString() + path;
};

/*清除所有的cookies*/
function clearCookie() {
  var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  keys.forEach(function (k, v) {
    if (v == 'username' || v == 'isAlertFlag') {
      delete keys[k];
    }
  });
  if (keys) {
    for (var i = keys.length; i--;) {
      document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
    }
  }
}

// 评论时间格式化
function commentsTimeFormatter(timestamp) {
    // 补全为13位
    var arrTimestamp = (timestamp + '').split('');
    for (var start = 0; start < 13; start++) {
        if (!arrTimestamp[start]) {
            arrTimestamp[start] = '0';
        }
    }
    timestamp = arrTimestamp.join('') * 1;

    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var halfamonth = day * 15;
    var month = day * 30;
    var now = new Date().getTime();
    var diffValue = now - timestamp;

    // 如果本地时间反而小于变量时间
    if (diffValue < 0) {
        return '不久前';
    }

    // 计算差异时间的量级
    var monthC = diffValue / month;
    var weekC = diffValue / (7 * day);
    var dayC = diffValue / day;
    var hourC = diffValue / hour;
    var minC = diffValue / minute;

    // 数值补0方法
    var zero = function (value) {
        if (value < 10) {
            return '0' + value;
        }
        return value;
    };

    // 使用
    if (monthC > 12) {
        // 超过1年，直接显示年月日
        return (function () {
            var date = new Date(timestamp);
            return date.getFullYear() + '年' + zero(date.getMonth() + 1) + '月' + zero(date.getDate()) + '日';
        })();
    } else if (monthC >= 1) {
        return parseInt(monthC) + "月前";
    } else if (weekC >= 1) {
        return parseInt(weekC) + "周前";
    } else if (dayC >= 1) {
        return parseInt(dayC) + "天前";
    } else if (hourC >= 1) {
        return parseInt(hourC) + "小时前";
    } else if (minC >= 1) {
        return parseInt(minC) + "分钟前";
    }
    return '刚刚';
};

// 时间格式化 -- 转成年月日
function crtTimeFtt(val) {
    if (val != null) {
        var date = new Date(val);
        var m = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1).toString() : date.getMonth() + 1;
        var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        return date.getFullYear() + '-' + m + '-' + d;
    }else {
      console.log('时间格式化出错：'+val)
    }
}
export default {
  httpUrl,
  goBack,
  formatterW,
  addCookie,
  getCookieValue,
  deleteCookie,
  clearCookie,
  commentsTimeFormatter,
  crtTimeFtt,
}
