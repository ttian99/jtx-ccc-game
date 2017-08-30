import cfg from '../config/cfg';

const ccTools = {};

/**
 * 加载远程图片
 * @method loadRemoteImg
 * @param {String|Object} data 图片链接'http://xxxxxx'或者图片对象{url: 'http://xxxxx', type: 'png'}
 * @param {Function} cb 回调函数
 */
ccTools.loadRemoteImg = (data, cb) => {
  if (data instanceof Object) {
    data.url = cfg.proxyUrl + '?imgUrl=' + data.url;
  } else {
    data = cfg.proxyUrl + '?imgUrl=' + data;
  }

  cc.loader.load(data, (err, texture) => {
    if (err) {
      cb && cb('load error');
    } else {
      const spriteFrame = new cc.SpriteFrame(texture);
      cb && cb(null, spriteFrame);
    }
  });
};

// 取消脏矩形优化，防止黑框出现
ccTools.disableDirtyRegion = () => {
  if (cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
    cc.renderer.enableDirtyRegion(false);
  }
};

// 开启于关闭fps
ccTools.showFPS = (enabled = true) => {
  cc.director.setDisplayStats(enabled);
  const { config, CONFIG_KEY } = cc.game;
  config[CONFIG_KEY.showFPS] = enabled;
};

// 移除节点上面的所有节点(remove方法不能触发子节点的onDestroy)
ccTools.destroyAllChildren = (targetNode) => {
  const arr = targetNode.getChildren();
  arr.forEach(page => page.destroy());
};

// 用于处理下一帧刷新
ccTools.nextTick = (cb) => {
  setTimeout(cb, 0);
};

// 关闭自动全屏功能(PC端的QQ浏览器点击输入框会触发自动全屏)
ccTools.disableAutoFullScreen = () => {
  cc.view.enableAutoFullScreen(false);
};


// 测试浏览器是否支持命令
// 例如：document.queryCommandSupported('copy');
ccTools.caniuse = (str) => {
  document.queryCommandSupported(str);
};

ccTools.toDecimal2 = (x) => {
  const f = parseFloat(x);
  if (isNaN(f)) {
    return false;
  }
  const ff = Math.round(x * 100) / 100;
  let s = ff.toString();
  let rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
};
export default ccTools;
