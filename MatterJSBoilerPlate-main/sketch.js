
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1=new Ground(width/2,670,width,20);
    leftSide=new Ground(1100,600,20,120);
	rightSide=new Ground(1300,600,20,120);


var options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1
}

ball=Bodies.circle(260,100,20,options);
World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

ellipse (ball.position.x,ball.position.y,20,20);

  ground1.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 
}



function keyPressed(){
if(keyCode === UP_ARROW){
	Matter .Body .applyForce (ball,ball.position,{x:65,y:-65});
}




}