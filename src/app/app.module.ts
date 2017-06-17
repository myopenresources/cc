import { NgModule }      from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';






//components
import { appRouting } from './app-routing.module';
import { AppComponent }    from './app.component';
//toast
import {ToastService} from './modules/shared/toast/toast.service';
import {ToastBoxComponent} from './modules/shared/toast/toast-box.component';
import {ToastComponent} from './modules/shared/toast/toast.component';

//modules
import  { LoginModule }      from './modules/login/login.module';
import  { MainModule }       from './modules/main/main.module';
import  { SharedModule }       from './modules/shared/shared.module';






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
  ],
  providers: [ToastService],
  exports:[ToastBoxComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
