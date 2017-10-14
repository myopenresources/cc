import { AbstractControl, ValidatorFn } from '@angular/forms';

export const equalTo = function (equalCtrl: AbstractControl): ValidatorFn {
    let subscribe: boolean = false;

    return function (ctrl: AbstractControl): { [key: string]: boolean } {
        if (!subscribe) {
            subscribe = true;
            equalCtrl.valueChanges.subscribe(() => {
                ctrl.updateValueAndValidity();
            });
        }
        return equalCtrl.value === ctrl.value ? null : { equalTo: true };
    };
};