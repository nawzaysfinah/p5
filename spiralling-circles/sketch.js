let x, y;
let angle = 0;
let spiralRadius = 0;
let spiralRadius2 = 10;
let size = 10;
let sizeIncrement = 0.01;
let a, b, c;
let d, e, f;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

a = 300;
b = 200;
c = 100;

function draw() {
  spiralRadius += 0.05;
  angle += 0.1;
  x = width / 2 + (cos(angle) * spiralRadius * size) / 2;
  y = height / 2 + sin(angle) * spiralRadius * size;
  ellipse(x, y, size, size);
  fill(a, b, c);
  size += sizeIncrement;

  if (size > 100) {
    sizeIncrement = -sizeIncrement * 2;
  } else {
    sizeIncrement = 0.01;
  }

  if (spiralRadius > 10) {
    spiralRadius = spiralRadius2;
    spiralRadius2 -= spiralRadius;
    a = d - 50;
    b = e - 50;
    c = f - 50;
    fill(d, e, f);
  } else {
    spiralRadius = spiralRadius + 0.05;
  }
}
