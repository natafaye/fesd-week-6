// Data Types
// Numbers
// Booleans
// Strings
// null
// undefined
// Arrays - lists of something

// splice -> we use to remove or add things to the middle of an array (CHANGES THE ARRAY)
// scissors and tape messing up the array

// slice -> copies a chunk of an array (DOES NOT CHANGE THE ARRAY)
// photocopy machine




// Function is a saved chunk of code that can be run at any time
// like saved setting on like a massage chair
// like saving a contact in your phone


// Declaring (making) a function
// saving a contact in your phone
function mySpecialFunction() {
    // saved code to run when this function is triggered
    alert("hello!")
}

// Call (trigger) the function
// mySpecialFunction()
// mySpecialFunction()
// mySpecialFunction()



function tellAJoke(animal) { // animal is a variable - somewhere in the background this runs: let animal = "snake"
    alert("Why did the " + animal + " cross the road?")
    alert("To get to the other side!")
}

//console.log(animal) // ERROR

// tellAJoke("monkey") // calling tellAJoke and passing in "monkey" to the animal parameter (variable)
// tellAJoke("snake")
// tellAJoke("monkey")
// tellAJoke()


function cookInOven(food, temperature) { // let food = FIRST THING; let temperature = SECOND THING
    let cookedFood = "Cooked " + food + " at " + temperature
    return cookedFood // spit out whatever is after the return (simplified to a value)
    // "Cooked " + food + " at " + temperature
}

// The next line is making a variable and setting the variable to what the function returns
let cookedRice = cookInOven("rice", 350) // functions simplify to whatever that function returns
console.log(cookedRice)