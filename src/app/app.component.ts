import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'toh-app',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./app.component.scss')],
  template: `
    <main>
      <h1>Tour of Heroes</h1>
    </main>
  `
})
export class AppComponent {}
