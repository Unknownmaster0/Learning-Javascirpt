// type conversion -> explicitely converting the data type of the variable by yourself.

// example 1-> add string to number.
let age = '18';
console.log(age + 5); // output - 185 [simply appending the 18 to 5]

// age = Number(age); // explicitely converting the data type from string to integer/ NUmber.
// console.log(age + 5);

/* 
IMPORTANT ->  '+' b/w string and number will convert the number to string.  example = line 5.
              '-' b/w sting and number will convert the string to number. example = line 16.
*/

// type coersion -> javaScript will do the conversion for you.
console.log(age-5);

console.log("13" - '12' + 5);

// 5 falsy values are -> '0', '', undefined, null, NaN [NaN = not a number]  (all these will return the false value.)
// if we convert all these values into the 'boolean' data type, then it will having false value.
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// all above from line 22 to 26 will give you output = false.

console.log(Boolean('sagar'));
console.log(Boolean(5));


let a = 0;
if(a){
    console.log("a has some value");
}
else{
    console.log("a is zero");
}