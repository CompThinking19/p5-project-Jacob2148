function setup() {
  createCanvas(400, 400);
//goal is to create a program that cause dots to appear with any button press on the keyboard from the user
//with each button press, different location should begin to form across the canvas similar to how infection spreads in the real world
//As for why buton presses cause the points to form, it is to represent the interactions between people and possible risks of highly contagious diseases

  // put setup code here
}
var move = 0
var currentX = 0;
var currentY = 0;
function draw() {
  if(keyIsPressed === true){
    //anytime a key is pressed should fill in the points in various locations
    fill(0);
  }else{
    fill(255);
  }
  point (100, 100)
  translate(move, 40, 40)
  //causes a new spot to form on the canvas when the the next key is pressed with a change vertically and horizontally
  currentX = (currentX + 25);
  currentY = (currentY + 25);
  move++
  if(move == 400){move -= 550;}}
  //resets the canvas to allow for the points to loop back around on to the visible area

  // put drawing code here
