/*
// 1. Create a stack
// 2. Operations on stack
    //2.1 Push : To add a new item to the top of the stack
    //2.2 Pop : To delete an item from the top of the stack
    //2.3 Peek : To get/retrieve the top item
    //2.4 Find length : To get the total no of items in stack.
    //2.5 Traverse Stack : ToDo => traverseStack
*/

let stack = []; // Empty stack

function pushItemInStack(newItem) {
  stack.push(newItem);
}

function peek() {
  const stackLength = stack.length;
  const topIndex = stackLength - 1;
  return stack[topIndex];
}

function popItemFromStack() {
  const deletedItem = stack.pop();
  return deletedItem;
}

function findLengthOfStack() {
    const length = stack.length;
    return length;
}

console.log(stack);
pushItemInStack("John");
console.log(stack);
pushItemInStack("Jack");
console.log(stack);

let topOfStack = peek();
console.log(topOfStack);

pushItemInStack("Abraham");
pushItemInStack("Jane");
pushItemInStack("Alex");

topOfStack = peek();
console.log(topOfStack);
console.log(stack);

let deletedItemFromStack = popItemFromStack();
console.log("Deleted Item => ", deletedItemFromStack);
console.log(stack);

deletedItemFromStack = popItemFromStack();
console.log("Deleted Item => ", deletedItemFromStack);
console.log(stack);

console.log(findLengthOfStack());


// Ex of stack : Check sources tab for call stack in Chrome for below example
function takeInput() {
  const input = prompt("Enter a number");
  return parseInt(input);
}

function sum() {
  const num1 = takeInput();
  const num2 = takeInput();
  const total = num1 + num2;
  return total;
}

function calculator() {
  const additionResult = sum();
  console.log(additionResult);
}

calculator();


