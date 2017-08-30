const { ccclass, property } = cc._decorator;

@ccclass
class Background extends cc.Component {
  @property(cc.Node) spriteA = null;
  @property(cc.Node) spriteB = null;

  speed = 8; // 滚屏速度
  HEIGHT = 0; // 背景高度
  WIDTH = 0; // 背景宽度
  onLoad() {
    this.HEIGHT = this.node.height / 2;
  }

  start() { }

  update() {
    this.spriteA.y -= this.speed;
    this.spriteB.y -= this.speed;

    if (this.spriteA.y <= -this.HEIGHT) {
      this.spriteA.y = this.HEIGHT;
      this.spriteB.y = 0;
    } else if (this.spriteB.y <= -this.HEIGHT) {
      this.spriteB.y = this.HEIGHT;
      this.spriteA.y = 0;
    }
  }

  setSpeed(speed) {
    this.speed = speed;
  }
}

export default Background;
