// Reverse Sentence In-place

// Write a function reverseSentence(A) that takes in an array of characters, A, and reverses the the "words" (not individual characters).

// Example:


// A = ['t','h','i','s',' ','i','s',' ','g','o','o','d']
// reverseSentence(A)
// A // ['g','o','o','d',' ','i','s',' ','t','h','i','s']

 

// DO NOT USE .split AND .reverse



let A = ['t','h','i','s',' ','i','s',' ','g','o','o','d'];

 

function reverseSentence(sentence) {

 

    let indexes = [];
    let finalArray = [];
    for(let k = 0; k < sentence.length; k++) {
        if (sentence[k] === ' ') {
            indexes.unshift(k);
        }
    }
    console.log(indexes);
    for(let j=0;j<indexes.length + 1;j++){
       let currentIndex = indexes[j];
       let previousIndex = indexes[j - 1];
        let test;
       if (j === 0) {
            test = sentence.slice(currentIndex + 1, sentence.length);
            finalArray = [...finalArray, test];
       } else {
            test = sentence.slice(currentIndex + 1, previousIndex);
            finalArray = [...finalArray, test];
       }
    }
    const answer = finalArray.reduce((a,b) => a.concat(b, ['']), []);
    return answer;
}



