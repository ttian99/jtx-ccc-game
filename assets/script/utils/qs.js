import querystring from 'querystring';

/**
 * 获取浏览器地址栏的参数:
 * 例如：http://192.168.1.149:8080?debug=false&host=192.168.1.99
 * 得到：{debug: "false", host: "192.168.1.99" }
 */
export default function getQueryString() {
  let qs = {};
  if (!cc.sys.isNative) {
    qs = querystring.parse(location.search.replace('?', ''));
  }
  return qs;
}
