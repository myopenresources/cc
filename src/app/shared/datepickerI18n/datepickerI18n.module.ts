import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
 
import {DatepickerI18n,DatepickerI18nType} from './datepickerI18n';


/**
 *  日期选择il8n模块
 */
@NgModule({
  imports:      [
     CommonModule
  ],
  providers:    [ DatepickerI18n,DatepickerI18nType] 
})
export class DatepickerI18nModule { }