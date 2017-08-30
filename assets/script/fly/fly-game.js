const { ccclass, property } = cc._decorator;

@ccclass
class Game extends cc.Component {
  onLoad() {

  }

  start() { }

  update() { }

  onEnable() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.touch, this);
  }

  onDisable() {
    this.node.off(cc.Node.EventType.TOUCH_START, this.touch, this);
  }

  touch(evt) {
    // console.log(evt);
    console.log('==> evt.getLocationX = ' + evt.getLocationX());
  }
}
