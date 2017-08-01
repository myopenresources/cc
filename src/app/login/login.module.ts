import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent }   from './login.component';



@NgModule({
  imports:      [
     CommonModule, 
     FormsModule,
     NgbModule
  ],
  declarations: [
     LoginComponent
  ],
  exports:      [
    LoginComponent
  ],
  providers:    []
})
export class LoginModule { }
