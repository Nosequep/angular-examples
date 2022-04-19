import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputOutputComponentComponent } from './input-output-component/input-output-component.component';
import { ParentComponentComponent } from './input-output-component/parent-component/parent-component.component';
import { ChildComponentComponent } from './input-output-component/child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InputOutputComponentComponent,
    ParentComponentComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
