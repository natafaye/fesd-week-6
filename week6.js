
// let myColors = ["red", "orange", "green", "blue"]

// myColors[0] = "fuschia"
// myColors[1] = myColors[2] + "-blue"
// let nextColor = myColors[4 - 1]
// let lastColor = myColors[myColors.length - 1]

// myColors.push("purple")

// // Length of array
// myColors.length

// console.log(myColors) // ["fuschia", "green-blue", "green", "blue", "purple"]
// console.log(nextColor) // "blue"

// todolist = ["taxes", "laundry", "dishes"]
// promptMessage = "What do you need to do?\n\n laundry,dishes"
// newtodo = "taxes"


// let todolist = ["laundry", "dishes"]

// let promptMessage = "What do you need to do?\n\n"

// let newtodo = prompt(promptMessage + todolist.join("\n"))
// while(newtodo !== null) {
//     todolist.unshift(newtodo)
//     //promptMessage = "What do you need to do?\n\n" + todolist
//     newtodo = prompt(promptMessage + todolist.join("\n"))
// }

// console.log(todolist)


// The #1 Front End Bug
// I clicked the button and it doesn't look like it did it
// 3 Options of what happened:
// Did the click not go through?
// Did the change don't happen?
// Did the UI not get updated with the change?



// where you make the function doesn't really matter (generally)
// shoes is a parameter (parameter = a variable thats an input to the function)
// parameters allow us to customize what the function does
function runARace(shoes) { // in the background: let shoes = whatever is passed in
    // Code that will only happen when this function is "called"
    for(let i = 0; i < 5; i++) {
        console.log("Taking step " + (i + 1) + " with " + shoes)
    }
    return "You came in first place because of your " + shoes + "!"
}

let raceMessage = runARace("Nikes")
console.log(raceMessage) // "You came in first place because of your Nikes!"

let raceMessage2 = runARace("Adidas")
console.log(raceMessage) // "You came in first place because of your Adidas!"





function cookInOven(food, temperature) {
  let cookedFood = "Cooked " + food + " at " + temperature
  return cookedFood // GOODBYE I'M OUTTA HERE
  alert("THIS CODE WILL NEVER RUN")
}

let cookedRice = cookInOven("rice", 200)
let cookedChicken = cookInOven("chicken", 300)
alert("Dinner is:\n" + cookedRice + "\n" + cookedChicken)


// a function call (like cookInOven("rice", 200) ) 
// simplifies to whatever that function returned (like "Cooked rice at 200")


// console.log and alert talk to the user
// return talks to another part of the code



function getHandValue(hand) { // let hand = [3, 5, 10]
    let total = 0 // 18
    for (let i = 0; i < hand.length; i++) { // i = 3
        total += hand[i]
    }
    return total
}

let myHand = [3, 5, 10]
let dealerHand = [1, 10, 10]

let myHandValue = getHandValue(myHand) // WAIT
let dealerHandValue = getHandValue(dealerHand)

console.log("Mine: " + myHandValue + ", Dealer: " + dealerHandValue)