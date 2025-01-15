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
        function getLastNode(node) {
            if (node.nextNode == null) {
                return node;
            }
            return getLastNode(node.nextNode);
        }
        if (this.head) {
            let tail = getLastNode(this.head);
            tail.nextNode = new Node(value, null);
        } else {
            this.head = new Node(value, null);
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

//how tf do i make the nodes refer to their next thing 