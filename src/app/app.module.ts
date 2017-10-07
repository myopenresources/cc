import { NgModule }      from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule }    from '@angular/http';



//app
import { AppComponent }    from './app.component';
import { AppService }   from './app.service';
import { PageNotFoundComponent } from './error-page/page-not-found.component';


//toast
import {ToastService} from './shared/toast/toast.service';
import {ToastBoxComponent} from './shared/toast/toast-box.component';
import {ToastComponent} from './shared/toast/toast.component';

//http
import { HttpService }   from './shared/http/http.service';

//storage
import { LocalStorageService } from './shared/storage/local-storage.service';
import { SessionStorageService } from './shared/storage/session-storage.service';

//spin
import { SpinComponent} from './shared/spin/spin.component';
import { SpinService } from './shared/spin/spin.service';

//modules
import  { AppRoutingModule } from './app-routing.module';

//strategy
import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";







/**
 * app模块
 */
@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ToastBoxComponent,
    ToastComponent,
    SpinComponent,
    PageNotFoundComponent
  ],
  providers: [
    AppService,
    ToastService,
    HttpService,
    SpinService,
    LocalStorageService,
    SessionStorageService,
    SelectivePreloadingStrategy
  ],
  exports:[
    ToastBoxComponent,
    SpinComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}