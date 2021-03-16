/**
 * 这个文件是Angular的根模块，告诉Angular如何组装模块
 */

// BrowserModule 浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
// NgModule 的核心模块
import { NgModule } from '@angular/core';
// 路由模块
import { AppRoutingModule } from './app-routing.module';
// 根组件
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/* @NgModule装饰器，@NgModule接受一个元数据对象，告诉Angular 如何编译和启动应用*/
@NgModule({
  declarations: [ // 配置当前项目运行的组件
    AppComponent, ListComponent, HeaderComponent, FooterComponent
  ],
  imports: [ // 配置当前模块依赖的其他模块
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [], // 配置项目所需要的服务
  bootstrap: [AppComponent] // 指定应用的主视图（称为根组件），通过引导根AppModule来启动应用，这里一般写的是根组件
})

// 根模块不需要导出任何东西，因为其他组件不需要导入根模块
export class AppModule { }
