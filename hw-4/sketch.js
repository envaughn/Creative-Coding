function setup() {
    createCanvas (600, 500);
    background ('rgb(38, 92, 69)');

}

function draw() {
//body arc
  push();
    translate(300, 300);
    rotate( radians(180) );
    noStroke();
    fill('rgb(247, 134, 88)');
    arc(0, 0, 243, 450, 0, PI, CHORD);
  pop();
//ears
      translate(300, 300)
      noStroke()                      //left ear
      fill('rgb(247, 134, 88)');
      triangle(-72, -182, -5, -182, -50, -255);

      noStroke()                      //right ear
      fill('rgb(247, 134, 88)');
      triangle(72, -182, 5, -182, 50, -255);
//ground
      noStroke();
      fill('rgb(18, 48, 35)');
      rect(-300, 115, 600, 125)
//legs
      noStroke()
      fill('rgb(247, 134, 88)');
      rect (-60, 0, 38, 125);  //left leg
      rect (22, 0, 38, 125);  //right leg
    pop();
//feets
  push();
    fill('rgb(247, 134, 88)');
    rotate( radians(180) );
    stroke('white');
    strokeWeight(1);
    arc(45, -125, 60, 50, 0, PI); //left foot
    arc(-45, -125, 60, 50, 0, PI); //right foot
  pop();
//feet marks
    stroke('white')
    line(-30, 124, -30, 115) //left marks
    line(-45, 124, -45, 115)
    line(-60, 124, -60, 115)
    line(30, 124, 30, 115) //right marks
    line(45, 124, 45, 115)
    line(60, 124, 60, 115)


//paws
  push();
    fill('rgb(247, 134, 88)');
    stroke('white');
    strokeWeight(1);
    arc(-96, 0, 50, 70, 0, PI) //left paw
    arc(96, 0, 50, 70, 0, PI)
//paw marks
    line(-86, 30, -87, 20)
    line(-96, 34, -97, 20)
    line(-106, 31, -107, 20)
    line(86, 30, 87, 20)
    line(96, 34, 97, 20)
    line(106, 31, 107, 20)
    pop();

//face
//eyes
    noStroke()
    fill('rgb(252, 236, 100)');
    ellipse(-40, -145, 45, 26)     //left eyeball
    ellipse(40, -145, 45, 26)     //right eyeball
    fill('rgb(125, 24, 1)');
    ellipse(-40, -145, 10, 26)    //left pupil
    fill('rgb(19, 36, 97)');
    ellipse(40, -145, 10, 26)     //right pupil

//eyebrows
  push();
    fill('rgb(116, 70, 38)');
    triangle(-60, -165, -35, -175, -22, -165) //right eyebrow
    triangle(60, -165, 35, -175, 22, -165)   //left eyebrow

//mouth
    stroke ('rgb(115, 70, 38)');
    strokeWeight(2)
    line(-30, -105, 30, -105)
    noStroke()
    fill('rgb(179, 64, 47)');
    arc(0, -105, 25, 40, 0, PI)

//ear marks
    stroke('white')
    strokeWeight(1)
    line(-50, -254, -40, -210)
    line(50, -254, 40, -210)


  }
