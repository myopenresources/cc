import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

/**
 * 旋转服务
 */
@Injectable()
export class SpinService {

  private spinSubject = new Subject<boolean>();

  constructor() {}

  getSpin(): Observable<boolean> {
    return this.spinSubject;
  }
 

  spin(showSpin: boolean) {
    this.spinSubject.next(showSpin);
  }

}
