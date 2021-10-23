// Ethiopian multiplication
// Ethiopian multiplication is a method of multiplying integers using only addition, doubling, and halving.
// Method:
// Take two numbers to be multiplied and write them down at the top of two columnsIn the left-hand column repeatedly halve the last number, discarding any remainders, and write the result below the last in the same column, until you write a value of 1In the right-hand column repeatedly double the last number and write the result below. stop when you add a result in the same row as where the left hand column shows 1Examine the table produced and discard any row where the value in the left column is evenSum the values in the right-hand column that remain to produce the result of multiplying the original two numbers together
// For example: 17 × 34
// 17   34

// Halving the first column:
// 17   34
// 8
// 4
// 2
// 1

// Doubling the second column:
// 17   34
// 8    68
// 4   136
// 2   272
// 1   544

// Strike-out rows whose first cell is even:
// 17   34
// 8    68
// 4   136
// 2   272
// 1   544

// Sum the remaining numbers in the right-hand column:
// 17   34
// 8    --
// 4   ---
// 2   ---
// 1   544
//    ====
//     578

// So 17 multiplied by 34, by the Ethiopian method is 578.

// The task is to define three named functions/methods/procedures/subroutines:
// one to halve an integer,one to double an integer, andone to state if an integer is even
// Use these functions to create a function that does Ethiopian multiplication.




function ethMultiplication(a,b){
    let halve=(n)=>Math.floor(n/2);
    const double=(n)=>n+n;
    const isEven=(n)=>n%2 ===0;
    
    let [left,right]=[a,b].sort((a,b)=>a-b);
    let total=isEven(left) ?0 :right;
    
    while(left >1){
    left=halve(left);
    right=double(right);
    if(!isEven(left))
    total+=right
    } 
    
    return total;
   }