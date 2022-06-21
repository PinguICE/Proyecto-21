
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
    var ball_options={
		isStatic:false,
		restitution:0.2,
		friction:0,
		density:1.2
	}

	Engine.run(engine);
  
}
ball = Bodies.circle(200,100,20,ball_options);
World.add(world,ball);

function draw() {
  rectMode(CENTER);
  background(0);

  	display()
	groundObj.display();
	groundObj=new ground(width/2,670,40,20);
	leftSide = new ground(1100,600,20,120)

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, 130, 100);
	}
}



