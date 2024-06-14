// Boolean variable to track whether drawing is active
let isDrawing = false;

// Initial text displayed before any drawing action
let initialText = "\n\nHappy Birthday!\nI thought this domain name\nmight come in handy ;)\nLets mess around with this code\nto make it your own.\nI hope you like what I made for now.\nLove,\nPaul\n\n***CLICK / TOUCH TO DRAW***\n\n";

// Boolean flag to track if the background has been cleared once
let hasBGCleared = false;

// Variables to dynamically store brush (ellipse) size
let brushSizeX;
let brushSizeY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textSize(width / 30);
  textFont('Georgia');
  textAlign(CENTER, CENTER);
  fill(0);

  // Split the initialText into an array of lines
  let lines = initialText.split('\n');
  // Calculate the total height of the text block
  let textHeight = lines.length * (textAscent() + textDescent()) + (lines.length - 1) * (textSize() / 5);
  // Starting Y position to center the text block vertically
  let startY = (height - textHeight) / 2;

  // Display each line of text
  for (let i = 0; i < lines.length; i++) {
    let posY = startY + i * (textAscent() + textDescent() + textSize() / 5);
    text(lines[i], width / 2, posY);
  }
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
