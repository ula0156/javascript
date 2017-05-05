'use strict'

function findLocation(a,b,t) {
    let distanceConst = b - a;
    let distanceWhole = t * 1;
    let location = 0;
    if ((Math.floor(distanceWhole/distanceConst) % 2) == 0) {
        location = a + (distanceWhole % distanceConst);
    } else {
        location = b - (distanceWhole % distanceConst);
    }
    
    return location;
}


function test() {
    console.log(findLocation(1, 7, 4));
}

module.exports = {
    run: test
}