import {Component,Input,Output,EventEmitter,OnInit  } from '@angular/core';

@Component({
  selector: 'c-simple-mind',
  templateUrl: './simple-mind.component.html',
  styleUrls: ['./simple-mind.component.scss']
})
export class SimpleMindComponent implements OnInit {
  @Input()
  data: any;

  constructor() { }

  ngOnInit() {
  }

  addNode(event,node:any){
    event.stopPropagation();
    console.info(node);
  }

  delNode(event,node:any){
    event.stopPropagation();
    console.info(node);
  }

  viewNode(node:any){
     console.info('view')
  }
}
