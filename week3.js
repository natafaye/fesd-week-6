var variable0 = "apple"
var variable1 = "banana"

variable0 = "pineapple"

var variableList = ["apple", "banana"]
variableList[0] = "pineapple"



// How you write it
alert("Hello " + names[names.length - 1])

// Data to try testing with
// let names = ["Natalie", "Simone", "Raul"]
// How the computer simplifies it
// alert("Hello " + names[3 - 1])
// alert("Hello " + names[2])
// alert("Hello " + "Raul")
// alert("Hello Raul")
// shows the alert

// Data to try testing with
// let names = ["Something"]
// How the computer simplifies it
// alert("Hello " + names[1 - 1])
// alert("Hello " + names[0])
// alert("Hello " + "Something")
// alert("Hello Something")
// shows the alert






// All the same

for (let i = 0; i < gradesArray.length; i++) {
    console.log(gradesArray[i]);
}

for (let i = 0; i < gradesArray.length; i++) {
    let grade = gradesArray[i]
    console.log(grade);
}

for(let grade of gradesArray) {
    console.log(grade);
}



// Notes keeping track of variable values:
// fullName = "Mary Brown"
// gradesArray = [100, 79, 80, 90, 100]
// function called lowestGrade
// i = 5


let fullName = "Mary" + " " + "Brown";
let gradesArray = [100, 79, 80, 90, 100];

// lowGrade = 100
function lowestGrade(gradeBook) { // gradeBook = [100, 79, 80, 90, 100]
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
console.log("\tLowest Grade is: " + lowestGrade(gradesArray));

function averageArray(array) {
    ffdsfsd
    return average
}


// Any variables made inside curly brackets are trapped inside the curly brackets
let something = 6;
function formatMoney(amount) {
    let formattedString = "$" + amount.toFixed(2)
    if (true) {
        let verySecret = 5
        alert(verySecret) // WORKS
        alert(formattedString) // WORKS
        alert(something) // WORKS
    }
    alert(verySecret) // ERROR
    return formattedString;
}
alert(verySecret) // ERROR


alert("You have: " + formatMoney(22.3))

let result = 3;
// Saving the contact
function banana() {
    // the code saved in the function for running later
    let myVariable = 3 // this variable will be created and deleted every time this function runs
    result = 5
}

alert(result)
result = 7
banana() // go find the contact and say to call it
result = 8
alert(result) // 8





function cookInOven(food, temperature) { // food = 200; temperature = "rice"
    let cookedFood = "Cooked " + food + " at " + temperature;
    return cookedFood;
}

let cookedRice = cookInOven(200, "rice") // "Cooked 200 at rice"
console.log(cookedRice)


// You could make a fancy function that adds the numbers in two arrays together
function add(array1, array2) {
    let resultArray = []
    for(let i = 0; i < array1.length; i++) {
        resultArray.push(array1[i] + array2[i])
    }
    return resultArray
}

const sum = add( [1, 3, 4], [6, 3, 2] ) // [7, 6, 6]


// How to get an average of numbers in an array
var numbers = [0, 4, 3, 7]
var total = 0
// loop over the array
    // inside the loop, add each item in the array to the total
var average = total / how_many_numbers_there_are