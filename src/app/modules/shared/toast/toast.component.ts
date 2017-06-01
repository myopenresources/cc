import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastConfig,ToastType} from './toast-model';

@Component({
  selector: 'toast',
  templateUrl : './toast.component.html',
 })
export class ToastComponent implements OnInit {

  @Input() config = new ToastConfig(ToastType.INFO, '', '');

  @Output() dismissed = new EventEmitter();

  constructor() {
    
  }

  ngOnInit() {
    //自动关闭
    if (this.config.isAutoDismissing()) {
      setTimeout(() => this.dismiss(), this.config.getAutoDismissTime());
    }
  }

  /**
   * 判断是成功
   */
  isSuccess() {
    return this.config.getToastType() === ToastType.SUCCESS;
  }

  /**
   * 判断是信息
   */
  isInfo() {
    return this.config.getToastType() === ToastType.INFO;
  }

  /**
   * 判断是警告
   */
  isWarning() {
    return this.config.getToastType() === ToastType.WARNING;
  }

  /**
   * 判断是错误
   */
  isDanger() {
    return this.config.getToastType() === ToastType.DANGER;
  }

  /**
   * 解除
   */
  dismiss() {
    this.dismissed.emit();
  }

  /**
   * 是否启用
   */
  isDismissEnabled() {
    return this.config.isDismissable();
  }


}
