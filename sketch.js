var floor, ball, bin;

function preload(){
  trash = loadImage('pics/bin.png');
  paper = loadImage('pics/paper.png');
  
}

function setup() {
	createCanvas(800, 700);
	floor=createSprite(400,700,800,50)
	bin=createSprite(705,630,100,50)
  ball = createSprite(21,21,30,30)
  ball.addImage(paper,"paper.png")
  bin.addImage(trash,"bin.png")
}


function draw() {
  background(0);
  ball.scale = .2;
  bin.scale = .3;
  if(keyIsDown(RIGHT_ARROW)){
    ball.x = ball.x+5
  }
  if(keyIsDown(LEFT_ARROW)){
    ball.x = ball.x-5
  }
  
  if(keyIsDown(DOWN_ARROW)){
    ball.y = ball.y+5
  }
  if(keyIsDown(UP_ARROW)){
    ball.y = ball.y-5
  }
  if(bin.isTouching(ball)){
    background(0,255,0);
    ball.visible = false;
  }else{
    background(255,0,0);
    ball.visible = true;
  }

  drawSprites();
 
}