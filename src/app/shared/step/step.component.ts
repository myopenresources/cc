import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { StepData,StepType,StepObj } from './step-model'

@Component({
  selector: 'c-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  @Input()
  actionable: boolean = false;

  @Input()
  data: StepData;

  @Input()
  stepType: string=StepType.PRIMARY;

  @Input()
  itemWidth:string='250px';

  @Output()
  onClick = new EventEmitter<StepObj>();

  @Output()
  onNext = new EventEmitter<number>();
  
  @Output()
  onPrevious = new EventEmitter<number>();

  stepItemCls:string;
  currentIndex:number=0;
 

  constructor() { }

  ngOnInit() {
    this.stepItemCls='c-step-item-'+this.stepType;
    this.currentIndex=this.data.currentIndex;
  }

  stepClick(i:number,item:StepObj):void{
    if(this.actionable){
        if(i<=this.currentIndex+1){
          this.data.currentIndex=i;
          this.onClick.emit(item);
        }
    }
  }

  public previous():void{
    if(this.actionable){
      if(this.data.currentIndex>1){
        this.data.currentIndex--;
        this.onPrevious.emit(this.data.currentIndex);
      }
    }
  }

  public next():void{
    if(this.actionable){
      if(this.data.currentIndex<this.currentIndex+1 && this.data.currentIndex<this.data.rows.length){
        this.data.currentIndex++;
        this.onNext.emit(this.data.currentIndex);
      }
    }
  }

  setCurrentIndex(index:number):void{
    if(index>0 && index<=this.data.rows.length){
      console.info(index);
      this.data.currentIndex=index;
      this.currentIndex=index;
    }
  }

}
