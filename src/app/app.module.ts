import { NgModule }      from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



//app
import { appRouting } from './app-routing.module';
import { AppComponent }    from './app.component';
import { AppService }   from './app.service';


//toast
import {ToastService} from './shared/toast/toast.service';
import {ToastBoxComponent} from './shared/toast/toast-box.component';
import {ToastComponent} from './shared/toast/toast.component';

//http
import { HttpService }   from './shared/http/http.service';


//spin
import { SpinComponent} from './shared/spin/spin.component';
import { SpinService } from './shared/spin/spin.service';


//modules
import  { LoginModule }      from './login/login.module';
import  { MainModule }       from './main/main.module';
import  { SharedModule }       from './shared/shared.module';






/**
 * app模块
 */
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRouting,
    NgbModule.forRoot(),
    MainModule,
    LoginModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    ToastBoxComponent,
    ToastComponent,
    SpinComponent
  ],
  providers: [AppService,ToastService,HttpService,SpinService],
  exports:[ToastBoxComponent,SpinComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
