import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadStrategy } from './service/preload-strategy';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then(mod => mod.LayoutModule),
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
