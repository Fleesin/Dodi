import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tienda2Page } from './tienda2.page';

const routes: Routes = [
  {
    path: '',
    component: Tienda2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tienda2PageRoutingModule {}
