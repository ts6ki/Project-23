var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var leftBox, bottomBox, rightBox;
var Leftbox, Bottombox, Rightbox;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottomBox=createSprite(400, 650, 200, 20);
	bottomBox.shapeColor = color("red");

	leftBox=createSprite(300, 610, 20, 100);
	leftBox.shapeColor = color("red");

	rightBox=createSprite(500, 610, 20, 100);
	rightBox.shapeColor = color("red");

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	Bottombox = Bodies.rectangle(400, 650, 200, 20 , {isStatic:true} );
	World.add(world, Bottombox);
	Leftbox = Bodies.rectangle(300, 610, 20, 100 , {isStatic:true} );
	World.add(world, Leftbox);
	Rightbox = Bodies.rectangle(500, 610, 20, 100 , {isStatic:true} );
	World.add(world, Rightbox);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 keyPressed(); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Engine.update(engine);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:false});
	World.add(world, packageBody);

	Engine.run(engine);
  }
}



