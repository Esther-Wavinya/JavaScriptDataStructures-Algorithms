// You are given a collection of ABC blocks (e.g., childhood alphabet blocks). There are 20 blocks with two letters on each block. A complete alphabet is guaranteed amongst all sides of the blocks. The sample collection of blocks:
 
// (B O)
// (X K)
// (D Q)
// (C P)
// (N A)
// (G T)
// (R E)
// (T G)
// (Q D)
// (F S)
// (J W)
// (H U)
// (V I)
// (A N)
// (O B)
// (E R)
// (F S)
// (L Y)
// (P C)
// (Z M)
// Implement a function that takes a string (word) and determines whether the word can be spelled with the given collection of blocks.
 
// Some rules to keep in mind:
 
// Once a letter on a block is used, that block cannot be used again.
// The function should be case-insensitive.



function canMakeWord(word) {
    const characters = 'BO XK DQ CP NA GT RE TG QD FS JW HU VI AN OB ER FS LY PC ZM';
    const blocks = characters.split(' ').map(pair => pair.split(''));
  
   
  
    const letters = [...word.toUpperCase()];
    let length = letters.length;
    const copy = new Set(blocks);
  
   
  
    letters.forEach(letter => {
      for (let block of copy) {
        const index = block.indexOf(letter);
  
   
  
        if (index !== -1) {
          length--;
          copy.delete(block);
          break;
        }
      }
    });
    return !length;
  }





//


  let array = [
    ["B", "K"],
    ["D", "Q"],
    ["C", "P"],
    ["N", "A"],
    ["G", "T"],
    ["R", "E"],
    ["T", "G"],
    ["Q", "D"],
    ["F", "S"],
    ["J", "W"],
    ["H", "U"],
    ["V", "I"],
    ["A", "N"],
    ["O", "B"],
    ["E", "R"],
    ["F","S" ],
    ["L", "Y"],
    ["P", "C"],
    ["Z", "M"]
]
 
function checkWord(word){
    let upperCaseWord = word.toUpperCase();
    let spellCheck = '';
    for (let i = 0; i < array.length; i++) {
        let miniArray = array[i];
        for (let j = 0; j < miniArray.length; j++) {
            if(upperCaseWord.includes(miniArray[j])){
                spellCheck += miniArray[j];
                break;
            }           
        }
    }
    let finalSpellCheck = '';
    for (let index = 0; index < upperCaseWord.length; index++) {
        let letter = upperCaseWord[index];
        if(spellCheck.includes(letter)){
            finalSpellCheck += letter;
        }
    }
    return upperCaseWord.length === finalSpellCheck.length? true : false;
}
 
console.log(checkWord('toy'));