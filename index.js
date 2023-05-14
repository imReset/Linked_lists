class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  at(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return currentNode;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    if (!this.head.nextNode) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.size--;
      return removedNode;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode.nextNode) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    previousNode.nextNode = null;
    this.tail = previousNode;
    this.size--;

    return currentNode;
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }

      currentNode = currentNode.nextNode;
    }

    return false;
  }

  find(value) {
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentIndex;
      }

      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return null;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return null;
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.size) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    while (currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    previousNode.nextNode = newNode;
    newNode.nextNode = currentNode;
    this.size++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    if (index === 0) {
      const removedNode = this.head;
      this.head = this.head.nextNode;
      this.size--;
      return removedNode;
    }

    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    while (currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    previousNode.nextNode = currentNode.nextNode;
  }
}
