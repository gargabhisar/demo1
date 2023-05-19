import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BooksModel } from 'src/app/Models/BooksModel';
import { WebAPIService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  BookId: any;
  Book: BooksModel;
  constructor(private route: ActivatedRoute, private webapi: WebAPIService, private sanitizer: DomSanitizer) { 
    this.route.params.subscribe(params => {
      this.BookId = params.id;
    });

    let getMyBooksCall = this.webapi.getBookDetails(this.BookId);
    getMyBooksCall.subscribe((data: any) => {
      this.Book = data.result;
      console.log(this.Book);
    })
  }

  ngOnInit(): void {
  }

  getImage(img: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
  }
}
