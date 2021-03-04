const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState="onSling"
var bg = "bg2.png";
var backgroundImg

function preload(){
	ball=loadImage("polygon.png");
  getBackgroundImg();
  //bgimg1=loadImage("bg1.png");
  backgroundImg=loadImage("bg2.png");
  }

function setup() {
	createCanvas(1000, 400);
	engine = Engine.create();
	world = engine.world;
    ground1=new Ground()
    stand1=new Stand(400,285,250,10);
    stand2=new Stand(765,205,180,10);

    block1=new Block(300,260,30,40);
    block2=new Block(330,260,30,40);
    block3=new Block(360,260,30,40);
    block4=new Block(390,260,30,40);
    block5=new Block(420,260,30,40);
    block6=new Block(450,260,30,40);
    block7=new Block(480,260,30,40);

    block8=new Block(330,220,30,40);
    block9=new Block(360,220,30,40);
    block10=new Block(390,220,30,40);
    block11=new Block(420,220,30,40);
    block12=new Block(450,220,30,40);

    block13=new Block(360,180,30,40);
    block14=new Block(390,180,30,40);
    block15=new Block(420,180,30,40);

    block16=new Block(390,140,30,40);

    blocks1=new Block(700,180,30,40);
    blocks2=new Block(730,180,30,40);
    blocks3=new Block(760,180,30,40);
    blocks4=new Block(790,180,30,40);
    blocks5=new Block(820,180,30,40);

    blocks6=new Block(730,140,30,40);
    blocks7=new Block(760,140,30,40);
    blocks8=new Block(790,140,30,40);

    blocks9=new Block(760,100,30,40);

    ball1 = Bodies.circle(50,200,20);
    World.add(world, ball1);

    slingShot1=new SlingShot(this.ball1,{x:100, y:200});
    Engine.run(engine);
}

function draw() {

  if(backgroundImg){
    background(backgroundImg);
  }
    //background(230);
    ground1.display();
    stand1.display();
    stand2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    blocks6.display();
    blocks7.display();
    blocks8.display();
    blocks9.display();

    imageMode (CENTER)

    image(ball,ball1.position.x,ball1.position.y,40,40);
    slingShot1.display();
}

function mouseDragged(){
  if(gameState!=="launched"){
  Matter.Body.setPosition(this.ball1,{x:mouseX, y:mouseY})
  }
}

function mouseReleased(){
  slingShot1.fly();
  gameState="launched"
}

function keyPressed(){
  if(keyCode === 32){
    slingShot1.attach(ball1.body);
    gameState="onSling";
  }
}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson= await response.json();
  var date = responseJson.datetime;
  var hour = date.slice(11,13);
  if(hour >= 06 && hour <= 18){
    bg="bg2.png";
  }
  else{
    bg="bg1.png";
  }
  backgroundImg= loadImage(bg);
}