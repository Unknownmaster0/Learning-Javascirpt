// In this code you will get to know how to use string, contatenate string, and [STRING TEMPLATE IN JS], multi-line string.

const myName = 'sagar';
const myJob = 'student';
const birthYear = 2004;
const currYear = 2024;

// but concatenating string with varibles in this way is 'comboursome'.
const detail = "I'm " + myName + ", myJob is " + myJob + " and my age is " + (currYear - birthYear);
console.log(detail);

// thus, we use STRING TEMPLATE LITERALS (USING BACK TICES `` ).
const detailNew = `I'm ${myName} and my job is ${myJob} and my age is ${currYear-birthYear}`;
console.log(detailNew);

// You can also write the multi-line string 
console.log("sagar \n\
singh\n\
from Purnea");

// You can also create the multi-line string using STRING TEMPLATE
console.log(`sagar
singh
from Purnea`);