let fruits = ["apple", "mango", "banana"]

fruits.splice(1, 1)


let dogName
let likesFetch
let sheds
let pottyTrained
let likesSnuggles

// Making the function
// Make the contact
// parameter = fancy function variable
function checkDog(dogName) { // in the background: let dogName = whatever was in the parenthesis
    console.log("Should Rafael get " + dogName + "?")
    let shouldGetDog = pottyTrained && !sheds && (likesFetch || likesSnuggles)
    console.log(shouldGetDog)
}

// Milo
likesFetch = true
sheds = true
pottyTrained = true
likesSnuggles = true

let dog = {
    likesFetch: true,
    sheds: true,
    pottyTrained: true,
    likesSnuggles: true
}

// Naming variables is hard but important
let fruitList = ["pear", "apple"]
let myFavoriteFruitIndex = 1
console.log("My favorite fruit is " + fruitList[myFavoriteFruitIndex])

// parameter = input to the function = argument
// pass in = give as a parameter to a function
checkDog("Milo")

// Penny
likesFetch = false
sheds = false
pottyTrained = true
likesSnuggles = true

// Calling the function
// calling = using = running
// tap the contact to call it
checkDog("Penny")

console.log("All done!")
