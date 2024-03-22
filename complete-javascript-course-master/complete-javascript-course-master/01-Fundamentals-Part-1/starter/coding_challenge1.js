let markMass, jonasMass, markHeight, jonasHeight;
markMass = 95;
jonasMass = 85;
markHeight = 1.88;
jonasHeight = 1.76;

const bmiMark = markMass / (markHeight ** 2);
const bmiJonas = jonasMass / (jonasHeight ** 2);

const markHigherBmi = bmiJonas < bmiMark; // false means jonas has higher bmi, and true means mark has higher bmi.

console.log(markHigherBmi);

if(markHigherBmi){
    // console.log("Mark's BMI is higher than John's!")
    console.log(`Mark's BMI(${bmiMark}) is higher than John's BMI(${bmiJonas})`);
}
else{
    // console.log("John's BMI is higher than Mark's!");
    console.log(`Mark's BMI(${bmiMark}) is lesser than John's BMI(${bmiJonas})`);
}
