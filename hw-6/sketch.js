let theTriangle = {};
  theTriangle.posX1 = 0;
  theTriangle.posY1 = 0;
  theTriangle.posX2 = 100;
  theTriangle.posY2 = 100;
  theTriangle.posX3 = 300;
  theTriangle.posY3 = 1000;

//triangle that will spin as the background

let triSpin = 0.0 //spin rate for the triangle

let goldLine = {};
    goldLine.x1 = 150;
    goldLine.y1 = -25;
    goldLine.x2 = 50;
    goldLine.y2 = 100;
//repeating yellow and white lines, written as an object so it's easier to edit all at once.


function setup() {
  createCanvas(1000, 800);
  background ( 'rgba(22, 27, 93, 1)' );
  frameRate(30);
  smooth();
  noCursor();
}


function draw() {

push();
  translate(500, 400)
// center of canvas so the triangle can "spin"
  noStroke();

  noiseDetail(8, .25)
    let noiseVal = noise(triSpin + .01)
    let n = 360 * noiseVal

// modifying "triSpin" with noise for more dynamic movement.

    let colorVar = ['rgba(178, 169, 208, 0.05)', 'rgba(178, 169, 208, 0.01)', 'rgba(22, 27, 93, 0.3)'];
    let triColor = random(colorVar);

// random function picks preset colors from an array. used the background blue to "erase" other loops.

  fill(triColor)

  rotate(n);

  triangle(theTriangle.posX1, theTriangle.posY1, theTriangle.posX2, theTriangle.posY2,theTriangle.posX3, theTriangle.posY3);
    theTriangle.posX1 = theTriangle.posX1 * noiseVal;
    theTriangle.posY1 = theTriangle.posY1 * noiseVal;
//noise value on the triangle as it spins for more movement.

  triSpin = triSpin + 1; //animation

pop();

push();
let circBlu = map(mouseX, 0, width, 4, 255, true);
//the circle's blue level, mapped so it can change from yellow to white with the mouse.

let circHue = color(217, 172, circBlu);
    circHue.setAlpha(50);
//declared color values that can be used as variables
    stroke(circHue);
    strokeWeight(1);

    translate(500, 400); //centered
    noFill();

  let circWidth = constrain(mouseX * 1.2, 20, 1000);
  let circHeight = constrain(mouseY * 1.2, 20, 800);
    ellipse (0, 0, circWidth, circHeight);
//creates ellipse that follows the mouse, and stays within the canvas
  pop();




push();
let lineBlu = map(n, 0, 255, 4, 255)
let lineColor = color(217, 172, lineBlu);
    lineColor.setAlpha(50);
//more color mapping between yellow and white, this time using the noise function.

    stroke(lineColor);
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2);
    translate(0, 100)
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2);
    translate(0, 100)
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2);
    translate(0, 100)
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2);
    translate(0, 100)
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2);
    translate(0, 100)
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2);
    translate(0, 100)
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2);
    translate(0, 100)
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2); //LEFT SIDE
pop();

push();
    stroke(lineColor);
    rotate(PI);
    translate(-975, -850)
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2);
    translate(0, 100)
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2);
    translate(0, 100)
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2);
    translate(0, 100)
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2);
    translate(0, 100)
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2);
    translate(0, 100)
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2);
    translate(0, 100)
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2);
    translate(0, 100)
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2);
    translate(0, 100)
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2);
    translate(0, 100)
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2);
    translate(0, 100)
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2);
    translate(0, 100)
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2);
    translate(0, 100)
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2);
    translate(0, 100)
    line(goldLine.x1, goldLine.y1, goldLine.x2, goldLine.y2);
    translate(0, 0); //RIGHT SIDE
  pop();


goldLine.x1 = (goldLine.x1 + 2) % 800;
goldLine.y1 = (goldLine.y1 + 2) % 800;
goldLine.x2 = (goldLine.x2 + 2) % 800;
goldLine.y2 = (goldLine.y2 + 2) % 800;
//animating the lines, and using a modulo so the effect repeats.

}
