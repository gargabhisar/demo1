import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoyaltyComponent } from './royalty.component';
import { RoyaltyPaymentsComponent } from './royalty-payments/royalty-payments.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: RoyaltyComponent,
    children: [
      {
        path: '',
        redirectTo: 'royaltypayments',
        pathMatch: 'full',
      },
      {
        path: 'royaltypayments',
        component: RoyaltyPaymentsComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    RoyaltyComponent,
    RoyaltyPaymentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule
  ]
})
export class RoyaltyModule { }
