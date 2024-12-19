
// make (declare) a function
function anyNameWeWant() {
    // the code that will run when you call the function
    alert("hello!")
}

// call a function
//anyNameWeWant()
//anyNameWeWant()
//anyNameWeWant()

// Two reasons we make functions
// 1) is to make that code reusable
// 2) is just to organize things - makes the code easier to read


// input -> the thing I want formatted -> parameters
function formatMoney(amount) { // amount is a parameter = a special variable that the function makes and assigns for you
    // the function does this for us: let amount = 500
    return "$" + amount.toFixed(2)
    // return sends the value to wherever the function was called
}

let userMoney = 500
let costOfThing = 20.4

alert("You have " + formatMoney(userMoney) + " and the thing costs " + formatMoney(costOfThing))

// We can pass in the number 4.7 into the amount parameter by doing this
formatMoney(4.7)




function cookInOven(food, temperature) { // food = "rice"; temperature = undefined
    if(temperature === undefined) {
        // Emergency exit out because something's not right
        return "No temperature was given"
    }
    let cookedFood = "Cooked " + food + " at " + temperature
    return cookedFood
}

// Calling a function will simplify to whatever that function returns
// if the function returns nothing it will simplify to undefined
// if the function returns something it will simplify to that thing
let cookedRice = cookInOven("rice", 200)
console.log(cookedRice)


// Over the break stretch learning
// 1) functions calling other functions - blackjack example
// 2) arrays of objects


// annoying
let dogName = "Milo"
let likesFetch = true
let sheds = true
let pottyTrained = true
let likesSnuggles = true

// much better!
const dog = {
    name: "Milo",
    likesFetch: true,
    sheds: true,
    pottyTrained: true,
    likesSnuggles: true
}

// = means "is"
// : means "has"