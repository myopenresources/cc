import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent }   from './home.component';



@NgModule({
  imports:      [
     CommonModule, 
     FormsModule,
     HttpModule,
     NgbModule,
  ],
  declarations: [
     HomeComponent
  ],
  exports:      [
    HomeComponent
  ],
  providers:    []
})
export class HomeModule { }
