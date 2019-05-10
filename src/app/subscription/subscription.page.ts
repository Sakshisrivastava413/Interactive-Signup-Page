import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {

  cardInfo = [
    {
      duration: "1 Month",
      price: 499
    },
    {
      duration: "3 Month",
      price: 999
    },
    {
      duration: "6 Month",
      price: 1999
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
