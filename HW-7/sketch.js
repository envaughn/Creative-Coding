
let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

let cR = 255
let cB = 255
let cG = 255 //color variables defined

noiseVal = 0.0 //starting noise variable

function setup() {
    createCanvas(windowWidth, 400);
    background('rgb(245, 245, 130)');
    noiseDetail(5, 1)
}


function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
        ball.width = random(5, 30) //size changes to a random number smaller than the default size
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
        ball.width = random(5, 30)
    }

    noStroke()
let colorVal = color(cR, cB, cG) //setting variables as color values
    fill(colorVal);
    ellipse(ball.x, ball.y, ball.width, ball.width);

noiseVal += 0.5

if (mouseIsPressed) { //random colors and sizes for mouse is pressed
  cR = random(0, 255)
  cB = random(0, 255)
  cG = random(0, 255)
  ball.width = (ball.width * noise(noiseVal)) % 75; //adding noise factor to size when mouse is pressed. Size has modulo so it stays in range.
}

}
function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
