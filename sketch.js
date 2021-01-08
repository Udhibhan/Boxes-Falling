const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1, box2;
var ground;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,390,800,10);
  box1 = new Box(200,300,50,50);
  box2 = new Box(200,100,50,100);

  
  //console.log(box);
  //console.log(box.type);
  //console.log(box.position.x);
  //console.log(box.position.y);          
  
  Engine.run(engine);
}
function draw() {
  background("black");  
  
  ground.display();
  box1.display();
  box2.display();

}
  