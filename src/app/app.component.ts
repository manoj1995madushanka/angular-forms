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
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

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
    this.submitted = true;

    console.log('user clicked submit.');
    console.log(this.form);
    console.log(this.form.value.username);

    this.user.username = this.form.value.userData.username;
    this.user.email = this.form.value.userData.email;
    this.user.secretQuestion = this.form.value.secret;
    this.user.answer = this.form.value.questionAnswer; // will match to html template name attribute
    this.user.gender = this.form.value.gender;
  }
}
