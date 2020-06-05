import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { FormTitleComponent } from './form-title/form-title.component';
import { HelloComponent } from './hello.component';


@NgModule({
  declarations: [
    AppComponent,
    FormTitleComponent,
    HelloComponent
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
