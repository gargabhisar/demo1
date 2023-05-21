import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalesModel } from 'src/app/Models/SalesModel';
import { WebAPIService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-booksales',
  templateUrl: './booksales.component.html',
  styleUrls: ['./booksales.component.scss']
})
export class BooksalesComponent implements OnInit {

  allSales: Array<SalesModel>;
  constructor(private route: ActivatedRoute, private webapi: WebAPIService) {
    let getMyBooksSalesCall = this.webapi.getAllSalesForAuthor();
    getMyBooksSalesCall.subscribe((data: any) => {
      this.allSales = data.result;
      console.log(this.allSales);
    });
  }

  ngOnInit(): void {
  }

}
