// import { find } from 'lodash';
// import moment from 'moment';
// import mobx from 'mobx';
import cfg from './cfg';
import getQueryString from '../utils/qs';

const { ccclass, property } = cc._decorator;

@ccclass
class StartScene extends cc.Component {
  @property(cc.Node) testLogo = null;
  isHallConnected = false;
  isGameConnected = false;
  isGoingToHall = false;

  //
  onLoad() {
    console.log('--start Scene ==');
    this.initConfig();
    cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
  }

  //
  start() {

  }

  //
  update() {

  }
  //
  onEnable() {

  }
  //
  onDisable() {

  }
  // 组件销毁时（组件销毁不会立即执行，会在这一帧的最后执行）
  onDestory() {

  }

  // 初始化配置文件
  initConfig() {
    cfg.qs = getQueryString();
  }

  gotoScene(evt, data) {
    console.log('data = ' + data);
    cc.director.loadScene(data, () => {
      console.log(`== scene ${data} is load !!! ==`);
      cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
    })
  }
}

export default StartScene;
