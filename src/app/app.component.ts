import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defaultQuestion = 'pet';
  answer: '';

  @ViewChild('form') form: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  /**
   * trigger when user click submit button
   * */

  /*onSubmit(form: NgForm) {
    console.log('user clicked submit.');
    console.log(form);
  }*/

  /**
   * access ngForm using viewChild annotation
   * this is better approach because we can access form before user submit,
   * so we can add custom validation to form using this approach
   * */
  onSubmit() {
    console.log('user clicked submit.');
    console.log(this.form);
  }
}
