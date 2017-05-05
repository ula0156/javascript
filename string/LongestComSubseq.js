'use strict';
/* Given two sequences, print longest common subsequence
LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3. 
LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.
*/

// create a matrix
function matrixCreate(n, m){
    let matrix = [];
    for (let r = 0; r <= n; r++) {
        let row = [];
        for (let j = 0; j <= m; j++) {
            row.push(0);
        }
        matrix.push(row);
    }
    return matrix;
}


function fillMatrix(text1, text2) {
    let mat = matrixCreate(text1.length - 1, text2.length - 1);
    for (let i = 0; i < text1.length; i++) {
        for (let k = 0; k < text2.length; k++) {
            // for first row in the matrix
            if (i == 0) {
                if (k == 0) {
                     if (text1[i] == text2[k]) {
                        mat[i][k] = 1;
                    } else {
                        mat[i][k] = 0;
                    }
                 } else if (k != 0) {
                    if (text1[i] == text2[k]) {
                        mat[i][k] = 1;
                    } else {
                        mat[i][k] = mat[i][k - 1];
                    }
                }
            }
            // for the rest of rows in the matrix
            else if (i != 0) {
                if (k == 0) {
                    if (text1[i] == text2[k]) {
                        mat[i][k] = 1;
                    }else {
                        mat[i][k] = mat[i - 1][k];
                    }
                } else if (k != 0) {
                    if (text1[i] == text2[k]) {
                        mat[i][k] = mat[i - 1][k - 1] + 1;
                    } else {
                        mat[i][k] = Math.max(mat[i][k - 1], mat[i - 1][k]);
                    }
                }

            }
        }
    }  
    let LCS = [];
    let l = text1.length - 1;
    let m = text2.length - 1;    
    while ((m >= 0) && (l >= 0)){
        if (text1[l] == text2[m]) {
           LCS.push(text1[l]);
           l--;
           m--;
        } else if (l == 0) {
            m--;
        } else if (m == 0) {
            l--;
        } else {
            if (mat[l - 1][m] >= mat[l][m - 1]) {
                l--;
            } else {
                m--;
            }
        }
    }

    return LCS.reverse().join('');
}


function test() {
               //012345
    let text1 = "ABE";
    let text2 = "AEDBE";
    console.log(fillMatrix(text1, text2));
}


module.exports = {
    run: test
}