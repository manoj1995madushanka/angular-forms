import {Component, ElementRef} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  /**
   * trigger when user click submit button
   * */
  onSubmit(form: NgForm) {
    console.log('user clicked submit.');
    console.log(form);
  }
}
