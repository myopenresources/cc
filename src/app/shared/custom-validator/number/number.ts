import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';


export const number: ValidatorFn = function (ctrl: AbstractControl): { [key: string]: boolean } {
    if (Validators.required(ctrl) && null != Validators.required(ctrl)) {
        return null;
    } else {
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(ctrl.value) ? null : { 'number': true };
    }
};
