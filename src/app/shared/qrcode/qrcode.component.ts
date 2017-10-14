import { Component, OnInit, Input, ElementRef, OnChanges,OnDestroy, SimpleChanges } from '@angular/core';

import QRious from 'qrious';

@Component({
  selector: 'c-qrcode',
  template: ``
})
export class QrcodeComponent implements OnChanges,OnDestroy{

  @Input()
  value: string = "";

  @Input()
  background: string = "white";

  @Input()
  foreground: string = "black";

  @Input()
  backgroundAlpha: number = 1.0;

  @Input()
  foregroundAlpha: number = 1.0;

  @Input()
  level: string = "L";

  @Input()
  mime: string = "image/png";

  @Input()
  padding: number = 0;

  @Input()
  size: number = 100;

  @Input()
  canvas: boolean = false;

  qr:QRious;

  constructor(private elementRef: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['background'] || changes['backgroundAlpha'] || changes['foreground'] || changes['foregroundAlpha'] ||
     changes['level'] || changes['mime'] || changes['padding'] || changes['size'] || changes['value'] || changes['canvas'] ){
      this.qrcodedBuild();
    }
  }

  qrcodedBuild(): void {
    let element: HTMLElement = this.elementRef.nativeElement;
    element.innerHTML = '';
    this.qr = new QRious({
      background: this.background,
      backgroundAlpha: this.backgroundAlpha,
      foreground: this.foreground,
      foregroundAlpha: this.foregroundAlpha,
      level: this.level,
      mime: this.mime,
      padding: this.padding,
      size: this.size,
      value: this.value
    });

    if (this.canvas) {
      element.appendChild(this.qr.canvas);
    } else {
      element.appendChild(this.qr.image);
    }
  }

  toDataURL():string{
    return this.qr.toDataURL();
  }


  ngOnDestroy() {
      this.qr=null;
  }

}
