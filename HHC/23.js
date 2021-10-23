// Write a JavaScript function to get nth largest element from an unsorted array






// [ 43, 56, 23, 89, 88, 90, 99, 652]




const nthlargest = (arr, n) => {
    let newArr = [arr[0]];
    for (let index = 1; index < arr.length; index++) {
        const element = arr[index];
        // push to end
        if (element > newArr[index - 1]) {
            newArr.push(element);
        } else {
            let insertPos = 0;
            // if greater than first and less than last
            if (newArr[0] < element && element < newArr[index - 1]) {
                for (let j = 0; j < newArr.length; j++) {
                    if (newArr[j] > element) {
                        insertPos = j;
                    }
                }
            }
            //insert at specified pos
            newArr.splice(insertPos, 0, element);
        }
    }
    return newArr[n];
}
console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4));
// counting from 0


