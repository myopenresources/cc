import { Component, OnInit,ViewChild } from '@angular/core';

import { AppService } from '../../app.service';
import { StepObj,StepData,StepType} from '../../shared/step/step-model';
import { StepComponent} from '../../shared/step/step.component';


@Component({
  selector: 'c-step-demo',
  templateUrl: './step-demo.component.html'
})
export class StepDemoComponent {
  
  @ViewChild('step') step: StepComponent;

  stepData: StepData = {
    currentIndex: 2,
    rows: [{
      id: '1',
      title: '获取验证码'
    },
    {
      id: '2',
      title: '填写用户名及密码',
      data:{
        code:'121212',
        msg:'fdsfasfsaf'
      }
    },
    {
      id: '3',
      title: '完善资料'
    },
    {
      id: '4',
      title: '注册成功'
    }]
  }

  stepType:string=StepType.WARNING;
  stepType2:string=StepType.DANGER;
  stepType3:string=StepType.DARK;
  stepType4:string=StepType.INFO;
  stepType5:string=StepType.SECONDARY;
  stepType6:string=StepType.SUCCESS;
  stepType7:string=StepType.PRIMARY;

  actionable: boolean = true;

  itemWidth:string='300px';

  stepData2: StepData = {
    currentIndex: 1,
    rows: [{
      id: '1',
      title: '获取验证码'
    },
    {
      id: '2',
      title: '注册成功'
    }]
  }


  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("步骤条示例");
  }


  previous(){
     this.step.previous();
  }

  next(){
    this.step.next();
  }

  setIndex(){
    this.step.setCurrentIndex(4);
  }

  onClick(item){
    console.info(item);
  }

  onPrevious(index){
    console.info(index);
  }

  onNext(index){
    console.info(index);
  }

}

