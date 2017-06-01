import { Component }    from '@angular/core';


@Component({
  selector: 'app-root',
  template:`
     <router-outlet></router-outlet>
     <toast-box toastAnimation="fancy"></toast-box>
  `
})
export class AppComponent {
      

}

