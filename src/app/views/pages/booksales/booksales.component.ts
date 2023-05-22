import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalesModel } from 'src/app/Models/SalesModel';
import { WebAPIService } from 'src/app/services/web-api.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-booksales',
  templateUrl: './booksales.component.html',
  styleUrls: ['./booksales.component.scss']
})
export class BooksalesComponent implements OnInit {

  allSales: Array<SalesModel>;
  searchText = "";
  pagecount: any;

  constructor(private route: ActivatedRoute, private webapi: WebAPIService) {
    let getMyBooksSalesCall = this.webapi.getAllSalesForAuthor();
    getMyBooksSalesCall.subscribe((data: any) => {
      this.allSales = data.result;
      this.pagecount = Array(Math.ceil(this.allSales.length / 10)).fill(0).map((x, i) => i);
      this.pagination(1);
    });

  }

  ngOnInit(): void {
  }

  Search() {
    if (this.searchText !== "") {
      let searchValue = this.searchText.toLocaleLowerCase();

      this.allSales = this.allSales.filter((data: any) => {
        return (data.status.toLocaleLowerCase().match(searchValue) || data.title.toLocaleLowerCase().match(searchValue) ||
          data.isbn.toLocaleLowerCase().match(searchValue) || data.orderId.toLocaleLowerCase().match(searchValue) ||
          formatDate(data.date, 'dd/MMM/yyyy', 'en-US').toLocaleLowerCase().match(searchValue))
      });
    }
    else {
      let getMyBooksSalesCall = this.webapi.getAllSalesForAuthor();
      getMyBooksSalesCall.subscribe((data: any) => {
        this.allSales = data.result;
      });
    }
  }

  pagination(pagenumber: any) {
    let getMyBooksSalesCall = this.webapi.getAllSalesForAuthor();
      getMyBooksSalesCall.subscribe((data: any) => {
        this.allSales = data.result;
        this.allSales = this.allSales.slice((pagenumber*10)-10,(pagenumber*10));
      });
  }
}
