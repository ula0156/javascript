'use strict';

//Given a singly linked list which has data sorted in ascending order, construct a balanced BST.

var LL = require("../linkedLists/singlyLinkedList.js");
var t = require("./BST.js");

function getTheMid(st, end) {
    if (st == end) {  
        return st;
    }

    let slow = st;
    let fast = st;
    while (fast != end && fast) {
        if (fast.next && fast.next != end) {
            fast = fast.next.next;
            slow = slow.next;
        } else {
            break;
        }
    }

    return slow;
}


function toBST(st, end, tree) {
    if (st == end) {
        return;
    }

    let tNode = getTheMid(st, end);
    tree.insert(tNode.data);
    toBST(st, tNode, tree);
    toBST(tNode.next, end, tree);
    return tree;
}


function listToTree(list) {
    let tree = new t.Tree();
    return toBST(list.head, null, tree);
}


function test() {
    let arr = [1,2,3,4,5,6,7];
    let list = new LL.SinglyLinkedList();
    arr.forEach((v, i, a) => list.add(v)); 
    console.log(listToTree(list));
}


module.exports = {
    run: test
}