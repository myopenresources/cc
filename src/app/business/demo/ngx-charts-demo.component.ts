import { Component, OnInit } from '@angular/core';

import  { AppService }   from '../../app.service';

export var single = [
    {
        "name": "某国",
        "value": 8940000
    },
    {
        "name": "某某国",
        "value": 5000000
    },
    {
        "name": "某某某国",
        "value": 7200000
    }
];

export var multi = [
    {
        "name": "某国",
        "series": [
            {
                "name": "2010",
                "value": 7300000
            },
            {
                "name": "2011",
                "value": 8940000
            }
        ]
    },

    {
        "name": "某某国",
        "series": [
            {
                "name": "2010",
                "value": 7870000
            },
            {
                "name": "2011",
                "value": 8270000
            }
        ]
    },

    {
        "name": "某某某国",
        "series": [
            {
                "name": "2010",
                "value": 5000002
            },
            {
                "name": "2011",
                "value": 5800000
            }
        ]
    }
];



@Component({
    selector: 'c-ngx-charts-demo',
    template: `
     <div class="c-content-inner">
      <div class="row">
          <div  class="col-md-12">
              <p class="c-line-title">示例</p>
               <ngx-charts-bar-vertical
                    [view]="view"
                    [scheme]="colorScheme"
                    [results]="single"
                    [gradient]="gradient"
                    [xAxis]="showXAxis"
                    [yAxis]="showYAxis"
                    [legend]="showLegend"
                    [legendTitle]="legendTitle"
                    [showXAxisLabel]="showXAxisLabel"
                    [showYAxisLabel]="showYAxisLabel"
                    [xAxisLabel]="xAxisLabel"
                    [yAxisLabel]="yAxisLabel"
                    (select)="onSelect($event)">
                </ngx-charts-bar-vertical>
            </div>
        </div>
        <div class="row">
          <div  class="col-md-12">
           <div class="c-mt15">
              <p class="c-line-title">说明</p>
              第三方组件文档:https://swimlane.gitbooks.io/ngx-charts/content/
            </div>
           </div>
        </div>
    </div>
  `
})
export class NgxChartsDemoComponent {
    single: any[];
    multi: any[];

    view: any[] = [700, 400];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    legendTitle="图例";
    showXAxisLabel = true;
    xAxisLabel = '图家';
    showYAxisLabel = true;
    yAxisLabel = '人口';

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    constructor(private appService:AppService) {
        this.appService.titleEventEmitter.emit("图表");
        Object.assign(this, { single });

    }

    onSelect(event) {
        console.log(event);
    }




}

