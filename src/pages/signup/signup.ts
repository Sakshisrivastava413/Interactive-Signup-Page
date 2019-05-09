import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
