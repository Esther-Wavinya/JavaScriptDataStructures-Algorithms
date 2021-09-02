//Question 1:
// Determine the time complexity for the following function
 
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

//Answer
O(n)



//Question 2:
//Determine the time complexity for the following function 

function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

//Answer
O(1)




//Question 3:
//Determine the time complexity for the following function

function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}

//Answer
O(n)




//Question 4:
//Determine the time complexity for the following function

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
//Determine the time complexity for the following function

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
  O(n^2)










  //Question 1:
//Simplify the big O expression as much as possible - 
O(n + 10)           = O(n)



//Question 2:
//Simplify the big O expression as much as possible - 
O(100 * n)          = O(n)




//Question 3:
//Simply the following big O expression as much as possible - 
O(25)            = O(1)



//Question 4:
//Simply the following big O expression as much as possible -  
O(n^2 + n^3)      = O(n^3)