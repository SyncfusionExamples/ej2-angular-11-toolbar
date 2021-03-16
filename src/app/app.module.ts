import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the ToolbarModule for the Toolbar component
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
