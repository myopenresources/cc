/**
 * 类型
 */
export enum ToastType {
  SUCCESS, INFO, WARNING, ERROR
}


/**
 * 配置
 */
export class ToastConfig {
   toastType: ToastType;
   text: string;
   textStrong: string;
   autoDismissTime: number;
   dismissable: boolean;


  constructor(toastType: ToastType, textStrong: string = '', text: string = '', autoDismissTime = 0, dismissable = true) {
    this.toastType = toastType;
    this.text = text;
    this.textStrong = textStrong;
    this.autoDismissTime = autoDismissTime;
    this.dismissable = dismissable;
  }

  getToastType(): ToastType {
    return this.toastType;
  }

  getText(): string {
    return this.text;
  }

  getTextStrong(): string {
    return this.textStrong;
  }

  getAutoDismissTime(): number {
    return this.autoDismissTime;
  }

  getDismissable(): boolean {
    return this.dismissable;
  }


  isDismissable() {
    return this.autoDismissTime === 0 || this.dismissable;
  }

  isAutoDismissing() {
    return this.autoDismissTime > 0;
  }
}

