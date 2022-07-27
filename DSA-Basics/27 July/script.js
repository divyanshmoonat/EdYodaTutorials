/* 
1. Create Queue
2. Operations on Queue
    2.1 Enqueue : Add new item to the queue
    2.3 Dequeue : Remove an item from the queue
    2.3 Find front : Give the item at the front of the queue
    2.4 Find length : To get the length of the queue
    2.5 isEmpty: To check whether the queue is empty or not
    2.6 isItemPresentInQueue : To check if the item is present in queue or not. 
    2.7 findIndex : To check the index/position of the item in queue
*/

let queue = []; // Initialization of Queue

function enqueue(newItem) {
  queue.push(newItem);
}

function dequeue() {
  queue.shift();
}

function size() {
  return queue.length;
}

function findFront() {
  return queue[0];
}

function isEmpty() {
  if (queue.length > 0) {
    return false;
  } else {
    return true;
  }
  //   return queue.length > 0 ? false : true;
}

let front = findFront();

let isQueueEmpty = isEmpty();
console.log("Is Queue Empty ?", isQueueEmpty);

console.log("InitQueue Value", queue);
console.log("Front of Init Queue", front);
enqueue("John");
enqueue("Jane");
enqueue("Alex");
enqueue("Scott");
enqueue("Michael");
console.log("Queue After enqueue operation", queue);

console.log("Front of queue after enqueue", front);

dequeue();
console.log("Queue After dequeue operation", queue);
dequeue();
console.log("Queue After dequeue operation2", queue);

let sizeOfQueue = size();
console.log("Size of Queue", sizeOfQueue);

dequeue();

sizeOfQueue = size();
console.log("Size of Queue After Queue", sizeOfQueue);

front = findFront();
console.log("Front after 3 dequeue operations", front);

isQueueEmpty = isEmpty();
console.log("Is Queue Empty ?", isQueueEmpty);
