// Basic Data Types
// strings, numbers, booleans
// +, -, &&, ||
// null, undefined

// Complex Data Types
// array, object


const myFriends = ["paulette", "duncan"]


const fruits = ["apple", "banana", "peach"]

// Indexing into the array at the 1 index
let middle = fruits[1] // "banana"

// Simplify the part inside the square brackets [] to a number first
// Then index in with that number
fruits[2 * 1] // "peach"
fruits[1 - 1] // "apple"

// First thing in an array -> index in at 0
fruits[0]

// Last thing in an array
fruits[fruits.length - 1]
// fruits[3 - 1]
// fruits[2]

// Get the current length of the array
fruits.length

// ["apple", "banana", "peach"]
fruits[fruits.length - 1] = fruits[0]
// ["apple", "banana", "apple"]
fruits[0] = "tomato"
// ["tomato", "banana", "apple"]
fruits[1] += " pepper" // fruits[1] = fruits[1] + " pepper"
// ["tomato", "banana pepper", "apple"]


let friend = "hippo"
friend += "fish"
// "hippofish"



// push, pop, splice, shift, unshift



let finishers = []


finishers.push("paulette")
finishers.push("duncan")

console.log(finishers) // ["paulette", "duncan"]

// Natalie wants to cheat
finishers.unshift("natalie")

console.log(finishers) // ["natalie", "paulette", "duncan"]

// splice(what index to start at, how many to delete, anything you want to add)
finishers.splice(1, 0, "star")

console.log(finishers) // ["natalie", "star", "paulette", "duncan"]




// This code will not run on its own
// Saving a contact in your phone
// Parameters are just variables attached to one function
// Pick names for your parameters and put them inside the parenthesis
function sayHello(nameToGreet) { // let nameToGreet = "Natalie"
    alert("Hello " + nameToGreet + "!")
    // The code in here won't run until the function is called
}

// Call the function (trigger the code in the curly brackets to run)
// If this function has parameter(s) we need to give values for those parameter(s)
// sayHello("Natalie")
// sayHello("Paulette")




function isEqual(number1, number2) {
    if(number1 === number2) {
        alert(number1 + " and " + number2 + " are equal!")
    } else {
        alert(number1 + " and " + number2 + " are NOT equal!")
    }
}

// Calling isEqual and passing in 5 and 3
// isEqual(5, 3)
// isEqual(6, 6)



function cookInOven(food, temperature) {
  let cookedFood = "Cooked " + food + " at " + temperature
  return cookedFood // "Cooked rice at 200"
}

// A function call simplifies to whatever that function returns
let cookedRice = cookInOven("rice", 200)
console.log(cookedRice)



function formatMoney(amount) {
    // Add a $ and make the number have 2 numbers after the decimal point
    return "$" + amount.toFixed(2)
}


let product1Price = 3.99
let product2Price = 2.70

let total = product1Price + product2Price

console.log("Here are your purchases: " + product1Price + " and " + product2Price)

console.log("Here are your purchases: " + formatMoney(product1Price) + " and " + formatMoney(product2Price))