class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Since the list is empty, head is pointing to nothing (null)
    // this.head is the starting or the fist item of the list
    this.size = 0;
  }

  // insertAtFirst: Insert the item at the first position/starting
  insertAtFirst(data) {
    // 1. Create a new node
    // 2. Point the next of new node to the older element
    // 3. Point the head to new node
    const olderElement = this.head;
    // older element is apple node
    const newNode = new Node(data, olderElement);
    this.head = newNode;
    this.size++;
  }

  // insertAtLast: Insert the item at the last position/ending
  insertAtLast(data) {
    // 1. Create a new node
    // 2. Find the last node
    // 3. Change last node's next to the new node
    // 4. Keep the next of new node to null
    const newNode = new Node(data, null);
    let lastNode = this.head;
    while (lastNode.next !== null) {
      // Traverse to the end of the list
      lastNode = lastNode.next;
    }
    lastNode.next = newNode;
    this.size++;
  }

  // insertAt: Insert at a specific index/middle
  insertAt(data, index) {
    // data => information to be stored in the node
    // index => position where the node has to be placed
    // VALID INDEX : BETWEEN 0 AND THE SIZE/LENGTH OF THE LIST

    if (index < 0 || index > this.size) {
      console.log("Invalid Index", index);
    } else if (index === 0) {
      this.insertAtFirst(data);
    } else {
      // 1. Create a new node
      // 2. Go to the index using current.next
      // 3. Point previous to new node
      // 4. Point the new node to the current
      const newNode = new Node(data);
      let current = this.head;
      let counter = 0;
      let previous;
      while (counter < index) {
        previous = current;
        counter++;
        current = current.next;
      }
      previous.next = newNode;
      newNode.next = current;
      this.size++;
    }
  }
  // getFirstItem : Get the first item from LL
  getFirstItem() {
    const first = this.head;
    console.log("First Item ", first.data);
  }

  // getLastItem : Get the last item from LL
  getLastItem() {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    console.log("Last Item ", current.data);
  }

  // getItemAt : Get item at the nth index in the LL
  getItemAt(index) {
    let current = this.head;
    let counter = 0;
    while (counter < index) {
      counter++;
      current = current.next;
    }
    console.log(`Item at Index ${index} `, current.data);
  }

  // deleteFirst : Delete the first item in the list
  deleteFirst() {
    // 1. Move the nead to the next item
    let current = this.head;
    this.head = current.next;
    this.size--;
  }

  // deleteLast : Delete the last item from the list
  deleteLast() {
    // 1. Traverse the list till the last item
    // 2. Keep the record of previous item
    // 3. Set next of previous item to null
  }

  // deleteAt : Delete an item at a specific position in the list
  deleteAt() {}

  // printList : Print all the items of the list
  printList() {
    let current = this.head; // First item in the list
    let itemsStr = "";
    while (current !== null) {
      // Run the loop until current gets a null value
      itemsStr += current.data;
      itemsStr += " -> ";
      //   console.log(current.data);
      current = current.next; //Move current one by one
    }
    console.log(itemsStr);
  }

  //getSize : To get the size/length of the list
  getSize() {
    return this.size;
  }
}

const ll = new LinkedList();

ll.insertAtFirst("www.apple.com");
ll.insertAtFirst("www.samsung.com");
ll.insertAtFirst("www.nokia.com");
ll.insertAtFirst("www.mi.com");
ll.insertAtFirst("www.oppo.com");

let size = ll.getSize();
console.log("Size after insert ", size);

ll.insertAtLast("www.oneplus.com");
ll.printList();

ll.insertAt("www.linkedin.com", -2);
ll.insertAt("www.facebook.com", 12);

ll.printList();

ll.deleteFirst();

ll.printList();

size = ll.getSize();
console.log("Size after delete operation ", size);

ll.getFirstItem();

ll.deleteFirst();
ll.printList();

ll.getFirstItem();
ll.getLastItem();

ll.printList();

ll.getItemAt(1);
// SAMSUNG -> APPLE -> null
//                        ^
