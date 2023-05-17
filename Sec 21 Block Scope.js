let radius = 8;
if (radius > 0) {
  const PI = 3.14159;
  let circ = 2 * PI * radius;
}

console.log(radius);
console.log(PI);
console.log(circ);
// PI & circ are not DEFINED, they are only defined IN the function

let bird = "mandarin duck";

function birdwatch() {
  let bird = "golden pheasant";
  bird;
}

bird;
// bird is scoped to birdWatch function
