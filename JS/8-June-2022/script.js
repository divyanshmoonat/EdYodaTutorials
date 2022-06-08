// WHILE LOOP
/*
----SYNTAX----
while(condition) {
    repetitive code block
    increment/decrement statement
}
*/

// Write "Hello from JavaScript" 100 times in console.

// var counter = 1;

// while(counter <= 10) {
//     // console.log("Hello from JavaScript",counter);

//     // console.log(`Welcome ${counter} time on JavaScript course`);
//     console.log(23*counter);
//     counter++;
// }

// var counter = 100;
// while(counter >= 1) {
//     // console.log("Hello from JavaScript",counter);

//     // console.log(`Welcome ${counter} time on JavaScript course`);
//     console.log(counter);
//     counter--;
// }

// FOR LOOP
// ---SYNTAX---
/*
for(initialization;condition;increment/decrement) {
    repetitive code
}
*/

// PRINT NUMBERS FROM 0-100

/*
1. Initialize the variable (counter = 0) IT HAPPEN ONLY ONCE
2. Checks the condition (counter <=100)
    2.1 If the coniditon is true then execute the body of loop
    2.2 If the condition is false then stop execution
3. Perform increment/decrement operation
*/

// for (var counter = 1; counter <= 100; counter++) {
//     console.log(counter);
// }

// for (var counter = 199; counter >= 100; counter--) {
//   console.log(counter);
// }

// Write a program to print the table of a number given as an input by the user using for loop

// var num = prompt("Enter a number");

// for (var counter = 1; counter <= 10; counter++) {
//   console.log(`${num} x ${counter} = ${num * counter}`);
// }

// var users = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "A",
//   "B",
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "A",
//   "B",
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
// ];

// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);

// console.log(users.length);

// var maxIndex = users.length - 1;

// for (var counter = 0; counter <= maxIndex; counter++) {
//   console.log(users[counter]);
// }

// var weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// for (var counter = 0; counter <= weekDays.length - 1; counter++) {
//     if(weekDays[counter] === 'Sat') {
//         break;
//     }
//   console.log("Working Days", weekDays[counter]);
// }

// for (var counter = 0; counter <= weekDays.length - 1; counter++) {
//   //   if (weekDays[counter] === "Wed" || weekDays[counter] === "Fri") {
//   if (weekDays[counter] === "Wed") {
//     continue; // Skip
//   }
//   console.log(weekDays[counter]);
// }

// Write a program to print all even numbers between 0-100

// for (var counter = 0; counter <= 100; counter++) {
//   if (counter % 2 === 0) {
//     console.log(counter);
//   }
// }

// for (var counter = 0; counter <= 100; counter++) {
//     if (counter % 2 === 0) {
//       continue;
//     }
//     console.log(counter);
// }

var tasks = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
];

for (var counter = 0; counter < tasks.length - 1; counter++) {
  //   console.log(`ToDo Title : ${tasks[counter].title}`);
  //   console.log(`Completed Status : ${tasks[counter].completed}`);

  console.table(tasks[counter]);
}

for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// Linear loops : O(n)
// Nested loops : O(n^2)