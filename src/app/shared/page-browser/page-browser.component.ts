import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { PageBrowserConfig } from './page-browser-model'

/**
 * 页面浏览器
 */
@Component({
    selector: 'c-page-browser',
    templateUrl: './page-browser.component.html',
    styleUrls:['./page-browser.component.scss']
})

export class PageBrowserComponent implements OnInit {
    @Input() config: PageBrowserConfig;

    options: any = {
        title: '',
        secUrl: ''
    }

    constructor(private sanitizer: DomSanitizer) {

    }

    ngOnInit() {
        this.options.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.config.url);
        this.options.title = this.config.title;
    }

    reloadPage():void{
        let title = this.options.title;
        let url = this.options.secUrl;
        this.options.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
        setTimeout(() => {
            this.options.title = title;
            this.options.secUrl = url;
        }, 10)
        
    }
}