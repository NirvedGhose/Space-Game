let ground;
let lander;
var lander_img;
var bg_img,back;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1800,1000);
  //frameRate(80);

  back = createSprite(900,500);
  back.addImage(bg_img)
  back.scale = 2.0;
  back.velocityX = -3
  back.x = back.width/2;
 

  lander = createSprite(100,350,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  rectMode(CENTER);
  textSize(15);
}

function draw() {
  
  if (back.x < 100) {
    back.x = back.width/2;
  }

//lander.velocityX += 0.1

if (keyIsDown(DOWN_ARROW)) {
  lander.positionY += 2
}

  drawSprites();
}



