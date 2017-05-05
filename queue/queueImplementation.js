'use strict';

function Queue() {
    this.queue = [];
}


Queue.prototype.enqueue = function(data) {
    return this.queue.push(data);
}


Queue.prototype.dequeue = function(data) {
    return this.queue.shift(data);
}


Queue.prototype.size = function(data) {
    return this.queue.length;
}


module.exports = {
    Queue : Queue
}