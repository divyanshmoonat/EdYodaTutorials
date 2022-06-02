var grade = "A";

// var message = "";// Declartion and definition
var message; //Declaration only
// if(grade === 'A') {
//     message = 'Excellent';
// } else if( grade === 'B') {
//     message = 'Good';
// } else if (grade === 'C') {
//     message = 'Average';
// } else if (grade === 'D') {
//     message = 'Poor';
// } else {
//     message = 'Fail';
// }

// console.log(message);

// grade === "A" ? console.log("Excellent") : console.log("Other grade");

// Switch-Case statement

switch (grade) {
  case "A":
    message = "Excellent";
    break;
  case "B":
    message = "Good";
    break;
  case "C":
    message = "Average";
    break;
  case "D":
    message = "Poor";
    break;
  default:
    message = "Fail";
    break;
}

console.log("Message from switch case statement : ", message);
