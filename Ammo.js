class ammo  {
    constructor(x, y,r){
    var options= {
      restitution:0.8,density:1.2
      }
      this.body=Bodies.circle(x,y,r,options);
      this.x=x
      this.y=y
      this.r=r
      World.add(world,this.body)
}
  display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.r,this.r);
  }
  };