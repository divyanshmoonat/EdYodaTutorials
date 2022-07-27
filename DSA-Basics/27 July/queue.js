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
    2.8 emptyQueue : To remove all the items from queue one by one
*/

class Queue {
  constructor() {
    this.queue = []; // Init
  }

  enqueue(newItem) {
    this.queue.push(newItem);
  }

  dequeue() {
    this.queue.shift();
  }

  size() {
    return this.queue.length;
  }

  findFront() {
    return this.queue[0];
  }

  isEmpty() {
    if (this.queue.length > 0) {
      return false;
    } else {
      return true;
    }
    //   return this.queue.length > 0 ? false : true;
  }

  traverseQueue() {
    // console.log(JSON.stringify(this.queue));
    // console.log(this.queue.toString());
    return this.queue.join(", ");
  }
}

const queue = new Queue();

let front = queue.findFront();

let queueAsString = queue.traverseQueue();

let isQueueEmpty = queue.isEmpty();
console.log("Is Queue Empty ?", isQueueEmpty);

console.log("InitQueue Value", queueAsString);
console.log("Front of Init Queue", front);
queue.enqueue("John");
queue.enqueue("Jane");
queue.enqueue("Alex");
queue.enqueue("Scott");
queue.enqueue("Michael");

queueAsString = queue.traverseQueue();
console.log("Queue After enqueue operation", queueAsString);

console.log("Front of queue after enqueue", front);

queue.dequeue();

queueAsString = queue.traverseQueue();
console.log("Queue After dequeue operation", queueAsString);

queue.dequeue();

queueAsString = queue.traverseQueue();
console.log("Queue After dequeue operation2", queueAsString);

let sizeOfQueue = queue.size();
console.log("Size of Queue", sizeOfQueue);

queue.dequeue();

sizeOfQueue = queue.size();
console.log("Size of Queue After Queue", sizeOfQueue);

front = queue.findFront();
console.log("Front after 3 dequeue operations", front);

isQueueEmpty = queue.isEmpty();
console.log("Is Queue Empty ?", isQueueEmpty);

queueAsString = queue.traverseQueue();
console.log("Queue as string ", queueAsString);

const queue2 = new Queue();

for (let counter = 1; counter <= 10; counter++) {
  queue2.enqueue(counter);
}

console.log("Items in New Queue", queue2.traverseQueue());
