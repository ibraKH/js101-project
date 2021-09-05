// how much do you need for the book store from rows and columns 
let rows = 6;
let columns = 5;


let bookStore = [];
let bookCount = 0;


// store the new book row in array and then we can store it in the bookstore
let first = [1, "Start with why", "Simon Sinek", 80.0, 13];
let secend = [2, "But how do it know", "J. Clark Scott", 59.9, 22];

// create an empty 2d book store 
const createBookStore = () => {
    for(let i = 0; i < rows; i++){
        bookStore[i] = [];
        for(let j = 0; j < columns; j++){
            bookStore[i][j] = "empty spot";
        }
    }
}


// to add book to the book store 
const addBook = (line) => {
    for(let i = 0; i < line.length; i++){
        bookStore[bookCount][i] = line[i];
    }
    bookCount++;
    return bookStore;
}

// only create bookstore once 
if(bookCount === 0){
    createBookStore();
}

// add the two rows
addBook(first)
addBook(secend)

// to search for book in a book store
let find = "J. Clark Scott"; // You can put the book id or the book title or the author
const search = (tag) => {
    for(let i = 0; i < bookStore.length; i++){
        for(let j = 0; j < bookStore[i].length; j++){
            if(tag === bookStore[i][j]){
                return bookStore[i];
            }
        }
    }
    return "CANNOT find what you looking for!!"
}
console.log(search(find));


// to buy a book from the book store
let findForBuy = 2; // You can put the book id or the book title or the author
let howManyBook = 2; 
let money = 1500; // how many money do the buyer have
const buyBook = (book, quantity, account) => {
    for(let i = 0; i < bookStore.length; i++){
        for(let j = 0; j < bookStore[i].length; j++){
            if(book === bookStore[i][j]){
               if(bookStore[i][4] === 0){
                   return "THE BOOK ALREADY SOLD"
               }else if(account < quantity * bookStore[i][3]){
                   return `THE TOTAL IS ${quantity * bookStore[i][3]} AND YOU HAVE ${account}`
               }else if(quantity > bookStore[i][4]){
                   return `YOU ORDER ${quantity} AND THE LEFT IS ${bookStore[i][4]}`
               }else{
                   bookStore[i][4] = bookStore[i][4] - quantity;
                   return `
                // THE RECEIPT : 
                The title of the book : '${bookStore[i][1]}' 
                And the quantity left is : ${bookStore[i][4]} 
                And you have ${account - quantity * bookStore[i][3]}$ left
                //`;
               }
            }
        }
    }
}
console.log(buyBook(findForBuy, howManyBook, money));



