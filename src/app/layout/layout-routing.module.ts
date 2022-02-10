
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 组件
import { LayoutComponent } from './layout.component';
import { ListComponent } from '../components/list/list.component';
import { ChartComponent } from './../components/chart/chart.component';
import { NgrxComponent } from '../components/ngrx/ngrx.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
        data: {
          preload: true
        }
      },
      {
        path: 'chart',
        component: ChartComponent,
        data: {
          preload: true
        }
      },
      {
        path: 'ngrx',
        component: NgrxComponent,
        data: {
          preload: true
        }
      },
      {
        path: '',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
