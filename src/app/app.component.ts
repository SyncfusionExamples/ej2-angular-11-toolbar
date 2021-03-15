import { Component } from '@angular/core';
import { ToolbarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  template: `
  <ejs-toolbar>
    <e-items>
       <e-item text='Cut'></e-item>
       <e-item text='Copy'></e-item>
       <e-item text='Paste'></e-item>
       <e-item type='Separator'></e-item>
       <e-item text='Bold'></e-item>
       <e-item text='Italic'></e-item>
       <e-item text='Underline'></e-item>
    </e-items>
  </ejs-toolbar>
  `
})
export class AppComponent {
  title = 'angular11-toolbar';
}
