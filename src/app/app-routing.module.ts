import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'departamento',
    loadChildren: () => import('./pages/departamento/departamento.module').then( m => m.DepartamentoPageModule)
  },
  {
    path: 'gpendientes',
    loadChildren: () => import('./pages/gpendientes/gpendientes.module').then( m => m.GpendientesPageModule)
  },
  {
    path: 'pagogastos',
    loadChildren: () => import('./pages/pagogastos/pagogastos.module').then( m => m.PagogastosPageModule)
  },
  {
    path: 'vergastos',
    loadChildren: () => import('./pages/vergastos/vergastos.module').then( m => m.VergastosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
