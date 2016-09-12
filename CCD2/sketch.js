function setup() {
  createCanvas(800,600);
  background(225); //1 number 0-255 is drk to light
  fill(0); //black interior
  //noFill();
  //noStroke();
  stroke(255,0,0); //3 numbers RGB - red edges
  strokeWeight(30); //thicness of the line
}

function draw() {
  ellipse(50,50,100,100); //circle
  rect(150,150,100,100); //square
  line(400,0,400,300); //line
  point(450,450); //dot
  
}