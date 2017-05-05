'use strict';

function createMatrix(n, m) {
    // Start with an empty matrix.
    let matrix = [];

    // Add n rows in the matrix.
    for (let r = 0; r < n; r++) {
        let row = [];

        // Add m zeros in the current row.
        for (let j = 0; j < m; j++) {
            row.push(0);
        }

        // Add row to the matrix;
        matrix.push(row);
    }

    return matrix;
}


function getMaxCommonSubsequence(text1, text2) {
    let n = text1.length + 1; // number of rows
    let m = text2.length + 1; // number of columns

    let mat = createMatrix(n, m);

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                mat[i][j] = 1 + mat[i - 1][j - 1];
            } else {
                mat[i][j] = Math.max(mat[i - 1][j], mat[i][j - 1]);
            }
        }
    }

    let i = n - 1;
    let j = m - 1;
    let result = "";
    while (mat[i][j] != 0) {
        if (text1[i - 1] == text2[j - 1]) {
            result = result + text1[i - 1];
            i = i - 1;
            j = j - 1;
        } else {
            if (mat[i - 1][j] > mat[i][j - 1]) {
                i = i - 1;
            } else {
                j = j -1;
            }
        }
    }

    return result.split('').reverse().join('');
}


function createMatrix(n, m){
    let matrix = [];
    for (let r = 0; r < n; r++) {
        let row = [];
        for (let j = 0; j < m; j++) {
            row.push(0);
        }
        matrix.push(row);
    }

    return matrix;
}


function getLCS(text1, text2) {
    let t1 = text1.length + 1;
    let t2 = text2.length + 1;
    let result = [];
    let mat = createMatrix(t1, t2);
    for (let i = 1; i < t1; i++) {
        for (let k = 1; k < t2; k++) {                
            if (text1[i - 1] == text2[k - 1]) {
                mat[i][k] = 1 + mat[i - 1][k - 1];
            } else {
                mat[i][k] = Math.max(mat[i - 1][k], mat[i][k - 1]);
            }
        }
    }

    let a = t1 - 1;
    let b = t2 - 1;

    while (mat[a][b] > 0) {
            if (text1[a - 1] == text2[b - 1]){
            result.push(text1[a - 1]);
            a--;
            b--;
        } else {
            if (mat[a - 1][b] >= mat[a][b - 1]) {
                // if up element is bigger that the left element -> mover one step up
                a --;
            } else {
                // if left element is bigger than the up one -> move one step left
                b --;
            }
        }
    }

    //return matrixCreated[t1 - 1][t2 - 1];
    return result.reverse().join('');
}


function test() {
            //  0012345
    let text1 = "ABCDGH";
    let text2 = "AEDFHR";
    console.log(getLCS(text1, text2));
    console.log("Length of max common subsequence is: " + maxCmnSubSeqLen);
}

module.exports = {
    run: test
}