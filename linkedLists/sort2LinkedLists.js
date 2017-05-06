'use strict';

var LL = require("./singlyLinkedList.js");

function sort2LinkedLists(listA, listB) {
    let originalALength = listA.length;

    let currentA = listA.head;
    let currentB = listB.head;
    let listC = new SinglyLinkedList();

    if (currentA.data < currentB.data) {
        listC.head = currentA;
        currentA = currentA.next;
    } else {
        listC.head = currentB;
        currentB = currentB.next;
    }

    let currentC = listC.head;

    while (currentA && currentB) {
        if (currentA.data < currentB.data) {
            currentC.next = currentA;
            currentA = currentA.next;
        } else {
            currentC.next = currentB;
            currentB = currentB.next;
        }
        
        currentC = currentC.next;
    }
    
    // if one of the list are shorter than another one.
    while (currentA) {
        currentC.next = currentA;
        currentA = currentA.next;
        currentC = currentC.next;
    } 
    
    while (currentB) {
        currentC.next = currentB;
        currentB = currentB.next;
        currentC = currentC.next;       
    }

    printList(listC);
    
    // divide listC on listA and listB
    split(listC, listA, listB, originalALength);
    
    printList(listA);
    printList(listB);
}


function split(listC, listA, listB, splitCount) {
    listA.head = null;
    listB.head = null;

    let count = 1;
    listA.head = listC.head;
    currentA = listC.head;

    while (count < splitCount) {
        currentA = currentA.next;
        count++;
    }

    listB.head = currentA.next;
    currentA.next = null;
    currentB = listB.head;
}


function test() {
    let list1 = new LL.SinglyLinkedList();
    let arr1 = [-1, 5, 30, 45, 50];
    arr1.forEach((v, i, a) => list1.add(v));

    let list2 = new LL.SinglyLinkedList();
    let arr2 = [2, 7, 15];
    arr2.forEach(function (v, i, a) { list2.add(v);});

    sort2LinkedLists(list1,list2);
}


module.exports = {
    run: test
}