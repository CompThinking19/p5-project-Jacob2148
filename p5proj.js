function setup() {
  createCanvas(400, 400);

  // put setup code here
}
var move = 0
function draw() {
  if(keyIsPressed === True){
    fill(0);
  }else{
    fill(255);
  }
  translate(move, 40)
  rect(25, 25, 50, 50);
  move++
  if(move == 400){move -= 550;}}
  // put drawing code here
}
