//Marilu Project

//-------Did the automatic #3 task on the 3B project--------//

var x, y; // some variables for the current position of the turtle
var currentangle = 270; // we start out facing north
var step = 20; // how many pixels do we move forward when we draw?
var angle = 45; // how many degrees do we turn with '+' and '-'
var osc;
var playing = false;


function setup()
{
  createCanvas(800, 600);
  osc = new p5.Oscillator();
  osc.setType('triangle');
  osc.freq(240);
  osc.amp(0);
  osc.start();
  background(255);
  stroke(0, 0, 0, 255);
  
  // start our turtle in the middle of the screen
  x = width/2;
  y = height/2;
}

function draw()
{
  
  // give me some random color values:
  var r = random(128, 255);
  var g = random(0, 192);
  var b = random(0, 50);
  var a = random(50, 100);

  // pick a gaussian (D&D) distribution for the radius:
  var radius = 0;
  radius+= random(0, 15);
  radius+= random(0, 15);
  radius+= random(0, 15);
  radius = radius/3;
  
  // draw the stuff:
  fill(r, g, b, a); // interior fill color
  ellipse(x, y, radius, radius); // circle that chases the mouse

}

function keyTyped()
{
  console.log(key); // what key did we type?
  
  if(key=='F') // draw forward
  {
    // polar to cartesian transformation based on step and currentangle:
    var x1 = x + step*cos(radians(currentangle));
    var y1 = y + step*sin(radians(currentangle));
    line(x, y, x1, y1);
    stroke('#fae');
    strokeWeight(1);
    
    // connect the old and the new
    // update the turtle's position:
    x = x1;
    y = y1;
  }
  else if(key=='f')
  {
    var x2 = x + step*4*cos(radians(currentangle));
    var y2 = y + step*4*sin(radians(currentangle));
    stroke(20, 75, 200);// connect the old and the new
    strokeWeight(1);
    x = x2;
    y = y2;
  }

  else if(key=='+')
  {
   currentangle+=angle; // turn left
  }
  else if(key=='-')
  {
   currentangle-=angle; // turn right   
  }
  else if(key=='y')//makes it yellow
  {
    stroke(255, 204, 0);
    strokeWeight(2);
  }
    else if(key=='p')//makes it pink
  {
    stroke('#fae');
    strokeWeight(2);
  }
   else if(key=='g')//makes it green
  {
    stroke('rgb(0,255,0)');
    strokeWeight(2);
  }
  else if(key=='1')//makes noise
  {
      osc.setType('square');
      osc.amp(0.5, 0.05);
      playing = true;
      backgroundColor = color(0,255,255);
  }
  else if(key=='2')
  {
      osc.setType('');
      osc.amp(0, 0.5);
      playing = false;
      backgroundColor = color(255,0,255);
  }
      
  else if(key=='s')
  {
    rect(30, 20, 55, 55, 20);
    textAlign(CENTER);
    text("Midterm", 50, 50);
  }

}



