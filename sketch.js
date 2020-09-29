function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  angleMode(DEGREES);
  background("#1a1a1a");

  // put setup code here
}

function draw() {
  // put drawing code here
  stroke(lerpColor(color("#03fceb"), color("#0373fc"), sin(frameCount * 2)));
  strokeWeight(sin(frameCount * 6) + 1);
  if (frameCount <= 360) {
    push();
    translate(windowWidth / 2 + sin(frameCount) * 200, windowHeight / 2 + cos(frameCount) * 200);
    rotate(frameCount * 5);
    noFill();
    ellipse(windowWidth / 15, windowWidth / 15, windowWidth / 6, windowWidth / 12);
    pop();
  }
}
