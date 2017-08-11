import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-doctors></my-doctors>
  `
})
export class AppComponent {
  title = 'Doctor Who';
}
