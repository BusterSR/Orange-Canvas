var number = 10
var prevX
var prevY
document.getElementById('numberInput').addEventListener('change', function() {
    number = document.getElementById('numberInput').value;
  });
document.getElementById('clear').addEventListener('click', function() {
  clear()
  createCanvas(windowWidth - 50, windowHeight - 30);
  noStroke()
  background('white');
  frameRate(600)
  fill('black')
});

document.getElementById('save').addEventListener('click', function() {
  saveCanvas(canvas, 'myOrange', 'png');
});

function setup() {
  createCanvas(windowWidth - 50, windowHeight - 30);
  background('white');
  frameRate(600)
  fill('black')
}

function draw() {
  strokeWeight(number);
  if (mouseIsPressed){
    line(prevX, prevY, mouseX, mouseY);
  }
  prevX = mouseX
  prevY = mouseY
}
