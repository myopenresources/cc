import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {ToastConfig} from './toast-model';

/**
 * toast服务
 */
@Injectable()
export class ToastService {

  private toastSubject = new Subject<ToastConfig>();

  constructor() {}

  getToasts(): Observable<ToastConfig> {
    return this.toastSubject;
  }
 

  toast(toastConfig: ToastConfig) {
    this.toastSubject.next(toastConfig);
  }

}
