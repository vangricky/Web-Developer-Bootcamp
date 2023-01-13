// const dayOfWeek = prompt('ENTER A DAY').toLowerCase;

// if (dayOfWeek === 'monday') {
//     console.log("UGHHH I HATE MONDAYS!")
// } else if (dayOfWeek === 'saturday') {
//     console.log("YAY I LOVE SATURDAYS!")
// } else if (dayOfWeek === 'friday') {
//     console.warn("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!")
// } else {
//     console.log("MEH")
// }
 
// 0-5 FREE 
// 5 - 10 CHILD $10
// 10 - 65 ADULT $20
// 65+ SENIOR $10

const age = 24;

if (age < 5) {
    console.log("You are a baby. You get in for free!")
} else if (age < 10) {
    console.log("You are a child. You pay $10.")
} else if (age < 65) {
    console.log("You are an adult. You pay $20.")
} else {
    console.log("You are a senior.You pay $10, bro.")
}

const number = 24;

if (number > 24) {
    console.log("You chose a very high number my friend.")
} else if (number < 24) {
    console.log("Well, you choose a pretty low number there my guy.")
} else if (number === 24) {
    console.log("I guess that is the lucky number, sir.")
} else {
    console.log("I don't think you understand this prompt, bro.")
}