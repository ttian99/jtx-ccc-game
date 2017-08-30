const { ccclass, property } = cc._decorator;

@ccclass
class Circle extends cc.Component {
  @property(Boolean) type = 0;
  @property(cc.SpriteFrame) spriteFrame0 = null; // 0-黄色
  @property(cc.SpriteFrame) spriteFrame1 = null; // 1-蓝色

  onLoad() { }

  start() { }

  update() { }
}

export default Circle;
