function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(350,270,40,40);
  fixedRect.shapeColor="blue";

  movingRect=createSprite(500,270,40,40);
  movingRect.shapeColor="blue";

  ball1=createSprite(600,350,40,40);
  ball1.shapeColor="green";

  ball2=createSprite(750,250,40,40);
  ball2.shapeColor="green";


}

function draw() {
  background(255,255,255); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 if(isTouching(movingRect,ball1)){
movingRect.shapeColor="red";
ball1.shapeColor="red";

  }
else{
  ball1.shapeColor="blue";
 movingRect.shapeColor="blue";


}
  drawSprites();
}
function isTouching(object1,object2){

  if(object1.x-object2.x<object1.width/2+object2.width/2 && object2.x-object1.x<object2.width/2+object1.width/2 && object2.y-object1.y<object2.height/2+object1.height/2 && object1.y-object2.y<object1.height/2+object2.height/2){
return true;
}
else{
  return false;
}


}
