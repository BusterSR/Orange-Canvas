var number = 10
document.getElementById('numberInput').addEventListener('change', function() {
    number = document.getElementById('numberInput').value;
  });
document.getElementById('clear').addEventListener('change', function() {
    clear();
  });

function setup() {
  createCanvas(windowWidth - 50, windowHeight - 30);
  noStroke()
  background('white');
  frameRate(600)
  fill('black')
}

function draw() {
  if (mouseIsPressed){
    circle(mouseX, mouseY, number)
  }
}


function mousePressed(){
  circle(mouseX, mouseY, number)
}

while (1 < 2){
  if (mouseIsPressed){
    circle(mouseX, mouseY, number)
  }
}
