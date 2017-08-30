const uts = {};
// 截取名字
// uts.cutName = function(playerName) {
//     playerName = playerName && playerName.toString();
//     if (playerName.length >= 6) {
//         playerName = playerName.substring(0, 6) + '...';
//     }
//     return playerName;
// };
uts.cutStrLen = (str, n) => {
  if (!n) n = 20;
  const r = /[^\x00-\xff]/g;
  if (str.replace(r, 'mm').length <= n) { return str; }
  const m = Math.floor(n / 2);
  for (let i = m; i < str.length; i++) {
    if (str.substr(0, i).replace(r, 'mm').length >= n) {
      return str.substr(0, i) + '...';
    }
  }
  return str;
};

uts.cutName = (str, n) => {
  if (!n) n = 10;
  const r = /[^\x00-\xff]/g;
  if (str.replace(r, 'mm').length <= n) { return str; }
  const m = Math.floor(n / 2);
  for (let i = m; i < str.length; i++) {
    if (str.substr(0, i).replace(r, 'mm').length >= n) {
      return str.substr(0, i) + '...';
    }
  }
  return str;
};
// 消息公告截取字符串
uts.cutMsgName = (str, n) => {
  if (!n) n = 10;
  const r = /[^\x00-\xff]/g;
  if (str.replace(r, 'mm').length <= n) { return str; }
  const m = Math.floor(n);
  for (let i = m; i < str.length; i++) {
    if (str.substr(0, i).replace(r, 'mm').length >= n) {
      return str.substr(0, i - 2) + '...';
    }
  }
  return str;
};
// 判断字符串是否合格
uts.isStrNull = (str) => {
  if (!str) return true;
  if (str === '') return true;
  const regu = '^[ ]+$';
  const re = new RegExp(regu);
  return re.test(str);
};

// 判断字符串是否合格
uts.cutUid = (str) => {
  if (!str) return '';
  let strL = '';
  let strR = '';
  if (str.length >= 4) {
    strL = str.substring(0, 3);
    strR = str.substring(str.length - 3);
    str = strL + 'xxxxx' + strR;
  }
  return str;
};

uts.countdown = (data, cc_lebel) => {
  cc_lebel.unschedule(cc_lebel.callback);
  if (!data) return;
  data = parseInt(data) * 1000;
  let HH = parseInt(data / 1000 / (60 * 60));
  let MM = parseInt(data / 1000 / 60 % 60);
  let SS = parseInt(data / 1000 % 60);
  cc_lebel.callback = function () {
    SS -= 1;
    if (SS < 0) {
      SS = 59;
      MM--;
    }
    if (MM < 0) {
      MM = 59;
      HH--;
    }
    if (HH === 0) {
      this.string = MM + '分' + SS + '秒';
      if (MM === 0) {
        this.string = SS + '秒';
      }
    } else {
      this.string = HH + '时' + MM + '分' + SS + '秒';
    }

    if (HH < 0) {
      cc_lebel.unschedule(cc_lebel.callback);
      this.string = '停止押注';
    }
  };
  cc_lebel.schedule(cc_lebel.callback, 1);
};

// 给数字插入逗号
uts.numInsertComma = (num) => {
  const str = parseInt(num, 10).toString();
  const len = str.length;
  if (len <= 4) {
    return str;
  }
  const r = len % 3;
  return r > 0 ? str.slice(0, r) + ',' + str.slice(r, len).match(/\d{3}/g).join(',') : str.slice(r, len).match(/\d{3}/g).join(',');
};

// 字符串(false/true)转布尔值
uts.strToBoolean = str => (/^true$/i).test(str);

window.uts = uts;
export default uts;
