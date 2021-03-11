export const zhDate = (now, type) => {
  let year = now.getFullYear()
  let month = now.getMonth() + 1
  let date = now.getDate()
  let hour = now.getHours()
  let minute = now.getMinutes()
  let second = now.getSeconds()
  if (type == 1) {
    return year + "-" + getzf(month) + "-" + getzf(date) + "  " + getzf(hour) + ":" + getzf(minute)
  } else if (type == 2) {
    return year + "-" + getzf(month) + "-" + getzf(date) + "  " + getzf(hour) + ":" + getzf(minute) + ":" + getzf(second)
  } else if (type == 3) {
    return getzf(hour) + ":" + getzf(minute)
  } else {
    return year + "-" + getzf(month) + "-" + getzf(date)
  }
}

function getzf(num) {
  if (parseInt(num) < 10) {
    num = '0' + num
  }
  return num
}

export const checkTel = (tel) => { //验证手机号
  if (!(/^1[3456789]\d{9}$/.test(tel))) {
    return true
  } else {
    return false
  }
}
export const checkEmail = (email) => { //验证手邮箱
  if ((/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/.test(tel))) {
    return true
  } else {
    return false
  }
}

export const browserRedirect = () =>{   //  1 手机 2 pc
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  var bIsAndroid = sUserAgent.match(/android/i) == "android";
  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    return 2
  } else {
    return 1
  }
}