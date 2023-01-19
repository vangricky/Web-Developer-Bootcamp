// function funcName () {
    //do something
// }

// Now we have to RUN the function to do so, do this:
//funcName ();




function grumpus() {
    console.log("Ugh... you again...");
    console.log("For the last time...");
    console.log("LEAVE ME ALONE!!!");
}

function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

singSong()
//ABOVE, I just made my first 'function'. Now, when I type the name of the funcation I just made, it will do whatever it is meant to do.
//So, above, it says singSong(). Must include the () to make the function work. The output will be the console.log from above (lines 7-10) 


function greet(firstName) {
    console.log(`Hey there, ${firstName}!`)
    // console.log("HI!")
}

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

greet('Vang','Ricky')

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

greet('Aresne', 'Wenger')

function isSnakeEyes(die1, die2) {
    if (die1 === 1 && die2 === 1) {
        console.log(`Snake Eyes!`)
    } else {
        console.log(`Not Snake Eyes!`)
    }
}

// function add(num1, num2) {
//     console.log(x + y)
// }

function add(num1, num2){
    let sum = num1 + num2;
    return sum;
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false
    } 
    return x + y;
}

// It's time to practice returning values from a function! Write a simple function multiply which accepts two numerical arguments and returns their product (multiply them together).
// Make sure to return the value instead of printing it!

// multiply(2,3) // 6
// multiply(9,9) // 81
// multiply(5,4) // 20

function multiply(num1, num2) {
    let answer = num1 * num2;
    return answer;
}

// I often struggle to know whether I should wear shorts or pants on a given day. (this is a complete lie.  It's really not that hard to decide.) 
// Please help me decide by writing me a function called isShortsWeather. 
// It should accept a single number argument, which we will call temperature(but you can name it whatever you want, of course). 
// If temperature is greater than or equal to 75, return true. 
// Otherwise, return false.   
// This exercise assumes temperature is in Fahrenheit.  I apologize to all my Celsius-using students!

// isShortsWeather(80) //true
// isShortsWeather(48) //false
// isShortsWeather(75) //true

function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true
    } else {
        return false
    }
}