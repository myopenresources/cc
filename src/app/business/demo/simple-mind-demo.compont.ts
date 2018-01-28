import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { SpinService } from '../../shared/spin/spin.service';

@Component({
    selector: 'c-simple-mind-demo',
    template: `
    <div class="c-content-inner">
    <div class="row c-mt15">
        <div class="col-md-12">
            <p class="c-line-title">简单导图使用</p>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
         <c-simple-mind [data]="data"></c-simple-mind>
       </div>
    </div>
  `
})
export class SimpleMindDemoComponent implements OnInit {
    data: any = [
        {
          id:'1',
          nodeName:'java平台版本',
          childern:[
            {
                id:'2',
                nodeName:'Java SE',
                childern:[
                    {
                        id:'2',
                        nodeName:'Java SE'
                    }
                ]
            },
            {
                id:'2',
                nodeName:'Java EE',
                childern:[
                    {
                        id:'2',
                        nodeName:'Java SEJava SEJava SEJava SEJava SEJava SEJava SEJava SEJava SEJava SEJava SEJava SEJava SEJava SEJava SEJava SEJava SE'
                    },
                    {
                        id:'2',
                        nodeName:'Java SE'
                    }
                ]
            },
            {
                id:'3',
                nodeName:'Java ME',
                childern:[
                    {
                        id:'2',
                        nodeName:'Java SE'
                    },
                    {
                        id:'2',
                        nodeName:'Java SE'
                    },
                    {
                        id:'2',
                        nodeName:'Java SE'
                    },
                    {
                        id:'2',
                        nodeName:'Java SE'
                    },
                    {
                        id:'2',
                        nodeName:'Java SE'
                    }
                ]
            }
          ]
        }
    ]


    constructor(private appService: AppService,private spinService:SpinService) {
        
        this.appService.titleEventEmitter.emit("简单导图");
      }

    ngOnInit() {
    }



}
