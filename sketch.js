const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var planeImg, helicopterSprite, packageSprite,packageImg;
var packageBody,ground


function preload()
{
	planeImg=loadImage("helicopter.png")
	packageImg=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 150, 10,10);
	packageSprite.addImage(packageImg)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 300, 10,10);
	helicopterSprite.addImage(planeImg)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-10, width,20);
	groundSprite.shapeColor="brown"


	engine = Engine.create();
	world = engine.world;

	p_options={
		restitution:0.4, 
		isStatic:true
	}

	packageBody = Bodies.circle(width/2 , 300 , 5 , p_options);
	World.add(world, packageBody);
	
	g_options= {
		isStatic:true
	}

	ground = Bodies.rectangle(width/2, 650, width, 10 ,g_options );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}