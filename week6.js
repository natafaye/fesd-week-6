

let runners = []

runners.push("Abigail")
runners.push("Stacey")
runners.push("James")
runners.push("Maiya")

// Logs out each runner's name and what place they got

for(let i = 0; i < runners.length; i++) {
    console.log(i + 1 + ": " + runners[i])
}

let i = 0;
while(i <= runners.length - 1) {
    console.log(runners[i] + " you are in " + (i + 1) + " place") 
}
i++



// Creates the function
function callDad() {
    console.log("Calling 432432432")
    console.log("Hey there!")
}

// call / invoke = to run the function
callDad()


// Create a function
// parameter = input to the function
function formatMoney(amount) {
    // The function handles making the variable for you and setting it
    // let amount = WHATEVER THEY PASSED IN
    return "$" + amount.toFixed(2)
}

// pass 2.7 into the amount parameter
formatMoney(2.7)

// pass 5 into the amount parameter
formatMoney(5)

// pass 2.58 into the amount parameter
formatMoney(2.58)

let total = 34.57
alert("Your total for the cart is " + formatMoney(total))

let giftCardBalance = 0.38
alert("You have " + formatMoney(giftCardBalance) + " left over on your Gift Card")


function toaster(bread) {
    alert(bread) // tweeting out about the bread
    return bread // giving the bread back to the person who started the toaster
}