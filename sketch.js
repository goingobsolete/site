// Boolean variable to track whether drawing is active
let isDrawing = false;

// Initial text displayed before any drawing action
let initialText = "CLICK / TOUCH TO DRAW";

// Boolean flag to track if the background has been cleared once
let hasBGCleared = false;

// Variables to dynamically store brush (ellipse) size
let brushSizeX;
let brushSizeY;

function setup() {
  // Create a canvas that fills the entire window
  createCanvas(windowWidth-(windowWidth/50), windowHeight-(windowHeight/50));

  // Set initial background color to a light gray
  background(255);

  // Set text size relative to canvas width
  textSize(width / 20);

  // Set text font to Helvetica
  textFont('Helvetica');

  // Center-align text horizontally and vertically
  textAlign(CENTER, CENTER);

  // Set text color to black
  fill(0);

  // Display initial text on the canvas
  text(initialText, width / 2, height / 2.5);

  // // Create export button
  // let exportButton = createButton('Export as PNG');
  // exportButton.position(20, 20);
  // exportButton.mousePressed(exportCanvas);
}

function draw() {
  // Set the fill color to a random blue-purple shade with random opacity
  fill(random(100), random(0), random(255), random(100));

  // Disable stroke (outline) for shapes
  noStroke();

  // Dynamically set brush size within a random range
  brushSizeX = random(100);
  brushSizeY = random(100);

  // Draw a circle at the mouse position when drawing is active
  if (isDrawing) {
    ellipse(mouseX, mouseY, brushSizeX, brushSizeY);
    
    // Display large text "A D A E L" at the center of the canvas
    push();
    textSize(width/6);
    textFont('Helvetica');
    textAlign(CENTER, CENTER);
    fill(255);
    text("A D A E L", width / 2, height / 2);
    pop();
  }
}

// Event handler triggered when mouse button is pressed
function mousePressed() {
  // Enable drawing mode
  isDrawing = true;

  // Clear the canvas background only once at the start of drawing
  if (!hasBGCleared) {
    background(255);
    hasBGCleared = true;
  }
}

// Event handler triggered when mouse button is released
function mouseReleased() {
  // Disable drawing mode
  isDrawing = false;
}

// Event handler triggered when touch begins on the screen
function touchStarted() {
  // Enable drawing mode
  isDrawing = true;

  // Clear the canvas background only once at the start of drawing
  if (!hasBGCleared) {
    background(255);
    hasBGCleared = true;
  }

  // Prevent default touch behavior (like scrolling)
  return false;
}

// Event handler triggered when touch moves on the screen
function touchMoved() {
  // Enable drawing mode
  isDrawing = true;

  // Prevent default touch behavior (like scrolling)
  return false;
}

// Event handler triggered when touch ends on the screen
function touchEnded() {
  // Disable drawing mode
  isDrawing = false;

  // Prevent default touch behavior (like scrolling)
  return false;
}

// Function to export the current canvas as a PNG image
function exportCanvas() {
  saveCanvas('myDrawing', 'png');
}
