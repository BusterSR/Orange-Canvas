var number = 10
var colorChosen = '255, 255, 255'
var prevX
var prevY
document.getElementById('numberInput').addEventListener('change', function() {
    number = document.getElementById('numberInput').value;
  });
document.getElementById('colorInput').addEventListener('change', function() {
    colorChosen = document.getElementById('colorInput').value;
  });
document.getElementById('clear').addEventListener('click', function() {
  background(255);
  clear()
  createCanvas(windowWidth - 50, windowHeight - 30);
  background(255, 254, 252);
  frameRate(600)
});

document.getElementById('save').addEventListener('click', function() {
  saveCanvas(canvas, 'myOrange', 'png');
});

function setup() {
  createCanvas(windowWidth - 50, windowHeight - 30);
  background(255, 254, 252);
  frameRate(600)
  fill(255, 255, 255)
}

function draw() {
  strokeWeight(number);
  fill(colorChosen)
  if (mouseIsPressed){
    line(prevX, prevY, mouseX, mouseY);
  }
  prevX = mouseX
  prevY = mouseY
}
