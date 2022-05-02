"use strict";

// EASY (1) 
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




evenOddFunction(ranNum)
console.log(evens);
console.log(odds);

const evens = [];
const odds = [];