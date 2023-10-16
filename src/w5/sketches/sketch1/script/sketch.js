let aVariable = 20;
let anArray = [30, 60, 90];
let anotherArray = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  console.log(aVariable);
  console.log('anArray', anArray);
  console.log(anArray[0]);
  console.log(anArray[1]);
  console.log(anArray[2]);
  console.log(anArray.length);
  console.log(anotherArray);
  anotherArray.push('anotherArray 첫 데이터');
  console.log(anotherArray[0]);
  anotherArray.push(50);
  console.log(anotherArray[1]);

  background(255);
}
function draw() {}
