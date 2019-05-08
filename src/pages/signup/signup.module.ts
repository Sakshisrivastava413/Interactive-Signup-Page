import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { InputBoxComponent } from '../../components/input-box/input-box';

@NgModule({
  declarations: [
    SignupPage,
    InputBoxComponent,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
})
export class SignupPageModule {}
