import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  inputFields = [
    {
      val: 'First Name',
      type: 'text'
    },
    {
      val: 'Last Name',
      type: 'text'
    },
    {
      val: 'Email',
      type: 'email'
    },
    {
      val: 'Password',
      type: 'password'
    },
    {
      val: 'Confirm Password',
      type: 'password'
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
