/**
 * 这个文件是Angular的根模块，告诉Angular如何组装模块
 */

// BrowserModule 浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
// NgModule 的核心模块
import { NgModule } from '@angular/core';
// 路由模块
import { AppRoutingModule } from './app-routing.module';
// 当前模块依赖的其他模块
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// 根组件
import { AppComponent } from './app.component';

// 服务
import { StorageService } from './service/storage.service';
import { ChartComponent } from './components/chart/chart.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers, metaReducers } from './store';
import { NgrxComponent } from './components/ngrx/ngrx.component';
import { CounterEffects } from './store/effects/counter.effects';
import { TodosComponent } from './components/todos/todos.component';


/* @NgModule装饰器，@NgModule接受一个元数据对象，告诉Angular 如何编译和启动应用*/
@NgModule({
  declarations: [ // 配置当前项目运行的组件
    AppComponent, ChartComponent, NgrxComponent, TodosComponent
  ],
  imports: [ // 配置当前模块依赖的其他模块
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([CounterEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [StorageService], // 配置项目所需要的服务
  bootstrap: [AppComponent] // 指定应用的主视图（称为根组件），通过引导根AppModule来启动应用，这里一般写的是根组件
})

// 根模块不需要导出任何东西，因为其他组件不需要导入根模块
export class AppModule { }
