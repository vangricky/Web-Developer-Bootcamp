console.log("BEFORE CONDITIONAL")
let random = Math.random();
if(random < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.5!!!")
    console.log(random);
}
console.log("AFTER CONDITIONAL")

if(random >= 0.5) {
    console.log("YOUR NUMBER IS GREATER THAN 0.5!!!")
    console.log(random);
}

// OR, Instead of writing line 9 - 11, just write :
// else {
//     console.log("YOUR NUMBER IS GREATER THAN 0.5!!!")
// }