let numArray = [1,2,3,4,5,6,7,8,9];
let result = [];

function distinctPairs(array){
    for(let no of array){
        let value = numArray.find( x => {
            return (x + no) === 10
        })
        if(value){
        result.push({
                num1: no,
                num2: value
            })
        }
    }
    for(let no of result){
        let duplicateIndex = result.findIndex( x => {
            return x.num1 === no.num2, x.num2 === no.num1 })
        if(duplicateIndex){
            result.splice(duplicateIndex,1);
        }
    }
    return result;
}

console.log(distinctPairs(numArray));