import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slider-puzzle';

  getTheResult(result) {
    console.log('result================', result);
  }
}
