'use strict';

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}


function Tree(data) {
    this.root = null;
}


Tree.prototype.insert = function(data) {
    let newNode = new Node(data);
    if(this.root == null) {
        this.root = newNode;
        return;
    }

    let current = this.root;
    while(current) {
        if (newNode.data > current.data) {
            if(!current.right) {
                current.right = newNode;
                return;
            } else {
                current = current.right;
            }
        } else {
            if(!current.left) {
                current.left = newNode;
                return;
            } else {
                current = current.left;
            }
        }
    }
}


Tree.prototype.search = function(data) {
    let current = this.root;
    while(current) {
        if (data == current.data) {
            return true;
        } if (data > current.data) { 
            current = current.right;
        } else {
            current = current.left;
        }
    }

    return false;
}


module.exports = {
    Tree: Tree
}

