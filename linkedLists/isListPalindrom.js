'use strict';

//Write an algorithm to determine if a linkedlist is a palindrome
let LL = require("./singlyLinkedList.js");

function reverse(list) {
    let reverseList = new LL.SinglyLinkedList();
    reverseList.head = list.head;
    reverseList.head = recursiveReverse(reverseList.head, null);
    
    return reverseList.head;
}

function recursiveReverse(head, headOfReverse) {
    if (head == null) {
        return headOfReverse;
    }
    let current = head;
    let nextHead = current.next; // preserve next node
    current.next = headOfReverse;
    
    return recursiveReverse(nextHead, current);
}

function isPalidrome(list) {
    let reverseList = reverse(list);
    let count = 1;
    let current1 = list.head;
    let current2 = reverseList.head;
    while (count < list._size / 2) {
        if (current1 == current2) {
            current1 = current1.next;
            current2 = current2.next;
            count++;
        } else {
            return false;
        }
    }

    return true;
}


function test() {
    let array = ["a", "b", "c", "b", "a"];
    let list = new LL.SinglyLinkedList();
    array.forEach((v,i,a) => list.add(v));
    console.log(isPalidrome(list));
}

module.exports = {
    run: test
}