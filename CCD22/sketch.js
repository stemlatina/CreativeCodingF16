function setup() {
  createCanvas(800,600);
  fill(0);
  rectMode(CENTER);
}

function draw() {
  background(255); //one number 0-225 is dark to light
  rectMode(RADIUS);
  fill(255,0,255,50);
  rect(mouseX,mouseY,50,50); //Square
  rectMode(CORNER);
  fill(0);
  rect(mouseX,mouseY,50,50); //Square
  rectMode(CENTER);
  fill(255,255,0,50);
  rect(mouseX,mouseY,50,50); //Square

  
  
  
}