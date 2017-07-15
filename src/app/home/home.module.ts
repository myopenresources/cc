import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent }   from './home.component';
import { homeRoutes  } from './home.routes';


@NgModule({
  imports:      [
     CommonModule, 
     FormsModule,
     HttpModule,
     NgbModule,
     homeRoutes
  ],
  declarations: [
     HomeComponent
  ],
  exports:      [
  ],
  providers:    []
})
export class HomeModule { }
