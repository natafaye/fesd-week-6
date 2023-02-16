

var prices = [5, 27, 15, 3, 18]

prices[prices.length]
// Computer simplifies it
// prices[5]
// undefined

prices[prices.length - 1]
// Computer simplifies it
// prices[5 - 1]
// prices[4]
// 18


//var prices = [5, 27, 15]

prices[prices.length - 1]
// Computer simplifies it
// prices[3 - 1]
// prices[2]
// 15

var prices = [5, 27, 15, 3, 18]
var lastPrice = prices[prices.length - 1] // lastPrice = 18

function getLastPrice(arrayThing) {
    return arrayThing[arrayThing.length - 1] // Give something to another part of the code
}


prices.push(100) // prices = [5, 27, 15, 3, 18, 100]
console.log(getLastPrice(prices))




//console.log("hello") // show this to the developer
//alert("hello") // Show this to the user






// parameters = INPUT

// Making a contact in your phone
function cookInOven(food, temperature) { // var food = "rice"; var temperature = 300
    var cookedFood = food + " cooked at " + temperature
    return cookedFood;
}

// Actually call the contact
var cookedRice = cookInOven("rice", 300)
var cookedChicken = cookInOven("chicken", 400)

var meal = cookedRice + " and " + cookedChicken
console.log(meal)

//var meal = "rice cooked at 300 and chicken cooked at 400"








// fullName = "Mary Brown"
// gradesArray = [100, 79, 80, 90, 100]
// lowestGrade = function


let fullName = "Mary" + " " + "Brown";
let gradesArray = [100, 79, 80, 90, 100];

// lowGrade = 79
// grade = 100

function lowestGrade(gradeBook) { // var gradeBook = [100, 79, 80, 90, 100]
    if (gradeBook.length > 0) {
        let lowGrade = gradeBook[0];
        for (let grade of gradeBook) {
            if (grade < lowGrade) {
                lowGrade = grade;
            }
        }
        // Or you could write the for loop this way:
        // for (let i = 0; i < gradeBook.length; i++) {
        //     if (gradeBook[i] < lowGrade) {
        //         lowGrade = gradeBook[i];
        //     }
        // }
        return lowGrade;
    } else {
        return 0;
    }
}

console.log("\n\nStudent: " + fullName);
console.log("Grades: ");
for (let i = 0; i < gradesArray.length; i++) {
    console.log("\t" + (i + 1) + ": " + gradesArray[i]);
}
console.log("Evaluation: ");
console.log("\tLowest Grade is: " + lowestGrade(gradesArray)); // WAITS here for lowestGrade function to finish