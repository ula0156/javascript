'use strict';

var LL = require("./singlyLinkedList.js");


function removeDupSoretedList(list) {
    let current = list.head;
    // when there are no elements 
    if (!current) {
        return list;
    }
    let nextHead = current.next;
    while(nextHead) {
        if(current.data == nextHead.data) {
            nextHead = nextHead.next;
            current.next = nextHead;
            list._length--;
        } else {
            current = current.next;
            nextHead = nextHead.next;
        }
    }
    return list;
}


function removeDupUnsortedList(list) {
    if (list.length == 0) {
        return;
    }
    let current = list.head;
    let mySet = new Set();
    mySet.add(list.head.data);
    while(current.next) {
        if (mySet.has(current.next.data)) {
            current.next = current.next.next;
            list.length--;
        } else {
            mySet.add(current.next.data);
            current = current.next;
        }
    }
}


function test() {
    let list = new LL.SinglyLinkedList();
    let arr = [-1, 5, 30, 45, 50, 30, -1];
    arr.forEach(function(v,i,arr) {return list.add(v);});
    removeDupUnsortedList(list);
    list.print();
}

module.exports = {
    run: test
}