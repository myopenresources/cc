import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';

@Component({
  selector: 'c-timeline-demo',
  template: `
    <div class="c-content-inner">
       <div class="row">
          <div  class="col-md-12">
              <p class="c-line-title">示例</p>
                <section class="c-timeline"> 
                      <div class="c-timeline-block"> 
                          <div class="c-timeline-point"> 
                          </div> 
                          <div class="c-timeline-content"> 
                          <p class="c-title"> CC admin </p> 
                          <p class="c-text"> 一个基于angular4.1.3+ng-bootstrap1.0.0-alpha.25+bootstrap4.0.0-alpha.6+scss的后台管理系统界面。</p> 
                          <button type="button" class="btn btn-primary btn-sm" style="float: right;"> <i class="fa fa-search" aria-hidden="true"></i> 查看</button> 
                          <span class="c-date">2017-6-25</span> 
                          </div> 
                      </div> 
                      <div class="c-timeline-block"> 
                          <div class="c-timeline-point"> 
                          </div> 
                          <div class="c-timeline-content"> 
                          <p class="c-title">SASS用法指南</p> 
                          <p class="c-text">SASS是一种CSS的开发工具，提供了许多便利的写法，大大节省了设计者的时间，使得CSS的开发，变得简单和可维护。本文总结了SASS的主要用法。我的目标是，有了这篇文章，日常的一般使用就不需要去看官方文档了。</p> 
                          <button type="button" class="btn btn-primary btn-sm" style="float: right;"> <i class="fa fa-search" aria-hidden="true"></i> 查看</button> 
                          <span class="c-date">2017-6-26</span> 
                          </div> 
                      </div> 
                      <div class="c-timeline-block"> 
                          <div class="c-timeline-point-active"> 
                          </div> 
                          <div class="c-timeline-content"> 
                          <p class="c-title">关于AI实现自我编程，程序员或将失业</p> 
                          <p class="c-text">这种程序叫做DeepCoder，由剑桥大学和微软公司的研究人员所研发。对于不会写代码的人来说，DeepCoder简直就是福音。 因为这个程序解决了编程的基础问题，不需要任何代码知识，人们就可以编写出一些简单的程序。 作为一个局外人，麻省理工学院的Armando Solar-Lezama评论道:“转眼之间，编程的工作效率就可以如此之高，很多以前看来难以建立的模型，现在居然都触手可及。</p> 
                          <button type="button" class="btn btn-primary btn-sm" style="float: right;"> <i class="fa fa-search" aria-hidden="true"></i> 查看</button> 
                          <span class="c-date">2017-6-27</span> 
                          </div> 
                      </div> 
                      <div class="c-timeline-block"> 
                          <div class="c-timeline-point"> 
                          </div> 
                          <div class="c-timeline-content"> 
                          <p class="c-title"> Bootstrap </p> 
                          <p class="c-text"> Bootstrap is the most popular HTML, CSS, and JS framework in the world for building responsive, mobile-first projects on the web.</p> 
                          <button type="button" class="btn btn-primary btn-sm" style="float: right;"> <i class="fa fa-search" aria-hidden="true"></i> 查看</button> 
                          <span class="c-date">2017-6-25</span> 
                          </div> 
                      </div> 
                      <div class="c-timeline-block"> 
                          <div class="c-timeline-point"> 
                          </div> 
                          <div class="c-timeline-content"> 
                          <p class="c-title">A quick look at Angular basics </p> 
                          <p class="c-text"> Angular applications are made up of components. A component is the combination of an HTML template and a component class that controls a portion of the screen.</p> 
                          <button type="button" class="btn btn-primary btn-sm" style="float: right;"> <i class="fa fa-search" aria-hidden="true"></i> 查看</button> 
                          <span class="c-date">2017-6-25</span> 
                          </div> 
                      </div> 
                  </section>
          </div>
      </div>
   </div>
  `
})
export class TimelineDemoComponent {

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("时间轴样式");
  }

}
