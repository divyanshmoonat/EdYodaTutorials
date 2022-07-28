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
  }
  // insertAt: Insert at a specific index/middle
  // getItemAtStarting : Get the first item from LL
  // getItemAtEnding : Get the last item from LL
  // getItemAt : Get item at the nth index in the LL
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
}

const ll = new LinkedList();

ll.insertAtFirst("www.apple.com");
ll.insertAtFirst("www.samsung.com");
ll.insertAtFirst("www.nokia.com");
ll.insertAtFirst("www.mi.com");
ll.insertAtFirst("www.oppo.com");

ll.insertAtLast("www.oneplus.com");
ll.printList();
// SAMSUNG -> APPLE -> null
//                        ^
