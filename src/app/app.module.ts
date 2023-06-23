import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppErrorAlert } from './erroralert/erroralert.component';
import { AppSuccessAlert } from './successalert/successalert.component';

@NgModule({
  declarations: [
    AppComponent,
    AppErrorAlert,
    AppSuccessAlert
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
