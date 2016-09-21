//Marilu Creative Coding HW1

function setup() {
  createCanvas(800, 600);
  background('#fae');
  x = random(width);
  y = random(height);

}

function draw() {
  fill(250, 131, 182, 40); // used alpha to make flower not so solid
  stroke(127, 63, 120);
    // A used the P5 flower tools to make the mouse a flower instead of an ellipse
  translate(mouseX,mouseY);
  fill(mouseX/width*1000, mouseY/height*1000, 0);
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 20, 10, 40);
    rotate(PI/5);
    textSize(25);
  textAlign(CENTER);
  textFont("Helvetica"); //choosing font
  text("Marilu", 70, 70); //puting text around the flower

}
}

function keyPressed() //Clears the canvas when it is pressed
{
  background('#fae');
  x = random(width);
  y = random(height);
}