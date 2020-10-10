class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.path = [];
    this.smokeImage = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>220){
      var position = [this.body.position.x, this.body.position.y];
      this.path.push(position);
    }
    for(var I = 0;I<this.path.length;I++){
     image(this.smokeImage, this.path[I][0], this.path[I][1]);
    }
  }
}
