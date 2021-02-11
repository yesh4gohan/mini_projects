const Spiral = n => {

    const spiralArr = new Array();
    for(let i = 0; i<n;i++){
        spiralArr.push(new Array());
    }
    counter = 1;
    let start_row  = 0;
    let start_col = 0;
    let end_row = n-1;
    let end_col = n-1;

    while(start_row<=end_row && start_col<=end_col){
        for(let i = start_row;i<=end_row;i++){
            spiralArr[start_row][i] = counter;
            counter++;
        }
        start_row++;
        for(let i = start_row;i<=end_row;i++){
            spiralArr[i][end_col] = counter;
            counter++;
        }
        end_col--;
        for(let i = end_col;i>=start_col;i--){
            spiralArr[end_row][i] = counter;
            counter++;
        }
        end_row--;
        for(let i = end_row;i>=start_row;i--){
            spiralArr[i][start_col] = counter;
            counter++;
        }
        start_col++;

    }
    console.log(spiralArr)
}
Spiral(3)