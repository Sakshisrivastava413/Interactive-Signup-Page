import { Component, Input } from '@angular/core';

/**
 * Generated class for the InputBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'input-box',
  templateUrl: 'input-box.html'
})
export class InputBoxComponent {

  @Input() inputVal: String

  constructor() {
    console.log('Hello InputBoxComponent Component');
  }

}
