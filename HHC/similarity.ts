//const array1 = [2,6,3,9,10,99,42,7,'kanairo']
//const array2 = [9,'cat', 5,6,77,42, 'test']

const array3 = [1, [2], [3, [[4]]],[5,6]]



const array1 = [2,6,3,9,10,99,42,7,'kanairo'];
const array2 = [9,'cat', 5,6,77,42, 'test'];

function similarities(array1, array2){
    let similarValues = [];
    let differentValues = [];

    for(let value of array1){
        let similarValue = array2.find( x => x === value);
        if(similarValue){
            similarValues = [...similarValues, value];
            similarValues = [...new Set(similarValues)];
        }
        else{
            differentValues.push(value);
        }        
    }

    for(let value of array2){
        let similarValue = array1.find( x => x === value);
        if(similarValue){
            similarValues = [...similarValues, value];
            similarValues = [...new Set(similarValues)];
        }
        else{
            differentValues.push(value);
        }        
    }

    return {
        similarValues,
        differentValues
    }
}

console.log(similarities(array1,array2));








//

// const array1 = [2,6,3,9,10,99,42,7,'kanairo']
// const array2 = [9,'cat', 5,6,77,42, 'test']
// const array3 = [1, [2], [3, [[4]]],[5,6]]

function getArraysIntersection(a1,a2){
    return  a1.filter( function(n) { return a2.indexOf(n) !== -1;})
}

var intersectingNumbers=getArraysIntersection(array1, array2); 
console.log(intersectingNumbers)

console.log(array3.flat(Infinity))





//
//[9/17, 5:12 PM] Winnie Mandela
    

 let flatArray3=array.reduce((a,b)=>
 {​​​​​​​​
 return a.concat(b,[])
 }​​​​​​​​)







​
