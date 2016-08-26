import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";

import { AppComponent }   from './app.component';
import { Ng2CollapsableModule } from 'ng2-collapsable';

@NgModule({
  imports: [BrowserModule, FormsModule, Ng2CollapsableModule],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

