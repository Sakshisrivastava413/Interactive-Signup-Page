import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.router.navigate(['/subscription']);
  }
}
