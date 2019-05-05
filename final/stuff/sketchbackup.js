
var bg, emblem, awindow, p, picw, pich, all;
all = 4
let items = [];
let txt = [];
let pics = [];



function preload() {
  bg = loadImage('stuff/bg/backgroundtest.gif');

  for (let i = 0; i < all; i++) {
    pics[i] = loadImage(`stuff/obj/item`+ i +`.gif`);
    //console.log("pic width: " + pics.width);
    //console.log("2: " + pics.length);
}
  }


function setup() {
var x, y, c, w, h;
  createCanvas(800, 600);
  background(bg);

  for (var i = 0; i < all; i++) {
   items[i] = new Item(x, y, c, w, h);
  // console.log("3: " + items.length)
    }
}

function draw() {
build = new Item(10, 10)
    build.appear(20, 40, 3);
    build.appear(400, 300, 1);

    //image(c, 300, 20, 43, 100)



  }

    function mousePressed() {
      // picw = p.width;
      // pich = p.height;
      // console.log("hey: " + pich.width);
      build.next(mouseX, mouseY, picw, pich);
    }

class Item {
  constructor(x= 0, y = 0, c = 0, w = 100, h = 100) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c
    // this.x = x;
    // this.y = y;
    // this.h = h;
    // this.w = w;
    // this.img = c;
  }

  appear (mx, my, c) {
    //push();
  //  rectMode(CENTER);
    translate(mx, my)
    p = pics[c]
    image(p, this.x, this.y, this.w, this.h);
    //console.log('hey asshole');
    //pop();
  }


  next (px, py, picw, pich) {
    console.log("hi: " + this.c)
    picw = pics[this.c].width;
    pich = pics[this.c].height;
    if (px > this.x && px < this.x + picw && py > this.y && py < this.y + pich) {
        console.log("u win");
}
      }
}
// class Title {
//   constructor() {
//     this.titleW
//     this.titleL
//     this.fade
//     this.cassini
//   }
//
// class.theUI {
//   constructor() {
//     this.buttonX
//     this.buttonY
//   }
// }
//
