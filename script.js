"use strict";

////////////////////////////// THE BELOW IS FOR THE EASY (1) SECTION OF THE ASSIGNMENT
//// DRIVER: LEE     NAVIAGATOR: BELLUL

// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even 
// numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]
// Output: Even numbers: [2, 4, 16]
//   Odd Numbers: [7, 11, 15]


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


// evenOddFunction(ranNum)
// console.log(evens);
// console.log(odds);

const evens = [];
const odds = [];

///////////////////////////////// BELOW IS THE MEDIUM (1) SECTION OF THE ASSIGNMENT
//// DRIVER: LEE     NAVIAGATOR: BELLUL

// MEDIUM(1)
// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input
// is a vowel
// Example 1:
// Input: vowelChecker(‘b’)
// Output: ‘This is not a vowel’
// Example 2:
// Input: vowelChecker(‘a’)
// Output: ‘This is a vowel’

function isVowel(str) {
    const value = ["a", "e", "i", "o", "u"].indexOf(str.toLowerCase()) !== -1

    if (value) {
        return console.log(`This letter: ${str} is a vowel`);

    } else {
        return console.log(`This letter: ${str} is NOT a vowel`);
    }
}

isVowel("o");

