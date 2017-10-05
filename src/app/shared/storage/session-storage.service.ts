import { Injectable } from '@angular/core';

/**
 * session存储服务
 */
@Injectable()
export class SessionStorageService {

    public sessionStorage: any;

    constructor() {
        if (!sessionStorage) {
            throw new Error('浏览器不支持本地存储！');
        }else{
            this.sessionStorage = window.sessionStorage;
        }
    }

    public set(key: string, value: string): void {
        this.sessionStorage[key] = value;
    }

    public get(key: string): string {
        return this.sessionStorage[key] || false;
    }

    public setObject(key: string, value: any): void {
        this.sessionStorage[key] = JSON.stringify(value);
    }

    public getObject(key: string): any {
        return JSON.parse(this.sessionStorage[key] || '{}');
    }

    public remove(key: string): any {
        this.sessionStorage.removeItem(key);
    }
}