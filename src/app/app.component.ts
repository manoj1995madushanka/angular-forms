import {Component, ElementRef} from '@angular/core';

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
  onSubmit(formElementRef: HTMLFormElement) {
    console.log('user clicked submit.');
    console.log(formElementRef);
  }
}
