// Find the Symmetric Difference

// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.




 

// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).



const first = [ 1, 2, 3, 4, 5 ];
const second = [ 4, 5, 6 ];
 
const x = first.filter(x => !second.includes(x));
const y = second.filter(x => !first.includes(x));
 
const difference = x.concat(y);
 
console.log(difference);





//
function sym(array) {
    let difference = [];
    for(let i = 0; i < array.length; i++) {
        let oneInstance = array[i];
        const x = difference.filter(x => !oneInstance.includes(x));
        const y = oneInstance.filter(x => !difference.includes(x));
        difference = x.concat(y);
    }
    return difference;
}


//
arr1 = ([1, 2, 3], [5, 2, 1, 4])
arr2 = ([1, 2, 5], [2, 3, 5], [3, 4, 5])
function compareArrays(arr1, arr2){
var arr1red = arr1.reduce(function(collect, current){
if(!arr2.includes(current) && !collect.includes(current)){
collect.push(current);
}
return collect;
},[]);
var arr2red = arr2.reduce(function(collect, current){
if(!arr1.includes(current) && !collect.includes(current)){
collect.push(current);
}
return collect;
},[]);
return arr1red.concat(arr2red);
}