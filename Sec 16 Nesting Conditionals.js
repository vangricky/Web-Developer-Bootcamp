// Password must be 6+ characters
// Password cannot include space

// const password = prompt("Please enter a new password.");

// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log("Valid Password!")
//     } else {
//         console.log("Password cannot contain spaces!")
//     }
    
// } else {
//     console.log("Yo, your password be short lil bro. At least 6 characters or more!")
// }

const password = prompt("Please enter a new password!")

if(password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!")
    } else {
        console.log("Password cannot contain spaces!")
    }
    console.log("Long Enough Password!")
} else {
    console.log("Password is too short! Must be 6+ characters!")
}

// if (password.indexOf(' ') === -1) {
//     console.log("Good Job! No space!")
// } else {
//     console.log("Password cannot contain spaces!")
// }