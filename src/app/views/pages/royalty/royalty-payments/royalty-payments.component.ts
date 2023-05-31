import { Component, OnInit } from '@angular/core';
import { RoyaltyTransactions } from 'src/app/Models/RoyaltyTransactions';
import { WebAPIService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-royalty-payments',
  templateUrl: './royalty-payments.component.html',
  styleUrls: ['./royalty-payments.component.scss']
})
export class RoyaltyPaymentsComponent implements OnInit {

  RoyaltyPaymentsTransactions: RoyaltyTransactions;
  constructor(private webapi: WebAPIService) {
    let getMyBooksCall = this.webapi.GetRoyaltyTransactionsForAuthor();
    getMyBooksCall.subscribe((data: any) => {
      this.RoyaltyPaymentsTransactions = data.result;
    })
  }

  ngOnInit(): void {
  }

}
