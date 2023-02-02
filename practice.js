//Exercise 1
const numbersArray = [2, 22, 12, 17, 18, 39, 129];
let sum = 0;

function arraySum(numbers) {
     numbers.forEach((number, index) => {
        sum += number; 
     })
     return sum; 
}

console.log(arraySum(numbersArray)); 


//Exercise 2
const book = {}; 
book.title = "Love & Respect"; 
book.author = "Emerson Eggerichs";
book.pages = 232; 
book.readCount = 2;
book.info = function () {
    return `${book.title} by ${book.author}, read ${book.readCount} times.`
}; 

console.log(book.info()); 
 

//Exercise 3
let sentence = "The quick brown fox jumps over the lazy dog";
let words = sentence.split(" "); 
let reversed = []; 
words.forEach((word) => {
    let wordSplit = word.split('').reverse().join('').toString(' ');
    reversed.push(wordSplit)
    reversed.join(' ');    
}); 

let reversedSentence = reversed.join(' ');
console.log(reversedSentence);



//Exercise 4
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function parseCSV(startingData) {
    
const rows = startingData.split('\n')
const headers = rows[0].split(','); 
const resultArray = []; 

for (let i = 1; i < rows.length; i++) {
    const valuesArray = rows[i].split(','); 
    // console.log(valuesArray); 
    
    const dataObject = {
        [headers[0]]: valuesArray[0],
        [headers[1]]: valuesArray[1] 
    
    }
    
    resultArray.push(dataObject); 
}

return resultArray; 

}

console.log( parseCSV(csvData) ); 






