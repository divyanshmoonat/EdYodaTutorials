// Logical Operator : LEFT_EXPRESSION LOGICAL_OPERATOR RIGHT_EXPRESSION

// && => AND : IT WILL RESULT IN TRUE ONLY IF BOTH THE EXPRESSIONS ARE TRUE/TRUTHY
/*
    AND (&&) OPERATOR : 
    true && true => true
    true && false => false
    false && false => false
*/
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log("&& Operator ",   (price > 500) && (price < 1000));

// || => OR : IT WILL RESULT TRUE IF ANY ONE OF THE EXPRESSION IS TRUE/TRUTHY

/*
    OR (||) OPERATOR : 
    true || true => true
    true || false => true
    false || false => false
*/
// console.log(true || true);
// console.log(true || false);
// console.log(false || false)

// var price = 2000;

// Give discount/offer to the user only if the price is between 500 - 1000

// if((price > 500) && (price < 1000)) {
//     console.log("Yayy...Offer applied!!!!");
// } else {
//     console.log("Sorry, this offer is not valid on selected product");
// }

// var price = 200;
// Give discount/offer to the user if either the price is greather than 500 or less than 1000

// Give discount/offer to the user if either the price is greather than 500 or greater than 1000
// if((price > 500) || (price > 1000)) {
//     console.log("Yayy...Offer applied!!!!");
// } else {
//     console.log("Sorry, this offer is not valid on selected product");
// }

// ! => NOT
/*
    NOT (!) OPERATOR : 
    !true = false
    !false = true
*/

// Give entry to the person only if his/her age is not 10
var age = 25;
// if(age != 10) {
// if(!true) {
// Give user entry to the club if his/her age is greateter than 18 but not 25
if (age > 18 && age != 25) {
  console.log("You can enter the club");
} else {
  console.log("You can not enter the club");
}
