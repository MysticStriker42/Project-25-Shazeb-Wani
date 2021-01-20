
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	backgroundImg = loadImage("background.jpg");
}

function setup() {
	createCanvas(800, 700);

	keyPressed();


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObject = new ground(600,height,1200,20);
	
	
	
	paperObject = new paper(50,100,30);
	World.add(world, paperObject)

	crateObject1 = new crate(550,610,10,150)
	World.add(world, crateObject1)
	crateObject2 = new crate(700,610,10,150)
	World.add(world, crateObject2)
	crateObject3 = new crate(625,690,160,10)
	World.add(world, crateObject3)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  
  groundObject.display();
  paperObject.display();
  crateObject1.display();
  crateObject2.display();
  crateObject3.display();

  drawSprites();
 
};
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.position,{x:27.5, y:-50});

	}
}



