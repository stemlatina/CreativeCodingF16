//Politician Game
//You have 30 secs to get as many rotten "politicians" in the "swamp" as you can.
//DumpTrumpGame - SwarmTheSwamp
//Used P5 Play tutorials and examples.

//var
var starttime = 0;
var score = 0;
var sPlay = [];
var begin = 1;
var bg;

//pre-loading the font, sounds and background picture
function preload() {
  thefont = loadFont('./data/TrajanPro-Bold.otf');
  soundFormats('mp3', 'ogg');
  sPlay[0] = loadSound("assets/scream1.mp3");
  sPlay[1] = loadSound("assets/scream2.mp3");
  sPlay[2] = loadSound("assets/scream3.mp3");
  sPlay[3] = loadSound("assets/scream4.mp3");
  sPlay[4] = loadSound("assets/scream5.mp3");
  sPlay[5] = loadSound("assets/scream6.mp3");
  bg = loadImage("assets/capitol.jpg");
  
}

//setup canvas for game
function setup() {
  createCanvas(800, 600);
}


//set background and draw sprites
function draw() {
  background(bg);
  if(millis()-starttime>10000)//timing the game, can change to make faster or slower. This one is set fast for demo. also gets score to save
  {
    begin=2;
    for(var i = 0;i<allSprites.length;i++)
    {
      allSprites[i].remove();
    }
  }
  if(millis()-starttime>1000)
  {
    begin = 1;
  }
  
  for (var k = 0; k < allSprites.length; k++) {
//bounce  and gravity
    allSprites[k].addSpeed(0.1, 90);
    
    if (allSprites[k].position.y > height) {
      allSprites[k].velocity.y *= -1;
    }
    if (allSprites[k].position.x > width ||
        allSprites[k].position.x < 0) {
      allSprites[k].remove();//when it leaves the screen
    }
  }

  
 //Text settings and allignments 
  fill('red');
  stroke(color(0, 0, 255));
  strokeWeight(3);
  textSize(25);
  textAlign(CENTER, CENTER);
  if (allSprites.length === 0) {
    if(begin===0) text("READY?! Click to Start!", width/2, height/2);
    else if (begin==1) text("BUILD THE SWAMP: You have 30 secs to get as many rotten", width/2, height/2); //start of the game
    text("politicians in the 'swamp' as you can. READY?! Click to Start!", width/2, height/1.85);
  }
  else {
    score = allSprites.length;
    text("Swamp Member Count: " + score,width/2, height/7);//score cound
  }
   drawSprites();
   
text("Recent Score: " + score,width-100, 20);

}
//when you click the mouse game starts and you have to click really fast to keep as many in the swamp as you can.
function mousePressed() {
  var spr = createSprite(width/2, height/2, random(10, 50), random(10, 50));
  var img  = loadImage("assets/dump"+floor(random(0,8))+".png");
  spr.addImage(img);
  spr.velocity.y = random(3);//sets speed and direction
  spr.velocity.x = random(-3, 3);
  spr.position.x = mouseX;
  spr.position.y = mouseY;
  var pick = floor(random(0, 5));
  sPlay[pick].play();//brings in the sound whenever something is clicked
  
}




