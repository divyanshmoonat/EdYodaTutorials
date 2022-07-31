// Q. Write a program to check the proper opening and closing of brackets in a string.
// a*(b+c)*[d-(e*f)]

let stack = [];

function push(newItem) {
  stack.push(newItem);
}

function pop() {
  stack.pop();
}

function peek() {
  return stack[stack.length - 1];
}

// () [] {}

function getBracketOpening(bracket) {
  switch (bracket) {
    case ")":
      return "(";
    case "]":
      return "[";
    case "}":
      return "{";
    default:
      return "";
  }
}

function isBracketOpening(input) {
  const brackets = ["(", "[", "{"];
  return brackets.includes(input);
}

function checkBrackets(input) {
  //1. Iterate the string one by one character
  //2. If the bracket opening is encountered, push it into stack.
  //3. If the bracket closing is encountered
  //  3.1 If the same bracket opening is present in stack top, pop it
  //  3.2 If the same bracket opening is not present in stack top, push it
  //4. At the end of string iteration if the stack is empty, then the string has proper opening and closing, otherwise there is a missing bracket.
  for (let counter = 0; counter < input.length; counter++) {
    const current = input[counter];

    const isOpenBracket = isBracketOpening(current);
    const peekOfStack = peek();
    const openingOfCurrentBracket = getBracketOpening(current);

    if (peekOfStack === openingOfCurrentBracket) {
      pop();
    } else {
      if (isOpenBracket) {
        push(current);
      }
    }
  }

  if (stack.length === 0) {
    console.log("The input string has proper opening and closing");
  } else {
    console.log("The input string does not have proper opening and closing");
  }
}

checkBrackets("a*(b+c)*[d-(e*f)][(]");
checkBrackets("()[]");