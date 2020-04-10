class Log extends BaseCLass{
    constructor(x, y, height, angle) {
      super(x, y, 40, height, angle) ;
      this.image = loadImage("sprite/log.png");
      Matter.Body.setAngle(this.body,angle);
    }
  }