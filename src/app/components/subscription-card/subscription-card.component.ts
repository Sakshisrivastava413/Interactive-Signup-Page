import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subscription-card',
  templateUrl: './subscription-card.component.html',
  styleUrls: ['./subscription-card.component.scss'],
})
export class SubscriptionCardComponent implements OnInit {

  @Input() duration: String;
  @Input() price: Number;
  
  constructor() { }

  ngOnInit() {}

}
