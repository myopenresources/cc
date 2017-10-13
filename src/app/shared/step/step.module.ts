import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from './step.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StepComponent
  ],
  exports:[
    StepComponent
 ]
})
export class StepModule { }
