import { Injectable } from '@angular/core';
import {NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';

//i18n值
const DATEPICKER_I18N_VALUES = {
  en: {
    weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  zh_CN: {
    weekdays: [' 周一', '周二', '周三', '周四', '周五', '周六', '周天'],
    months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  }
};

/**
 * 类型
 */
@Injectable()
export class DatepickerI18nType {
  public static ZH_CN="zh_CN";

  language = DatepickerI18nType.ZH_CN;
}

/**
 * 日期选择il8n
 */
@Injectable()
export class DatepickerI18n extends NgbDatepickerI18n {

  constructor(private _i18n: DatepickerI18nType) {
    super();
  }

  getWeekdayShortName(weekday: number): string {
    return DATEPICKER_I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return DATEPICKER_I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }
}

