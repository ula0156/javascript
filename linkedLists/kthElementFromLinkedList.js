'use strict';

var LL = require("./singlyLinkedList.js");

// Implement an algorithm to find the kth to the last element of a singly linked list
function kthElementFromLinkedList1(head, k) {
    let kthElement = null;
    let current = head;
    let count = 0;
    // find the length of the list
    while (current) {
        current = current.next;
        count++;
    }
    //how many steps to move from the head
    let stepToMove = count - k;
    current = head;
    while(stepToMove > 0) {
        current = current.next;
        stepToMove--;
    }
    
    kthElement = current;
    
    return kthElement;
}

// Same problem using 2 pointers
function kthElementFromLinkedList2(head, k) {
    let fast = head;
    let slow = head;
    let count = 0;
    // fast should be (k-1) elements apart from slow
    while(count < k && fast != null) {
        fast = fast.next;  
        count++;
    }

    if (fast == null) {
        return null;
    }

    while(fast) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow;
}


function test() {
    let list = new LL.SinglyLinkedList();
    let arr = ['a', 'b'];
    arr.forEach (function(v,i,a) {list.add(v)});
    console.log(kthElementFromLinkedList2(list.head, 4));
}

module.exports = {
    run: test
}

