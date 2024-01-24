// Don't repeat yourself (DRY)
// If you find that you're repeating yourself, a function will probably help

// Output to be true if he should get the dog, false if not
// OLD VERSION: You could make a parameter for each dog feature
// function rafaelShouldGetDog(likesFetch, sheds, pottyTrained, likesSnuggles) {
//     return pottyTrained && !sheds && (likesFetch || likesSnuggles)
// }

// OLD VERSION: You could make a separate object for each dog
// const milo = {
//     name: "Milo",
//     likesFetch: true,
//     sheds: true,
//     pottyTrained: true,
//     likesSnuggles: true
// }
// console.log("Should he get Milo?", rafaelShouldGetDog(milo))
// const penny = {
//     name: "Penny",
//     likesFetch: true,
//     sheds: false,
//     pottyTrained: true,
//     likesSnuggles: true
// }
// console.log("Should he get Penny?", rafaelShouldGetDog(penny))

// Or the function could take a parameter that is an object with all the dog features as properties
function rafaelShouldGetDog(dog) {
    return dog.pottyTrained && !dog.sheds && (dog.likesFetch || dog.likesSnuggles)
}

// Or the dogs could be stored in an array so we can easily add and remove dogs
const shelterDogs = [
    {
        name: "Milo",
        likesFetch: true,
        sheds: true,
        pottyTrained: true,
        likesSnuggles: true
    },
    {
        name: "Penny",
        likesFetch: true,
        sheds: false,
        pottyTrained: true,
        likesSnuggles: true
    },
    {
        name: "Penny2",
        likesFetch: true,
        sheds: false,
        pottyTrained: true,
        likesSnuggles: true
    },
    {
        name: "Penny3",
        likesFetch: true,
        sheds: false,
        pottyTrained: true,
        likesSnuggles: true
    },
    {
        name: "Penny4",
        likesFetch: true,
        sheds: false,
        pottyTrained: true,
        likesSnuggles: true
    }
]

// This loop will check each dog against Rafael's preferences, no matter how many are in the array
for(let i = 0; i < shelterDogs.length; i++) {
    console.log("Should he get " + shelterDogs[i].name + "?", rafaelShouldGetDog( shelterDogs[i] ))
}



// function cookInOven(food, temperature) { // let food = "rice"; let temperature = 200
//     let cookedFood = "Cooked " + food + " at " + temperature
//     return cookedFood
// }

// We can call functions wherever we want, and whatever it returns will be dumped right where we call it
// console.log("Dinner is " + cookInOven("rice", 200) + " and " + cookInOven("chicken", 400))
