function quickSort(a, startInd, endInd) {
    if (startInd == endInd) {
        return;
    }
    var pivotInd = startInd;
    for (var i = startInd + 1; i <= endInd; i++) {
        if (a[i] < a[pivotInd]) {
        // move all the elements smaller than pivot to the left of it
            if (i == pivotInd + 1) {
            // the very next element from the pivot is smaller than pivot 
                var tmp = a[pivotInd];
                a[pivotInd] = a[i];
                a[i] = tmp;
                pivotInd = i;
            } else {
              // there is other element between pivot and the one which is smaller
                var tmp = a[pivotInd + 1];
                a[pivotInd + 1] = a[pivotInd];
                a[pivotInd] = a[i];
                a[i] = tmp;
                pivotInd += 1;
            }
        }
    }
    var left = quickSort(a, startInd, pivotInd - 1);
    var right = quickSort(a, pivotInd + 1, endInd);    // a[pivotInd] is 3 instead of 5, I understood why, but don't know how to fix it 
}