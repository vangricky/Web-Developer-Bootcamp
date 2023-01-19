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