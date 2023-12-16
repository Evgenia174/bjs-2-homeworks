class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }
  
    ///////////// выдает ошибку Expected 135 to equal 100////////////
    set state(newValue) {
        this._state = newValue;
        if (newValue === 0) {
          return;
        }
        if (newValue >= 0 && newValue <= 100) {
          newValue = newValue;
          } else if (newValue < 0) {
          newValue = 0;
          } else if (newValue > 100) {
            return 100;
          }
        }
        get state() {
        return this._state;
        }
  }
  //////////////////////////////////////////////////////
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }



  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
    
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      for (let book of this.books) {
        if (book[type] === value) {
          return book;
        } else {
          return null;
        }
      }       
    }

    giveBookByName(bookName) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].name === bookName) {
        this.books.splice(i, 1);
        return this.books;
        } else {
          return null;
        }
      }
    }
  }      





  