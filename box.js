class Box {
    constructor(x, y, Width, Height) {
      var options = {
          'restitution':0,
          'density':1
      }
      this.body = Bodies.rectangle(x, y, Width, Height, options);
      this.width = Width;
      this.height = Height;
      console.log(this.body);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
      
    }
  }