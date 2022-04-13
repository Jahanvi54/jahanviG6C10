var sea;
var ship;
var sea_img;
var ship_img;
function preload(){
 
  sea_img =loadImage ("sea.png");
  ship_img = loadImage ("ship-1.png");

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200);
  ship = createSprite(200,200);
  sea.addImage(sea_img,sea.png);
  ship.addImage(ship_img,ship.png);
  ship.scale=0.3;
  sea.scale=0.5;
  
}

function draw() {
  background("blue");
 drawSprites();
}