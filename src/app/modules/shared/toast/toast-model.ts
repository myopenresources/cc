/**
 * 类型
 */
export enum ToastType {
  SUCCESS, INFO, WARNING, DANGER
}


/**
 * 配置
 */
export class ToastConfig {
  private toastType: ToastType;
  private text: string;
  private textStrong: string;
  private autoDismissTime: number;
  private dismissable: boolean;


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

