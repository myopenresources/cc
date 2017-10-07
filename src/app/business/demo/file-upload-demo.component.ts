import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';

import { FileUploader } from 'ng2-file-upload';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
    selector: 'c-file-upload-demo',
    template: `
    <div class="c-content-inner">
       <div class="row">
          <div  class="col-md-12">
              <p class="c-line-title">示例</p>
 
                    <div class="navbar navbar-default">
                        <div class="navbar-header">
                            <a class="navbar-brand" href>Angular2 File Upload</a>
                        </div>
                    </div>
                
                    <div class="row">
                
                        <div class="col-md-3">
                
                            <h3>Select files</h3>
                
                            <div ng2FileDrop
                                [ngClass]="{'nv-file-over': hasBaseDropZoneOver}"
                                (fileOver)="fileOverBase($event)"
                                [uploader]="uploader"
                                class="well my-drop-zone">
                                Base drop zone
                            </div>
                
                            <div ng2FileDrop
                                [ngClass]="{'another-file-over-class': hasAnotherDropZoneOver}"
                                (fileOver)="fileOverAnother($event)"
                                [uploader]="uploader"
                                class="well my-drop-zone">
                                Another drop zone
                            </div>
                
                            Multiple
                            <input type="file" ng2FileSelect [uploader]="uploader" multiple  /><br/>
                
                            Single
                            <input type="file" ng2FileSelect [uploader]="uploader" />
                        </div>
                
                        <div class="col-md-9" style="margin-bottom: 40px">
                
                            <h3>Upload queue</h3>
                            <p>Queue length: {{ uploader?.queue?.length }}</p>
                
                            <table class="table">
                                <thead>
                                <tr>
                                    <th width="50%">Name</th>
                                    <th>Size</th>
                                    <th>Progress</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr *ngFor="let item of uploader.queue">
                                    <td><strong>{{ item?.file?.name }}</strong></td>
                                    <td *ngIf="uploader.isHTML5" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>
                                    <td *ngIf="uploader.isHTML5">
                                        <div class="progress" style="margin-bottom: 0;">
                                            <div class="progress-bar" role="progressbar" [ngStyle]="{ 'width': item.progress + '%' }"></div>
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        <span *ngIf="item.isSuccess"><i class="glyphicon glyphicon-ok"></i></span>
                                        <span *ngIf="item.isCancel"><i class="glyphicon glyphicon-ban-circle"></i></span>
                                        <span *ngIf="item.isError"><i class="glyphicon glyphicon-remove"></i></span>
                                    </td>
                                    <td nowrap>
                                        <button type="button" class="btn btn-success btn-xs"
                                                (click)="item.upload()" [disabled]="item.isReady || item.isUploading || item.isSuccess">
                                            <span class="glyphicon glyphicon-upload"></span> Upload
                                        </button>
                                        <button type="button" class="btn btn-warning btn-xs"
                                                (click)="item.cancel()" [disabled]="!item.isUploading">
                                            <span class="glyphicon glyphicon-ban-circle"></span> Cancel
                                        </button>
                                        <button type="button" class="btn btn-danger btn-xs"
                                                (click)="item.remove()">
                                            <span class="glyphicon glyphicon-trash"></span> Remove
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                
                            <div>
                                <div>
                                    Queue progress:
                                    <div class="progress" style="">
                                        <div class="progress-bar" role="progressbar" [ngStyle]="{ 'width': uploader.progress + '%' }"></div>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-success btn-s"
                                        (click)="uploader.uploadAll()" [disabled]="!uploader.getNotUploadedItems().length">
                                    <span class="glyphicon glyphicon-upload"></span> Upload all
                                </button>
                                <button type="button" class="btn btn-warning btn-s"
                                        (click)="uploader.cancelAll()" [disabled]="!uploader.isUploading">
                                    <span class="glyphicon glyphicon-ban-circle"></span> Cancel all
                                </button>
                                <button type="button" class="btn btn-danger btn-s"
                                        (click)="uploader.clearQueue()" [disabled]="!uploader.queue.length">
                                    <span class="glyphicon glyphicon-trash"></span> Remove all
                                </button>
                            </div>
                
                        </div>
                
                    </div>
                
             
              
          </div>
        </div>
        <div class="row">
          <div  class="col-md-12">
            <div class="c-mt15">
              <p class="c-line-title">说明</p>
               第三方组件文档:http://valor-software.com/ng2-file-upload/
             </div>
           </div>
        </div>
    </div>
  `,
    styles: [`
    .my-drop-zone { border: dotted 3px lightgray; }
    .nv-file-over { border: dotted 3px red; }
    .another-file-over-class { border: dotted 3px green; }
  `]
})
export class FileUploadDemoComponent {

    constructor(private appService: AppService) {
        this.appService.titleEventEmitter.emit("文件上传");
    }

    public uploader: FileUploader = new FileUploader({ url: URL });
    public hasBaseDropZoneOver: boolean = false;
    public hasAnotherDropZoneOver: boolean = false;

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
    }
}