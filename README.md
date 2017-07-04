## CC admin 
 一个基于angular4.1.3+ng-bootstrap1.0.0-alpha.25+bootstrap4.0.0-alpha.6+scss的后台管理系统界面


## 界面展示
1. 登录界面
![image](https://github.com/332557712/cc/blob/master/src/assets/img/cc/cc-1.png)

2. 主页界面
![image](https://github.com/332557712/cc/blob/master/src/assets/img/cc/cc-2.png)

3. 头像更换
![image](https://github.com/332557712/cc/blob/master/src/assets/img/cc/cc-3.png)

4. 消息框
![image](https://github.com/332557712/cc/blob/master/src/assets/img/cc/cc-4.png)

5. 确认框
![image](https://github.com/332557712/cc/blob/master/src/assets/img/cc/cc-5.png)

6. 层次图
![image](https://github.com/332557712/cc/blob/master/src/assets/img/cc/cc-6.png)

7. 时间轴
![image](https://github.com/332557712/cc/blob/master/src/assets/img/cc/cc-7.png)

8. http分页
![image](https://github.com/332557712/cc/blob/master/src/assets/img/cc/cc-8.png)

9. 树与下拉树
![image](https://github.com/332557712/cc/blob/master/src/assets/img/cc/cc-9.png)

10. 更多略...


## 更新
1. 搭建环境，分别加入ng-bootstrap1.0.0-alpha.25、bootstrap4.1.3、font-awesome4.7.0、animate.css3.5.2等<br/>
   1.1) https://ng-bootstrap.github.io/#/home<br/>
   1.2) https://v4-alpha.getbootstrap.com/<br/>
   1.3) http://fontawesome.io/<br/>
   1.4) https://github.com/daneden/animate.css
2. 登录界面<br/>
   2.1) src/login/login.component.ts
3. 主页界面<br/>
   3.1) src/main/main.component.ts
4. 添加alert与confirm组件<br/>
   4.1) src/app/shared/modal/modal.service.ts
5. 添加toast组件<br/>
   5.1) src/app/shared/toast/toast.service.ts
6. 添加第三方ng-charts组件<br/>
   6.1) https://github.com/swimlane/ngx-charts
7. 添加第三方angular-2-dropdown-multiselect组件与angular2-select组件<br/>
   7.1) https://github.com/softsimon/angular-2-dropdown-multiselect<br/>
   7.2) https://github.com/basvandenberg/ng-select) 
8. 添加层次图组件<br/>
   8.1) src/app/shared/hierarchy-view/hierarchy-view.component.ts
9. 添加第三方ng2-img-cropper组件<br/>
   9.1) https://github.com/search?q=ng2-img-cropper&type=Code&utf8=%E2%9C%93
10. 添加头像更换功能<br/>
   10.1) src/main/avatar-cropper.component.ts
11. 添加http服务<br/>
   11.1) src/app/core/http.service.ts
12. 添加utils工具<br/>
   12.1) src/app/core/utils.ts
13. 添加pagination组件<br/>
   13.1) src/app/shared/pagination/pagination.component.ts
14. 添加http-pagination组件<br/>
   14.1) src/app/shared/pagination/http-pagination.component.ts
15. 添加spin组件<br/>
   15.1) src/app/shared/spin/spin.component.ts
16. 添加第三方angular2-ui-switch组件<br/>
   16.1) https://github.com/yuyang041060120/angular2-ui-switch
17. 添加时间轴样式<br/>
   17.1) assets/scss/base/_common.scss
18. 添加日期选择datepickerI18n配置<br/>
   18.1) src/app/shared/datepickerI18n/datepickerI18n.ts
19. 添加img-cropper-select指令<br/>
   19.1) src/app/shared/img-cropper-select/img-cropper-select.directive.ts
20. 添加tree组件<br/>
   20.1) src/app/shared/tree/tree.component.ts
21. 添加select-tree组件<br/>
   21.1) src/app/shared/tree/select-tree.component.ts
22. 添加jquery
23. 添加ztree组件<br/>
   21.1) src/app/shared/ztree/ztree.component.ts



## 规范
1. 为避免冲突，应用css使用c-为前缀
2. 为避免冲突，应用组件selector使用c-为前缀
3. 目录、文件名命名使用小写字母，多个单词使用-间隔
4. module结尾的为模块、component结尾的为组件、service结尾的为服务、directive结尾的为指令     
5. 所有模块放在app目录下、所有资源文件放在assets目录下，所有scss文件所模块区分，放在assets/scss/modules下


## 环境
1. 您需要安装nodeJS环境


## 安装
1. cd E:\project\cc                            <---- 进入到项目所在的目录
2. npm install                                 <---- 安装，如果下载比较慢，可使用淘宝的cnpm，请参考：https://npm.taobao.org/


## 开发服务器
1. cd E:\project\cc                            <---- 进入到项目所在的目录
2. npm start                                   <---- 使用npm命令运行
3. 浏览器中输入`http://localhost:4200/`         <---- 本机访问


## 构建
1. npm build                                   <---- 使用npm命令构建，构建完成后会在dist目录中


## 单元测试
1. npm test                                    <---- 使用npm命令测试，目前的模块中没有加入测试代码，需要自行添加 


## 特别声明
1. 如果本界面中使用到了您的产品或是对您造成了影响请及时联系我，我将第一时间去除


## 技术交流
1. 在github进行交流
3. 技术交流群：168733660


## 贡献
1. 站在巨人的肩膀上，才能够走得更远，感谢那些默默贡献的人！


## 许可
1. [MIT](/LICENSE)