import { NgModule, Component, ElementRef, AfterViewInit, Input, Output, EventEmitter, ContentChild, OnChanges, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { HeaderTpl } from '../common-tpl/common-tpl';

declare var Quill: any;

export const EDITOR_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EditorComponent),
    multi: true
};

@Component({
    selector: 'c-editor',
    templateUrl: './editor.component.html',
    providers: [EDITOR_VALUE_ACCESSOR]
})
export class EditorComponent implements AfterViewInit, ControlValueAccessor {
    @Output() onTextChange: EventEmitter<any> = new EventEmitter();

    @Output() onSelectionChange: EventEmitter<any> = new EventEmitter();

    @ContentChild(HeaderTpl) toolbar;

    @Input() style: any;

    @Input() styleClass: string;

    @Input() placeholder: string;

    @Input() readonly: boolean;

    @Input() formats: string[];

    @Output() onInit: EventEmitter<any> = new EventEmitter();

    value: string;

    onModelChange: Function = () => { };

    onModelTouched: Function = () => { };

    quill: any;

    constructor(public el: ElementRef) { }

    ngAfterViewInit() {

        let editorElement = this.el.nativeElement.querySelector('div.c-editor-content');
        let toolbarElement = this.el.nativeElement.querySelector('div.c-editor-toolbar');

        this.quill = new Quill(editorElement, {
            modules: {
                toolbar: toolbarElement
            },
            placeholder: this.placeholder,
            readOnly: this.readonly,
            theme: 'snow',
            formats: this.formats
        });

        if (this.value) {
            this.quill.pasteHTML(this.value);
        }

        this.quill.on('text-change', (delta, oldContents, source) => {
            let html = editorElement.children[0].innerHTML;
            let text = this.quill.getText();
            if (html == '<p><br></p>') {
                html = null;
            }

            this.onTextChange.emit({
                htmlValue: html,
                textValue: text,
                delta: delta,
                source: source
            });

            this.onModelChange(html);

            if (source === 'user') {
                this.onModelTouched();
            }
        });

        this.quill.on('selection-change', (range, oldRange, source) => {
            this.onSelectionChange.emit({
                range: range,
                oldRange: oldRange,
                source: source
            });
        });

        this.onInit.emit({
            editor: this.quill
        });
    }

    writeValue(value: any): void {
        this.value = value;

        if (this.quill) {
            if (value)
                this.quill.pasteHTML(value);
            else
                this.quill.setText('');
        }
    }

    registerOnChange(fn: Function): void {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: Function): void {
        this.onModelTouched = fn;
    }

    getQuill() {
        return this.quill;
    }
}