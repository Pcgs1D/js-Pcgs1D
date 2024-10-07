let cor;
let h;// x
let v;// y


function setup() {
  createCanvas(400, 400);
  background("yellow");
 cor = color(random(0, 255), random(0,255), random(0 , 255));
  h = 200
  v = 200
  }

function draw() {
  fill(cor)
  circle(h, v, 50);
  
 if(mouseX < h) {
   h = h - 1;
 }
  
  if(mouseX > h) {
    h = h + 1;
  }
  
  if(mouseY < v) {
    v = v - 1;
  }

  if(mouseY > v) {
    v = v + 1;
  }
  
  if(mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
  
  
}
