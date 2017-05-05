'use strict';

//Write code to partition a linkedlist around a value x, such that all nodes 
//less than x come before all nodes great than or equal to x.
let LL = require("./singlyLinkedList.js");


function changeOrder(list, data) {
    if (list.head == null) {
        return null;
    }
    if (list._size == 1) {
        return list;
    }
    let smallList = new LL.SinglyLinkedList();
    let bigList = new LL.SinglyLinkedList();
    let current = list.head;
    while (current) {
        if (current.data < data) {
            smallList.add(current);
            current = current.next;
        } else {
            bigList.add(current);
            current = current.next;
        }
    }

    bigCur = bigList.head;
    smallCur = smallList.head;
    while(smallCur.next) {
        smallCur = smallCur.next;
    }

    smallCur.next = bigList.head;

    return smallList;
}


function test() {
    let array = [4, 3, 6, 8, 1, 2, 9, 0];
    let list = new LL.SinglyLinkedList();
    array.forEach((v,i,a) => list.add(v));
    console.log(changeOrder(list, 5));
}

module.exports = {
    run: test
}