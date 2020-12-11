
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var dustbin,dustbinImage
function preload()
{
dustbinImage = loadImage("dustbingreen.png")	
}


function setup() {
	createCanvas(800, 650)


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ball = new Paper(180,10,50)
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	boxRightSpriteBody = Bodies.rectangle(700,560,20,150,{isStatic:true})
	World.add(world, boxRightSpriteBody)

	boxBottomSpriteBody = Bodies.rectangle(625,620,160,30,{isStatic:true})
	World.add(world, boxBottomSpriteBody)


	boxLeftSpriteBody = Bodies.rectangle(550,560,20,150,{isStatic:true})
	World.add(world, boxLeftSpriteBody)

	
}


function draw() {
  rectMode(CENTER);
  background(255);
 
 ball.display()
rectMode(CENTER)
fill("yellow")
rect(ground.position.x,ground.position.y, 800,40)

image(dustbinImage,600,480,125,150)
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-500})
}
}

