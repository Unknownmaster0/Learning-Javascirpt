const age = 18;
if (age === 18) { // strictly equality. 
    console.log("you became 18 congrats! (strictly equlity) ");
}
if (age == 18) {  // loosely equality.
    console.log("you become 18 congrats!(losely equality)");
}

// loosely equality does 'type coersion' in itself if necessary.
// example -> 
if (18 == '18') { // but 18 -> number, and '18' -> string, how both can be equal.
    console.log("both are equal.");
}
// thus '==' does the type coersion in itself and then compare.
// '18' -> converted to number and then compared with number 18.

if(18 != '7'){ // here similarly '!=' is loosely operator. Do 'type coersion'.
    console.log("not equal loosely.");
}

if(18 !== '7'){
    console.log("not equal strictly.");
}

// GETTING INPUT FROM THE USER -> FOR THAT USE 'PROMPT' KEYWORD.
const num = Number(prompt("write your lucky number!🎁"));
if(num % 2 === 0){
    console.log("you have entered the even number.");
}else{
    console.log("you have entered the odd number.");
}

