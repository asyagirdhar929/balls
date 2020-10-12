
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,paper1;
var part1,part2,part3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1=new Ground(400,670,800,10);
paper1=new Paper (100,640,2);
part1=new Dustbin (0,0,1,1);
part2=new Dustbin (120,600,100,20);
part3=new Dustbin (120,600,100,20);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  keypressed();
  ground1.display();
  paper1.display();
 part1.display();
 part2.display();
 part3.display();
 
  drawSprites();
 
}


function keypressed()
{
  if (keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85, y:-85}) 
  }
}
