const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2,box3,box4,box5,box6,box8;
var platform;
var boxgroup;
var score = 0;
var Ammo, slingshot;
function preload(){

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Ammo= new ammo(600,200,20,20)
    ground = new Ground(600,height,1200,20);
    stand= new Ground();
    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40);
    box6 = new Box(360,195,30,40);
    box7 = new Box(390,195,30,40);
    box8 =  new Box(420,195,30,40);
    box9 = new Box(390,155,30,40)
    stand2 = new Ground(200,50);
    slingshot = new SlingShot(Ammo.body,{x:600, y:200});

}
function draw(){
    background("green");
    
    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, width-300, 50)

Engine.update(engine);
strokeWeight(4);
box1.display();
box2.display();
ground.display();
box5.display();
box6.display();
box7.display();
box3.display();
box4.display();
box8.display();
box9.display();
Ammo.display();
stand.display();
slingshot.display();   
box1.score();;
box2.score()
box3.score()
box4.score()
box5.score()
box6.score()
box8.score()
box7.score()
box9.score()

boxGroup = createGroup();
}

function mouseDragged() {
    Matter.Body.setPosition(Ammo.body,{x:mouseX,y:mouseY})
}
function keyPressed(){
  if (keyCode===32){
    slingshot.attach(Ammo.body);
  }
}
  if (Ammo.isTouching(boxgroup)){
    score+1;
    textSize(20)
    text("Well done " ,20,30);
  }
function mouseReleased(){
slingshot.fly();
}
