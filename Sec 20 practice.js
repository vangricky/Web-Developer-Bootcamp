function names() {
    console.log("Ricky")
    console.log("Vang")
}

names()

lastNames()


function lastNames() {
    console.log("Last name: VANG")
}

// Above, I wrote the function "lastNames()" before I even made it. This is called 'hoisting'. 

function greet(firstName) {
    console.log(`Hey there, ${firstName}!`)
    console.log("HI!")
}