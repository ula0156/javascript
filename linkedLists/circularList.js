'use strict';

var LL = require("./singlyLinkedList.js");
 
function createLoop(list, index) {
    if (list.length <= index) {
        return list;
    }

    let tail = list.head;
    while (tail.next) {
        tail = tail.next; 
    }
    
    // Find the index node
    let node = list.head;
    for (let i = 1; i < index; i++) {
        node = node.next;
    }
    tail.next = node;
}

function checkIfCircular(list) {
    let head = list.head;
    if ((head.next == null) || (head.next.next == null)) {
        return false;
    }
    let fast = head.next.next;
    let slow = head.next;
    while (fast != slow) {
        slow = slow.next;
        if ((fast.next) && (fast.next.next)) {
            fast = fast.next.next;
        } else {
            return false;
        }
    }
    
    let startCircleNode = null;
    slow = head;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }

    startCircleNode = slow;
    
    return startCircleNode;;
}


function test() {
    let list = new LL.SinglyLinkedList();
    let arr = [-1, 5, 30, 45, 50, 13];
    arr.forEach((v,i,arr) => list.add(v));
    createLoop(list, 3);
    console.log(checkIfCircular(list));
    
}

module.exports = {
    run: test
}