import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      
      {
        path: 'mi-perfil',
        loadChildren: () => import('../mi-perfil/mi-perfil.module').then(m => m.MiPerfilPageModule)
      },
      {
        path: 'mis-pedidos',
        loadChildren: () => import('../mis-pedidos/mis-pedidos.module').then(m => m.MisPedidosPageModule)
      },
      {
        path: 'centro-ayuda',
        loadChildren: () => import('../centro-ayuda/centro-ayuda.module').then(m => m.CentroAyudaPageModule)
      },
      {
        path: 'emergency',
        loadChildren: () => import('../emergency/emergency.module').then(m => m.EmergencyPageModule)
      },
      {
        path: '',
        component: DashboardPage
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPageRoutingModule {}
