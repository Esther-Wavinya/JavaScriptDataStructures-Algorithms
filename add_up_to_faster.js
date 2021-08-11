//Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.


function addUpTo(n) {
  return n * (n + 1) / 2;
}

var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)



/*
ZOMG WUT
addUpTo(n) =    1    +    2    +    3    + ... + (n - 1) +    n   
addUpTo(n) =    n    + (n - 1) + (n - 2) + ... +    2    +    1   
addUpTo(n) = (n + 1) + (n + 1) + (n + 1) + ... + (n + 1) + (n + 1)
2
+

n copies

2addUpTo(n) = n * (n + 1)
addUpTo(n) = n(n + 1) / 2

*/