import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tienda3Page } from './tienda3.page';

const routes: Routes = [
  {
    path: '',
    component: Tienda3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tienda3PageRoutingModule {}
