"use strict";

////////////////////////////// THE BELOW IS FOR THE EASY (1) SECTION OF THE ASSIGNMENT ///////////////////////////////////////////////////////////////////////
//// DRIVER: LEE     NAVIAGATOR: BELLUL

/*
Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even 
numbers.
Example:
Input: [2, 4, 7, 11, 15, 16]
Output: Even numbers: [2, 4, 16]
  Odd Numbers: [7, 11, 15]
*/

const ranNum = [2, 3, 4, 5, 33, 33, 212, 11, 33];

const evenOddFunction = function (ranNum) {

    for (var i = 0; i < ranNum.length; i++) {

        if ((ranNum[i] % 2) != 1) {
            evens.push(ranNum[i]);
            console.log(evens);
        } else {
            odds.push(ranNum[i]);
            console.log(odds);
        }

    }
}


evenOddFunction(ranNum)
console.log(evens);
console.log(odds);

const evens = [];
const odds = [];

///////////////////////////////// THE BELOW IS THE EASY (2) SECTION OF THE ASSIGNMENT /////////////////////////////////////////////////////////////////////
//// DRIVER: BELLUL     NAVIAGATOR: LEE

/*
EASY (2)
Create a function that checks an array for prime numbers then inserts any pimes into a new array.                               
Example 1:                                                                                                                                       
Input: numArray = [1,2,3,4,5,6,7,8,9,10]
Output: primeArray = [2,3,5,7]
Example 2:
Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83] 
Output: primeArray = [19 ,29 ,47 , 83]
*/
let num = [3, 11, 29, 82, 4, 84, 36, 53, 47]

const checkPrime = num.filter(function (number) {
    if (number <= 1) {
        return false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
});

console.log(checkPrime)

///////////////////////////////// BELOW IS THE MEDIUM (1) SECTION OF THE ASSIGNMENT /////////////////////////////////////////////////////////////////////////////
//// DRIVER: LEE     NAVIAGATOR: BELLUL

/*
MEDIUM(1)
Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input
is a vowel
Example 1:
Input: vowelChecker(‘b’)
Output: ‘This is not a vowel’
Example 2:
Input: vowelChecker(‘a’)
Output: ‘This is a vowel’
*/

// function isVowel(str) {
//     const value = ["a", "e", "i", "o", "u"].indexOf(str.toLowerCase()) !== -1

//     if (value) {
//         return console.log(`This letter: ${str} is a vowel`);

//     } else {
//         return console.log(`This letter: ${str} is NOT a vowel`);
//     }
// }

// isVowel("o");

///////////////////////////////// BELOW IS THE MEDIUM (2) SECTION OF THE ASSIGNMENT //////////////////////////////////////////////////////////////////////////////
//// DRIVER: BELLUL     NAVIAGATOR: LEE

/*
MEDIUM (2): Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean. 
Example: Input: String 1: So dark the con of man  String 2: Madonna of the Rocks
Output: True

Example: Input: String 1: Things are good String 2: Dogs eat ants
Output: False 

NOTES: Account for case sensitivity and spaces
*/

const stringAnagram = function (str1, str2) {

    /* 
    - The replaceAll() is looking for any spaces and replacing it with an empty string, thus getting rid of the spaces. 
    - toLowerCase() is accounting for case sensititvity
    - split() is lookng for an empty string which is going to be the space between all the characters, it then makes an array with each individual string character in its own index
    - sort() takes the array and sorts the values in alphabetical order or ascending order
    - join() then takes the values of the array and places the parameter you give it in between each item of the array and makes it all one big string again
    */

    let phrase1 = str1.replaceAll(" ", "").toLowerCase().split("").sort().join("");
    let phrase2 = str2.replaceAll(" ", "").toLowerCase().split("").sort().join("");

    if (phrase1 === phrase2) {
        return true; // console.log("True: These two strings are anagrams");

    } else {
        return false; // console.log("False: These two strings are NOT anagrams");
    }
}

console.log(stringAnagram("So dark the con of man", "Madonna of the Rocks"));


///////////////////////////////// BELOW IS THE MEDIUM (3) SECTION OF THE ASSIGNMENT ///////////////////////////////////////////////////////////////////////////
//// DRIVER: Lee     NAVIAGATOR: BELLUL

/*
MEDIUM(3)
Write a function that takes in two numbers and determines the largest positive integer that divides the two
numbers without a remainder.
Example 1:
Input: gdc_two_numbers(336,360)
Output: 24
Example 2:
Input: gdc_two_numbers(78,126)
Output: 6
*/

const biggestRemainder = function (num1, num2) {

    var x = Math.abs(num1);
    var y = Math.abs(num2);


    if ((typeof x !== "number") || (typeof y != "number")) {
        return false;
    }

    while (y) {
        var e = y;
        y = x % y;
        x = e
    }

    return x

}

console.log(biggestRemainder(336, 360));

///////////////////////////////// BELOW IS THE MEDIUM (4) SECTION OF THE ASSIGNMENT ///////////////////////////////////////////////////////////////////////////
//// DRIVER: BELLUL     NAVIAGATOR: LEE

/*
Medium(4)
Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object;
A driveToWorkmethod, driveAroundTheWorldmethod, and runErrandsmethod. Each of these methods
should affect the car’s mileage adding to it each time and console logging the old mileage and the new
mileage.

driveToWork = 33 miles
driveAroundTheWorld = 24,000 miles
runErrands = 30 miles

Example 1:
car.driveToWork();
Output: old mileage: 2000 | new mileagea: 2033
Explanation: 2000 + 33 = 2033
Example 2:
car.driveAroundTheWorld();
Output: old mileage: 2033 | new mileagea: 26033
Example 2:
car.runErrands();
Output: old mileage: 26033 | new mileagea: 26063
*/
var car = {
    make: "Toyota",
    model: "Sudan",
    year: 1970,
    color: "Red",
    mileage: 50,
    driveToWork: function () {
        const oldMile = this.mileage
        this.mileage = this.mileage + 33
        return console.log(`old mileage: ${oldMile} | new mileage: ${this.mileage}`)
    },
    driveAroundTheWorld: function () {
        const oldMile = this.mileage
        this.mileage = this.mileage + 2400
        return console.log(`old mileage: ${oldMile} | new mileage: ${this.mileage}`)
    },
    runErrands: function () {
        const oldMile = this.mileage
        this.mileage = this.mileage + 30
        return console.log(`old mileage: ${oldMile} | new mileage: ${this.mileage}`)
    },
}

car.driveToWork()
car.driveAroundTheWorld()
car.runErrands()
car.driveToWork()

