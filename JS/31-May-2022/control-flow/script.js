// if-else


// if your age is greather than 18 yrs then you can vote else you can't vote


// if(expression) { if code body } else { else code body }


var age = 18;

// if(age >= 18) { // expression results to true/truthy
//     console.log("You can give a vote");
//     // if code body
// } else { // expression results in false/falsy
//     console.log("You can not give a vote");
//     // else code body
// }


if(-Infinity) {
    console.log('Truthy value provided');
} else {
    console.log('Falsy value provided');
}


// Ternary Operator ? : 
// EXPRESSION ? statement for TRUTHY value : statement for FALSY value;
age >= 18 ? console.log('You can give a vote') : console.log('You can not give a vote');