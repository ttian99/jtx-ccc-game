/**
 * localStorage 操作类
 */

const Loc = {};

Loc.save = (key, value) => {
  cc.sys.localStorage.setItem(key, value);
};

Loc.get = key => cc.sys.localStorage.getItem(key);

Loc.saveJson = (key, json) => {
  cc.sys.localStorage.setItem(key, JSON.stringify(json));
};

Loc.getJson = key => Loc.safeParse(cc.sys.localStorage.getItem(key));

Loc.saveBoolean = (key, boolean) => {
  const num = boolean ? 1 : 0;
  cc.sys.localStorage.setItem(key, num);
};

Loc.getBoolean = (key) => {
  const num = parseInt(cc.sys.localStorage.getItem(key), 10);
  const boolean = (num === 1) ? true : false;
  return boolean;
};

Loc.safeParse = (str) => {
  let data = null;
  try {
    data = JSON.parse(str);
  } catch (e) {
    cc.log('parse [ ' + str + ' ] failed!');
  }
  return data;
};

module.exports = Loc;
