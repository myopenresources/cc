import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastConfig,ToastType} from './toast-model';

/**
 * toast组件
 */
@Component({
  selector: 'c-toast',
  templateUrl : './toast.component.html',
  styleUrls:['./toast.component.scss']
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
  isError() {
    return this.config.getToastType() === ToastType.ERROR;
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
