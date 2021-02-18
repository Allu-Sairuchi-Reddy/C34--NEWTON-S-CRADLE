
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
var mConstraint;
var bgI;
function preload()
{
  bgI=loadImage("bg.jpg");
}

function setup() {
	createCanvas(windowWidth,windowHeight);

	
	engine = Engine.create();
	world = engine.world;
	
	let canvasmouse = Mouse.create(canvas.elt);
   canvasmouse.pixelRatio = pixelDensity();
   let options ={
       mouse:canvasmouse
   };
   mConstraint = MouseConstraint.create(engine, options);
	World.add(world,mConstraint);
  var bobDiameter = 60;
	var posX = width/2;
	var posY = height/2+ 200;

	bob1 = new Pendulum(posX - bobDiameter*3, 480, bobDiameter);
	bob2 = new Pendulum(posX - bobDiameter*2, 490, bobDiameter);
	bob3 = new Pendulum(posX-bobDiameter, 500, bobDiameter);
	bob4 = new Pendulum(posX, posY, bobDiameter);
  bob5 = new Pendulum(posX + bobDiameter, posY, bobDiameter);
  bob6 = new Pendulum(posX + bobDiameter*2, posY, bobDiameter);
  bob7 = new Pendulum(posX + bobDiameter*3, posY, bobDiameter);
	ground = new Roof(600,height-500,800,20);
	
  sling1= new Rope(bob1.body,ground.body,-100*3,0);
  sling2= new Rope(bob2.body,ground.body,-100*2,0);
  sling3= new Rope(bob3.body,ground.body,-100,0);
  sling4= new Rope(bob4.body,ground.body,1,0);
  sling5= new Rope(bob5.body,ground.body,100,0);
  sling6= new Rope(bob6.body,ground.body,100*2,0);
  sling7= new Rope(bob7.body,ground.body,100*3,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgI);
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  sling6.display();
  sling7.display();

  drawSprites();
}


