import { Component, OnInit } from '@angular/core';
import { RoyaltyTransactions } from 'src/app/Models/RoyaltyTransactions';
import { WebAPIService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-royalty-payments',
  templateUrl: './royalty-payments.component.html',
  styleUrls: ['./royalty-payments.component.scss']
})
export class RoyaltyPaymentsComponent implements OnInit {

  paidRoyaltyPercentage: number;
  pendingroyaltyPercentage: number;

  RoyaltyPaymentsTransactions: RoyaltyTransactions;
  constructor(private webapi: WebAPIService) {
    let getMyBooksCall = this.webapi.GetRoyaltyTransactionsForAuthor();
    getMyBooksCall.subscribe((data: any) => {
      this.RoyaltyPaymentsTransactions = data.result;

      this.paidRoyaltyPercentage = Math.ceil((this.RoyaltyPaymentsTransactions.totalRoyaltyPaid / this.RoyaltyPaymentsTransactions.totalRoyalty) * 100);
      this.pendingroyaltyPercentage = Math.floor((this.RoyaltyPaymentsTransactions.pendingRoyalty / this.RoyaltyPaymentsTransactions.totalRoyalty) * 100);
      console.log(this.paidRoyaltyPercentage);
      console.log(this.pendingroyaltyPercentage);
    })
  }

  ngOnInit(): void {
  }

}
