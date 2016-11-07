// Goal is to make spiral staircase type picture out of rectangles that each have their own sound.
//Marilu D.

var NUMSINES = 10; // how many of these things can we do at once?
var sines = new Array(NUMSINES); // an array to hold all the current angles
var rad; // an initial radius value for the central sine
var i; // a counter variable

// play with these to get a sense of what's going on:
var fund = 0.005; // the speed of the central sine
var ratio = 0.9; // what multiplier for speed is each additional sine?
var alpha = 90; // how opaque is the tracing system
var osc;
var playing = false;
var trace = false; // are we tracing?

function setup()
{
  createCanvas(800, 600); // OpenGL mode
  osc = new p5.Oscillator();
  osc.setType('triangle');
  osc.freq(240);
  osc.amp(0);
  osc.start();

  rad = height/4; // compute radius for central circle
  background(255); // clear the screen

  for (i = 0; i<sines.length; i++)
  {
    sines[i] = PI; // start EVERYBODY facing NORTH
  }
}

function draw()
{
  textSize(32);
  text("Press the SpaceBar to Go Back", 10, 30);
  fill(0, 102, 153);
  if (!trace) {
    background('rgb(100%,0%,10%)'); // clear screen if showing geometry
    stroke(255, 204, 0); // pen
    noFill(); // don't fill
  } 

  // MAIN ACTION
  push(); // start a transformation matrix
  translate(width/2, height/2); // move to middle of screen

  for (i = 0; i<sines.length; i++) // go through all the sines
  {
    var erad = 0; // radius for small "point" within circle... this is the 'pen' when tracing
    // setup for tracing
    if (trace) {
      stroke(0, 0, 255*(float(i)/sines.length), alpha); // blue
      fill(0, 255,0, alpha/2); 
    }
    var radius = rad/(i+1); // radius for circle itself
    rotate(sines[i*2]); // rotate circle
    if (!trace) ellipse(0, 0, radius*2, radius*2); // if we're simulating, draw the sine
    push(); // go up one level
        translate(0, radius); // move to sine edge
    if (!trace) rect(30, 20, 55, 55);
    if (trace) rect(30, 20, 55, 55);
    pop(); // go down one level
    translate(0, radius); // move into position for next sine
    sines[i] = (sines[i]+(fund+(fund*i*ratio)))%TWO_PI; // update angle based on fundamental
  }
  
  pop(); // pop down final transformation
  
}

function keyReleased()
{
  if (key==' ') {
    trace = !trace; 
    background(255);
    if (!playing) {
      // ramp amplitude to 0.5 over 0.1 seconds
      osc.setType('triangle');
      osc.amp(0.5, 0.05);
      playing = true;
      backgroundColor = color(0,255,255);
    } else {
      // ramp amplitude to 0 over 0.5 seconds
      osc.setType('sawtooth');
      osc.amp(0, 0.5);
      playing = false;
      backgroundColor = color(255,0,255);
  }
  }
}

