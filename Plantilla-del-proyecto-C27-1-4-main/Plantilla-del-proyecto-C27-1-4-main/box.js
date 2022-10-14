   class Box 
// Class
// Class box
// Box
{
  constructor(x, y, w, h) 
  {
    let options = {
      friction: 0.3,
      restitution: 0.6
    };
    this.image = loadImage("monito3.jpg")
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    //rectMode(CENTER);
    //strokeWeight(1);
    //stroke(255);
    //fill(127);
    //rect(0, 0, this.w, this.h);
    image(this.image,0,0,this.w,this.h);
    pop();
  }
}