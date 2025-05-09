let myFriends = ["billy", "bobby", "sally"]

// fruits.splice(where to start, how many to delete, what to add)


// Saving a contact in your phone
function nameOfTheFunction() {
    console.log("hello!")
}

// Calling the function
nameOfTheFunction()


// Rice cooker
// parameter = special variable that's set up by the function
function cookInRiceCooker(cupsOfRice) { // let cupsOfRice = WHATEVER IS PASSED IN
    // pretend that you cook it for 3 * cupsOfRice minutes
    let minutesToCook = cupsOfRice * 3
    console.log("Cooking for " + minutesToCook + " minutes")
}

cookInRiceCooker(4)

cookInRiceCooker(8)





function cookInOven(food, temperature) { // let food = 200; let temperature = undefined
    // return // emergency exit out of the function
    let cookedFood = "Cooked " + food + " at " + temperature
    return cookedFood
}

let cookedRice = cookInOven("rice", 200)
console.log("What's for dinner? " + cookedRice)

// console.log and alert show something to a human (user, developer)
// Posting a picture on social media
function toastBread(bread) {
    alert("toasted " + bread) // Posting a picture of the toast on social media

    return "toasted " + bread // actually handing you the toasted bread
}

// return gives a value to another part of the code




// Takes a number amount and returns a pretty string version
// with a dollar sign in front and two decimal places
function formatAsMoney(amount) {
    return "$" + amount.toFixed(2)
}

// Making this a function had a few benefits:
// * easier to change
// * easier to read
// * reduced repitition

function checkOut(costOfItem1, costOfItem2) {
    let total = costOfItem1 + costOfItem2
    let taxRate = 0.08265
    let salesTax = total * taxRate

    console.log("Your pre-tax total is " + formatAsMoney(total))

    console.log("You pay " + formatAsMoney(salesTax) + " in sales tax")

    console.log("Your full total is " + formatAsMoney(total + salesTax))
}

checkOut(3, 4.55)

checkOut(50.42, 1.03)



// functions calling other functions (parameters and returns)
// arrays of objects