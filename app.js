console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129]; 
function arraySum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i]); 
        sum = sum + arr[i];
        // console.log('Sum:', sum); 
    } 
    return sum; 
}


console.log(arraySum(numbers)); 



const abc = [5, 8, 12, 15, 20, 25];

function arrayAdd(array) {
    let add = 0; 
    for(let i = 0; i < abc.length; i++) {
        add += array[i]; 
    }

    return add; 
}

console.log(arrayAdd(abc)); 



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function bookInfo(){
    return `${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} times.`
}

let book = {}

book.title = 'God, Where Are You?';
book.author = 'John Bevere';
book.pages = 200; 
book.readCount = 1; 
book.info = bookInfo; 

//add another book for the sake of getting the bookInfo() function 
const anotherBook = {
    book: 'The Alchemist',
    author: 'Paulo Coelho', 
    pages: 208, 
    readCount = 1, 
    info = bookInfo 
}

console.log(book.info()); 
console.log(anotherBook.info)



// Exercise 3 Section
let sentence = 'The quick brown fox jumps over the lazy dog'; 
let words = sentence.split(' '); 
let result = [];

for (let i = 0; i < words.length; i++) {
    let letters = words[i].split('');  
    let lettersReverse = letters.reverse();
    let lettersJoin = lettersReverse.join('');
    // console.log(lettersJoin);
    result.push(lettersJoin); 
    console.log(result.join(' ')); 
}

const finalSentence = result.join(' '); 
console.log(finalSentence); 




// Exercise 4 Section
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
