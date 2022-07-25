
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, leftSide, rightSide, groundObj;
var world;
var radius = 40;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

    var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction:0,
		density:1.2
	}

	 ball = Bodies.circle(260,100,radius/2,ball_options);
	 World.add(world,ball);
	

	//crear los cuerpos aquí.
	groundObj=new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);
	rightSide = new ground(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //drawSprites();
 ellipse(ball.position.X,ball.position.Y,radius,radius);
 groundObj.display();
 leftSide.display();
 rightSide.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {

		Matter.body.applyForce(ball,ball.position,{x:85,y:-85});

	}
}


