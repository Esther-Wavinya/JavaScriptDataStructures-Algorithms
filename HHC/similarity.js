//[9/17, 5:13 PM] Tony Muema
console.log(array3.reduce((a,b) =>a.concat(b), []))




//
function concatArray(array1, array2 = []) {
 
    for (let i = 0; i < array1.length; i++) {
    let element = array1[i];
    
    if(element instanceof Array){
    
    concatArray(element, array2);
    }else{
    array2.push(element);
    }
    }
    
    return array2;
   }