import { Component }    from '@angular/core';

/**
 * app组件
 */
@Component({
  selector: 'c-root',
  template:`
     <router-outlet></router-outlet>
     <c-toast-box toastAnimation="fancy"></c-toast-box>
  `
})
export class AppComponent {
      

}

