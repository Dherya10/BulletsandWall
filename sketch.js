var bullet
var wall
var speed
var weight
var thickness

function setup() {
  createCanvas(1600,400);
  speed=random(225,320);
  weight=random(30,50);
  thickness=random(22,83);

  bullet=createSprite(100,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor="white";

  wall=createSprite(1200,200,thickness,200);
  wall.shapeColor="white";
}

function draw() {
  background("black");  
  
  bullet.depth=wall.depth
  bullet.depth=bullet.depth+1;

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){

    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(deformation>10){
      wall.shapeColor="red";
    }

    if(deformation<10){
      wall.shapeColor="green";
    }
  }
  drawSprites();
}