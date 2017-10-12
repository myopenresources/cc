import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { SwitchTheme } from './switch-model';

const C_SWITCH_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SwitchComponent),
    multi: true
};

@Component({
    selector: 'c-switch',
    template: `
          <span class="c-switch"  
          [class.checked]="checked" 
          [class.disabled]="disabled" 
          [ngClass]="theme"
           (click)="toggle()" >
            <small></small>
            <span class="c-switch-text" > 
                <span class="on"  [hidden]="!onLabel">{{onLabel}}</span>
                <span class="off" [hidden]="!offLabel">{{offLabel}}</span>
            </span>
          </span>
    `,
    styleUrls:['./switch.component.scss'],
    providers: [C_SWITCH_CONTROL_VALUE_ACCESSOR]
})
export class SwitchComponent implements ControlValueAccessor {


    @Input()
    checked: boolean = false;

    @Input()
    disabled: boolean = false;

    @Input()
    onLabel: string = '';

    @Input()
    offLabel: string = '';

    @Input()
    theme: string=SwitchTheme.THTME_PRIMARY;

    @Output() onChange = new EventEmitter<boolean>();


    toggle() {
        if (!this.disabled) {
            this.checked = !this.checked;
            this.onChange.emit(this.checked);
            this.onChangeCallback(this.checked);
            this.onTouchedCallback(this.checked);
        }else{
             this.checked=false; 
        }
    }


    //From ControlValueAccessor interface
    writeValue(ck: any): void {
        if (ck !== this.checked && !this.disabled) {
            this.checked = !!ck;
        }else{
            this.checked=false; 
        }
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    private onTouchedCallback = (v: any) => {
    };
    private onChangeCallback = (v: any) => {
    };

}