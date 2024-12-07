import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GpendientesPage } from './gpendientes.page';

const routes: Routes = [
  {
    path: '',
    component: GpendientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GpendientesPageRoutingModule {}
