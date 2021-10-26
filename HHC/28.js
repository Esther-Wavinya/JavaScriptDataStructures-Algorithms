// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
 
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms




function fibonacciNthTotal(nthN) {
    let fibonacciArray = [1,2];

 

    for(let i = 1; i < nthN + 1; i++) {
        let newNumber = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2];
        fibonacciArray = [...fibonacciArray, newNumber];
    }

 

    const evenValuesTotal = fibonacciArray.filter(x => x%2 === 0).reduce((a,b) => a+b, 0);
    return evenValuesTotal;
}





//This approach does not add number 2, if you wish to use it you can fix the bug
let num1 = 1
let num2 = 2
let sum = 0
let nth = 10

 

for(let i = 1; i < nth + 1; i++) {
    let addedNo = num1 + num2;
    console.log(addedNo);
    addedNo % 2 === 0 ? sum += addedNo : sum += 0
    ;
    num1 = num2;
    num2 = addedNo;
}





//
function fibonacci(number) {
    arr = [1,2];
    even=[]
    for (let i = 0; i < number; i++) {
        sum= (arr[arr.length-1]+arr[arr.length-2])
        arr.push(sum)
 
    }
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element%2===0) {
            even.push(element)            
        }
        
    }
    console.log(even)
    let total = even.reduce((a, b) => a + b, 0)
    console.log(total)
    
}
console.log(fibonacci(10))




