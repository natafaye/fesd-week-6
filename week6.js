
// saving to phone
function myDad() {
    1232332432
}

// call dad
myDad()
myDad()
myDad()


function cookInOven(food, temperature) {
    return "Cooked " + food + " at " + temperature
}

function cookInMicrowave(food, seconds) {
    let cookedFood = "Cooked " + food + " for " + seconds + " seconds"
    return cookedFood
}

let cookedRice = cookInOven("rice", 200)
let cookedChicken = cookInOven("chicken", 340)
console.log(cookedRice + " and " + cookedChicken)

// Does the exact same thing
console.log(cookInOven("rice", 200) + " and " + cookInOven("chicken", 340))



// Random function example
function formatMoney(amount) {
    return "$" + amount.toFixed(2)
}

const formattedPi = formatMoney(3.415)
console.log(formattedPi)


// Random function example
function formatAmount(amount, noun) {
    if(amount === 1) {
        return amount + " " + noun
    }
    return amount + " " + noun + "s"
}

let amountOfCats = 4
console.log("You have " + formatAmount(amountOfCats, "cat"))

// Don't do this to your poor cat! EVEN NUMBERS
amountOfCats = 1
console.log("You have " + formatAmount(amountOfCats, "cat"))


// Random function example (very imporant)
function hasCorrectAmountOfCats(amountOfCats) {
    // if odd amount
    if(amountOfCats === 1) {
        alert("SATAN")
    }
    else if(amountOfCats % 2 === 1) {
        alert("YOU HORRIBLE PERSON! Get another cat! Cats need friends!")
    }
    else {
        alert("You're good. Carry on.")
    }
}

// hasCorrectAmountOfCats(3)

// hasCorrectAmountOfCats(6)