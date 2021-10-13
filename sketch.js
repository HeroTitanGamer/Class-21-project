const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground,left,right,up,button,pball;
var leftwall,rightwall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  pball = Bodies.circle(200,200,20);
  World.add(world,pball);

  ground = new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  up = new Ground(200,10,400,20);

  leftwall = new Ground(300,345,10,70);

  button = createImg("push.png");
  button.position(50,50);
  button.size(45,45);
  button.mouseClicked(tforce);

}

function draw() 
{
  background(51);
  Engine.update(engine);

  up.show();
  ground.show();
  left.show();
  right.show();
  leftwall.show();
  
  ellipse(pball.position.x,pball.position.y,20)
}

function tforce(){
  Matter.Body.applyForce(pball,{x:0,y:0},{x:0.05,y:-0.05})
}