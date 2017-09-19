import { Injectable } from '@angular/core';

/**
 * local存储服务
 */
@Injectable()
export class LocalStorageService {

    public localStorage: any;

    constructor() {
        if (!localStorage) {
            throw new Error('浏览器不支持本地存储！');
        }else{
            this.localStorage = window.localStorage;
        }
    }

    public set(key: string, value: string): void {
        this.localStorage[key] = value;
    }

    public get(key: string): string {
        return this.localStorage[key] || false;
    }

    public setObject(key: string, value: any): void {
        this.localStorage[key] = JSON.stringify(value);
    }

    public getObject(key: string): any {
        return JSON.parse(this.localStorage[key] || '{}');
    }

    public remove(key: string): any {
        this.localStorage.removeItem(key);
    }
}