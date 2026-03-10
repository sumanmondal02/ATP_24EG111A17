/*Objective : Create a Book class and use it to manage a collection of books in a library.
Requirements:
  Create a Book class with the following:
  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)

  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise

  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.

  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books*/

class Book{
    //properties
    title
    author
    pages
    isAvailable
    //constructor
    constructor(title,author,pages,isAvailable){
        this.author=author
        this.title=title
        this.pages=pages
        this.isAvailable=true
    }
    borrow(isAvailable){
        if(this.isAvailable){
            this.isAvailable=false
            console.log("Book Borrowed")
        }else{
            console.log("Book not Available")
        }
    }
    returnBook(isAvailable){
        this.isAvailable=true
        console.log("Book Returned")
    }
    getInfo(){
        console.log(`The ${this.title} by ${this.author}( ${this.pages}, pages)`)
    }
    isLongBook(){
        if(this.pages>300){
            return true
        }return false
    }
}

let b1=new Book("Harry Potter", "J.K Rowling", 524)
let b2=new Book("1984", "George Orwell", 328)
let b3=new Book("The Hobbit", "J.R.R. Tolkien", 310)
let b4=new Book("To Kill a Mockingbird", "Harper Lee", 281)
let b5=new Book("The Great Gatsby", "F. Scott Fitzgerald", 180)

const books=[b1,b2,b3,b4,b5]
//Display Info all books
for(let i=0; i<books.length; i++){
    books[i].getInfo()
}

//Borrow two books and show their availability status
b2.borrow()
b5.borrow()
console.log("B2 Available Status:", b2.isAvailable)
console.log("B5 Available Status:", b5.isAvailable)

//Return one book and show updated status
b2.returnBook()
console.log("B2 Availability Status:", b2.isAvailable)

//Count Books with more than 300 pages
let longBooksCount=0
for(let i=0; i<books.length; i++){
    if(books[i].isLongBook()){
        longBooksCount++
    }
}
console.log("Number of Long Books:", longBooksCount)

//List all available books
console.log("Available Books:")
for(let i=0; i<books.length; i++){
    if(books[i].isAvailable){
        console.log(books[i].title)
    }
}