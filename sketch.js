
var fixedRect, movingRect;
var gameObject1, gameObject2;
var fixedRect1
var fixedRect2
function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  fixedRect1 = createSprite(300,400,50,80);
  fixedRect1.shapeColor = "pink";

  fixedRect1 = createSprite(500,400,50,80);
  fixedRect1.shapeColor = "purple";
  
}


  
  
  

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
    //fixedRect2.shapeColor = "purple"
  }
  else if (isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor = "blue";
    fixedRect1.shapeColor = "pink";
    //fixedRect2.shapeColor = "purple";
}
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green"
    fixedRect1.shapeColor = "green"
   // fixedRect2.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




