function sortArrByCriteria(matrix) {
    let referenceSum = matrix[0].reduce((sum, num) => sum + num, 0);
    for (let row of matrix) {
        let rowSum = row.reduce((sum, num) => sum + num, 0);
        if (rowSum !== referenceSum) {
            return false;
        }
    }
    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }
        if (colSum !== referenceSum) {
            return false;
        }
    }
    return true;
}
sortArrByCriteria([[4, 5, 6],

[6, 5, 4],

[5, 5, 5]])