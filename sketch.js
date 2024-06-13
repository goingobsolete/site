
let isDrawing = false;

let brushSizeX;
let brushSizeY;
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
  
  
  // Draw a circle at the mouse position to reveal the text
  if (isDrawing) {
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

//These commands control when the mouse or cursor is drawing
function mousePressed() {
  isDrawing = true;
}

function mouseReleased() {
  isDrawing = false;
}

// these touch functions - specifically the "return false" disables the default functions of what moving your finger across a touch screen. In this case it won't scroll, just draw.
function touchStarted() {
  isDrawing = true;
  return false;
}

function touchMoved() {
  isDrawing = true;
  return false;
}

function touchEnded() {
  isDrawing = false;
  return false;
}