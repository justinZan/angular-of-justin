import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 组件
import { LayoutComponent } from './layout.component';
import { ListComponent } from '../components/list/list.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListComponent,
        data: {
          preload: true
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
