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
  genders = ['male', 'female'];

  @ViewChild('form') form: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';

    /* set value for entire form object
    * this is not best approach because when user click button all other data will be reset
    * */
    /*this.form.setValue(
      {
        userData: {
          username: suggestedName,
          email: ''
        },
        secret: 'pet',
        questionAnswer: '',
        gender: 'male'
      }
    );*/

    /* best approach for do it*/
    this.form.form.patchValue(
      {
        userData: {
          username: suggestedName
        }
      }
    );
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
