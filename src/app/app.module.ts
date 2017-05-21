import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



//components
import { appRouting } from './app-routing.module';
import { AppComponent }    from './app.component';

//modules
import  { LoginModule }      from './modules/login/login.module';
import  { MainModule }      from './modules/main/main.module';



@NgModule({
  imports: [
    BrowserModule,
    appRouting,
    NgbModule.forRoot(),
    MainModule,
    LoginModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
