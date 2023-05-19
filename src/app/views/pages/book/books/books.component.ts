import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BooksModel } from 'src/app/Models/BooksModel';
import { WebAPIService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  mybooks: Array<BooksModel>;
  constructor(private webapi: WebAPIService, private sanitizer: DomSanitizer) { 
    let getMyBooksCall = this.webapi.getMyBooks();
    getMyBooksCall.subscribe((data: any) => {
      this.mybooks = data.result;
    });
  }

  ngOnInit(): void {
  }

  getImage(img: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
  }
}
