class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
    this.length = 0;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
    } else {
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
    this.length++;
  }
  prepend(value) {
    this.headNode = new Node(value, this.headNode);
    this.length++;
  }
  size() {
    return this.length;
  }
  head() {
    return this.headNode;
  }
  tail() {
    let current = this.headNode;
    if (!current) return null;
    while (current?.nextNode) {
      current = current.nextNode;
    }
    return current;
  }
  at(index) {
    if (index > this.length || index < 0 || !Number.isInteger(index))
      return 'Index invalid/out of bounds';
    let current = this.headNode;
    while (index) {
      current = current.nextNode;
      index--;
    }
    return current;
  }
  pop() {
    let current = this.headNode;
    if (!current) return null;
    if (!current.nextNode) {
      this.headNode = null;
      this.length--;
      return;
    }
    while (current?.nextNode?.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = null;
    this.length--;
  }
  contains(value) {
    let current = this.headNode;
    if (!current) return false;
    while (current) {
      if (current.value == value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }
  find(value) {
    let current = this.headNode;
    let position = 0;
    if (!current) return null;
    while (current) {
      if (current.value == value) {
        return position;
      }
      current = current.nextNode;
      position++;
    }
    return null;
  }
  toString() {
    let string = '';
    let current = this.headNode;
    while (current) {
      string = string + `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    string = string + 'null';
    return string;
  }
  insertAt(value, index) {
    if (index > this.length || index < 0 || !Number.isInteger(index)) {
      return console.log('Index invalid/out of bounds');
    }
    let newNode = new Node(value);
    if (index == 0) {
      let currentHead = this.headNode;
      newNode.nextNode = currentHead;
      this.headNode = newNode;
    }
    let current = this.headNode;
    while (index > 1) {
      current = current.nextNode;
      index--;
    }
    let newNodeFollowing = current.nextNode;
    current.nextNode = newNode;
    newNode.nextNode = newNodeFollowing;
  }
  removeAt(index) {
    if (index > this.length || index < 0 || !Number.isInteger(index)) {
      return console.log('Index invalid/out of bounds');
    }
    let current = this.headNode;
    if (index == 0) {
      this.headNode = current.nextNode;
      this.length--;
    }
    while (index > 1) {
      current = current.nextNode;
      index--;
    }
    let preceding = current;
    let following = current.nextNode?.nextNode;
    preceding.nextNode = following;
    this.length--;
  }
}

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");