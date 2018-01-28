import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleMindItemComponent } from './simple-mind-item.component';
import { SimpleMindComponent } from './simple-mind.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SimpleMindItemComponent,
    SimpleMindComponent
  ],
  exports: [
    SimpleMindComponent
  ]
})
export class SimpleMindModule { }
