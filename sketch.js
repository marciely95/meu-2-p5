function setup() {
  createCanvas(750, 750);
  background("pink");
}

function draw() {
  stroke("grey");
  fill("purple")
  
  
  if(mouseIsPressed){
  rect(mouseX,mouseY,20,20);
  }
}