class Node{
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.nextNode) {
                current = current.nextNode;
            };
            current.nextNode = newNode;
        }
        this.length++;
    }
    prepend(value) {
        this.head = new Node(value, this.head);
        this.length++;
    }

}



const linkedList = new LinkedList();
linkedList.append("first");
linkedList.append("second");
linkedList.append("third");
console.log(linkedList.head);
