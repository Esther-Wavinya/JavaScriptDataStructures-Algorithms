/**
 * 
 * We can also use big O notation to analyze space complexity: how much additional memory do we need to allocate in order to run the code in our algorithm?
 * 



What about the inputs?
Sometimes you'll hear the term auxiliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs.



Space Complexity in JS
Rules of Thumb

Most primitives (booleans, numbers, undefined, null) are constant space
Strings require O(n) space (where n is the string length)
Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)
 */



//Question 1:
//Determine the space complexity for the following function  

function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

//Answer
O(1)




//Question 2:
//Determine the space complexity for the following function  

function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}


//Answer
O(1)






//Question 3:
//Determine the space complexity for the following function  

function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}



//Answer
O(1)






//Question 4:
//Determine the  space complexity for the following function 

function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}

//Answer
O(n)




//Question 5:
//Determine the space complexity for the following function

function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}


//Answer
O(n)



