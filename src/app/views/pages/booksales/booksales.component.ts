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

  originalData: Array<SalesModel>;
  allSales: Array<SalesModel>;
  searchText = "";
  pagecount: any;

  constructor(private route: ActivatedRoute, private webapi: WebAPIService) {
    let getMyBooksSalesCall = this.webapi.getAllSalesForAuthor();
    getMyBooksSalesCall.subscribe((data: any) => {
      this.originalData = data.result;
      this.allSales = this.originalData;
      this.pagecount = Array(Math.ceil(this.allSales.length / 10)).fill(0).map((x, i) => i);
      //this.pagination(1);
      this.pagecount = Array(Math.ceil(this.allSales.length / 10)).fill(0).map((x, i) => i);     
      this.allSales = this.allSales.slice((1 * 10) - 10, (1 * 10));
    });

  }

  ngOnInit(): void {
  }

  Search(pagenumber: any) {
    if (this.searchText !== "") {
      let searchValue = this.searchText.toLocaleLowerCase();

      this.allSales = this.originalData.filter((data: any) => {
        return (data.status.toLocaleLowerCase().match(searchValue) || data.title.toLocaleLowerCase().match(searchValue) ||
          data.isbn.toLocaleLowerCase().match(searchValue) || data.orderId.toLocaleLowerCase().match(searchValue) ||
          formatDate(data.date, 'dd/MMM/yyyy', 'en-US').toLocaleLowerCase().match(searchValue))
      });
      this.pagecount = Array(Math.ceil(this.allSales.length / 10)).fill(0).map((x, i) => i);     
      this.allSales = this.allSales.slice((pagenumber * 10) - 10, (pagenumber * 10));
    }
    else {
      this.allSales = this.originalData;
      this.pagecount = Array(Math.ceil(this.allSales.length / 10)).fill(0).map((x, i) => i);     
      this.allSales = this.allSales.slice((pagenumber * 10) - 10, (pagenumber * 10));
    }
  }

  ClearSearch(){
    this.searchText = "";
    this.Search(1);
  }
}
