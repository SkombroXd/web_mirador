import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagogastosPage } from './pagogastos.page';

const routes: Routes = [
  {
    path: '',
    component: PagogastosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagogastosPageRoutingModule {}
