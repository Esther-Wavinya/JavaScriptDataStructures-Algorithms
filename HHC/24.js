// Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 
// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.



function totalOfMultiplesOf(range) {
    // create an empty array
    var  multiples = []
    for (var i = 0; i < range; i++) {
      if ((i % 3 === 0) || (i % 5 === 0)) {
       // push multiples to the array
        multiples.push(i);
      }
    }
   const total = multiples.reduce((a, b) => a + b, 0);
    return total;
  }



//

  var sum = 0;
for(i = 0; i < 10; i++){
 if(i%3 == 0 || i%5 == 0){
 sum = sum + i;
 }
}
console.log(sum);



//

let no = 10;
let numbers = [3,5];
let multiples= [];
let nonMultiples = [];
 
for (let i = 0; i < no ; i++) {
    
    for(let x of numbers){
 
        let result = i %  x
        if(result === 0 ){
            
            multiples.push(i)
        }else{
            nonMultiples.push(i)
        }
    }
    
}
console.log(multiples)
let sum = multiples.reduce((a,b) => a+b, 0)
console.log(sum)