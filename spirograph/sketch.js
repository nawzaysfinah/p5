var r1;
var r2;

var a1 = 0;
var a2 = 0;

var a1Inc;
var a2Inc;

var prevX;
var prevY;

function setup() {
  createCanvas(1200, 1200);
  angleMode(DEGREES);
  background(45);

  r1 = random(200, 350);
  r2 = random(200, 350);

  a1Inc = random(0.1, 5);
  a2Inc = random(0.1, 5);
}

let frames = 360 * 3;

function keyPressed() {
  if (key == " ") {
    const options = {
      units: "frames",
      delay: 0,
    };
    saveGif("sine-wave-structure.gif", frames, options);
  }
}

function draw() {
  translate(width / 2, height / 2);
  stroke(255);

  for (var i = 0; i < 100; i++) {
    var x1 = r1 * cos(a1);
    var y1 = r1 * sin(a1);

    var x2 = x1 + r2 * cos(a2);
    var y2 = y1 + r2 * sin(a2);

    var r = map(sin(frameCount), -1, 1, 50, 205);
    var g = map(cos(frameCount), -1, 1, 50, 205);
    var b = map(sin(frameCount), -1, 1, 205, 50);

    stroke(r, g, b);

    line(prevX, prevY, x2, y2);

    prevX = x2;
    prevY = y2;

    a1 += a1Inc;
    a2 += a2Inc;
  }
}
