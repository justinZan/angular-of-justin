// 引入核心模块Components
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // 使用这个组件的名称
  templateUrl: './app.component.html', // Hmtl
  styleUrls: ['./app.component.scss'] // Scss
})
export class AppComponent {
  title = 'my-first-demo';

  constructor() { // 构造函数

  }
}
