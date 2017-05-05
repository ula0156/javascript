'use strict';

function Node(data) {
    this.data = data;
    this.next = null;
}


function SinglyLinkedList() {
    this._length = 0;
    this.head = null;
}


SinglyLinkedList.prototype.add = function(value) {
    let node = new Node(value);

    if(this.head == null) {
        this.head = node;
        this._length++;
        console.log(this.head);
        return;
    }

    let currentNode = this.head;
    while(currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;
    this._length++;
};


// reverse singly Linked list
function reverse(list) {
    let current = list.head;
    let previous = null;
    let next = null;
    while(current != null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }

    list.head = previous;
}


//reverse with a stack
function reverse2(head) {
    let stack = [];
    let current = head;
    while(current != null) {
        stack.push(current);
        current++;
    }

    return stack;
}


function printList(list) {
    let log = "";
    let current = list.head;
    while (current) {
        log += current.data + " ";
        current = current.next;
    }

    console.log(log);
}


function test() {
    let arr = [1, 2];
    let list = new SinglyLinkedList();
    for (let i = 0; i < arr.length; i++) {
        list.add(arr[i]);
    }

    printList(list);
    console.log(list._length);

    reverse(list);

    printList(list);
    console.log(list._length);
}

module.exports = {
    run: test
}