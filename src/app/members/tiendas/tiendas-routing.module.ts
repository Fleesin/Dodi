import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiendasPage } from './tiendas.page';

const routes: Routes = [
  {
    path: '',
    component: TiendasPage
  },
  {
    path: 'tienda1',
    loadChildren: () => import('./tienda1/tienda1.module').then( m => m.Tienda1PageModule)
  },
  {
    path: 'tienda2',
    loadChildren: () => import('./tienda2/tienda2.module').then( m => m.Tienda2PageModule)
  },
  {
    path: 'tienda3',
    loadChildren: () => import('./tienda3/tienda3.module').then( m => m.Tienda3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiendasPageRoutingModule {}
