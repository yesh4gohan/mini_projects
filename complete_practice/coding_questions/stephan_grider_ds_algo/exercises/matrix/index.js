// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let mat = [];
    for (let i = 0; i < n; i++) {
        mat.push([]);
    }
    let startRow = 0;
    let startColumn = 0;
    let endRow = n-1;
    let endColumn = n-1;
    let counter = 0;
    while(startColumn <= endColumn && startRow <= endRow){
        for(let i = startColumn;i<=endColumn;i++){
            counter++;
            mat[startRow][i] = counter;
        }
        startRow++;
        for(let i = startRow;i<=endRow;i++){
            counter++;
            mat[i][endColumn] = counter;
        }
        endColumn--;
        for(let i = endColumn;i>=startColumn;i--){
            counter++;
            mat[endRow][i] = counter;
        }
        endRow--;
        for(let i = endRow;i>=startRow;i--){
            counter++;
            mat[i][startColumn] = counter;
        }
        startColumn++;
    }
    return mat;
}

module.exports = matrix;
