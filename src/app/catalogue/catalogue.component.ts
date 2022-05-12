import {Component, OnInit} from '@angular/core';
import {Book} from "../book";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  public books: Book[] = [];
  title: string = "Books";

  constructor() {
  }

  ngOnInit() {
    this.getBooks();
  }

  public getBooks(): void {
    fetch("http://localhost:8080/books?page=0&size=10"
    ).then(res => res.json())
      .then(books => {
        console.log(books);
        this.books = [...books._embedded.books]
      });
  }

  public searchBooks(key: string): void {
    console.log(key);
    const results: Book[] = [];
    for (const book of this.books) {
      if (book.title.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || book.author.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || book.genre.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || book.isbn.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(book);
      }
    }
    this.books = results;
    if (results.length === 0 || !key) {
      this.getBooks();
    }
  }
}
