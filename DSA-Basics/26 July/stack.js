// constructor => it is a function in class which initializes the data i.e Declare a variable and give a initial value to it

// NOTE : TO USE VARIABLES AND METHODS INSIDE A CLASS USE "this" KEYWORD e.g this.stack
// e.g. this.sum();

/*
class CLASS_NAME {
    constructor () {
        // Declare variables/data members
    }
    //CLASS BODY
}
*/

class Stack {
  constructor() {
    this.stack = []; // Empty stack
  }

  pushItemInStack(newItem) {
    this.stack.push(newItem);
  }

  peek() {
    const stackLength = this.stack.length;
    const topIndex = stackLength - 1;
    return this.stack[topIndex];
  }

  popItemFromStack() {
    const deletedItem = this.stack.pop();
    return deletedItem;
  }

  findLengthOfStack() {
    const length = this.stack.length;
    return length;
  }

  traverseStack() {
    let stackItemsInString = "";
    for (let counter = 0; counter < this.stack.length; counter++) {
      const currentItem = this.stack[counter];
      stackItemsInString += currentItem;
      stackItemsInString += " ";
    }
    return stackItemsInString;
  }
}

let stack = new Stack(); // creating object of class stack

// console.log(stack);
stack.pushItemInStack("John");
// console.log(stack);
stack.pushItemInStack("Jack");
// console.log(stack);

let topOfStack = stack.peek();
console.log(topOfStack);

stack.pushItemInStack("Abraham");
stack.pushItemInStack("Jane");
stack.pushItemInStack("Alex");

topOfStack = stack.peek();
console.log(topOfStack);
// console.log(stack);

let deletedItemFromStack = stack.popItemFromStack();
console.log("Deleted Item => ", deletedItemFromStack);
// console.log(stack);

deletedItemFromStack = stack.popItemFromStack();
console.log("Deleted Item => ", deletedItemFromStack);
console.log(stack);

console.log(stack.findLengthOfStack());

stack.pushItemInStack("Jacob");

const stackString = stack.traverseStack();
console.log(stackString);

console.log(stack.peek());