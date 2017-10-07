import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import  { UserSharedModule }       from '../../business-shared/user/user-shared.module';

import { HomeComponent }   from './home.component';
import { HomeRoutingModule  } from './home-routing.module';


@NgModule({
  imports:      [
     CommonModule, 
     FormsModule,
     NgbModule,
     HomeRoutingModule,
     UserSharedModule
  ],
  declarations: [
     HomeComponent
  ],
  exports:      [
  ],
  providers:    []
})
export class HomeModule { }
