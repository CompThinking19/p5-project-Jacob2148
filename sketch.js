function setup() {
  createCanvas(400, 400);

  // put setup code here
}
var move = 0
var currentX = 0;
var currentY = 0;
function draw() {
  if(keyIsPressed === true){
    fill(0);
  }else{
    fill(255);
  }
  translate(move, 40, move, 40)
  currentX = (currentX + 25);
  currentY = (currentY + 25);
  move++
  if(move == 400){move -= 550;}}

  // put drawing code here
