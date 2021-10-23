let A = [1,2,3,4,5,6,7,8,9];
let n = 11;
let array = []

function printpairs(a, b)
    {
        let s = new Set();

        for (let i = 0; i < a.length; ++i)
        {
            let temp = b - a[i];
 
            
            if (s.has(temp)) {
                
               console.log(
                    "Pair with given sum "
                    + b + " is (" + a[i]
                    + ", " + temp + ")");
            }

            s.add(a[i]);
        }
    } 
    
printpairs(A, n);








//et numArray = [1,2,3,4,5,6,7,8,9];
let targetValue = 10;
 
let allPairs = [];
for (let i = 0; i < numArray.length; i++) {
 const oneNumber = numArray[i];
 
 numArray.forEach((num) => {
 if ((oneNumber + num) === targetValue) {
 allPairs = [...allPairs, [oneNumber, num]];
 }
 })
}
 
let result = allPairs.reduce((unique, o) => {
 if(!unique.some(obj => obj[0] === o[1] && obj[1] === o[0])) {
 unique.push(o);
 }
 return unique;
},[]);
console.log(result);