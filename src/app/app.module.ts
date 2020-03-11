import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { FormTitleComponent } from './form-title/form-title.component';


@NgModule({
  declarations: [
    AppComponent,
    FormTitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
