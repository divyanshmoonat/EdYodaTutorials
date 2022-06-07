// var userName1 = 'John';
// var userName2 = 'Jane';
// var userName3 = 'Jack';

// console.log(userNames);

// var prices = [100,200,250,300]; // Array of numbers
// console.log(prices);

// var prices = ['John', 100, true, null, undefined]; // BAD PRACTICE

// console.log(prices);

// console.log(userNames);
// console.log(userNames[1]);
// console.log(userNames[2]);

// console.log(userNames[4]);
// console.log(userNames[3]);

// console.log(userNames[0]);

// console.log(typeof(userNames));

// console.log(Array.isArray(userNames));

// var user = 'John';

// console.log(Array.isArray(user));

// console.log(userNames.length);
// MAX INDEX = LENGTH OF ARRAY - 1

// var userNames = ["John", "Jane", "Jack", "ABC", "XYZ", "A", "B"]; // Array of strings

// console.log(userNames[0]);

// console.log(userNames[userNames.length - 1]);

// var userName1 = ''; // Empty string
// var users = []; // Empty array

// console.log(users);
// console.log(users.length);

// users[0] = 'John';
// users[1] = 'Jack';

// console.log(users);
// console.log(users.length);

// users[4] = 'Jane';

// console.log(users);

// users.push('John');
// users.push('Jane');
// users.push('Jack');
// users.push('Johnny');

// console.log(users);

// var users = ['A','B','C','D'];

// users.push('John');

// console.log(users);

// var removedItem = users.pop();
// var removedItem2 = users.pop();

// console.log(removedItem);
// console.log(removedItem2);

// console.log(users);

// users.unshift('John');

// users.shift();

// console.log(users);

// splice(startIndex,deleteCount,...items to be added)
var users = ["A", "B", "C", "D"];
// ["A", "John", "B", "Jack", "C", "Jane", "D"]
// var result = users.splice(1,1);

// console.log("Deleted Element(s) : ",result);

// users.splice(2, 0, "John", "Jack", "Jane");

// users.splice(1, 0, "John");
// // ["A", "John", "B", "C", "D"]

// users.splice(3, 0, "Jack");
// // ['A', 'John', 'B', 'Jack', 'C', 'D']

// users.splice(5,0,'Jane');

// // Resulting Array : ['A', 'John', 'B', 'Jack', 'C', 'Jane', 'D']

// // Replace Jack with Abraham

users.splice(3, 1, "Abraham");

// console.log("Array : ", users);

// var activeUsers = ['John','Jack'];
// var inActiveUser = ['Jane','Abraham'];

// var totalUsers = activeUsers.concat(inActiveUser);

// console.log(totalUsers);
// console.log(activeUsers + inActiveUser);

// Convert array to a string

// console.log(activeUsers.toString());

// var users = "Jack John Abraham";

// // split(): Converts string into an array by providing a seperator as an input
// console.log(users.split(' '));

// var categories = ['Clothing','Electronics','Jwelery','Household Item'];

// console.log(categories);

// console.log(categories.reverse());

// var prices = [100, 50, 200, 70];

// console.log(prices.sort((a, b) => a - b));


var names = ["B","A", "C", "A", "Z", "D", "G"];

console.log(names.sort());
