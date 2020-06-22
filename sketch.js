var bobObject, bobObject2,bobObject3,bobObject4,bobObject5;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject= new Bob(200,450,40)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  bobObject.display();
  
  drawSprites();
 
}



