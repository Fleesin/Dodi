import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tienda1Page } from './tienda1.page';

const routes: Routes = [
  {
    path: '',
    component: Tienda1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tienda1PageRoutingModule {}
