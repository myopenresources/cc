import { Component }    from '@angular/core';

/**
 * app组件
 */
@Component({
  selector: 'app-root',
  template:`
     <router-outlet></router-outlet>
     <toast-box toastAnimation="fancy"></toast-box>
  `
})
export class AppComponent {
      

}

