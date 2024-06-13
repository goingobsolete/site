let brushSizeX = 30;
let brushSizeY = 30
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

}

function draw() {
  // Set the brush random blue-purple color and random opactiy up to 100/255
  fill(random(100),random(0),random(255), random(100));
  noStroke();
  brushSizeX = random(100);
  brushSizeY = random(100);
  // brushSizeX = 30;
  // brushSizeY = 30;
  
  
  // Draw a circle at the mouse position to reveal the text
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, brushSizeX, brushSizeY);
    
  push();
  textSize(width/6);
  textFont('Helvetica');
  textAlign(CENTER, CENTER);
  fill(255);
  text("A D A E L", width / 2, height / 2);
  pop();

  }
}