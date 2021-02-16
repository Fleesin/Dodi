import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 {
    path: 'dashboard', 
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'mis-pedidos',
    loadChildren: () => import('./mis-pedidos/mis-pedidos.module').then( m => m.MisPedidosPageModule)
  },
  {
    path: 'mi-perfil',
    loadChildren: () => import('./mi-perfil/mi-perfil.module').then( m => m.MiPerfilPageModule)
  },
  {
    path: 'centro-ayuda',
    loadChildren: () => import('./centro-ayuda/centro-ayuda.module').then( m => m.CentroAyudaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MemberRoutingModule { }