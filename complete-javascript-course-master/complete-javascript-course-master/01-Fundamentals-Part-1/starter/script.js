/*let val = 5;
if (val === 5) alert("javascript is fun!");
// using console.log() -> you can print anything onto the console of the browser.
console.log(4 + 5 + 5);
console.log("This is sagar singh learning javascript.");

//  variable name rules are same as other languages.
// _ and $ are allowed for naming varible
let $a = 5;
let _a = 6;

// for constant value -> we can write the name in caps.
let PI = 3.14; // this is constant varible. */

/*
let myCountry = "India";
let myContinent = "Asia";
let myCountryPopulation = 138; // in millions.
let isIsland = false; // in millions.
let languages;

console.log(myCountry);
console.log(myContinent);
console.log(myCountryPopulation);
console.log(isIsland);
console.log(languages); // as the variable have not any value, then it will show the 'undefined' as value.

console.log(typeof myContinent);
console.log(typeof isIsland);
console.log(typeof myCountry);
console.log(typeof languages); // and 'undefined' as dataType also.
console.log(typeof myCountryPopulation); */

/*
// DYNAMIC TYPING -> we can anytime change and store the anydata type value in any single variable.
let num = 5;
console.log(num);
console.log(typeof num);

num = 'sagar'
console.log(num);
console.log(typeof num);

// 'null' -> data type of javascript.
console.log(null);  // it will print null in console.
console.log(typeof null);   // it will show the data type as 'object' which is bug in JavaScript.
// 'null' is data type only.
*/

/*
// let x = 5; -> using let we can't redeclared the value of x again.

// but using 'var' we can redeclare one variable value, and it doesn't losses it's original value.
var x = 5;
console.log(x);

var x;
console.log(x); */

/*
// Difference between 'let', 'const', 'var';

// const -> usage to create variable which can't be change in your entire code.
// let -> usage to create variable which can be change in your code further.
// var -> usage to create variable which can be change in your code further. But it is different from the 'let'.

const myName = 'sagar';
console.log(myName);
// myName = 'sagar singh'; // this line is giving error because we redeclare the 'const' variable with some different value.
// console.log(myName);

// WE CAN ALSO WRITE THE VARIABLE WITHOUT EVEN USING 'LET', 'CONST', 'VAR'.
myJob = 'software engineer'; // but this will create a global variable.
console.log(myJob);
*/

// EXPONENT === 2 power of 3 ==== (2 ** 3) in javascript.
console.log(2 ** 3); // output = 2 ^ 3 = 8;

console.log(5 + '5');   // it will simply concatenate the string. and treate (5 + '5') as string.
const value = 5 + '5';
console.log(value);
console.log(typeof value); // -> data type of 'value' = String.

