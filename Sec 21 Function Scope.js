function collectEggs() {
  let totalEggs = 6;
}

collectEggs();
console.log(totalEggs);
// I cant access 'totalEggs' because it only lives in the function. I can't pull that variable.

let totalEggs = 0;
function collectEggs() {
  totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);
// I can access it because totalEggs isn't a variable.

function helpMe() {
  let msg = "I'm on fire!";
  msg;
}
// msg is scoped to the helpMe function
msg;
// should not be defined
