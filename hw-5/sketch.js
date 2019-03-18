let train1pos = -400;
let train2pos = -700;
let train3pos = -1000;
let tWindow1 = -200;
let tWindow2 = -445
let tWindow3 = -688;
let tWindow4 = -940;

function setup() {
  createCanvas( 800, 600 );
  background ( 'rgb(197, 233, 217)' );
  frameRate(60);
  noCursor();
}
//floor + wall accent
function draw(){
  noStroke();
  fill( 'rgb(96, 135, 91)');
  rect( 0, 475, 800, 125 );
  fill( 'rgb(117, 116, 152)' );
  rect (0, 440, 800, 35 );

//rug (2 triangle 1 rect)
  fill('rgb(111, 74, 82)');
  triangle( 0, 600, 125, 486, 125, 600 );
  rect( 125, 486, 550, 114 );
  triangle( 800, 600, 675, 486, 675, 600 );
//rug accents
  strokeWeight(10);
  stroke('rgb(91, 128, 110)');
  line(40, 600, 135, 510);
  line(135, 510, 665, 510);
  line(665, 510, 755, 600);


//windows
  noStroke();
 fill('rgb(197, 233, 217)');
  rect(40, 45, 180, 350);     //left
  rect(580, 45, 180, 350);    //right


//**WINDOW ANIMATION** TRAIN
  push();
    translate(-400, 0)

//train car (3 overlapping rectangles so they can wrap)
    noStroke();
    fill('rgb(193, 203, 209)');
    rect(train1pos, 250, 425, 145);
    rect(train2pos, 250, 425, 145);
    rect(train3pos, 250, 425, 145);
      train1pos = train1pos % 1200 + 3;
      train2pos = train2pos % 1200 + 3;
      train3pos = train3pos % 1200 + 3;

//train windows
  fill('rgb(251, 244, 144)')
  rect(tWindow1, 275, 200, 100);
  rect(tWindow2, 275, 200, 100);
  rect(tWindow3, 275, 200, 100);
  rect(tWindow4, 275, 200, 100);
      tWindow1 = tWindow1 % 1200 + 3;
      tWindow2 = tWindow2 % 1200 + 3;
      tWindow3 = tWindow3 % 1200 + 3;
      tWindow4 = tWindow4 % 1200 + 3;

pop();

//walls (so the train can travel behind)
  noStroke();
  fill('rgb(243, 238, 219)')
  rect(0, 0, 40, 440);
  rect(0, 0, 800, 45);
  rect(760, 0, 40, 440);
  rect(0, 395, 800, 45)
  rect(220, 0, 360, 400)


//curtains
  fill('rgb(218, 165, 5)');
  rect(30, 40, 199, 115);  //left
  rect(570, 40, 199, 115); //right
  //accent lines
  strokeWeight(2);
  stroke('rgb(255,255,255)');
  line(30, 135, 229, 135);
  line(570, 135, 769, 135);


//dresser
    noStroke();
    fill('rgb(105, 80, 35)');
    rect(238, 315, 325, 171);
    fill('rgb(144, 111, 48)'); //front
    rect(243, 325, 315, 168);
  //dresser drawers
    fill('rgb(105, 80, 35)');
    rect(260, 350, 280, 55);
    rect(260, 425, 280, 55);
  //dresser knobs
    fill('rgb(144, 111, 48)');
    ellipse(310, 378, 25, 20); //left
    ellipse(310, 455, 25, 20);
    ellipse(485, 378, 25, 20); //right
    ellipse(485, 455, 25, 20);


//PAINTING
    rect(245, 25, 310, 260 );   //frame
//**ANIMATION** PAINTING
  let circleY = (mouseY)/2 % 225;
  let circleX = (mouseX)/2 % 225;
  let r = 100 + (mouseY)/4 % 135
  let g = 120
  let b = 100 + (mouseX)/4 % 135
push();
  translate(262, 65);
    fill(r, g, b);   //background
    rect(0,-25, 275, 228);
    fill('rgba(255, 225, 213, 0.5)')
    ellipse(130, 90, circleX, circleY);
    fill('rgba(252, 210, 105, 0.51)');
    ellipse(130, 90, circleY, circleX);
    fill('rgba(84, 204, 208, 0.45)')
    rotate(radians(45));
    ellipse(155, -27, circleX, circleY)

pop();

}
