'use strict';

function Stack() {
    this._storage = [];
}


Stack.prototype.push = function(data) {
    this._storage.push(data);
};


Stack.prototype.pop = function() {
    return this._storage.pop();
};


Stack.prototype.size = function() {
    return this._storage.length;
}


function Node(value) {
    this.next = null;
    this.data = value;
}


function SinglyLinkedList() {
    this._size = 0;
    this.head = null;
}

SinglyLinkedList.prototype.print = function() {
    let str = "";
    let current = this.head;
    while(current != null) {
        str += current.data + " ";
        current = current.next;
    }

    console.log(str);
}


SinglyLinkedList.prototype.add = function(data) {
    let node = new Node(data);

    if (this.head == null) {
        this.head = node;
        this._size++;
        return;
    }

    let current = this.head;
    while(current.next) {
        current = current.next;
    }

    current.next = node;
    this._size++;
    return;
}

// reverse with stack
function reverseLinkedList(list) {
    let stack1 = new Stack();
    let current = list.head;
    while (current.next) {
        stack1.push(current);
        current = current.next;
    }
    list.head = current;
    current.next = null;
    while (stack1.size() > 0) {
        let top = stack1.pop();
        top.next = null;
        current.next = top;
        current = current.next;
    }
}

// reverse with stack2
function reverseLinkedList2(list) {
    let head = list.head;
    let nodes = new Stack();
    while (head != null) {
        nodes.push(head);
        head = head.next;
    }
    
    list.head = nodes.pop();
    let current = list.head;
    while (nodes.size() > 0) {
        current.next = nodes.pop();
        current = current.next;
    }
    current.next = null;
    return list;
}

//reverse recusion
function reverseLinkedList2(list) {
    list.head = reverseList(list.head, null);
}

function reverseList(currentHead, headOfReverse) {
    if (currentHead == null) {
        return headOfReverse;
    }

    let nextHead = currentHead.next;
    currentHead.next = headOfReverse;

    return reverseList(nextHead, currentHead);
}


function test() {
    let arr = [1, 2, 3, 4];
    //let stack1 = new Stack();
    let list = new SinglyLinkedList();
    for (let i = 0; i < arr.length; i++) {
        //stack1.push(arr[i]);
        list.add(arr[i]);
    }
    
    list.print();
    //console.log(stack1);
    //console.log(stack1.pop());
    reverseLinkedList3(list);
    list.print();
}

module.exports = {
    run: test
}