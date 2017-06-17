import { Component, OnInit } from '@angular/core';

import { HierarchyViewData} from '../shared/hierarchy-view/hierarchy-view-model';



@Component({
  selector: 'hierarchy-view-demo',
  template: `
    <div class="container-fluid c-content-inner">
      <hierarchy-view [data]="viewData"></hierarchy-view>
    </div>
  `
})
export class HierarchyViewDemoComponent {

   viewData:HierarchyViewData={
     total:21,
     rows:[{
       id:'1',
       name:'中国',
       children:[
         {
           id:'2',
           name:'北京'
         },
         {
           id:'3',
           name:'天津'
         },
         {
           id:'4',
           name:'河北'
         },
         {
           id:'5',
           name:'福建',
           children:[
              {
                id:'5-1',
                name:'福州'
              }, 
              {
                id:'5-2',
                name:'厦门'
              }, 
              {
                id:'5-3',
                name:'三明'
              }, 
              {
                id:'5-4',
                name:'龙岩'
              }, 
              {
                id:'5-5',
                name:'泉州'
              }, 
              {
                id:'5-6',
                name:'莆田'
              }, 
              {
                id:'5-7',
                name:'漳州'
              }, 
              {
                id:'5-8',
                name:'南平'
              }, 
              {
                id:'5-9',
                name:'宁德'
              }
           ]
         },
         {
           id:'6',
           name:'上海'
         },
         {
           id:'7',
           name:'山东',
           children:[
              {
                id:'7-1',
                name:'青岛'
              },
              {
                id:'7-2',
                name:'莱芜'
              },
              {
                id:'7-3',
                name:'泰安'
              },
              {
                id:'7-4',
                name:'济南'
              },
              {
                id:'7-5',
                name:'枣庄'
              },
              {
                id:'7-6',
                name:'其它城市'
              }
           ]
         },
         {
           id:'8',
           name:'其它省份略'
         },
       ]
     }
   ]
  };

}