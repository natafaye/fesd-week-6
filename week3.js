

let subTotal = 15

// add the sales tax
let total = subTotal + getTax(subTotal)

console.log("Your total is " + total)



let invoiceTotal = 20

console.log("Invoice tax " + getTax(invoiceTotal))


function getTax(amount) {
    return amount * 0.08 // return 8% of that amount (sales tax)
}


// function cookInOven(food, temperature) {
//     let cookedFood = "Cooked " + food + " at " + temperature
//     return cookedFood
// }

// let cookedRice = cookInOven("rice", 200)
// console.log(cookedRice)


function insultPerson(name) {
    // return // emergency exits immediately
    alert("You suck " + name)
}