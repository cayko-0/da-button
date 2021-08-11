var circlesX;
var circlesY;

function setup() {
  createCanvas(200, 200);
  background(0,50,50);
}

function draw() {
  circlesX = random((200 * 0.48),(200 * 0.52));
  circlesY = random((200 * 0.48),(200 * 0.52));
  r = random(210,255)
  g = random(150,200)
  b = random(0,70)
  noStroke();
  fill(r, g, b, 50);
  circle(circlesX,circlesY,25)
}

function mousePressed(){
  background(0,50,50);
}
