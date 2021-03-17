// NgModule 的核心模块
import { NgModule } from '@angular/core';
// 依赖
import { LayoutRoutingModule } from './layout-routing.module';
// 组件
import { FooterComponent } from './../components/footer/footer.component';
import { HeaderComponent } from './../components/header/header.component';
import { LayoutComponent } from './layout.component';

/* @NgModule装饰器，@NgModule接受一个元数据对象，告诉Angular 如何编译和启动应用*/
@NgModule({
  declarations: [ // 配置当前项目运行的组件
    FooterComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [ // 配置当前模块依赖的其他模块
    LayoutRoutingModule
  ]
})

export class LayoutModule { }
