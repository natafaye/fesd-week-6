// "popcorn" = cook on medium for 4 minutes
// "eggs" = cook 5 minutes for 3 eggs or less and 7 minutes for more than 3 eggs

// Saving the function as a contact in my phone
function myFunctionName() {
    // the code to trigger when this function runs
    console.log("hello!")
}

// Actually call it
myFunctionName()


function makePopcorn() {
    alert('Cook for 10 minutes')
}

// Do not cook in microwave apparently!!!!!
function cookEggs(numberOfEggs) { // let numberOfEggs = whatever is in the parenthesis
    // 5 minutes for 3 eggs or less and 7 minutes for more than 3 eggs
    if (numberOfEggs <= 3) {
        alert("Cook 5 minutes")
    } else {
        alert("Cook 7 minutes")
    }
}

cookEggs(15)

cookEggs(2)

// Technically argument = value passed in, parameter = the actual variable
// But developers totally use argument and parameter interchangeably all the time. Sorry.




function cookInOven(food, temperature) {
    let cookedFood = "Cooked " + food + " at " + temperature
    return cookedFood
}

const cookedRice = cookInOven("rice", 200)
console.log(cookedRice)

// return = wherever I called this function, simplify that call to this value
// passes something from inside a function to outside a function