'use strict';

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


// 1,2,3,4,5,6,7
function findTheMid(start, end) {
    let fast = start;
    let slow = start;
    while(fast != end) {
        slow = slow.next;
        if (fast.next == end) {
            break;
        }

        fast = fast.next.next;
    }

    return slow;
}

module.exports = {
    SinglyLinkedList: SinglyLinkedList
}