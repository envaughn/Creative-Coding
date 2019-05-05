var livRoom, title, kitchRoom, textOn, goodBye, bg, theTxt;
let items = [];
let pics = [];
let ctxt = [];

let tB = {};
tB.x = 660;
tB.y = 453;
tB.w = 249;
tB.h = 270;


function preload() {
bg = loadImage('stuff/bg/newtestbg.gif');

  for (let i = 0; i < 3; i++) {
    pics[i] = loadImage(`stuff/obj/item`+ i +`.gif`);
    for (let o = 0; o < 3; o++) {
      ctxt[o] = loadImage(`stuff/text/txt`+ o +`.gif`)
    }
    // ctxt[1] = loadImage(`stuff/obj/text0.gif`);

  }


    //console.log("pic width: " + pics.width);
    //console.log("2: " + pics.length);
  }

  // for (let i = 0; i < 2; i++) {
  //
  // }



function setup() {

var x, y, c, w, h, px, py, textOn, theTxt;

textAlign(CENTER, TOP)
rectMode(CENTER)
textSize(15);
  createCanvas(800, 600);



   items[0] = new Item(300, 0, 502, 0);
   items[1] = new Item(380, 340, 32, 1);
   items[2] = new Item(350, 360, 250, 2);
   items[3] = new Item(500, 100, 100, 3);
   items[4] = new Item(750, 500, 25, 4);
livRoom = true
goodBye = false



}

function draw() {

    background(bg);
    noStroke();

advance();



}


function advance() {

  if (livRoom) {
    for (let i = 0; i < 4; i++)  {
      items[i].imgShow();
    }
  }
    if (textOn) {
  for (let i = 0; i < 4; i++)  {
        items[i].imgShow(theTxt);
    }
  } else {
    console.log('texton null')
  }
    // console.log('helo?')


// } else { if (testRm)
//   console.log('livRoom null')
// } else
//
//   }
}


    function mousePressed() {
     for (let allitems of items) {
        allitems.textEv(mouseX, mouseY, theTxt);


}
    }

class Item {
  constructor(x, y, w = 100, c, h = w) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;

  }

  imgShow () {
    if (livRoom) {
    image(pics[this.c], this.x, this.y, this.w, this.h);
  }

}
txtShow (t) {
  t = theTxt
  if (textOn) {
  image(ctxt[1], tB.x - (tB.x/4), tB.y - (tB.y/4), tB.w, tB.h);
}
}

textEv (px, py) {
if (px > this.x && px < this.x + this.w && py > this.y && py < this.y + this.w) {
textOn = true;
theTxt = this.c

}
}

}



  //  console.log("hey");
    //textOn = true;

 // } else if (px )

    // textOpen = true
    // livRoom = true

//   textDis (px, py, d) {
//     d = dist(px, py, tB.x, tB.y )
//     if (!textOpen ){
//       if (d > tB.h) {
//     }
// }
