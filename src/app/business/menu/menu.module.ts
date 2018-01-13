import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuComponent } from './menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MenuRoutingModule
  ],
  declarations: [
    MenuAddComponent,
    MenuListComponent, 
    MenuComponent
  ]
})
export class MenuModule { }
