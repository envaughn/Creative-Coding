var livRoom, textOn, bg, theTxt;
let items = [];
let pics = [];
let ctxt = [];
//declaring arrays for image and text, and the Item class


//values for the text box, declared here so it could move while I was testing.
let tB = {};
tB.x = 660;
tB.y = 453;
tB.w = 249;
tB.h = 270;


function preload() {
bg = loadImage('stuff/bg/newtestbg.gif');
theText = 2
//preloading the text and images
//the text was going to be strings

  for (let i = 0; i < 3; i++) {
    pics[i] = loadImage(`stuff/obj/item`+ i +`.gif`);
    for (let o = 0; o < 3; o++) {
      ctxt[o] = loadImage(`stuff/text/txt`+ o +`.gif`)
    }
  }
  }



function setup() {

var x, y, c, w, h, px, py, textOn;

background(bg)
textAlign(CENTER, TOP)
rectMode(CENTER)
textSize(15);
  createCanvas(800, 600);
  background(bg);
//The interactive items, a for loop wasn't possible here because of the locations being fed to the constructor.
   items[0] = new Item(400, 100, 502, 0, 200);
   items[1] = new Item(380, 340, 32, 1);
   items[2] = new Item(330, 365, 250, 2);


//The last value is how I decided to tie the image to the Item class, so
// item[1] corresponds to pics[1]

livRoom = true

}

function draw() {
    noStroke();
advance();

}

function advance() {

  //created a possibility for more "rooms" with different items
  //    by creating true/false on looping of all the objects

  if (livRoom) {
    for (let i = 0; i < 3; i++)  {
      items[i].imgShow();
    }
  } else {

  }

  if (textOn) {
  for (let o = 0; o < 3; o++)  {
        items[o].txtShow(theText);
  }
} else {
    console.log('texton null')

  }
//  noLoop ();
//a previous version of this worked, but because the text boxes are all in
// the same location I couldn't figure out how to make the correct text
// to loop with the right object
}

    function mousePressed() {
     for (let allitems of items) {
        allitems.textEv(mouseX, mouseY);
//allows text to show

}
    }

class Item {
  constructor(x, y, w = 100, c, h = w) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c; //the value that chooses the image/text
  }

  imgShow () {
    if (livRoom) {
    image(pics[this.c], this.x, this.y, this.w, this.h);
  }

}
txtShow (t) {
  if (textOn) {
  image(ctxt[t], tB.x - (tB.x/4), tB.y - (tB.y/4), tB.w, tB.h);
}
}

textEv (px, py) {
if (px > this.x && px < this.x + this.w && py > this.y && py < this.y + this.h) {
console.log('itemclick' + this.c)
textOn = true;

//^^^ this is the point where it works, when you click on the item it gives the right c value.


}
}

}
