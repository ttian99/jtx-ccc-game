class SysEx {
  constructor() {
    this.ver = '0.1';
  }

  // 设置屏幕方向
  setOrientation(orientation = cc.macro.ORIENTATION_AUTO) {
    cc.view.setOrientation();
  }
}
